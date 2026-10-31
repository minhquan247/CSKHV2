# 🚀 Hướng Dẫn Cài Đặt & Vận Hành Hệ Thống IT Service Desk Tích Hợp AI (Nhóm 10)

> **Hệ thống Quản lý Dịch vụ Hỗ trợ CNTT & Khách hàng Nội bộ (IT Service Desk)** được xây dựng theo tiêu chuẩn **ITIL v4**, tích hợp sâu các mô hình Trí tuệ Nhân tạo (**AI Triage, Sentiment Analysis, RAG Knowledge Base, AI Copilot**) giúp tự động hóa phân loại yêu cầu, định tuyến kỹ năng, cân bằng tải công việc giữa các kỹ thuật viên và đảm bảo cam kết chất lượng dịch vụ (SLA).

---

## 👥 Danh Sách Thành Viên Thực Hiện (Nhóm 10)

- **ĐOÀN MINH QUÂN**
- **NGUYỄN MINH PHƯƠNG**
- **THÂN PHÚ CƯỜNG**

---

## 🌐 1. Thông Tin Triển Khai & Truy Cập Hệ Thống

Hệ thống được đóng gói container hóa độc lập và triển khai thực tế trên máy chủ Ubuntu thông qua **Nginx Reverse Proxy**, tích hợp chứng chỉ SSL và tối ưu hóa nén Gzip.

| Dịch vụ | Đường dẫn trực tuyến (URL) | Mô tả chức năng |
| :--- | :--- | :--- |
| **Cổng Web Dịch Vụ Chính** | [https://azmedia247.com](https://azmedia247.com) | Cổng tiếp nhận hỗ trợ, Portal Khách hàng & Dashboard Kỹ thuật viên |
| **Trang Tài Liệu Toàn Diện** | [https://azmedia247.com/all](https://azmedia247.com/all) | Chuyên trang kỹ thuật nội bộ giải thích toàn bộ kiến trúc & cơ chế AI |
| **Tài liệu Swagger API** | [https://azmedia247.com/api/v1/docs](https://azmedia247.com/api/v1/docs) | Giao diện kiểm thử API tương tác trực tiếp (Swagger UI) |
| **Tài liệu ReDoc OpenAPI** | [https://azmedia247.com/api/v1/redoc](https://azmedia247.com/api/v1/redoc) | Tài liệu đặc tả kỹ thuật API chuẩn OpenAPI 3.0 |

---

## 🔑 2. Danh Sách Tài Khoản Thử Nghiệm Theo Phân Quyền (RBAC)

Hệ thống áp dụng cơ chế kiểm soát truy cập dựa trên vai trò (**Role-Based Access Control**):

| Vai trò (Role) | Email Đăng nhập | Mật khẩu | Phạm vi quyền hạn & Nghiệp vụ |
| :--- | :--- | :--- | :--- |
| **Quản trị viên (ADMIN)** | `admin@cskh.vn` | `Admin@123` | Toàn quyền hệ thống: Cấu hình AI settings & Key Pool, quản lý người dùng, thiết lập SLA, xóa ticket, duyệt chuyển cấp khẩn cấp P1. |
| **Trưởng nhóm (TEAM_LEAD)** | `lead@cskh.vn` | `Lead@123` | Giám sát vận hành toàn đội ngũ, phân bổ lại ticket, xử lý sự cố cấp P2, theo dõi cảnh báo vi phạm SLA và hiệu suất xử lý. |
| **Kỹ thuật viên Tuyến 1 (SUPPORT_AGENT L1)** | `agent@cskh.vn` | `Agent@123` | Tiếp nhận ticket phân công tự động, xử lý theo runbook chuẩn, dùng AI Copilot sinh nháp câu trả lời, leo thang ticket lên Tuyến 2. |
| **Kỹ thuật viên Tuyến 2 (SUPPORT_AGENT L2)** | `agent_l2@cskh.vn` | `Agent@123` | Xử lý các sự cố hệ thống lõi, hạ tầng mạng chuyên sâu, bug phần mềm và các ticket tự động leo thang do AI phát hiện bức xúc. |
| **Người dùng yêu cầu (REQUESTER)** | `user@company.vn` | `User@123` | Gửi yêu cầu hỗ trợ (tạo ticket), tra cứu tiến độ, tương tác với Kỹ thuật viên, tra cứu FAQ và trò chuyện cùng Trợ lý AI. |

---

## ⚙️ 3. Cơ Chế Tự Động Định Tuyến & Cân Bằng Tải (Auto-Assignment Pipeline)

Khi người dùng gửi một yêu cầu hỗ trợ, hệ thống backend FastAPI sẽ tự động điều phối ticket trong thời gian **dưới 800ms** qua 4 giai đoạn chuẩn ITIL:

```
                  [Người dùng Submit Ticket]
                              │
                              ▼
        ┌───────────────────────────────────────────┐
        │ 1. KHỬ KHUẨN DỮ LIỆU & PHÂN TÍCH AI KÉP   │
        │ - PIIMasker: Xóa số điện thoại, email, OTP│
        │ - asyncio.gather(AI Triage, Sentiment)    │
        │ ➔ Output: Category, Priority, Sentiment   │
        └─────────────────────┬─────────────────────┘
                              │
                              ▼
        ┌───────────────────────────────────────────┐
        │ 2. XÁC ĐỊNH CẤP ĐỘ HỖ TRỢ (L1 vs L2)      │
        │ - Ưu tiên bình thường ────────► Tuyến 1 L1 │
        │ - Khẩn cấp P1 / Phẫn nộ ──────► Tuyến 2 L2 │
        └─────────────────────┬─────────────────────┘
                              │
                              ▼
        ┌───────────────────────────────────────────┐
        │ 3. ĐỊNH TUYẾN KỸ NĂNG (Skill-based Match) │
        │ - Khớp 6 nhóm: NETWORK, SOFTWARE, ACCOUNT,│
        │   DEVICE, ACCESS_RESOURCE, TECH_GUIDE     │
        └─────────────────────┬─────────────────────┘
                              │
                              ▼
        ┌───────────────────────────────────────────┐
        │ 4. THUẬT TOÁN CÂN BẰNG TẢI LEAST-WORKLOAD │
        │ - Đếm ticket đang mở (NEW, PROCESSING)    │
        │ - Gán cho nhân sự có MIN(active_load)     │
        │ - Hòa tải: Luân phiên Round-Robin         │
        └─────────────────────┬─────────────────────┘
                              │
                              ▼
                  [Khởi Động Đồng Hồ Đếm SLA]
```

### 👥 Thuật Toán Cân Bằng Tải Khi Có Nhiều Kỹ Thuật Viên Cùng Cấp (L1 / L2):
1. **Ma trận tìm kiếm 3 tầng:**
   - **Tầng 1 (Chuyên môn cao nhất):** Lọc nhân viên cùng cấp `support_level == level`, đang hoạt động `is_active == true` và có nhóm kỹ năng trùng khớp chính xác `skill_group == category_code`.
   - **Tầng 2 (Mở rộng cùng cấp):** Nếu nhóm kỹ năng đó không có ai trực tuyến, hệ thống mở rộng tìm tất cả các nhân viên `SUPPORT_AGENT` ở cùng cấp level để hỗ trợ thay thế.
   - **Tầng 3 (Dự phòng quản trị):** Nếu toàn bộ nhân sự cùng cấp vắng mặt, tự động chuyển quyền xử lý đến Team Lead hoặc Admin trực ban, bảo đảm không có ticket nào bị bỏ sót.
2. **Cơ chế Least-Workload (Tải công việc tối thiểu):**
   - Hệ thống thực thi câu lệnh SQL đếm số ticket chưa đóng (`NEW`, `PROCESSING`, `WAITING_CUSTOMER`) của từng ứng viên:
     ```sql
     SELECT assigned_agent_id, COUNT(id) AS active_load 
     FROM tickets 
     WHERE status IN ('NEW', 'PROCESSING', 'WAITING_CUSTOMER') 
     GROUP BY assigned_agent_id 
     ORDER BY active_load ASC;
     ```
   - Ticket mới lập tức được giao cho người có `MIN(active_load)`.
3. **Xử lý khi hòa tải (Tie-Breaker):**
   - Nếu 2 hoặc nhiều nhân viên có số lượng ticket bằng nhau, hệ thống sắp xếp theo chỉ mục cơ sở dữ liệu và tự động luân phiên sang người kế tiếp (**Round-Robin**), triệt tiêu tuyệt đối nguy cơ dồn việc lên một cá nhân.

---

## 🚨 4. Cơ Chế Leo Thang L2 (Escalation Path) & Cam Kết SLA

### 🔄 Hai Luồng Chuyển Cấp Lên Tuyến 2 (L2):
1. **Tự Động Leo Thang Bởi AI (AI Sentiment Auto-Escalation):**
   - Mỗi khi khách hàng gửi ticket hoặc phản hồi trong bình luận, AI Sentiment phân tích mức độ cảm xúc.
   - Nếu phát hiện cảm xúc tiêu cực, bức xúc hoặc khiếu nại gay gắt đạt ngưỡng tin cậy &ge; **0.82 (82%)**:
     - Ticket được nâng cấp lên Tuyến 2, gán nhãn `AUTO_ESCALATED` và ghi nhận thời gian `escalated_at`.
     - Hệ thống **tự động tạo một Ghi Chú Nội Bộ Bí Mật (`is_internal = True`)** chứa lý do chi tiết, đoạn trích câu nói bằng chứng (evidence) và điểm số AI để Kỹ thuật viên L2 nắm rõ tâm lý khách hàng mà khách hàng không nhìn thấy.
     - Nếu chưa có chuyên gia L2 nào online ngay, ticket được đưa vào hàng chờ ưu tiên `L2_WAITING`.
2. **Chuyển Cấp Thủ Công Bởi Kỹ Thuật Viên L1 (Manual Escalation):**
   - Khi kỹ thuật viên L1 chẩn đoán thấy sự cố vượt thẩm quyền (sập database, lỗi hạ tầng mạng Router Core, lỗi mã nguồn ứng dụng), L1 bấm nút **"Chuyển cấp L2"** ngay trong giao diện chi tiết ticket và ghi rõ lý do bàn giao.

### ⏱️ Bảng Cam Kết Mức Độ Dịch Vụ SLA Chuẩn ITIL:

| Mức Ưu Tiên | Định Nghĩa & Phạm Vi Tác Động | Thời Gian Phản Hồi Đầu Tiên | Thời Gian Giải Quyết Xong |
| :--- | :--- | :--- | :--- |
| **CRITICAL_P1** | Sự cố tê liệt toàn hệ thống, gián đoạn dịch vụ diện rộng | **&le; 15 phút** | **&le; 60 phút (1 giờ)** |
| **HIGH_P2** | Sự cố ảnh hưởng nhiều người dùng hoặc dịch vụ quan trọng | **&le; 30 phút** | **&le; 240 phút (4 giờ)** |
| **MEDIUM_P3** | Sự cố mức độ vừa, ảnh hưởng một cá nhân hoặc nhóm nhỏ | **&le; 120 phút (2 giờ)** | **&le; 1.440 phút (24 giờ)** |
| **LOW_P4** | Yêu cầu thông thường, hướng dẫn dịch vụ, cấp quyền mới | **&le; 480 phút (8 giờ)** | **&le; 4.320 phút (72 giờ)** |

---

## 🧠 5. Cơ Chế RAG, AI Copilot & Hướng Dẫn Kỹ Thuật

1. **Kho Tri Thức RAG (Retrieval-Augmented Generation):**
   - Lưu trữ **1.006 chunks ngữ nghĩa** trích xuất từ 179 runbook kỹ thuật trong tài liệu nội bộ `So-tay-RAG.docx`.
   - Kết hợp thuật toán tìm kiếm lai **Hybrid Search**: Khớp từ khóa chuyên ngành BM25 kết hợp Vector Cosine Similarity (1.536 chiều).
   - Bổ sung Runbook chuẩn hóa `DEV-001` hướng dẫn chi tiết quy trình cài đặt môi trường lập trình (Python, PATH, pip, venv...).
2. **Nguyên Tắc Chống Ảo Tưởng (Zero-Hallucination Grounding):**
   - AI bắt buộc phải trả lời dựa trên tài liệu tham chiếu có sẵn, trích dẫn mã bài viết chuẩn (vd: `[NET-002]`, `[ACC-001]`, `[DEV-001]`).
   - Đối với các yêu cầu kỹ thuật thực tế (như cài Python, VSCode, Git...), AI cung cấp chi tiết từng bước kỹ thuật rõ ràng (trang tải chính thức, lưu ý tick Add to PATH, lệnh kiểm tra phiên bản trong Terminal) thay vì từ chối cứng nhắc.
3. **AI Copilot (Hỗ Trợ Nhân Viên):**
   - Nút **"Gợi ý phản hồi AI"** trong màn hình xử lý ticket giúp nhân viên soạn nhanh câu trả lời chuẩn mực kèm huy hiệu tỷ lệ % tin cậy (**AI Confidence Badge**). Nhân viên có toàn quyền kiểm tra, chỉnh sửa trước khi gửi cho khách hàng.
4. **Trợ Lý Ảo Chatbot 24/7 (Floating Widget):**
   - Tự động giải đáp thắc mắc, hướng dẫn xử lý lỗi tức thì; hỗ trợ tạo nhanh ticket nếu sự cố phức tạp.

---

## 🛡️ 6. An Toàn Thông Tin & Bảo Mật Dữ Liệu (Security & PII)

- **Bộ lọc PIIMasker:** Tự động quét và che giấu toàn bộ số điện thoại `[PHONE_REDACTED]`, email cá nhân `[EMAIL_REDACTED]`, mật khẩu, token trước khi dữ liệu được gửi đến API của các mô hình AI bên ngoài.
- **Xoay Vòng Đa Khóa AI (Multi-Key Rotation Pool):** Quản lý tập trung các khóa API Google Gemini, Cohere, Groq. Tự động chuyển khóa sau 10ms khi chạm ngưỡng giới hạn 429 Rate Limit và tự hồi phục sau thời gian cooldown.
- **Hủy Phiên Tức Thì Với Redis Blacklist:** Thu hồi hiệu lực token JWT ngay lập tức trên Redis khi người dùng đăng xuất hoặc đổi mật khẩu, khắc phục nhược điểm của Stateless JWT truyền thống.
- **Bảo Vệ Mã Nguồn GitHub:** Tự động lọc bỏ các secret, mật khẩu DB thực tế trước khi push lên kho lưu trữ công khai.

---

## 🏗️ 7. Kiến Trúc Hạ Tầng Container (DevOps)

Hệ thống được tổ chức theo kiến trúc container hóa độc lập gồm 4 service chính:

```
[Khách hàng & Trình duyệt Web]
              │
              ▼ (HTTPS / HTTP)
┌───────────────────────────────────────────────┐
│ 1. CONTAINER NGINX REVERSE PROXY (Alpine)     │
│ - SSL Certificate Let's Encrypt / Certbot     │
│ - Gzip Level 6 Compression                    │
│ - Phân phối Frontend React Vite Static Bundle │
│ - Proxy Pass /api/v1 -> Backend Container     │
└──────────────────────┬────────────────────────┘
                       │
                       ▼ (Internal Docker Network)
┌───────────────────────────────────────────────┐
│ 2. CONTAINER BACKEND FASTAPI (Python 3.11)    │
│ - Uvicorn ASGI Server Asynchronous I/O       │
│ - SQLAlchemy 2.0 AsyncSession + Pydantic v2   │
│ - AI Engine Pipeline & Key Rotation Manager   │
│ - Background Tasks gửi Email SMTP             │
└──────────────┬────────────────┬───────────────┘
               │                │
               ▼                ▼
┌─────────────────────────┐  ┌─────────────────────────┐
│ 3. CONTAINER MYSQL 8.0  │  │ 4. CONTAINER REDIS 7    │
│ - Dữ liệu quan hệ       │  │ - JWT Token Blacklist   │
│ - Users, Tickets, SLA   │  │ - Rate Limiting         │
│ - RAG Chunks & Logs     │  │ - Session Caching       │
└─────────────────────────┘  └─────────────────────────┘
```

---

## 🐳 8. Hướng Dẫn Vận Hành & Khởi Động Hệ Thống

### Bước 1: Điều hướng vào thư mục dự án
```bash
cd /root/CSKH
```

### Bước 2: Khởi động hệ thống với Docker Compose
```bash
docker compose -f compose.production.yml up -d --build
```

### Bước 3: Kiểm tra trạng thái hoạt động của các Containers
```bash
docker compose -f compose.production.yml ps
```

### Bước 4: Khởi tạo dữ liệu mẫu (Seeding)
```bash
# Khởi tạo roles, chính sách SLA, danh mục và tài khoản quản trị ban đầu
docker compose -f compose.production.yml exec v2-backend python scripts/seed_db.py

# Khởi tạo danh sách ticket mẫu để kiểm tra KPI & Báo cáo
docker compose -f compose.production.yml exec v2-backend python scripts/seed_tickets.py
```

### Bước 5: Build và cập nhật Frontend (Khi có thay đổi code)
```bash
cd /root/CSKH/frontend
node ./node_modules/vite/bin/vite.js build
docker compose -f /root/CSKH/compose.production.yml restart v2-nginx
```

---

## 🗂️ 9. Cấu Trúc Thư Mục Dự Án

```text
CSKH/
├── backend/                       # Ứng dụng Backend FastAPI (Python 3.11)
│   ├── app/
│   │   ├── ai/                   # AI Engine: Triage, Sentiment, Copilot, PIIMasker, KeyManager
│   │   ├── api/v1/               # RESTful Endpoints: auth, tickets, knowledge, rag, users, settings
│   │   ├── core/                 # Cấu hình hệ thống, Database Session, Redis, Security JWT
│   │   ├── data/                 # Cấu hình động AI Settings, Article Stats
│   │   ├── models/               # SQLAlchemy Models: Ticket, User, Role, SLA, RAGChunk, AILog
│   │   ├── schemas/              # Pydantic Schemas xác thực dữ liệu vào/ra
│   │   └── services/             # Nghiệp vụ Ticket, Cân bằng tải, RAG, Email SMTP
│   ├── scripts/                  # Scripts khởi tạo dữ liệu ban đầu
│   ├── Dockerfile                # Image build Backend
│   └── requirements.txt          # Danh sách thư viện Python
├── frontend/                      # Ứng dụng Frontend Single Page App (React 18 + Vite + TailwindCSS)
│   ├── src/
│   │   ├── components/           # UI Components: Layout, AuthBackground, ChatWidget, MarkdownView
│   │   ├── pages/                # TicketsPage, ThongTinWebPage (/all), DashboardPage, LoginPage...
│   │   ├── services/             # Axios API Clients & TanStack Query
│   │   └── types/                # Kiểu dữ liệu TypeScript
│   ├── package.json              # Thư viện npm
│   └── vite.config.ts            # Cấu hình Vite build
├── nginx.production.conf          # Cấu hình Nginx Reverse Proxy, SSL, Cache-Control & Gzip
├── compose.production.yml         # File điều phối Docker Compose môi trường Production
├── So-tay-RAG.docx               # Sổ tay chuẩn IT 179 runbooks nguồn cho RAG Engine
└── README.md                     # Tài liệu hướng dẫn cài đặt & vận hành hệ thống
```

---

## 📞 Hỗ Trợ & Liên Hệ
Mọi câu hỏi và đóng góp kỹ thuật xin vui lòng truy cập chuyên trang kỹ thuật trực tiếp tại **[https://azmedia247.com/all](https://azmedia247.com/all)** hoặc liên hệ đội ngũ phát triển Nhóm 10.
