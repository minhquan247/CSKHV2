import React, { useState } from 'react';
import Layout from '../components/Layout';
import { 
  Bot, 
  Cpu, 
  Workflow, 
  GitBranch, 
  ShieldCheck, 
  Zap, 
  Layers, 
  Database, 
  Server, 
  Clock, 
  CheckCircle2, 
  ArrowRight,
  BookOpen,
  LifeBuoy,
  FileCode2,
  Lock,
  MessageSquare,
  Users
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ThongTinWebPage() {
  const [activeTab, setActiveTab] = useState<'architecture' | 'ai_triage' | 'l1_l2' | 'rag' | 'security'>('ai_triage');

  return (
    <Layout>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        
        {/* Header Hero */}
        <div className="bg-gradient-to-br from-indigo-900 via-slate-900 to-indigo-950 rounded-2xl p-6 sm:p-10 text-white shadow-xl relative overflow-hidden border border-indigo-800/50">
          <div className="absolute -right-10 -bottom-10 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute right-20 top-0 w-60 h-60 bg-purple-500/10 rounded-full blur-2xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-500/20 border border-indigo-400/30 rounded-full text-xs font-semibold text-indigo-300">
              <Cpu className="w-3.5 h-3.5" />
              <span>Hệ Thống Kiến Trúc & Logic Vận Hành CSKH IT Service Desk</span>
            </div>
            <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
              Tài Liệu Chi Tiết Về Cơ Chế Hoạt Động & Trí Tuệ Nhân Tạo
            </h1>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
              Trang thông tin tổng hợp cơ chế kỹ thuật nội bộ của hệ thống: từ cách AI phân tích ngôn ngữ tự nhiên, cân bằng tải Least-Connections giữa các kỹ thuật viên L1, định tuyến kỹ năng, đến cơ chế RAG trích xuất tri thức nội bộ.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <Link 
                to="/tickets"
                className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold rounded-xl transition-all shadow-md inline-flex items-center gap-2 cursor-pointer"
              >
                <span>Vào trang Tickets</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link 
                to="/knowledge"
                className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white text-xs font-semibold rounded-xl transition-all border border-white/10 inline-flex items-center gap-2 cursor-pointer"
              >
                <BookOpen className="w-4 h-4" />
                <span>Tra cứu Kho tri thức (179 bài)</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 border-b border-slate-200">
          {[
            { id: 'ai_triage', label: '1. Cơ Chế Định Tuyến & AI Triage', icon: Workflow },
            { id: 'l1_l2', label: '2. Phân Bổ Nhân Viên L1 vs L2', icon: Users },
            { id: 'rag', label: '3. Cơ Chế RAG & Kho Tri Thức', icon: Database },
            { id: 'architecture', label: '4. Kiến Trúc Hạ Tầng & Công Nghệ', icon: Server },
            { id: 'security', label: '5. An Toàn Dữ Liệu & Masking PII', icon: ShieldCheck },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all shrink-0 inline-flex items-center gap-2 cursor-pointer ${
                  isActive 
                    ? 'bg-indigo-600 text-white shadow-sm' 
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100 bg-white border border-slate-200/80'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* TAB 1: Cơ Chế Định Tuyến & AI Triage */}
        {activeTab === 'ai_triage' && (
          <div className="space-y-6 animate-in fade-in duration-200">
            <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-6 shadow-2xs">
              <div className="border-b border-slate-100 pb-4">
                <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                  <Workflow className="w-5 h-5 text-indigo-600" />
                  Quy Trình 4 Bước Tiếp Nhận & Phân Phối Ticket Tự Động
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  Mỗi ticket khi gửi lên không qua phân công thủ công chậm trễ, mà được xử lý theo chuẩn ITIL qua 4 giai đoạn tự động trong mili-giây.
                </p>
              </div>

              {/* Sơ đồ quy trình trực quan */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="p-4 rounded-xl bg-indigo-50/60 border border-indigo-100 space-y-2">
                  <div className="w-7 h-7 rounded-lg bg-indigo-600 text-white flex items-center justify-center font-bold text-xs">1</div>
                  <h3 className="font-bold text-slate-900 text-xs sm:text-sm">AI Triage & Sentiment</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    AI phân tích tiêu đề & nội dung: Gán danh mục, mức ưu tiên (P1-P4) và đo lường cảm xúc người dùng (bức xúc, khẩn cấp hay bình thường).
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-purple-50/60 border border-purple-100 space-y-2">
                  <div className="w-7 h-7 rounded-lg bg-purple-600 text-white flex items-center justify-center font-bold text-xs">2</div>
                  <h3 className="font-bold text-slate-900 text-xs sm:text-sm">Xác Định Cấp (L1 / L2)</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Sự cố cơ bản, thường nhật sẽ vào tầng L1. Các lỗi hệ thống cốt lõi, bảo mật hoặc mức P1 khẩn cấp được đẩy thẳng lên tầng L2.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-blue-50/60 border border-blue-100 space-y-2">
                  <div className="w-7 h-7 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold text-xs">3</div>
                  <h3 className="font-bold text-slate-900 text-xs sm:text-sm">Định Tuyến Kỹ Năng</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Khớp nhóm chuyên môn chuyên trách: <code>NETWORK_INFRA</code> (Mạng/VPN), <code>SOFTWARE_BUG</code> (Phần mềm), <code>ACCOUNT_AUTH</code> (Tài khoản).
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-emerald-50/60 border border-emerald-100 space-y-2">
                  <div className="w-7 h-7 rounded-lg bg-emerald-600 text-white flex items-center justify-center font-bold text-xs">4</div>
                  <h3 className="font-bold text-slate-900 text-xs sm:text-sm">Cân Bằng Tải Thông Minh</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Áp dụng thuật toán <strong>Least-Workload</strong>: Giao ticket cho kỹ thuật viên có số lượng ticket đang mở ít nhất tại thời điểm đó.
                  </p>
                </div>
              </div>

              {/* Chi tiết logic thuật toán */}
              <div className="space-y-4 pt-4 border-t border-slate-100">
                <h3 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                  <Cpu className="w-4 h-4 text-indigo-600" />
                  Mô Tả Chi Tiết Logic Đoán Định Của AI Engine
                </h3>
                <div className="bg-slate-900 text-slate-200 p-5 rounded-xl font-mono text-xs leading-relaxed overflow-x-auto space-y-2">
                  <p className="text-emerald-400">// Luồng phân tích AI Triage trong Backend (FastAPI)</p>
                  <p>1. User Submit Ticket ➔ Mask PII (Xóa số điện thoại, mật khẩu, email cá nhân)</p>
                  <p>2. Query Gemini / Cohere: Trả về JSON Struct {`{ category, priority, confidence_score, sentiment }`}</p>
                  <p>3. If priority == 'P1' OR sentiment_score &gt;= 0.82 ➔ Auto Escalate sang L2</p>
                  <p>4. Fetch active agents in Skill Group: <code>SELECT * FROM users WHERE support_level = 'L1' AND is_active = true</code></p>
                  <p>5. Count active tickets: <code>SELECT COUNT(*) FROM tickets WHERE status IN ('NEW', 'PROCESSING') GROUP BY assigned_agent_id</code></p>
                  <p>6. Assign ticket to <code>MIN(active_count)</code>. SLA timer countdown begins.</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: Phân Bổ Nhân Viên L1 vs L2 */}
        {activeTab === 'l1_l2' && (
          <div className="space-y-6 animate-in fade-in duration-200">
            <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-6 shadow-2xs">
              <div className="border-b border-slate-100 pb-4">
                <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                  <Users className="w-5 h-5 text-indigo-600" />
                  Chi Tiết Xử Lý Khi Có Nhiều Kỹ Thuật Viên Cùng Cấp L1
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  Giải đáp chi tiết câu hỏi: "Khi có 2 hoặc nhiều nhân viên L1 thì hệ thống dựa trên đâu để quyết định giao cho ai?".
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-5 rounded-xl border border-slate-200 bg-slate-50/60 space-y-3">
                  <h3 className="font-bold text-slate-900 text-sm flex items-center gap-2 text-indigo-700">
                    <CheckCircle2 className="w-4 h-4 text-indigo-600" />
                    Trường Hợp 1: Tải công việc không đều
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Hệ thống tự động thực hiện truy vấn đếm số lượng ticket đang hoạt động (<code>NEW</code>, <code>PROCESSING</code>, <code>WAITING_CUSTOMER</code>).
                  </p>
                  <div className="p-3 bg-white rounded-lg border border-slate-200 text-xs text-slate-700 space-y-1">
                    <p>• <strong>Kỹ thuật viên A (L1):</strong> Đang giữ <strong>1 ticket</strong></p>
                    <p>• <strong>Kỹ thuật viên B (L1):</strong> Đang giữ <strong>3 tickets</strong></p>
                    <p className="text-emerald-700 font-semibold pt-1">➔ Kết quả: Ticket mới lập tức được giao cho Kỹ thuật viên A để cân bằng khối lượng công việc.</p>
                  </div>
                </div>

                <div className="p-5 rounded-xl border border-slate-200 bg-slate-50/60 space-y-3">
                  <h3 className="font-bold text-slate-900 text-sm flex items-center gap-2 text-purple-700">
                    <CheckCircle2 className="w-4 h-4 text-purple-600" />
                    Trường Hợp 2: Tải công việc bằng nhau
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Nếu cả 2 Kỹ thuật viên L1 đều có số ticket bằng nhau (ví dụ cùng có 0 hoặc 1 ticket):
                  </p>
                  <div className="p-3 bg-white rounded-lg border border-slate-200 text-xs text-slate-700 space-y-1">
                    <p>• Hệ thống sắp xếp theo thứ tự ưu tiên cơ sở dữ liệu (Database Index).</p>
                    <p>• Ticket kế tiếp sẽ tự động luân phiên sang người còn lại (Round-Robin fallback).</p>
                    <p className="text-purple-700 font-semibold pt-1">➔ Đảm bảo tuyệt đối không dồn việc lên một nhân viên duy nhất.</p>
                  </div>
                </div>
              </div>

              {/* Cơ chế chuyển cấp Escalation */}
              <div className="p-5 rounded-xl bg-amber-50/60 border border-amber-200 space-y-3">
                <h3 className="font-bold text-amber-950 text-sm flex items-center gap-2">
                  <Zap className="w-4 h-4 text-amber-600" />
                  Cơ Chế Leo Thang Lên Tầng L2 (Escalation Path)
                </h3>
                <ul className="text-xs text-amber-900 space-y-1.5 list-disc pl-4 leading-relaxed">
                  <li><strong>Tự động leo thang:</strong> Khi khách hàng phản hồi thể hiện sự phẫn nộ, bức xúc nhiều lần (Sentiment AI đạt ngưỡng &ge; 0.82), ticket sẽ tự động chuyển cấp lên L2 để cấp quản lý / chuyên gia xử lý khẩn.</li>
                  <li><strong>Chuyển cấp thủ công:</strong> Kỹ thuật viên L1 sau khi kiểm tra nếu nhận thấy sự cố liên quan đến Router Core, máy chủ Database hoặc cần cấp quyền chuyên sâu sẽ bấm chuyển cấp trực tiếp trên giao diện sang L2.</li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: Cơ Chế RAG & Kho Tri Thức */}
        {activeTab === 'rag' && (
          <div className="space-y-6 animate-in fade-in duration-200">
            <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-6 shadow-2xs">
              <div className="border-b border-slate-100 pb-4">
                <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                  <Database className="w-5 h-5 text-indigo-600" />
                  Cơ Chế RAG (Retrieval-Augmented Generation) & Kho Tri Thức
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  Cách AI học và trích xuất thông tin chuẩn mực từ tài liệu nội bộ <code>So-tay-RAG.docx</code> gồm 179 runbooks và 1.006 chunks.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/70 space-y-2">
                  <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider block">Bước 1: Ingestion & Chunks</span>
                  <h3 className="font-bold text-slate-900 text-sm">Phân đoạn tài liệu</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Tài liệu sổ tay IT nội bộ được bóc tách cấu trúc thành 1.006 đoạn ngữ nghĩa (chunks), lưu trong bảng <code>rag_chunks</code> với các mã bài viết như <code>NET-002</code>, <code>ACC-001</code>, <code>POL-008</code>.
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/70 space-y-2">
                  <span className="text-xs font-bold text-purple-600 uppercase tracking-wider block">Bước 2: Semantic Retrieval</span>
                  <h3 className="font-bold text-slate-900 text-sm">Truy xuất ngữ nghĩa</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Khi người dùng hỏi hoặc Admin bấm "Gợi ý AI", hệ thống chạy tìm kiếm kết hợp (Fulltext & Keyword Matching) để lấy 3-5 đoạn quy trình liên quan nhất.
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/70 space-y-2">
                  <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider block">Bước 3: Grounded Reply</span>
                  <h3 className="font-bold text-slate-900 text-sm">Tạo phản hồi chuẩn xác</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    AI chỉ dựa trên nội dung đã tìm được trong kho tri thức, loại bỏ ảo tưởng (hallucination), không tự suy diễn các bước ngoài tài liệu.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-indigo-50 border border-indigo-200 text-xs text-indigo-900 space-y-2">
                <p className="font-bold text-sm text-indigo-950 flex items-center gap-1.5">
                  <Bot className="w-4 h-4 text-indigo-600" />
                  Trợ Lý AI Tự Động Giải Đáp (Chat Assistant):
                </p>
                <p className="leading-relaxed">
                  Tại thanh tìm kiếm hoặc trang FAQ, người dùng có thể trò chuyện trực tiếp với Trợ lý AI. Nếu sự cố đơn giản, AI sẽ hướng dẫn từng bước xử lý ngay; nếu sự cố phức tạp hoặc người dùng yêu cầu, AI sẽ đề xuất tạo Ticket để kỹ thuật viên can thiệp trực tiếp.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* TAB 4: Kiến Trúc Hạ Tầng */}
        {activeTab === 'architecture' && (
          <div className="space-y-6 animate-in fade-in duration-200">
            <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-6 shadow-2xs">
              <div className="border-b border-slate-100 pb-4">
                <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                  <Server className="w-5 h-5 text-indigo-600" />
                  Kiến Trúc Ngăn Xếp Công Nghệ (Full-Stack Technology Stack)
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  Hệ thống container hóa độc lập triển khai bằng Docker Compose trên Ubuntu VPS máy chủ thật.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
                  <div className="text-xs font-bold text-indigo-600">FRONTEND</div>
                  <h4 className="font-bold text-slate-900 text-sm">React 18 + Vite</h4>
                  <p className="text-xs text-slate-600">Tailwind CSS, Lucide Icons, TanStack Query, React Router DOM v6.</p>
                </div>

                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
                  <div className="text-xs font-bold text-blue-600">BACKEND API</div>
                  <h4 className="font-bold text-slate-900 text-sm">FastAPI (Python 3.11)</h4>
                  <p className="text-xs text-slate-600">Asynchronous I/O, Uvicorn, SQLAlchemy AsyncSession, Pydantic v2.</p>
                </div>

                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
                  <div className="text-xs font-bold text-amber-600">DATABASE & CACHE</div>
                  <h4 className="font-bold text-slate-900 text-sm">MySQL 8.0 & Redis 7</h4>
                  <p className="text-xs text-slate-600">Cơ sở dữ liệu quan hệ, Redis quản lý Blacklist Token JWT & Rate limiting.</p>
                </div>

                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
                  <div className="text-xs font-bold text-purple-600">AI ROTATION POOL</div>
                  <h4 className="font-bold text-slate-900 text-sm">Gemini + Cohere</h4>
                  <p className="text-xs text-slate-600">Pool đa khóa tự động xoay vòng key khi quá tải hoặc chạm giới hạn 429.</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 5: An Toàn Dữ Liệu & Masking PII */}
        {activeTab === 'security' && (
          <div className="space-y-6 animate-in fade-in duration-200">
            <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-6 shadow-2xs">
              <div className="border-b border-slate-100 pb-4">
                <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-indigo-600" />
                  Bảo Mật Dữ Liệu & Che Giấu Thông Tin Nhạy Cảm (PII Masking)
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  Đảm bảo tuân thủ tiêu chuẩn an toàn thông tin doanh nghiệp trước khi gửi bất kỳ dữ liệu nào đến mô hình AI bên ngoài.
                </p>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
                  <h4 className="font-bold text-slate-900 flex items-center gap-1.5">
                    <Lock className="w-4 h-4 text-emerald-600" />
                    Bộ Lọc Che PII Tự Động (PIIMasker):
                  </h4>
                  <p className="text-xs text-slate-600">
                    Mọi đoạn hội thoại, tiêu đề và mô tả sự cố đều đi qua mô-đun <code>PIIMasker.mask_text()</code> trước khi gửi ra API AI:
                  </p>
                  <ul className="list-disc pl-5 text-xs text-slate-600 space-y-1">
                    <li>Số điện thoại cá nhân ➔ Được chuyển thành <code>[PHONE_REDACTED]</code></li>
                    <li>Email cá nhân ➔ Được chuyển thành <code>[EMAIL_REDACTED]</code></li>
                    <li>Mật khẩu, Token, OTP ➔ Được nhận diện và xóa bỏ để chống lộ thông tin</li>
                  </ul>
                </div>

                <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
                  <h4 className="font-bold text-slate-900 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-indigo-600" />
                    Bảo Vệ Đẩy Mã Nguồn (GitHub Push Protection):
                  </h4>
                  <p className="text-xs text-slate-600">
                    Toàn bộ API Key, Mật khẩu cơ sở dữ liệu và Client Secret OAuth trên máy chủ được quản trị độc lập và tự động làm sạch (placeholder) trước khi đồng bộ lên GitHub công khai.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </Layout>
  );
}
