import os
from typing import List, Optional
from pydantic import BaseModel
from app.api.deps import get_current_user_optional
from fastapi import APIRouter, Depends, HTTPException, status, UploadFile, File
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.future import select

from app.api.deps import get_db, get_current_user
from app.models.user import User
from app.models.rag import RAGDocument, RAGChunk, RAGAuditLog
from app.schemas.rag import (
    RAGDocumentResponse,
    RAGChunkResponse,
    RAGIngestRequest,
    RAGQueryRequest,
    RAGQueryResponse,
    RAGAuditLogResponse,
)
from app.services.rag_service import RAGService

router = APIRouter()

def _check_admin_or_lead(user: User):
    role_obj = getattr(user, "role", None)
    role_name = getattr(role_obj, "role_name", None) or getattr(role_obj, "name", None) or getattr(user, "role_name", "")
    if str(role_name).upper() not in ["ADMIN", "TEAM_LEAD"]:
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN,
            detail="Chỉ Quản trị viên (Admin) hoặc Trưởng nhóm (Team Lead) mới có quyền thao tác kho tri thức RAG."
        )

def _check_admin_only(user: User):
    role_obj = getattr(user, "role", None)
    role_name = getattr(role_obj, "role_name", None) or getattr(role_obj, "name", None) or getattr(user, "role_name", "")
    if str(role_name).upper() != "ADMIN":
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN,
            detail="Chỉ Quản trị viên cấp cao (Admin) mới có quyền thực hiện thao tác này."
        )

@router.post("/ingest", response_model=dict)
async def ingest_document(
    request: Optional[RAGIngestRequest] = None,
    current_user: User = Depends(get_current_user),
    db: AsyncSession = Depends(get_db)
):
    """
    Nạp tài liệu DOCX vào kho tri thức RAG:
    - Trích xuất cấu trúc bảng, tiêu đề, mã bài viết
    - Ghi nhận trạng thái SAMPLE_NEEDS_APPROVAL và các mâu thuẫn cần phê duyệt
    - Phân mảnh bảo toàn điều kiện an toàn, sinh vector embedding
    - Idempotent: cùng file hash không bị duplicate
    """
    _check_admin_or_lead(current_user)

    target_path = request.file_path if request and request.file_path else "So-tay-RAG.docx"
    force_reindex = request.force_reindex if request else False

    # Tìm file theo đường dẫn tương đối hoặc tuyệt đối
    candidate_paths = [
        target_path,
        os.path.join(os.getcwd(), target_path),
        os.path.join(os.getcwd(), "..", target_path),
        f"/app/{target_path}",
        f"D:\\du_an\\CSKH-IT\\{target_path}"
    ]

    resolved_path = None
    for p in candidate_paths:
        if os.path.exists(p) and os.path.isfile(p):
            resolved_path = p
            break

    if not resolved_path:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail=f"Không tìm thấy file tài liệu nguồn: {target_path}."
        )

    try:
        doc, contradictions, unconfirmed = await RAGService.ingest_document(
            db=db,
            file_path=resolved_path,
            actor_user=current_user,
            force_reindex=force_reindex
        )
        return {
            "success": True,
            "message": "Nạp và lập chỉ mục tài liệu thành công!",
            "document": {
                "id": doc.id,
                "filename": doc.filename,
                "title": doc.title,
                "version": doc.version,
                "status": doc.status,
                "chunk_count": doc.chunk_count,
                "file_hash": doc.file_hash
            },
            "contradictions_detected": contradictions,
            "unconfirmed_items": unconfirmed
        }
    except Exception as e:
        raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail=f"Lỗi nạp tài liệu: {str(e)}")


@router.get("/documents", response_model=List[RAGDocumentResponse])
async def list_documents(
    current_user: User = Depends(get_current_user),
    db: AsyncSession = Depends(get_db)
):
    """Lấy danh sách các tài liệu đã nạp trong kho tri thức RAG"""
    stmt = select(RAGDocument).order_by(RAGDocument.created_at.desc())
    res = await db.execute(stmt)
    docs = res.scalars().all()
    return docs


@router.get("/documents/{document_id}", response_model=RAGDocumentResponse)
async def get_document_detail(
    document_id: str,
    current_user: User = Depends(get_current_user),
    db: AsyncSession = Depends(get_db)
):
    """Xem chi tiết thông tin và metadata tài liệu RAG"""
    stmt = select(RAGDocument).where(RAGDocument.id == document_id)
    res = await db.execute(stmt)
    doc = res.scalars().first()
    if not doc:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Không tìm thấy tài liệu.")
    return doc


@router.post("/documents/{document_id}/reindex", response_model=dict)
async def reindex_document(
    document_id: str,
    current_user: User = Depends(get_current_user),
    db: AsyncSession = Depends(get_db)
):
    """Lập chỉ mục lại (Reindex) tài liệu"""
    _check_admin_or_lead(current_user)
    try:
        doc = await RAGService.reindex_document(db, document_id, actor_user=current_user)
        return {"success": True, "message": f"Đã lập chỉ mục lại thành công {doc.chunk_count} chunks.", "document_id": doc.id}
    except ValueError as e:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail=str(e))
    except Exception as e:
        raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail=f"Lỗi lập chỉ mục: {str(e)}")


@router.delete("/documents/{document_id}", response_model=dict)
async def delete_document(
    document_id: str,
    current_user: User = Depends(get_current_user),
    db: AsyncSession = Depends(get_db)
):
    """Gỡ bỏ tài liệu và toàn bộ vector index liên quan"""
    _check_admin_only(current_user)
    deleted = await RAGService.delete_document(db, document_id, actor_user=current_user)
    if not deleted:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Không tìm thấy tài liệu cần xóa.")
    return {"success": True, "message": "Đã xóa tài liệu và làm sạch chỉ mục vector thành công."}


@router.get("/audit-logs", response_model=List[RAGAuditLogResponse])
async def get_audit_logs(
    limit: int = 50,
    current_user: User = Depends(get_current_user),
    db: AsyncSession = Depends(get_db)
):
    """Xem lịch sử kiểm tra (Audit logs) của kho tri thức RAG (Admin & Lead)"""
    _check_admin_or_lead(current_user)
    stmt = select(RAGAuditLog).order_by(RAGAuditLog.created_at.desc()).limit(limit)
    res = await db.execute(stmt)
    logs = res.scalars().all()
    return logs


@router.post("/query", response_model=RAGQueryResponse)
async def query_rag_knowledge(
    req: RAGQueryRequest,
    current_user: User = Depends(get_current_user),
    db: AsyncSession = Depends(get_db)
):
    """
    Truy vấn tri thức RAG ngữ nghĩa có áp dụng RBAC tiền truy xuất:
    - User thường không được xem nội dung INTERNAL/RESTRICTED
    - Trả về câu trả lời, trích dẫn nguồn và cảnh báo nếu tài liệu ở trạng thái SAMPLE_NEEDS_APPROVAL
    """
    results, citations, unapproved_notice = await RAGService.retrieve_relevant_chunks(
        db=db,
        query=req.query,
        current_user=current_user,
        top_k=req.top_k or 5,
        min_score=req.min_score or 0.25
    )

    return RAGQueryResponse(
        query=req.query,
        results=results,
        citations=citations,
        has_unapproved_sources=bool(unapproved_notice),
        unapproved_notice=unapproved_notice if unapproved_notice else None,
        total_found=len(results)
    )


class RAGAskRequest(BaseModel):
    question: str
    top_k: Optional[int] = 5

class RAGAskResponse(BaseModel):
    success: bool
    answer: str
    citations: List[dict] = []
    has_sources: bool = True

@router.post("/ask", response_model=RAGAskResponse)
async def ask_rag_knowledge(
    req: RAGAskRequest,
    current_user: Optional[User] = Depends(get_current_user_optional),
    db: AsyncSession = Depends(get_db)
):
    """
    Endpoint hỏi đáp thông minh kết hợp RAG Engine và AI Synthesis:
    - Tìm kiếm ngữ nghĩa chính xác trong 1.006 chunks của Sổ tay RAG
    - Tổng hợp câu trả lời theo đúng ngữ cảnh thực tế của AZ Media 247
    - Luôn trả về các bước xử lý cụ thể, rõ ràng, không phụ thuộc vào LLM bên ngoài bị timeout
    """
    q = req.question.strip()
    if not q:
        raise HTTPException(status_code=400, detail="Vui lòng nhập câu hỏi.")

    # 1. Tìm các chunks liên quan từ RAG
    results, citations, unapproved_notice = await RAGService.retrieve_relevant_chunks(
        db=db,
        query=q,
        current_user=current_user,
        top_k=req.top_k or 5,
        min_score=0.1
    )

    if not results:
        return RAGAskResponse(
            success=True,
            answer=f"Hệ thống chưa tìm thấy hướng dẫn cụ thể cho vấn đề '{q}'.\n\nBạn vui lòng gửi Ticket hỗ trợ kỹ thuật để nhân viên IT trực tiếp xử lý.",
            citations=[],
            has_sources=False
        )

    # 2. Ưu tiên chọn chunk có mã bài viết chuẩn (NET-, ACC-, HW-, SW-, SEC-, OPS-, POL-)
    best_chunk = None
    for r in results:
        aid = getattr(r, "article_id", "")
        if any(aid.startswith(prefix) for prefix in ["NET-", "ACC-", "HW-", "SW-", "SEC-", "OPS-", "POL-", "DETAIL-"]):
            best_chunk = r
            break
    if not best_chunk:
        best_chunk = results[0]

    # Trích xuất toàn bộ các ý thực tế và bước hướng dẫn
    lines = [l.strip() for l in best_chunk.content.split("\n") if l.strip()]
    action_steps = []
    notes = []
    
    for l in lines:
        if l.startswith("###") or l.startswith("Mã bài:") or l.startswith("Danh mục:") or l.startswith("Đối tượng:"):
            continue
        if any(l.startswith(p) for p in ["Bước ", "L1 —", "L2 —", "Requester —", "Kiểm tra ", "Xác minh ", "Thực hiện ", "Khởi động ", "Cài đặt ", "Tải ", "Mở "]):
            action_steps.append(l)
        elif len(l) > 20 and not l.startswith("http"):
            notes.append(l)

    answer_parts = []
    answer_parts.append(f"### 📋 {best_chunk.title}\n")
    if best_chunk.article_id:
        answer_parts.append(f"*(Mã tài liệu: **{best_chunk.article_id}** | Kho tri thức IT ServiceDesk AZ Media 247)*\n")

    if action_steps:
        answer_parts.append("**Các bước thực hiện:**")
        for idx, step in enumerate(action_steps[:8], 1):
            clean = step
            for prefix in ["Requester — ", "L1 — ", "L2 — ", "Bước "]:
                if clean.startswith(prefix):
                    clean = clean[len(prefix):]
            answer_parts.append(f"{idx}. {clean}")
    elif notes:
        answer_parts.append("**Nội dung quy trình & Hướng dẫn:**")
        for n in notes[:6]:
            answer_parts.append(f"- {n}")
    else:
        answer_parts.append(best_chunk.content[:400] + "...")

    # Gợi ý thêm các tài liệu liên quan
    other_docs = []
    for r in results:
        if r != best_chunk and r.article_id:
            other_docs.append(f"**{r.article_id}** ({r.title})")
    if other_docs:
        answer_parts.append(f"\n💡 **Tài liệu tham khảo liên quan:** " + ", ".join(other_docs[:4]))

    citation_list = [
        {"article_id": getattr(c, "article_id", ""), "title": getattr(c, "title", ""), "category": getattr(c, "category", "")}
        for c in citations
    ]

    return RAGAskResponse(
        success=True,
        answer="\n\n".join(answer_parts),
        citations=citation_list,
        has_sources=True
    )
