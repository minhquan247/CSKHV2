import os
import sys
import json
import re

sys.path.insert(0, '/root/CSKH/backend')
from app.services.rag_service import RAGService

docx_path = '/app/So-tay-RAG.docx'
parsed = RAGService.parse_docx_raw(docx_path)
elements = parsed.get("elements", [])
print(f"Total raw elements: {len(elements)}")

articles = []
current_article = None

CATEGORY_MAP = {
    "ACC": ("AUTH", "Tài khoản & Xác thực"),
    "NET": ("NETWORK", "Mạng & VPN"),
    "HW": ("DEVICE", "Thiết bị & Phần cứng"),
    "SW": ("SOFTWARE", "Phần mềm & Ứng dụng"),
    "SEC": ("SECURITY", "Bảo mật & 2FA"),
    "OPS": ("SYSTEM", "Vận hành Hệ thống"),
    "ORG": ("POLICY", "Cơ cấu & Tổ chức"),
    "TIER": ("POLICY", "Quy trình Cấp hỗ trợ"),
    "POL": ("POLICY", "Chính sách CNTT"),
    "SLA": ("POLICY", "Cam kết Dịch vụ (SLA)"),
    "AI": ("AI", "Quy tắc AI Service Desk"),
    "RAG": ("AI", "Tri thức RAG & Metadata"),
    "FORM": ("FORM", "Biểu mẫu Vận hành")
}

for idx, el in enumerate(elements):
    text = el.get("text", "").strip()
    if not text:
        continue

    # Bắt tiêu đề bài: Mã bài (VD: ACC-001 — Không đăng nhập...)
    m = re.match(r'^([A-Z]{2,4}-\d{3})\s*—\s*(.+)$', text)
    if m:
        if current_article:
            articles.append(current_article)
        code = m.group(1).upper()
        title = m.group(2).strip()
        cat_key = code.split('-')[0]
        cat_info = CATEGORY_MAP.get(cat_key, ("GENERAL", "Hướng dẫn chung"))
        
        current_article = {
            "id": code.lower(),
            "code": code,
            "category": cat_info[0],
            "categoryLabel": cat_info[1],
            "title": f"[{code}] {title}",
            "desc": "",
            "views": "1.2k lượt xem",
            "time": "Cập nhật gần đây",
            "badge": "Chuẩn ITIL",
            "content": "",
            "steps": [],
            "raw_lines": []
        }
        continue

    # Bắt tiêu đề Phần / Chương nếu chưa vào runbook (VD: Phần I, Phần II...)
    m_part = re.match(r'^(Phần\s+[IVXLCDM]+)\s*—\s*(.+)$', text)
    if m_part:
        if current_article:
            articles.append(current_article)
        p_code = m_part.group(1)
        p_title = m_part.group(2).strip()
        current_article = {
            "id": f"part-{len(articles)+1}",
            "code": p_code,
            "category": "POLICY",
            "categoryLabel": "Chính sách & Quy chuẩn",
            "title": f"[{p_code}] {p_title}",
            "desc": p_title,
            "views": "2.5k lượt xem",
            "time": "Cập nhật chính thức",
            "badge": "Vận hành",
            "content": "",
            "steps": [],
            "raw_lines": []
        }
        continue

    if current_article:
        current_article["raw_lines"].append(text)

if current_article:
    articles.append(current_article)

print(f"Extracted articles/runbooks: {len(articles)}")

# Chuẩn hoá nội dung & steps cho từng bài
final_articles = []
for a in articles:
    lines = a["raw_lines"]
    desc = ""
    content_parts = []
    steps = []
    
    for line in lines:
        if line.startswith("Mã bài:"):
            continue
        if line.startswith("Dấu hiệu cần nhận biết:") or line.startswith("Mục tiêu:"):
            desc = line.split(":", 1)[1].strip()
        elif line.startswith("Requester —") or line.startswith("L1 —") or line.startswith("L2 —") or line.startswith("Bước ") or line.startswith("Xác minh ") or line.startswith("Kiểm tra "):
            if len(steps) < 10:
                steps.append(line.strip())
            else:
                content_parts.append(line)
        else:
            content_parts.append(line)

    if not desc and lines:
        desc = lines[0][:160] + "..."
    if not steps:
        steps = [l for l in lines[:5] if len(l) > 15]
    if not steps:
        steps = ["Thực hiện theo đúng hướng dẫn trong quy trình đã ban hành."]

    a["desc"] = desc or a["title"]
    a["content"] = "\n\n".join(content_parts) if content_parts else a["desc"]
    a["steps"] = steps
    del a["raw_lines"]
    final_articles.append(a)

print(f"Final structured articles count: {len(final_articles)}")

with open('/app/app/data/all_kb_articles.json', 'w', encoding='utf-8') as f:
    json.dump(final_articles, f, ensure_ascii=False, indent=2)

print("Saved to /app/app/data/all_kb_articles.json")
