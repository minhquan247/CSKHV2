import React, { useState } from 'react';
import { 
  Bot, 
  Cpu, 
  Workflow, 
  ShieldCheck, 
  Zap, 
  Database, 
  Server, 
  CheckCircle2, 
  ArrowLeft,
  BookOpen,
  Lock,
  Users,
  Compass,
  Sparkles,
  ArrowRight,
  HelpCircle,
  FileText,
  AlertTriangle,
  Clock,
  Layers,
  Search,
  Code,
  Shield,
  Activity,
  ChevronRight,
  TrendingUp,
  CpuIcon
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ThongTinWebPage() {
  const [activeTab, setActiveTab] = useState<'ai_triage' | 'l1_l2' | 'rag' | 'architecture' | 'security'>('ai_triage');

  return (
    <div className="min-h-screen bg-[#070b12] text-slate-200 flex flex-col antialiased selection:bg-indigo-500 selection:text-white relative font-sans">
      
      {/* Background Ambience & Deep Glows */}
      <div className="fixed -top-40 left-1/4 w-[650px] h-[650px] bg-gradient-to-br from-indigo-900/25 to-blue-900/10 rounded-full blur-[150px] pointer-events-none -z-10" />
      <div className="fixed top-1/3 -right-20 w-[550px] h-[550px] bg-purple-900/15 rounded-full blur-[160px] pointer-events-none -z-10" />
      <div className="fixed -bottom-40 left-10 w-[500px] h-[500px] bg-sky-950/20 rounded-full blur-[140px] pointer-events-none -z-10" />

      {/* Grid subtle pattern */}
      <div 
        className="fixed inset-0 pointer-events-none opacity-[0.03] -z-10"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)',
          backgroundSize: '36px 36px'
        }}
      />

      {/* Top Standalone Header */}
      <header className="border-b border-slate-800/80 bg-[#0a0f18]/90 backdrop-blur-xl sticky top-0 z-30 px-4 sm:px-8 py-3.5 flex items-center justify-between shadow-lg shadow-black/20">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-sky-500 flex items-center justify-center font-bold text-white shadow-md shadow-indigo-500/25 border border-indigo-400/30">
            <Compass className="w-5 h-5 text-white animate-pulse" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-sm sm:text-base text-white tracking-tight block">CSKH IT Service Desk</span>
              <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-indigo-500/15 text-indigo-400 border border-indigo-500/30">v2.4 Enterprise</span>
            </div>
            <span className="text-[11px] text-slate-400 font-medium">Bản giải trình chi tiết thuật toán &amp; kiến trúc AI Triage, RAG, L1/L2</span>
          </div>
        </div>

        <Link 
          to="/" 
          className="text-xs font-semibold text-slate-300 hover:text-white bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700/80 px-3.5 py-1.5 rounded-lg transition-all inline-flex items-center gap-2 cursor-pointer shadow-sm hover:border-indigo-500/40"
        >
          <ArrowLeft className="w-3.5 h-3.5 text-slate-400" />
          <span>Về trang chủ</span>
        </Link>
      </header>

      {/* Main Content Container */}
      <main className="max-w-6xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 flex-1">
        
        {/* Hero Card Banner */}
        <div className="bg-gradient-to-br from-[#0e1626]/95 via-[#0c121e]/90 to-[#070b12] rounded-3xl p-6 sm:p-10 shadow-2xl border border-slate-800/80 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-indigo-500/10 via-purple-500/5 to-transparent rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-10 left-1/3 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-500/15 border border-indigo-500/30 rounded-full text-xs font-semibold text-indigo-300">
              <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
              <span>Chuyên Trang Kỹ Thuật Độc Lập • Toàn Diện &amp; Rõ Ràng</span>
            </div>
            <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
              Tài Liệu Chi Tiết: Toàn Bộ Logic Vận Hành &amp; AI ServiceDesk
            </h1>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
              Giải thích tường tận từ lúc khách hàng gửi Ticket: AI xử lý phân loại ngôn ngữ tự nhiên như thế nào, 
              cơ chế cân bằng tải <strong className="text-indigo-300">Least-Connections</strong> phân chia cho kỹ thuật viên L1, 
              điều kiện kích hoạt chuyển cấp L2 (Escalation), và cách công nghệ <strong className="text-indigo-300">Hybrid RAG</strong> trích xuất chính xác 178 bài viết tri thức nội bộ.
            </p>
          </div>
        </div>

        {/* Navigation Tabs Bar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 border-b border-slate-800/80 no-scrollbar">
          {[
            { id: 'ai_triage', label: '1. Định Tuyến & AI Triage (4 Bước)', icon: Workflow },
            { id: 'l1_l2', label: '2. Phân Bổ Nhân Viên L1 vs L2', icon: Users },
            { id: 'rag', label: '3. Cơ Chế RAG & Kho 178 Tri Thức', icon: Database },
            { id: 'architecture', label: '4. Kiến Trúc Hạ Tầng & Công Nghệ', icon: Server },
            { id: 'security', label: '5. An Toàn Dữ Liệu & Masking PII', icon: ShieldCheck },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all shrink-0 inline-flex items-center gap-2.5 cursor-pointer ${
                  isActive 
                    ? 'bg-gradient-to-r from-indigo-600 to-indigo-500 text-white shadow-lg shadow-indigo-600/30 border border-indigo-400/40' 
                    : 'text-slate-400 hover:text-slate-100 hover:bg-[#111827]/90 bg-[#0c121e]/80 border border-slate-800/90'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-slate-400'}`} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* ========================================================================= */}
        {/* TAB 1: Cơ Chế Định Tuyến & AI Triage (Giải thích cực chi tiết) */}
        {/* ========================================================================= */}
        {activeTab === 'ai_triage' && (
          <div className="space-y-6 animate-in fade-in duration-200">
            <div className="bg-[#0e1626]/90 rounded-3xl border border-slate-800/90 p-6 sm:p-9 space-y-8 shadow-xl">
              
              <div className="border-b border-slate-800/80 pb-5">
                <div className="flex items-center gap-2 text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-1">
                  <Workflow className="w-4 h-4" />
                  Quy Trình Tự Động Hóa Chuẩn ITIL
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  Quy Trình 4 Bước Tiếp Nhận &amp; Phân Phối Ticket Tự Động
                </h2>
                <p className="text-xs sm:text-sm text-slate-400 mt-1.5 leading-relaxed">
                  Khi người dùng gửi yêu cầu, hệ thống không để ticket nằm chờ phân loại thủ công mà lập tức kích hoạt chuỗi xử lý AI đa tầng diễn ra trong vòng dưới 2 giây.
                </p>
              </div>

              {/* 4 Steps Visual Cards */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="p-5 rounded-2xl bg-[#121c30]/80 border border-slate-800/90 space-y-3 relative overflow-hidden group hover:border-indigo-500/40 transition-all">
                  <div className="w-8 h-8 rounded-xl bg-indigo-600/30 text-indigo-400 border border-indigo-500/40 flex items-center justify-center font-bold text-sm">1</div>
                  <h3 className="font-bold text-white text-sm">Thu Thập &amp; Masking PII</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Hệ thống nhận tiêu đề và mô tả, tự động che mờ số điện thoại, email cá nhân, mật khẩu nhạy cảm trước khi gửi đi phân tích.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-[#121c30]/80 border border-slate-800/90 space-y-3 relative overflow-hidden group hover:border-blue-500/40 transition-all">
                  <div className="w-8 h-8 rounded-xl bg-blue-600/30 text-blue-400 border border-blue-500/40 flex items-center justify-center font-bold text-sm">2</div>
                  <h3 className="font-bold text-white text-sm">AI Triage &amp; Phân Tích Cảm Xúc</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Mô hình AI đọc hiểu ngữ cảnh tự nhiên để xác định: Danh mục sự cố, Mức ưu tiên (P1-P4), Điểm độ tin cậy, và Cảm xúc tiêu cực/khẩn cấp.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-[#121c30]/80 border border-slate-800/90 space-y-3 relative overflow-hidden group hover:border-amber-500/40 transition-all">
                  <div className="w-8 h-8 rounded-xl bg-amber-600/30 text-amber-400 border border-amber-500/40 flex items-center justify-center font-bold text-sm">3</div>
                  <h3 className="font-bold text-white text-sm">Tính Hạn SLA Tự Động</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Dựa vào mức ưu tiên (P1-P4), hệ thống tự động gắn mốc Deadline phản hồi lần đầu (First Response) và Deadline giải quyết triệt để (Resolve Due).
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-[#121c30]/80 border border-slate-800/90 space-y-3 relative overflow-hidden group hover:border-emerald-500/40 transition-all">
                  <div className="w-8 h-8 rounded-xl bg-emerald-600/30 text-emerald-400 border border-emerald-500/40 flex items-center justify-center font-bold text-sm">4</div>
                  <h3 className="font-bold text-white text-sm">Phân Công Cân Bằng Tải</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Truy vấn danh sách kỹ thuật viên L1 có kỹ năng trùng khớp, sau đó gán cho nhân viên đang nhận ít ticket nhất (Least-Connections).
                  </p>
                </div>
              </div>

              {/* Bảng Chi Tiết Phân Loại & SLA */}
              <div className="space-y-4 pt-2">
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <Clock className="w-4 h-4 text-indigo-400" />
                  Bảng Quy Chuẩn Ưu Tiên &amp; Cam Kết Cam Kết Dịch Vụ (SLA Policy)
                </h3>
                <div className="overflow-x-auto rounded-2xl border border-slate-800/90 bg-[#0a0f18]/90">
                  <table className="w-full text-left text-xs sm:text-sm">
                    <thead>
                      <tr className="border-b border-slate-800 bg-[#121c30]/90 text-slate-300 font-semibold">
                        <th className="py-3 px-4">Mức Ưu Tiên</th>
                        <th className="py-3 px-4">Định Nghĩa Sự Cố</th>
                        <th className="py-3 px-4">Hạn Phản Hồi (First Response)</th>
                        <th className="py-3 px-4">Hạn Giải Quyết (Resolve)</th>
                        <th className="py-3 px-4">Hành Động Hệ Thống</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800/60 text-slate-300">
                      <tr>
                        <td className="py-3.5 px-4 font-bold text-red-400 flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
                          P1 - Khẩn Cấp (Critical)
                        </td>
                        <td className="py-3.5 px-4 text-slate-300">Sập hệ thống toàn công ty, nghẽn đường truyền mạng chính, khóa toàn bộ tài khoản kế toán/VIP.</td>
                        <td className="py-3.5 px-4 font-mono font-semibold text-amber-300">15 phút</td>
                        <td className="py-3.5 px-4 font-mono font-semibold text-amber-300">2 giờ</td>
                        <td className="py-3.5 px-4 text-slate-400">Gửi thông báo tức thì, bật cờ HIGH RISK, cảnh báo chuông đỏ cho toàn đội.</td>
                      </tr>
                      <tr>
                        <td className="py-3.5 px-4 font-bold text-amber-400">P2 - Mức Cao (High)</td>
                        <td className="py-3.5 px-4 text-slate-300">Sự cố ảnh hưởng nguyên phòng ban hoặc nhóm nhân sự, phần mềm nghiệp vụ báo lỗi không xuất được file.</td>
                        <td className="py-3.5 px-4 font-mono font-semibold text-amber-300">30 phút</td>
                        <td className="py-3.5 px-4 font-mono font-semibold text-amber-300">4 giờ</td>
                        <td className="py-3.5 px-4 text-slate-400">Ưu tiên điều hướng ngay cho nhân viên có chuyên môn sâu trong nhóm.</td>
                      </tr>
                      <tr>
                        <td className="py-3.5 px-4 font-bold text-blue-400">P3 - Trung Bình (Medium)</td>
                        <td className="py-3.5 px-4 text-slate-300">Lỗi máy in cá nhân, kẹt giấy, không vào được một trang web nội bộ đơn lẻ, quên pass cá nhân.</td>
                        <td className="py-3.5 px-4 font-mono font-semibold text-slate-300">1 giờ</td>
                        <td className="py-3.5 px-4 font-mono font-semibold text-slate-300">8 giờ (1 ngày)</td>
                        <td className="py-3.5 px-4 text-slate-400">Gán theo thuật toán cân bằng tải Least-Connections thông thường.</td>
                      </tr>
                      <tr>
                        <td className="py-3.5 px-4 font-bold text-slate-400">P4 - Thấp (Low)</td>
                        <td className="py-3.5 px-4 text-slate-300">Yêu cầu hướng dẫn kỹ thuật, tài liệu, hỏi xin cấp thêm ứng dụng hỗ trợ tiện ích làm việc.</td>
                        <td className="py-3.5 px-4 font-mono font-semibold text-slate-400">2 giờ</td>
                        <td className="py-3.5 px-4 font-mono font-semibold text-slate-400">24 giờ (3 ngày)</td>
                        <td className="py-3.5 px-4 text-slate-400">AI tự động gợi ý tài liệu hướng dẫn nhanh cho khách hàng đọc trước.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Cơ Chế Độ Tin Cậy & Tự Động Phê Duyệt */}
              <div className="p-5 rounded-2xl bg-[#121c30]/60 border border-slate-800/90 space-y-3">
                <h3 className="text-sm font-bold text-white flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-emerald-400" />
                  Cơ Chế Đánh Giá Độ Tin Cậy (Confidence Score) &amp; Cờ Kiểm Soát
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-slate-300">
                  <div className="space-y-1.5 p-3 rounded-xl bg-[#0a0f18]/80 border border-slate-800">
                    <span className="font-bold text-emerald-400">Khi Độ Tin Cậy &ge; 70% (Confidence &ge; 0.7):</span>
                    <p className="text-slate-400 leading-relaxed">
                      AI nhận diện đầy đủ từ khóa và ngữ cảnh chuyên ngành. Hệ thống áp dụng ngay danh mục và mức độ ưu tiên mà không cần can thiệp của Quản trị viên (Cờ rủi ro: <span className="text-emerald-400 font-mono">NORMAL</span>).
                    </p>
                  </div>
                  <div className="space-y-1.5 p-3 rounded-xl bg-[#0a0f18]/80 border border-slate-800">
                    <span className="font-bold text-amber-400">Khi Độ Tin Cậy &lt; 70% hoặc Nội Dung Mơ Hồ:</span>
                    <p className="text-slate-400 leading-relaxed">
                      Hệ thống tự động bật cờ rủi ro <span className="text-amber-400 font-mono">CHECK_REQUIRED</span>. Ticket vẫn được giao cho L1 nhưng hiển thị badge cảnh báo để Kỹ thuật viên kiểm tra lại phân loại ban đầu.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 2: Phân Bổ Nhân Viên L1 vs L2 (Giải thích rõ ràng quy tắc) */}
        {/* ========================================================================= */}
        {activeTab === 'l1_l2' && (
          <div className="space-y-6 animate-in fade-in duration-200">
            <div className="bg-[#0e1626]/90 rounded-3xl border border-slate-800/90 p-6 sm:p-9 space-y-8 shadow-xl">
              
              <div className="border-b border-slate-800/80 pb-5">
                <div className="flex items-center gap-2 text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-1">
                  <Users className="w-4 h-4" />
                  Mô Hình Phân Cấp Hỗ Trợ 2 Lớp ITIL
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  Phân Biệt Nhiệm Vụ Nhân Viên L1 và Chuyên Gia Cấp L2
                </h2>
                <p className="text-xs sm:text-sm text-slate-400 mt-1.5 leading-relaxed">
                  Làm rõ nhiệm vụ chuyên biệt giữa tuyến đầu (L1) và tuyến chuyên sâu (L2), cùng điều kiện kích hoạt chuyển cấp tự động (Escalation).
                </p>
              </div>

              {/* So Sánh Trực Quan L1 và L2 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Cột L1 */}
                <div className="p-6 rounded-2xl bg-[#121c30]/80 border border-indigo-900/40 space-y-4 relative">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-500/20 text-indigo-300 rounded-lg text-xs font-bold border border-indigo-500/30">
                    <span>TUYẾN 1 (LEVEL 1 - SUPPORT AGENT)</span>
                  </div>
                  <h3 className="text-lg font-bold text-white">Tiếp Nhận Ban Đầu &amp; Xử Lý Nhanh</h3>
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                      <span><strong>Nhiệm vụ chính:</strong> Tiếp nhận mọi ticket mới do AI phân phối theo nhóm kỹ năng (Skill Group).</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                      <span><strong>Phạm vi xử lý:</strong> Reset mật khẩu, cấu hình Outlook, sửa kẹt máy in, cấp quyền cơ bản, hướng dẫn sử dụng.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                      <span><strong>Công cụ hỗ trợ:</strong> AI Copilot gợi ý câu trả lời từ RAG, tóm tắt nội dung trao đổi, tạo checklist giải quyết nhanh.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                      <span><strong>Cân bằng tải:</strong> Được phân bổ đều bằng thuật toán Least-Connections (ưu tiên ai đang xử lý ít ticket nhất).</span>
                    </li>
                  </ul>
                </div>

                {/* Cột L2 */}
                <div className="p-6 rounded-2xl bg-[#121c30]/80 border border-purple-900/40 space-y-4 relative">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-purple-500/20 text-purple-300 rounded-lg text-xs font-bold border border-purple-500/30">
                    <span>TUYẾN 2 (LEVEL 2 - SPECIALIST AGENT)</span>
                  </div>
                  <h3 className="text-lg font-bold text-white">Chuyên Gia Kỹ Thuật &amp; Sự Cố Phức Tạp</h3>
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                      <span><strong>Nhiệm vụ chính:</strong> Chỉ nhận các ticket vượt quá thẩm quyền của L1 hoặc có tính chất nghiêm trọng.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                      <span><strong>Phạm vi xử lý:</strong> Phân tích lỗi Database/Server, điều tra mã độc, sự cố đường truyền mạng Switch/Router cốt lõi, lỗi bug phần mềm nghiệp vụ.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                      <span><strong>Bảo toàn lịch sử:</strong> Khi nhận chuyển cấp, toàn bộ tin nhắn nội bộ (Internal Notes) và lịch sử của L1 trước đó đều được bảo toàn.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                      <span><strong>Quyền hạn:</strong> Có quyền can thiệp cấu hình hệ thống, phối hợp với Team Lead và Quản trị viên (Admin).</span>
                    </li>
                  </ul>
                </div>

              </div>

              {/* 3 Điều Kiện Chuyển Cấp Lên L2 (Escalation Trigger) */}
              <div className="space-y-4 pt-2">
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 text-amber-400" />
                  3 Điều Kiện Kích Hoạt Chuyển Cấp Lên L2 (Escalation Triggers)
                </h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="p-4 rounded-xl bg-[#0a0f18]/90 border border-slate-800 space-y-2">
                    <div className="text-xs font-bold text-indigo-400">ĐIỀU KIỆN 1</div>
                    <h4 className="font-bold text-white text-sm">Chuyển Cấp Thủ Công (Manual)</h4>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      Kỹ thuật viên L1 sau khi kiểm tra nhận thấy sự cố liên quan đến quyền truy cập máy chủ gốc hoặc bug mã nguồn sẽ bấm nút <strong>Chuyển lên L2</strong>.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-[#0a0f18]/90 border border-slate-800 space-y-2">
                    <div className="text-xs font-bold text-red-400">ĐIỀU KIỆN 2</div>
                    <h4 className="font-bold text-white text-sm">AI Tự Động Quét Cảm Xúc (Sentiment)</h4>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      Khi khách hàng phản hồi bằng lời lẽ bức xúc, giận dữ gay gắt hoặc đe dọa rời bỏ, AI quét và tự động chuyển ngay cho L2 có kinh nghiệm cao để giải quyết kịp thời.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-[#0a0f18]/90 border border-slate-800 space-y-2">
                    <div className="text-xs font-bold text-amber-400">ĐIỀU KIỆN 3</div>
                    <h4 className="font-bold text-white text-sm">Sự Cố Khẩn Cấp P1 / Hạ Tầng Rộng</h4>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      Các ticket sập mạng chi nhánh, tê liệt hệ thống thanh toán hoặc rò rỉ dữ liệu được hệ thống tự động gắn mức P1 và đưa ngay vào hàng đợi ưu tiên của L2.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 3: Cơ Chế RAG & Kho 178 Tri Thức (Chi tiết thuật toán) */}
        {/* ========================================================================= */}
        {activeTab === 'rag' && (
          <div className="space-y-6 animate-in fade-in duration-200">
            <div className="bg-[#0e1626]/90 rounded-3xl border border-slate-800/90 p-6 sm:p-9 space-y-8 shadow-xl">
              
              <div className="border-b border-slate-800/80 pb-5">
                <div className="flex items-center gap-2 text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-1">
                  <Database className="w-4 h-4" />
                  Retrieval-Augmented Generation (RAG) Architecture
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  Cơ Chế RAG &amp; Quản Trị Kho 178 Bài Viết Tri Thức Kỹ Thuật
                </h2>
                <p className="text-xs sm:text-sm text-slate-400 mt-1.5 leading-relaxed">
                  Để AI trả lời đúng nghiệp vụ nội bộ công ty mà không bị "ảo giác" (hallucination), hệ thống sử dụng kiến trúc tìm kiếm lai Hybrid RAG trên 178 bài viết chuẩn hóa.
                </p>
              </div>

              {/* Sơ đồ hoạt động RAG */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-5 rounded-2xl bg-[#121c30]/80 border border-slate-800 space-y-2.5">
                  <div className="w-8 h-8 rounded-lg bg-indigo-500/20 text-indigo-400 flex items-center justify-center font-bold text-sm">A</div>
                  <h3 className="font-bold text-white text-sm">Chunking &amp; Vector Embedding</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Tài liệu kỹ thuật được cắt nhỏ thành từng đoạn ngữ nghĩa (chunks 300-500 từ) có kèm metadata danh mục và chuyển hóa thành Vector Embedding đa chiều.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-[#121c30]/80 border border-slate-800 space-y-2.5">
                  <div className="w-8 h-8 rounded-lg bg-indigo-500/20 text-indigo-400 flex items-center justify-center font-bold text-sm">B</div>
                  <h3 className="font-bold text-white text-sm">Tìm Kiếm Lai (Hybrid Semantic Search)</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Kết hợp <strong>Cosine Similarity</strong> giữa câu hỏi với Vector tri thức + Bộ lọc từ khóa danh mục (Category matching) để chọn lọc ra 3-5 bài viết liên quan nhất.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-[#121c30]/80 border border-slate-800 space-y-2.5">
                  <div className="w-8 h-8 rounded-lg bg-indigo-500/20 text-indigo-400 flex items-center justify-center font-bold text-sm">C</div>
                  <h3 className="font-bold text-white text-sm">Trích Dẫn Nguồn (Grounding &amp; Citation)</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Câu trả lời đưa ra luôn đính kèm link bài viết gốc trong kho tri thức nội bộ để người dùng hoặc kỹ thuật viên có thể đối chiếu ngay lập tức.
                  </p>
                </div>
              </div>

              {/* Phân bổ 178 bài viết tri thức theo lĩnh vực */}
              <div className="space-y-4 pt-2">
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-indigo-400" />
                  Phân Bổ 178 Bài Viết Tri Thức Nội Bộ (Knowledge Base Distribution)
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 text-center">
                  <div className="p-3.5 rounded-xl bg-[#0a0f18]/90 border border-slate-800">
                    <div className="text-lg font-black text-indigo-400 font-mono">35</div>
                    <div className="text-[11px] text-slate-300 font-medium mt-0.5">Tài Khoản &amp; 2FA</div>
                  </div>
                  <div className="p-3.5 rounded-xl bg-[#0a0f18]/90 border border-slate-800">
                    <div className="text-lg font-black text-blue-400 font-mono">32</div>
                    <div className="text-[11px] text-slate-300 font-medium mt-0.5">Mạng, WiFi, VPN</div>
                  </div>
                  <div className="p-3.5 rounded-xl bg-[#0a0f18]/90 border border-slate-800">
                    <div className="text-lg font-black text-emerald-400 font-mono">28</div>
                    <div className="text-[11px] text-slate-300 font-medium mt-0.5">Máy In &amp; Thiết Bị</div>
                  </div>
                  <div className="p-3.5 rounded-xl bg-[#0a0f18]/90 border border-slate-800">
                    <div className="text-lg font-black text-amber-400 font-mono">30</div>
                    <div className="text-[11px] text-slate-300 font-medium mt-0.5">Lỗi Phần Mềm</div>
                  </div>
                  <div className="p-3.5 rounded-xl bg-[#0a0f18]/90 border border-slate-800">
                    <div className="text-lg font-black text-purple-400 font-mono">25</div>
                    <div className="text-[11px] text-slate-300 font-medium mt-0.5">Cấp Quyền &amp; Folder</div>
                  </div>
                  <div className="p-3.5 rounded-xl bg-[#0a0f18]/90 border border-slate-800">
                    <div className="text-lg font-black text-cyan-400 font-mono">28</div>
                    <div className="text-[11px] text-slate-300 font-medium mt-0.5">Hướng Dẫn Khác</div>
                  </div>
                </div>
              </div>

              {/* Chống Prompt Injection trong RAG */}
              <div className="p-4 rounded-xl bg-[#121c30]/70 border border-slate-800 text-xs text-slate-300 space-y-1.5">
                <span className="font-bold text-indigo-400 flex items-center gap-1.5">
                  <Shield className="w-3.5 h-3.5" />
                  Cơ Chế Bảo Vệ Ngăn Chặn Prompt Injection:
                </span>
                <p className="text-slate-400 leading-relaxed">
                  Trước khi đưa văn bản từ người dùng hoặc tài liệu vào mô hình AI sinh câu trả lời, bộ lọc bảo mật kiểm tra các mẫu lệnh độc hại như <code>ignore previous instructions</code>, <code>system override</code>, <code>tiết lộ prompt nội bộ</code> để đảm bảo an toàn tuyệt đối.
                </p>
              </div>

            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 4: Kiến Trúc Hạ Tầng & Công Nghệ (Trực quan, dễ hiểu) */}
        {/* ========================================================================= */}
        {activeTab === 'architecture' && (
          <div className="space-y-6 animate-in fade-in duration-200">
            <div className="bg-[#0e1626]/90 rounded-3xl border border-slate-800/90 p-6 sm:p-9 space-y-8 shadow-xl">
              
              <div className="border-b border-slate-800/80 pb-5">
                <div className="flex items-center gap-2 text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-1">
                  <Server className="w-4 h-4" />
                  Full-Stack Architecture &amp; High Availability
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  Kiến Trúc Hạ Tầng &amp; Công Nghệ Triển Khai
                </h2>
                <p className="text-xs sm:text-sm text-slate-400 mt-1.5 leading-relaxed">
                  Hệ thống hoạt động dưới dạng các dịch vụ đóng gói Docker Containers độc lập, đảm bảo hiệu năng tải cao, không nghẽn cổ chai và khả năng tự phục hồi.
                </p>
              </div>

              {/* 4 Khối công nghệ cốt lõi */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                
                <div className="p-5 rounded-2xl bg-[#121c30]/80 border border-slate-800 space-y-3">
                  <div className="w-9 h-9 rounded-xl bg-indigo-500/20 text-indigo-400 flex items-center justify-center font-bold">
                    <Code className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-indigo-400 uppercase tracking-wider">FRONTEND</span>
                    <h4 className="font-bold text-white text-base">React 18 + Vite</h4>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Giao diện đơn trang (SPA) tối ưu tốc độ render bằng Tailwind CSS v4, Lucide Icons, TanStack Query và định tuyến React Router v6.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-[#121c30]/80 border border-slate-800 space-y-3">
                  <div className="w-9 h-9 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center font-bold">
                    <Activity className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-blue-400 uppercase tracking-wider">BACKEND API</span>
                    <h4 className="font-bold text-white text-base">FastAPI (Python 3.11)</h4>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Xử lý bất đồng bộ AsyncIO, máy chủ ASGI Uvicorn, SQLAlchemy AsyncSession kết nối hồ sơ dữ liệu an toàn với chuẩn Pydantic v2.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-[#121c30]/80 border border-slate-800 space-y-3">
                  <div className="w-9 h-9 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold">
                    <Database className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-amber-400 uppercase tracking-wider">STORAGE &amp; CACHE</span>
                    <h4 className="font-bold text-white text-base">MySQL 8.0 &amp; Redis 7</h4>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    MySQL lưu trữ quan hệ tickets và phân quyền RBAC. Redis quản lý hàng chờ, thu hồi token JWT và kiểm soát tần suất gửi yêu cầu (Rate Limit).
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-[#121c30]/80 border border-slate-800 space-y-3">
                  <div className="w-9 h-9 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center font-bold">
                    <CpuIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-purple-400 uppercase tracking-wider">AI ROTATION POOL</span>
                    <h4 className="font-bold text-white text-base">Gemini + Cohere</h4>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Pool đa khóa tự động xoay vòng key khi quá tải hoặc chạm giới hạn 429, đảm bảo dịch vụ AI phản hồi liên tục 24/7.
                  </p>
                </div>

              </div>

              {/* Sơ đồ luồng dữ liệu kiến trúc */}
              <div className="p-5 rounded-2xl bg-[#0a0f18]/90 border border-slate-800 space-y-3">
                <h3 className="text-sm font-bold text-white flex items-center gap-2">
                  <Layers className="w-4 h-4 text-indigo-400" />
                  Sơ Đồ Luồng Dữ Liệu Reverse Proxy &amp; SSL:
                </h3>
                <div className="p-3.5 rounded-xl bg-[#121c30]/60 border border-slate-800/80 font-mono text-xs text-slate-300 flex flex-wrap items-center gap-2 justify-center">
                  <span className="px-2.5 py-1 rounded bg-slate-800 border border-slate-700 text-indigo-300">Client / Browser</span>
                  <span>&rarr;</span>
                  <span className="px-2.5 py-1 rounded bg-slate-800 border border-slate-700 text-emerald-300">Nginx Reverse Proxy (SSL 443)</span>
                  <span>&rarr;</span>
                  <span className="px-2.5 py-1 rounded bg-slate-800 border border-slate-700 text-blue-300">FastAPI Async API (:8000)</span>
                  <span>&rarr;</span>
                  <span className="px-2.5 py-1 rounded bg-slate-800 border border-slate-700 text-amber-300">MySQL &amp; Redis</span>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 5: An Toàn Dữ Liệu & Masking PII (Bảo mật tối đa) */}
        {/* ========================================================================= */}
        {activeTab === 'security' && (
          <div className="space-y-6 animate-in fade-in duration-200">
            <div className="bg-[#0e1626]/90 rounded-3xl border border-slate-800/90 p-6 sm:p-9 space-y-8 shadow-xl">
              
              <div className="border-b border-slate-800/80 pb-5">
                <div className="flex items-center gap-2 text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-1">
                  <ShieldCheck className="w-4 h-4" />
                  Data Privacy &amp; Secret Protection
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  An Toàn Dữ Liệu &amp; Che Giấu Thông Tin Nhạy Cảm (PII Masking)
                </h2>
                <p className="text-xs sm:text-sm text-slate-400 mt-1.5 leading-relaxed">
                  Đảm bảo tuân thủ tiêu chuẩn an toàn thông tin doanh nghiệp trước khi gửi bất kỳ dữ liệu nào đến mô hình AI bên ngoài.
                </p>
              </div>

              {/* 3 Trụ cột an toàn */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                
                <div className="p-5 rounded-2xl bg-[#121c30]/80 border border-slate-800 space-y-3">
                  <div className="w-9 h-9 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold">
                    <Lock className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-white text-base">Bộ Lọc PII Masker Tự Động</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Mọi đoạn hội thoại, tiêu đề và mô tả sự cố đều đi qua mô-đun lọc trước khi ra ngoài:
                  </p>
                  <ul className="text-xs text-slate-300 space-y-1.5 pl-3 list-disc">
                    <li>Số điện thoại &rarr; <code>[PHONE_REDACTED]</code></li>
                    <li>Email cá nhân &rarr; <code>[EMAIL_REDACTED]</code></li>
                    <li>Password, OTP &rarr; Tự động cắt bỏ</li>
                  </ul>
                </div>

                <div className="p-5 rounded-2xl bg-[#121c30]/80 border border-slate-800 space-y-3">
                  <div className="w-9 h-9 rounded-xl bg-indigo-500/20 text-indigo-400 flex items-center justify-center font-bold">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-white text-base">Phân Quyền Vai Trò RBAC</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Kiểm soát chặt chẽ theo 4 cấp quyền chuẩn quốc tế:
                  </p>
                  <ul className="text-xs text-slate-300 space-y-1.5 pl-3 list-disc">
                    <li><strong>Requester:</strong> Chỉ xem được ticket của mình</li>
                    <li><strong>Support Agent:</strong> Xử lý ticket được phân công</li>
                    <li><strong>Team Lead:</strong> Theo dõi hiệu suất toàn nhóm</li>
                    <li><strong>Admin:</strong> Quản trị hệ thống và API Keys</li>
                  </ul>
                </div>

                <div className="p-5 rounded-2xl bg-[#121c30]/80 border border-slate-800 space-y-3">
                  <div className="w-9 h-9 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center font-bold">
                    <FileText className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-white text-base">GitHub Secret Protection</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Cơ chế bảo vệ mã nguồn máy chủ: toàn bộ API Keys, Secret OAuth Google và mật khẩu CSDL được tách biệt bằng file cấu hình riêng, tự động thay thế bằng chuỗi an toàn trước khi đẩy lên GitHub công khai.
                  </p>
                </div>

              </div>

            </div>
          </div>
        )}

      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800/80 bg-[#0a0f18]/90 backdrop-blur-md py-5 px-4 text-center text-xs text-slate-500 mt-auto">
        &copy; 2026 CSKH IT Service Desk &bull; Bản tài liệu kỹ thuật &amp; giải trình hệ thống AI ServiceDesk toàn diện
      </footer>
    </div>
  );
}
