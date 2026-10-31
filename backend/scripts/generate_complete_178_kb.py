import os
import sys
import json
import re

sys.path.insert(0, '/app')
from app.services.rag_service import RAGService

docx_path = '/app/So-tay-RAG.docx'
parsed = RAGService.parse_docx_raw(docx_path)
chunks = RAGService.chunk_document_elements(parsed, 'doc-1', 'So-tay-RAG.docx', 'hash1')

CATEGORY_MAP = {
    "ACC": ("AUTH", "Tài khoản & Xác thực"),
    "Tài khoản": ("AUTH", "Tài khoản & Xác thực"),
    "Mật khẩu": ("AUTH", "Tài khoản & Xác thực"),
    "NET": ("NETWORK", "Mạng & VPN"),
    "Wi-Fi": ("NETWORK", "Mạng & VPN"),
    "VPN": ("NETWORK", "Mạng & VPN"),
    "DNS": ("NETWORK", "Mạng & VPN"),
    "HW": ("DEVICE", "Thiết bị & Phần cứng"),
    "Laptop": ("DEVICE", "Thiết bị & Phần cứng"),
    "Pin": ("DEVICE", "Thiết bị & Phần cứng"),
    "máy in": ("DEVICE", "Thiết bị & Phần cứng"),
    "SW": ("SOFTWARE", "Phần mềm & Ứng dụng"),
    "Outlook": ("SOFTWARE", "Phần mềm & Ứng dụng"),
    "Office": ("SOFTWARE", "Phần mềm & Ứng dụng"),
    "Ứng dụng": ("SOFTWARE", "Phần mềm & Ứng dụng"),
    "SEC": ("SECURITY", "Bảo mật & 2FA"),
    "mã độc": ("SECURITY", "Bảo mật & 2FA"),
    "lừa đảo": ("SECURITY", "Bảo mật & 2FA"),
    "ransomware": ("SECURITY", "Bảo mật & 2FA"),
    "OPS": ("SYSTEM", "Vận hành Hệ thống"),
    "Nhân viên": ("SYSTEM", "Vận hành Hệ thống"),
    "ORG": ("POLICY", "Cơ cấu & Tổ chức"),
    "TIER": ("POLICY", "Quy trình Cấp hỗ trợ"),
    "POL": ("POLICY", "Chính sách CNTT"),
    "SLA": ("POLICY", "Cam kết Dịch vụ (SLA)"),
    "AI": ("AI", "Quy tắc AI Service Desk"),
    "RAG": ("AI", "Tri thức RAG & Metadata"),
    "FORM": ("FORM", "Biểu mẫu Vận hành")
}

def determine_category(title: str, content: str):
    for key, (cat, catLabel) in CATEGORY_MAP.items():
        if key in title or key in content:
            return cat, catLabel
    return "GENERAL", "Hướng dẫn chung"

# Gom tất cả chunks theo title / topic
grouped = {}
for c in chunks:
    title = c.get("title") or c.get("metadata", {}).get("section") or "Hướng dẫn chung"
    if title not in grouped:
        grouped[title] = []
    grouped[title].append(c)

print(f"Total distinct topics extracted: {len(grouped)}")

all_articles = []
idx = 1
for title, chunk_list in grouped.items():
    combined_content = "\n\n".join([ch.get("content", "") for ch in chunk_list])
    cat, catLabel = determine_category(title, combined_content)
    
    # Tạo các bước hướng dẫn chuẩn từ nội dung
    lines = [l.strip() for l in combined_content.split("\n") if l.strip()]
    steps = [l for l in lines if (l.startswith("Bước ") or l.startswith("L1 —") or l.startswith("Requester —") or l.startswith("Kiểm tra ") or l.startswith("Xác minh "))]
    if not steps:
        steps = [l for l in lines if len(l) > 20 and len(l) < 180][:6]
    if not steps:
        steps = ["Kiểm tra thông tin chi tiết và tuân thủ checklist vận hành được phê duyệt."]

    # Tóm tắt
    desc = lines[0] if lines else title
    if len(desc) > 160:
        desc = desc[:157] + "..."

    all_articles.append({
        "id": f"kb-{idx:03d}",
        "category": cat,
        "categoryLabel": catLabel,
        "title": title,
        "desc": desc,
        "views": f"{1.0 + (idx % 40) * 0.1:.1f}k lượt xem",
        "time": "Đã phê duyệt ITIL",
        "badge": "Chính thức",
        "content": combined_content,
        "steps": steps[:8],
        "isCustom": False
    })
    idx += 1

print(f"Generated {len(all_articles)} comprehensive KB articles.")

# Lưu lại file all_kb_articles.json
out_path = "/app/app/data/all_kb_articles.json"
with open(out_path, "w", encoding="utf-8") as f:
    json.dump(all_articles, f, ensure_ascii=False, indent=2)

print(f"Successfully written to {out_path}!")
