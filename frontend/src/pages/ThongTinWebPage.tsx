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
  Clock, 
  AlertTriangle, 
  Layers, 
  Sparkles, 
  Search, 
  RefreshCw, 
  Flame, 
  Eye, 
  Key, 
  FileCode, 
  Activity, 
  GitBranch, 
  CornerDownRight, 
  MessageSquare 
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { AuthBackground } from '../components/AuthBackground';

export default function ThongTinWebPage() {
  const [activeTab, setActiveTab] = useState<'ai_triage' | 'load_balance' | 'escalation_sla' | 'rag_knowledge' | 'architecture' | 'security_pii'>('ai_triage');

  return (
    <div className="min-h-screen relative text-slate-100 flex flex-col antialiased selection:bg-indigo-500 selection:text-white font-sans overflow-x-hidden">
      
      {/* Nền động không gian mạng, Datacenter & Cyber SOC tương tự giao diện Login */}
      <div className="fixed inset-0 z-0 pointer-events-none select-none overflow-hidden">
        <AuthBackground />
      </div>

      {/* Lớp nội dung nổi phía trên */}
      <div className="relative z-10 flex flex-col min-h-screen">
        
        {/* Top Sticky Header */}
        <header className="border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-xl sticky top-0 z-40 px-4 sm:px-8 py-3.5 flex items-center justify-between shadow-2xl">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500 via-indigo-600 to-purple-600 flex items-center justify-center font-bold text-white shadow-lg shadow-indigo-500/30">
              <Compass className="w-5 h-5 text-white animate-spin-slow" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-sm text-white tracking-wide block">CSKH IT Service Desk</span>
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  LIVE ARCHITECTURE
                </span>
              </div>
              <span className="text-[11px] text-slate-400 font-mono">Tài liệu kỹ thuật nội bộ &amp; Cơ chế vận hành toàn hệ thống</span>
            </div>
          </div>

          <div className="flex items-center gap-2.5">
            <Link
              to="/login"
              className="hidden sm:inline-flex text-xs font-medium text-slate-300 hover:text-white bg-slate-800/70 hover:bg-slate-700/80 border border-slate-700/80 px-3 py-1.5 rounded-lg transition-all items-center gap-1.5"
            >
              <Key className="w-3.5 h-3.5 text-indigo-400" />
              <span>Đăng nhập</span>
            </Link>
            <Link
              to="/"
              className="text-xs font-semibold text-slate-200 hover:text-white bg-indigo-600/80 hover:bg-indigo-600 border border-indigo-500/50 px-3.5 py-1.5 rounded-lg transition-all inline-flex items-center gap-1.5 shadow-md shadow-indigo-600/30 cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Về trang chủ</span>
            </Link>
          </div>
        </header>

        {/* Main Content Container */}
        <main className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 flex-1">
          
          {/* Hero Banner Section */}
          <div className="bg-slate-900/85 backdrop-blur-xl rounded-2xl p-6 sm:p-10 shadow-2xl border border-slate-700/70 relative overflow-hidden">
            {/* Glowing ambient accents inside card */}
            <div className="absolute -top-20 -right-20 w-96 h-96 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute inset-0 auth-cyber-grid opacity-20 pointer-events-none" />

            <div className="relative z-10 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-500/15 border border-indigo-400/30 rounded-full text-xs font-semibold text-cyan-300 backdrop-blur-md">
                <Cpu className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
                <span>Chuyên Trang Kỹ Thuật Độc Lập • Mã Tài Liệu: CSKH-SPEC-2026</span>
              </div>
              
              <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
                Toàn Bộ Kiến Trúc Vận Hành, Cơ Chế AI &amp; Luồng Xử Lý Ticket
              </h1>
              
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-4xl font-normal">
                Hệ thống <strong>CSKH IT Service Desk</strong> được thiết kế theo tiêu chuẩn <strong>ITIL v4</strong>, tích hợp trí tuệ nhân tạo (AI Triage, Sentiment Analysis, RAG) nhằm tự động hóa quy trình phân loại, định tuyến nhóm chuyên môn, cân bằng tải Least-Workload giữa các kỹ thuật viên và leo thang bảo mật tức thì.
              </p>

              {/* Quick High-Level Metrics Badges */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 pt-2">
                <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/80 backdrop-blur-sm">
                  <div className="text-[11px] font-mono text-cyan-400 font-semibold uppercase">AI Triage</div>
                  <div className="text-sm sm:text-base font-bold text-white mt-0.5">Phân Loại 4 Cấp</div>
                  <div className="text-[10px] text-slate-400">P1 -&gt; P4 tự động</div>
                </div>

                <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/80 backdrop-blur-sm">
                  <div className="text-[11px] font-mono text-indigo-400 font-semibold uppercase">Định Tuyến</div>
                  <div className="text-sm sm:text-base font-bold text-white mt-0.5">6 Kỹ Năng</div>
                  <div className="text-[10px] text-slate-400">Khớp chuẩn Skill Group</div>
                </div>

                <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/80 backdrop-blur-sm">
                  <div className="text-[11px] font-mono text-emerald-400 font-semibold uppercase">Cân Bằng Tải</div>
                  <div className="text-sm sm:text-base font-bold text-white mt-0.5">Least-Workload</div>
                  <div className="text-[10px] text-slate-400">Không dồn việc nhân viên</div>
                </div>

                <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/80 backdrop-blur-sm">
                  <div className="text-[11px] font-mono text-amber-400 font-semibold uppercase">Leo Thang L2</div>
                  <div className="text-sm sm:text-base font-bold text-white mt-0.5">AI Sentiment</div>
                  <div className="text-[10px] text-slate-400">Tự động khi &gt;= 0.82</div>
                </div>

                <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/80 backdrop-blur-sm">
                  <div className="text-[11px] font-mono text-purple-400 font-semibold uppercase">RAG Engine</div>
                  <div className="text-sm sm:text-base font-bold text-white mt-0.5">1.006 Chunks</div>
                  <div className="text-[10px] text-slate-400">179 Runbooks chuẩn IT</div>
                </div>

                <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/80 backdrop-blur-sm">
                  <div className="text-[11px] font-mono text-rose-400 font-semibold uppercase">An Toàn PII</div>
                  <div className="text-sm sm:text-base font-bold text-white mt-0.5">Masking 100%</div>
                  <div className="text-[10px] text-slate-400">Xóa dữ liệu nhạy cảm</div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Tabs Selector */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none border-b border-slate-800/90">
            {[
              { id: 'ai_triage', label: '1. Tiếp Nhận & AI Triage', icon: Workflow, color: 'text-cyan-400' },
              { id: 'load_balance', label: '2. Phân Bổ Nhân Viên L1/L2', icon: Users, color: 'text-indigo-400' },
              { id: 'escalation_sla', label: '3. Leo Thang L2 & Chuẩn SLA', icon: Zap, color: 'text-amber-400' },
              { id: 'rag_knowledge', label: '4. Kho Tri Thức RAG & Copilot', icon: Database, color: 'text-purple-400' },
              { id: 'architecture', label: '5. Kiến Trúc Hạ Tầng Container', icon: Server, color: 'text-emerald-400' },
              { id: 'security_pii', label: '6. An Toàn Thông Tin & PII', icon: ShieldCheck, color: 'text-rose-400' },
            ].map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`px-4 py-3 rounded-xl text-xs sm:text-sm font-semibold transition-all shrink-0 inline-flex items-center gap-2.5 cursor-pointer backdrop-blur-md ${
                    isActive 
                      ? 'bg-gradient-to-r from-indigo-600 to-indigo-700 text-white shadow-lg shadow-indigo-600/35 border border-indigo-400/50' 
                      : 'text-slate-300 hover:text-white bg-slate-900/70 hover:bg-slate-800/80 border border-slate-800/80'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-white' : tab.color}`} />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* TAB 1: Cơ Chế Tiếp Nhận & AI Triage */}
          {activeTab === 'ai_triage' && (
            <div className="space-y-6 animate-in fade-in duration-300">
              <div className="bg-slate-900/85 backdrop-blur-xl rounded-2xl border border-slate-700/70 shadow-2xl p-6 sm:p-9 space-y-6">
                
                <div className="border-b border-slate-800/80 pb-5">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center">
                      <Workflow className="w-4 h-4 text-cyan-400" />
                    </div>
                    <div>
                      <h2 className="text-xl font-bold text-white">Quy Trình Tiếp Nhận &amp; Phân Phối Tự Động (AI Triage Pipeline)</h2>
                      <p className="text-xs sm:text-sm text-slate-400 mt-0.5">
                        Xử lý trọn gói từ khi người dùng bấm "Gửi yêu cầu" đến khi ticket nằm trên bàn làm việc của đúng nhân sự chuyên trách, chỉ mất dưới 800ms.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Sơ đồ 4 giai đoạn */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800/90 relative overflow-hidden space-y-2">
                    <div className="w-7 h-7 rounded-lg bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 flex items-center justify-center font-bold text-xs">01</div>
                    <h3 className="font-bold text-white text-sm">Khử Khuẩn Dữ Liệu PII</h3>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      Trước khi gửi ra mô hình AI bên ngoài, bộ lọc <code>PIIMasker</code> tự động thay thế số điện thoại, email cá nhân và mật khẩu bằng các nhãn an toàn như <code>[PHONE_REDACTED]</code>.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800/90 relative overflow-hidden space-y-2">
                    <div className="w-7 h-7 rounded-lg bg-indigo-500/20 text-indigo-300 border border-indigo-500/40 flex items-center justify-center font-bold text-xs">02</div>
                    <h3 className="font-bold text-white text-sm">Phân Loại Đa Kênh AI</h3>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      Hệ thống gửi song song 2 luồng: <strong>AI Triage</strong> (xác định danh mục &amp; mức độ ưu tiên P1-P4) và <strong>Sentiment Analysis</strong> (đo độ phẫn nộ / khẩn cấp của người gửi).
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800/90 relative overflow-hidden space-y-2">
                    <div className="w-7 h-7 rounded-lg bg-purple-500/20 text-purple-300 border border-purple-500/40 flex items-center justify-center font-bold text-xs">03</div>
                    <h3 className="font-bold text-white text-sm">Định Tuyến Nhóm Chuyên Môn</h3>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      Ánh xạ danh mục vào 6 Skill Group: Mạng (<code>NETWORK_INFRA</code>), Phần mềm (<code>SOFTWARE_BUG</code>), Tài khoản (<code>ACCOUNT_AUTH</code>), Thiết bị (<code>DEVICE</code>), v.v.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800/90 relative overflow-hidden space-y-2">
                    <div className="w-7 h-7 rounded-lg bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 flex items-center justify-center font-bold text-xs">04</div>
                    <h3 className="font-bold text-white text-sm">Giao Việc &amp; Bắt Đầu SLA</h3>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      Phân công cho nhân viên có ít ticket nhất (Least-Workload). Thiết lập bộ đếm thời gian cam kết dịch vụ (First Response SLA &amp; Resolution SLA).
                    </p>
                  </div>
                </div>

                {/* 6 Nhóm Phân Loại Category Chi Tiết */}
                <div className="space-y-3 pt-3">
                  <h3 className="font-bold text-slate-200 text-sm flex items-center gap-2">
                    <Layers className="w-4 h-4 text-cyan-400" />
                    Bảng 6 Nhóm Kỹ Năng &amp; Danh Mục Xử Lý Chuẩn Hóa
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
                    <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800 text-xs space-y-1.5">
                      <div className="font-bold text-cyan-300 flex items-center justify-between">
                        <span>NETWORK_INFRA</span>
                        <span className="text-[10px] px-2 py-0.5 rounded bg-cyan-950 text-cyan-400 border border-cyan-800">Hạ Tầng Mạng</span>
                      </div>
                      <p className="text-slate-400 leading-relaxed">Xử lý VPN không kết nối, mất Internet văn phòng, đứt cáp mạng LAN, lỗi DNS, cấu hình WiFi doanh nghiệp.</p>
                    </div>

                    <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800 text-xs space-y-1.5">
                      <div className="font-bold text-indigo-300 flex items-center justify-between">
                        <span>ACCOUNT_AUTH</span>
                        <span className="text-[10px] px-2 py-0.5 rounded bg-indigo-950 text-indigo-400 border border-indigo-800">Tài Khoản &amp; SSO</span>
                      </div>
                      <p className="text-slate-400 leading-relaxed">Khóa tài khoản do nhập sai pass, cấp phát quyền truy cập ERP/CRM, lỗi Google Workspace, quên mật khẩu.</p>
                    </div>

                    <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800 text-xs space-y-1.5">
                      <div className="font-bold text-rose-300 flex items-center justify-between">
                        <span>SOFTWARE_BUG</span>
                        <span className="text-[10px] px-2 py-0.5 rounded bg-rose-950 text-rose-400 border border-rose-800">Lỗi Phần Mềm</span>
                      </div>
                      <p className="text-slate-400 leading-relaxed">Ứng dụng nội bộ bị crash, lỗi đồng bộ dữ liệu, lỗi phiên bản build mới, sự cố xung đột hệ điều hành.</p>
                    </div>

                    <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800 text-xs space-y-1.5">
                      <div className="font-bold text-amber-300 flex items-center justify-between">
                        <span>DEVICE</span>
                        <span className="text-[10px] px-2 py-0.5 rounded bg-amber-950 text-amber-400 border border-amber-800">Thiết Bị &amp; Phần Cứng</span>
                      </div>
                      <p className="text-slate-400 leading-relaxed">Máy in không nhận lệnh, laptop bị màn hình xanh (BSOD), chuột bàn phím hỏng, yêu cầu nâng cấp RAM/SSD.</p>
                    </div>

                    <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800 text-xs space-y-1.5">
                      <div className="font-bold text-purple-300 flex items-center justify-between">
                        <span>ACCESS_RESOURCE</span>
                        <span className="text-[10px] px-2 py-0.5 rounded bg-purple-950 text-purple-400 border border-purple-800">Cấp Quyền &amp; Folder</span>
                      </div>
                      <p className="text-slate-400 leading-relaxed">Cấp quyền truy cập ổ đĩa chia sẻ NAS, phân quyền Git repository, tạo hòm thư chung, mở port tường lửa.</p>
                    </div>

                    <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800 text-xs space-y-1.5">
                      <div className="font-bold text-emerald-300 flex items-center justify-between">
                        <span>TECH_GUIDE</span>
                        <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-950 text-emerald-400 border border-emerald-800">Hướng Dẫn Kỹ Thuật</span>
                      </div>
                      <p className="text-slate-400 leading-relaxed">Hướng dẫn cài đặt chứng chỉ số SSL, cài đặt chữ ký số điện tử, tài liệu cấu hình Outlook cho nhân viên mới.</p>
                    </div>
                  </div>
                </div>

                {/* Đoạn trích Code Backend Thực Thi */}
                <div className="space-y-3 pt-3">
                  <h3 className="font-bold text-slate-200 text-sm flex items-center gap-2">
                    <FileCode className="w-4 h-4 text-cyan-400" />
                    Đoạn Trích Logic Backend (FastAPI &amp; Async IO Pipeline)
                  </h3>
                  <div className="bg-slate-950/90 text-slate-300 p-5 rounded-xl font-mono text-xs leading-relaxed border border-slate-800 overflow-x-auto space-y-1.5 shadow-inner">
                    <p className="text-slate-500">// 1. Khởi chạy song song Triage và Phân Tích Cảm Xúc bằng asyncio.gather</p>
                    <p className="text-cyan-300">masked_text = PIIMasker.mask_text(ticket_desc)</p>
                    <p className="text-purple-300">raw_triage, raw_sentiment = await asyncio.gather(</p>
                    <p className="pl-6 text-indigo-300">ai_triage_ticket(masked_text),</p>
                    <p className="pl-6 text-amber-300">analyze_sentiment(masked_text),</p>
                    <p className="pl-6 text-slate-400">return_exceptions=True</p>
                    <p className="text-purple-300">)</p>
                    <p className="text-slate-500 pt-2">// 2. Phân công kỹ thuật viên theo nhóm kỹ năng &amp; cấp L1/L2</p>
                    <p className="text-emerald-400">assigned_agent_id = await assign_agent_by_skill_and_level(</p>
                    <p className="pl-6 text-slate-300">db=db, category_id=ai_result.category_id, level="L1"</p>
                    <p className="text-emerald-400">)</p>
                  </div>
                </div>

              </div>
            </div>
          )}

          {/* TAB 2: Phân Bổ Nhân Viên L1 vs L2 */}
          {activeTab === 'load_balance' && (
            <div className="space-y-6 animate-in fade-in duration-300">
              <div className="bg-slate-900/85 backdrop-blur-xl rounded-2xl border border-slate-700/70 shadow-2xl p-6 sm:p-9 space-y-6">
                
                <div className="border-b border-slate-800/80 pb-5">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center">
                      <Users className="w-4 h-4 text-indigo-400" />
                    </div>
                    <div>
                      <h2 className="text-xl font-bold text-white">Thuật Toán Cân Bằng Tải Least-Workload (Phân Bổ Kỹ Thuật Viên)</h2>
                      <p className="text-xs sm:text-sm text-slate-400 mt-0.5">
                        Giải đáp chi tiết cơ chế phân xử: Khi có nhiều nhân viên L1 hoặc L2 đang cùng online, hệ thống dựa vào đâu để ra quyết định giao việc?
                      </p>
                    </div>
                  </div>
                </div>

                {/* Ma Trận Phân Quyền 3 Tầng */}
                <div className="space-y-4">
                  <h3 className="font-bold text-slate-200 text-sm flex items-center gap-2">
                    <GitBranch className="w-4 h-4 text-indigo-400" />
                    Ma Trận Tìm Kiếm Ứng Viên 3 Tầng (3-Tier Fallback Hierarchy)
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="p-4 rounded-xl bg-slate-950/70 border border-indigo-500/30 space-y-2">
                      <div className="inline-block px-2 py-0.5 rounded text-[10px] font-bold bg-indigo-900/60 text-indigo-300 border border-indigo-700">TẦNG 1: CHUẨN XÁC</div>
                      <h4 className="font-bold text-white text-sm">Đúng Cấp &amp; Đúng Kỹ Năng</h4>
                      <p className="text-xs text-slate-400 leading-relaxed">
                        Hệ thống truy vấn nhân viên có <code>support_level == 'L1'</code>, đang kích hoạt (<code>is_active == true</code>) và có nhóm kỹ năng trùng khớp chính xác: <code>skill_group == category_code</code>.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 space-y-2">
                      <div className="inline-block px-2 py-0.5 rounded text-[10px] font-bold bg-slate-800 text-slate-300 border border-slate-700">TẦNG 2: MỞ RỘNG CÙNG CẤP</div>
                      <h4 className="font-bold text-white text-sm">Toàn Bộ Agent Tuyến 1 (L1)</h4>
                      <p className="text-xs text-slate-400 leading-relaxed">
                        Nếu toàn bộ nhân viên thuộc kỹ năng đó đang nghỉ hoặc bận offline, hệ thống mở rộng tìm tất cả các nhân sự <code>SUPPORT_AGENT</code> đang online ở cùng cấp level L1 để hỗ trợ thay thế.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 space-y-2">
                      <div className="inline-block px-2 py-0.5 rounded text-[10px] font-bold bg-amber-900/50 text-amber-300 border border-amber-700">TẦNG 3: DỰ PHÒNG CUỐI</div>
                      <h4 className="font-bold text-white text-sm">Team Lead / Admin Support</h4>
                      <p className="text-xs text-slate-400 leading-relaxed">
                        Nếu toàn bộ Agent L1 đều vắng mặt, hệ thống tự động gán cho Team Lead hoặc Quản trị viên trực ban (chế độ không áp dụng ép buộc <code>strict=False</code>), bảo đảm không có ticket nào bị "mồ côi".
                      </p>
                    </div>
                  </div>
                </div>

                {/* 2 Kịch bản giải quyết tải */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-2">
                  <div className="p-5 rounded-xl border border-slate-800 bg-slate-950/70 space-y-3">
                    <div className="flex items-center gap-2 text-cyan-400 font-bold text-sm">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                      <span>Trường Hợp 1: Tải Công Việc Giữa Các Agent Không Đều</span>
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      Hệ thống tự động thực thi câu lệnh đếm tổng số ticket mà mỗi kỹ thuật viên đang phải chịu trách nhiệm (bao gồm các trạng thái chưa đóng: <code>NEW</code>, <code>PROCESSING</code>, <code>WAITING_CUSTOMER</code>).
                    </p>
                    <div className="p-3.5 bg-slate-900/90 rounded-xl border border-slate-800/90 text-xs text-slate-300 space-y-1.5 font-mono">
                      <p>• Kỹ thuật viên A (Mạng L1): <span className="text-cyan-400 font-bold">1 ticket đang mở</span></p>
                      <p>• Kỹ thuật viên B (Mạng L1): <span className="text-rose-400 font-bold">4 tickets đang mở</span></p>
                      <div className="border-t border-slate-800 pt-1.5 text-emerald-400 font-sans font-semibold">
                        ➔ Kết quả: Ticket lập tức được gán cho Kỹ thuật viên A để cân đối lại áp lực công việc.
                      </div>
                    </div>
                  </div>

                  <div className="p-5 rounded-xl border border-slate-800 bg-slate-950/70 space-y-3">
                    <div className="flex items-center gap-2 text-indigo-400 font-bold text-sm">
                      <CheckCircle2 className="w-4 h-4 text-indigo-400" />
                      <span>Trường Hợp 2: Tải Công Việc Bằng Nhau (Tie-Breaker)</span>
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      Khi cả 2 kỹ thuật viên đều có số ticket đang giải quyết giống hệt nhau (ví dụ cùng có 0 ticket hoặc cùng có 1 ticket):
                    </p>
                    <div className="p-3.5 bg-slate-900/90 rounded-xl border border-slate-800/90 text-xs text-slate-300 space-y-1.5 font-mono">
                      <p>• Sắp xếp theo khóa ID / Thời điểm nhận ticket gần nhất (FIFO index)</p>
                      <p>• Ticket kế tiếp sẽ tự động chuyển giao luân phiên cho người còn lại (Round-Robin)</p>
                      <div className="border-t border-slate-800 pt-1.5 text-indigo-300 font-sans font-semibold">
                        ➔ Kết quả: Tuyệt đối triệt tiêu tình trạng dồn dập việc lên một nhân sự duy nhất.
                      </div>
                    </div>
                  </div>
                </div>

                {/* Câu lệnh SQL backend thực tế */}
                <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 text-xs space-y-2 font-mono">
                  <span className="text-indigo-400 font-bold uppercase tracking-wider block font-sans">Câu Lệnh Backend Tính Workload:</span>
                  <p className="text-slate-300">
                    SELECT assigned_agent_id, COUNT(id) AS active_load FROM tickets WHERE status IN ('NEW', 'PROCESSING', 'WAITING_CUSTOMER') GROUP BY assigned_agent_id ORDER BY active_load ASC;
                  </p>
                </div>

              </div>
            </div>
          )}

          {/* TAB 3: Leo Thang L2 & Chuẩn SLA */}
          {activeTab === 'escalation_sla' && (
            <div className="space-y-6 animate-in fade-in duration-300">
              <div className="bg-slate-900/85 backdrop-blur-xl rounded-2xl border border-slate-700/70 shadow-2xl p-6 sm:p-9 space-y-6">
                
                <div className="border-b border-slate-800/80 pb-5">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-amber-500/20 border border-amber-500/30 flex items-center justify-center">
                      <Zap className="w-4 h-4 text-amber-400" />
                    </div>
                    <div>
                      <h2 className="text-xl font-bold text-white">Cơ Chế Leo Thang L2 (Escalation Path) &amp; Cam Kết Dịch Vụ SLA</h2>
                      <p className="text-xs sm:text-sm text-slate-400 mt-0.5">
                        Phân định ranh giới giữa Tuyến 1 (L1) và Tuyến 2 (L2), cùng bảng thời gian phản hồi theo chuẩn ITIL quốc tế.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Bảng phân biệt L1 vs L2 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="p-5 rounded-xl border border-slate-800 bg-slate-950/70 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold px-2 py-0.5 rounded bg-blue-950 text-blue-300 border border-blue-800">TUYẾN 1 (L1 - FRONTLINE)</span>
                      <span className="text-xs text-slate-400">Tiếp nhận &amp; Sơ bộ</span>
                    </div>
                    <ul className="text-xs text-slate-300 space-y-2 list-disc pl-4 leading-relaxed">
                      <li>Tiếp nhận yêu cầu ban đầu, hướng dẫn người dùng theo đúng <strong>Runbook chuẩn</strong> có trong kho tri thức RAG.</li>
                      <li>Khởi tạo lại mật khẩu, cấp quyền thư mục chuẩn, kiểm tra kết nối mạng cục bộ tại máy trạm.</li>
                      <li>Giải quyết các sự cố phổ thông, lặp lại có quy trình sẵn.</li>
                    </ul>
                  </div>

                  <div className="p-5 rounded-xl border border-indigo-500/30 bg-slate-950/70 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold px-2 py-0.5 rounded bg-indigo-950 text-indigo-300 border border-indigo-700">TUYẾN 2 (L2 - SPECIALIST)</span>
                      <span className="text-xs text-amber-400 font-semibold">Chuyên gia chuyên sâu</span>
                    </div>
                    <ul className="text-xs text-slate-300 space-y-2 list-disc pl-4 leading-relaxed">
                      <li>Xử lý sự cố phần cứng máy chủ trung tâm, Router Core, Firewall cty, sập Database.</li>
                      <li>Điều tra Bug ứng dụng phần mềm, debug mã nguồn và vá nóng hệ thống.</li>
                      <li>Tiếp quản xử lý các khiếu nại gay gắt (khách hàng bức xúc) do AI hoặc L1 đẩy lên.</li>
                    </ul>
                  </div>
                </div>

                {/* 2 Luồng chuyển cấp L2 */}
                <div className="p-5 rounded-xl bg-amber-950/20 border border-amber-900/60 space-y-4">
                  <h3 className="font-bold text-amber-300 text-sm flex items-center gap-2">
                    <Flame className="w-4 h-4 text-amber-400" />
                    Cơ Chế Chuyển Cấp Tự Động (AI-Driven) &amp; Thủ Công (Manual)
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                    <div className="bg-slate-950/80 p-4 rounded-xl border border-amber-900/50 space-y-2">
                      <h4 className="font-bold text-white flex items-center gap-1.5">
                        <Bot className="w-3.5 h-3.5 text-amber-400" />
                        Tự Động Leo Thang Khi Cảm Xúc Tiêu Cực
                      </h4>
                      <p className="text-slate-300 leading-relaxed">
                        Khi người dùng phản hồi với thái độ bức xúc, đe dọa khiếu nại hoặc gián đoạn nghiêm trọng:
                      </p>
                      <ul className="list-disc pl-4 text-slate-400 space-y-1">
                        <li>AI Sentiment đạt ngưỡng tin cậy &ge; <strong>0.82 (82%)</strong>.</li>
                        <li>Đánh dấu cờ <code>AUTO_ESCALATED</code>, thời gian <code>escalated_at</code>.</li>
                        <li><strong>Tạo ghi chú nội bộ bí mật (is_internal=True):</strong> Trích xuất câu nói bằng chứng (evidence) và phân tích nguyên nhân để L2 nắm thông tin, hoàn toàn giấu kín khỏi màn hình của người dùng.</li>
                        <li>Nếu không có L2 online ngay, chuyển sang hàng đợi ưu tiên <code>L2_WAITING</code>.</li>
                      </ul>
                    </div>

                    <div className="bg-slate-950/80 p-4 rounded-xl border border-slate-800 space-y-2">
                      <h4 className="font-bold text-white flex items-center gap-1.5">
                        <Users className="w-3.5 h-3.5 text-indigo-400" />
                        Chuyển Cấp Thủ Công Bởi Nhân Viên L1
                      </h4>
                      <p className="text-slate-300 leading-relaxed">
                        Trong quá trình xử lý, nếu Kỹ thuật viên L1 nhận thấy:
                      </p>
                      <ul className="list-disc pl-4 text-slate-400 space-y-1">
                        <li>Sự cố vượt quá quyền hạn hạn chế của tài khoản nhân viên.</li>
                        <li>Lỗi nằm ở lõi dịch vụ Cloud, Database deadlock hoặc mã nguồn backend.</li>
                        <li>L1 bấm nút "Chuyển cấp L2" ngay trong Ticket Detail, hệ thống yêu cầu nhập lý do chi tiết và tự động gán sang nhân sự Tuyến 2.</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Bảng Cam Kết SLA Chuẩn ITIL */}
                <div className="space-y-3 pt-2">
                  <h3 className="font-bold text-slate-200 text-sm flex items-center gap-2">
                    <Clock className="w-4 h-4 text-amber-400" />
                    Bảng Cam Kết Dịch Vụ SLA Cố Định Theo Mức Ưu Tiên
                  </h3>
                  <div className="overflow-x-auto rounded-xl border border-slate-800">
                    <table className="w-full text-xs text-left">
                      <thead className="bg-slate-950 text-slate-400 uppercase font-mono border-b border-slate-800">
                        <tr>
                          <th className="px-4 py-3">Mức Ưu Tiên</th>
                          <th className="px-4 py-3">Phạm Vi Tác Động</th>
                          <th className="px-4 py-3">Phản Hồi Đầu Tiên (First Response)</th>
                          <th className="px-4 py-3">Giải Quyết Xong (Resolution Due)</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-800/80 bg-slate-950/50">
                        <tr className="hover:bg-slate-900/50">
                          <td className="px-4 py-3.5 font-bold text-rose-400 flex items-center gap-1.5">
                            <span className="w-2 h-2 rounded-full bg-rose-500 animate-ping"></span>
                            CRITICAL_P1
                          </td>
                          <td className="px-4 py-3 text-slate-300">Tác động tê liệt toàn diện, ngừng trệ hệ thống diện rộng</td>
                          <td className="px-4 py-3 font-semibold text-emerald-400">Trong vòng 15 phút</td>
                          <td className="px-4 py-3 font-semibold text-white">Trong vòng 60 phút (1 giờ)</td>
                        </tr>
                        <tr className="hover:bg-slate-900/50">
                          <td className="px-4 py-3.5 font-bold text-amber-400">HIGH_P2</td>
                          <td className="px-4 py-3 text-slate-300">Tác động lớn, nhiều nhân sự/phòng ban bị ngưng trệ</td>
                          <td className="px-4 py-3 font-semibold text-emerald-400">Trong vòng 30 phút</td>
                          <td className="px-4 py-3 font-semibold text-white">Trong vòng 240 phút (4 giờ)</td>
                        </tr>
                        <tr className="hover:bg-slate-900/50">
                          <td className="px-4 py-3.5 font-bold text-indigo-400">MEDIUM_P3</td>
                          <td className="px-4 py-3 text-slate-300">Tác động mức độ vừa, ảnh hưởng 1 cá nhân hoặc nhóm nhỏ</td>
                          <td className="px-4 py-3 font-semibold text-emerald-400">Trong vòng 120 phút (2 giờ)</td>
                          <td className="px-4 py-3 font-semibold text-white">Trong vòng 1.440 phút (24 giờ)</td>
                        </tr>
                        <tr className="hover:bg-slate-900/50">
                          <td className="px-4 py-3.5 font-bold text-slate-400">LOW_P4</td>
                          <td className="px-4 py-3 text-slate-300">Yêu cầu thông tin, hướng dẫn dịch vụ thường nhật</td>
                          <td className="px-4 py-3 font-semibold text-emerald-400">Trong vòng 480 phút (8 giờ)</td>
                          <td className="px-4 py-3 font-semibold text-white">Trong vòng 4.320 phút (72 giờ)</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

              </div>
            </div>
          )}

          {/* TAB 4: RAG Tri Thức & Copilot */}
          {activeTab === 'rag_knowledge' && (
            <div className="space-y-6 animate-in fade-in duration-300">
              <div className="bg-slate-900/85 backdrop-blur-xl rounded-2xl border border-slate-700/70 shadow-2xl p-6 sm:p-9 space-y-6">
                
                <div className="border-b border-slate-800/80 pb-5">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-purple-500/20 border border-purple-500/30 flex items-center justify-center">
                      <Database className="w-4 h-4 text-purple-400" />
                    </div>
                    <div>
                      <h2 className="text-xl font-bold text-white">Kho Tri Thức RAG (Retrieval-Augmented Generation) &amp; AI Copilot</h2>
                      <p className="text-xs sm:text-sm text-slate-400 mt-0.5">
                        Kiến trúc lưu trữ 1.006 chunks dữ liệu từ sổ tay IT nội bộ <code>So-tay-RAG.docx</code> và cơ chế sinh phản hồi có căn cứ (Anti-Hallucination).
                      </p>
                    </div>
                  </div>
                </div>

                {/* Luồng RAG 3 bước */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                  <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 space-y-2">
                    <span className="text-[10px] font-bold text-indigo-400 uppercase tracking-widest block font-mono">BƯỚC 1: TIẾP NHẬN &amp; TÁCH ĐOẠN</span>
                    <h3 className="font-bold text-white text-sm">Chunking &amp; Mã Bài Viết</h3>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      Toàn bộ 179 runbook kỹ thuật được phân rã thành 1.006 chunks lưu tại bảng <code>rag_chunks</code>. Mỗi chunk đều gắn thẻ mã chuẩn hóa (vd: <code>NET-002</code> - Fix VPN, <code>ACC-001</code> - Mở khóa domain, <code>POL-008</code> - Chính sách an toàn thông tin).
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 space-y-2">
                    <span className="text-[10px] font-bold text-purple-400 uppercase tracking-widest block font-mono">BƯỚC 2: TRUY XUẤT LAI HYBRID</span>
                    <h3 className="font-bold text-white text-sm">Fulltext + Vector Semantic</h3>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      Khi nhận câu hỏi từ người dùng hoặc nhân viên bấm "Gợi ý AI", hệ thống thực hiện tìm kiếm kết hợp giữa khớp từ khóa chuyên ngành và độ tương đồng ngữ nghĩa để chọn ra top 3-5 quy trình liên quan nhất.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 space-y-2">
                    <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest block font-mono">BƯỚC 3: TỔNG HỢP CÓ DẪN CHỨNG</span>
                    <h3 className="font-bold text-white text-sm">Grounded Answer &amp; Citation</h3>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      AI bắt buộc phải sinh câu trả lời dựa trên nội dung chunks đã tìm thấy, đính kèm số % độ tự tin (Confidence Score) và mã tài liệu tham chiếu để nhân viên kiểm chứng trước khi nhấn gửi.
                    </p>
                  </div>
                </div>

                {/* Chi tiết 2 tính năng AI phục vụ người dùng & Agent */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-2">
                  <div className="p-5 rounded-xl border border-indigo-500/30 bg-slate-950/70 space-y-3">
                    <h4 className="font-bold text-indigo-300 text-sm flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-indigo-400" />
                      Nút "Gợi Ý AI (AI Copilot)" Trong Chi Tiết Ticket
                    </h4>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Dành riêng cho nhân viên hỗ trợ (Support Agent). Khi mở xem ticket, Agent chỉ cần bấm <strong>"Gợi ý phản hồi AI"</strong>:
                    </p>
                    <ul className="text-xs text-slate-400 space-y-1.5 list-disc pl-4">
                      <li>Hệ thống tự động tra cứu giải pháp trong tài liệu nội bộ.</li>
                      <li>Sinh mẫu phản hồi lịch sự, chuẩn kỹ thuật, từng bước rõ ràng.</li>
                      <li>Hiện huy hiệu độ tự tin (ví dụ: <span className="text-emerald-400 font-bold">96% Tin cậy</span>).</li>
                      <li>Agent có quyền sửa lại câu chữ trước khi gửi chính thức cho người dùng.</li>
                    </ul>
                  </div>

                  <div className="p-5 rounded-xl border border-cyan-500/30 bg-slate-950/70 space-y-3">
                    <h4 className="font-bold text-cyan-300 text-sm flex items-center gap-2">
                      <Bot className="w-4 h-4 text-cyan-400" />
                      Trợ Lý Ảo Chatbot Tự Động (Floating Chat Widget)
                    </h4>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Cửa sổ chat thông minh nằm ở góc dưới bên phải màn hình:
                    </p>
                    <ul className="text-xs text-slate-400 space-y-1.5 list-disc pl-4">
                      <li>Hỗ trợ người dùng tự chẩn đoán nhanh sự cố 24/7 mà không cần chờ nhân sự.</li>
                      <li>Hướng dẫn cách xử lý sự cố wifi, đổi pass, reset thiết bị ngoại vi ngay tức thì.</li>
                      <li>Nếu sự cố phức tạp, Chatbot có nút <strong>"Tạo Ticket Ngay"</strong> với nội dung được tóm tắt sẵn sàng.</li>
                    </ul>
                  </div>
                </div>

              </div>
            </div>
          )}

          {/* TAB 5: Kiến Trúc Hạ Tầng */}
          {activeTab === 'architecture' && (
            <div className="space-y-6 animate-in fade-in duration-300">
              <div className="bg-slate-900/85 backdrop-blur-xl rounded-2xl border border-slate-700/70 shadow-2xl p-6 sm:p-9 space-y-6">
                
                <div className="border-b border-slate-800/80 pb-5">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center">
                      <Server className="w-4 h-4 text-emerald-400" />
                    </div>
                    <div>
                      <h2 className="text-xl font-bold text-white">Kiến Trúc Ngăn Xếp Công Nghệ &amp; Hạ Tầng Container (DevOps)</h2>
                      <p className="text-xs sm:text-sm text-slate-400 mt-0.5">
                        Kiến trúc micro-services đóng gói Docker Compose độc lập, đảm bảo khả năng chịu lỗi và tự hồi phục.
                      </p>
                    </div>
                  </div>
                </div>

                {/* 4 Khối Thành Phần Cốt Lõi */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="p-4 rounded-xl border border-slate-800 bg-slate-950/70 space-y-2">
                    <div className="text-[10px] font-mono font-bold text-cyan-400">CONTAINER 1: REVERSE PROXY</div>
                    <h4 className="font-bold text-white text-sm">Nginx Alpine + SSL</h4>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      Chứng chỉ SSL Let's Encrypt / Certbot, cân bằng tải, nén Gzip level 6 phục vụ static bundle, proxy pass API <code>/api/v1</code> về backend.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl border border-slate-800 bg-slate-950/70 space-y-2">
                    <div className="text-[10px] font-mono font-bold text-indigo-400">CONTAINER 2: APPLICATION API</div>
                    <h4 className="font-bold text-white text-sm">FastAPI Python 3.11</h4>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      Async I/O non-blocking, Uvicorn ASGI server, SQLAlchemy 2.0 AsyncSession, Pydantic v2 data validation, background tasks gửi mail SMTP.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl border border-slate-800 bg-slate-950/70 space-y-2">
                    <div className="text-[10px] font-mono font-bold text-amber-400">CONTAINER 3: DATABASE RELATIONAL</div>
                    <h4 className="font-bold text-white text-sm">MySQL 8.0 Community</h4>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      Lưu trữ toàn bộ Users, Tickets, Comments, SLA Policies, Audit Logs. Tự động index trên các trường trạng thái và thời gian.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl border border-slate-800 bg-slate-950/70 space-y-2">
                    <div className="text-[10px] font-mono font-bold text-rose-400">CONTAINER 4: IN-MEMORY CACHE</div>
                    <h4 className="font-bold text-white text-sm">Redis 7 Alpine</h4>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      Quản lý danh sách đen Token thu hồi (Blacklist JWT), Rate-limit bảo vệ chống Brute-force và cache session đăng nhập tức thời.
                    </p>
                  </div>
                </div>

                {/* Cơ chế Xoay Vòng API Key AI */}
                <div className="p-5 rounded-xl bg-slate-950/80 border border-slate-800 space-y-3">
                  <h3 className="font-bold text-slate-200 text-sm flex items-center gap-2">
                    <RefreshCw className="w-4 h-4 text-emerald-400" />
                    Cơ Chế Xoay Vòng Đa Khóa AI (Multi-Key Rotation Pool)
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Hệ thống tích hợp mô-đun <code>KeyManager</code> độc quyền: Quản lý một cụm danh sách nhiều API Key của Google Gemini, Cohere và Groq. Khi một khóa gặp sự cố chạm hạn mức tần suất (HTTP 429 Too Many Requests) hoặc mạng chập chờn:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1 text-xs">
                    <div className="p-3 bg-slate-900 rounded-lg border border-slate-800 space-y-1">
                      <div className="text-cyan-400 font-bold">1. Tự Động Đổi Khóa</div>
                      <p className="text-slate-400">Chuyển sang API key kế tiếp trong Pool chỉ sau 10ms.</p>
                    </div>
                    <div className="p-3 bg-slate-900 rounded-lg border border-slate-800 space-y-1">
                      <div className="text-indigo-400 font-bold">2. Hồi Phục Quota (Cooldown)</div>
                      <p className="text-slate-400">Tạm khóa key cũ trong 60 giây trước khi đưa lại vào vòng xoay.</p>
                    </div>
                    <div className="p-3 bg-slate-900 rounded-lg border border-slate-800 space-y-1">
                      <div className="text-emerald-400 font-bold">3. Zero-Downtime Fallback</div>
                      <p className="text-slate-400">Nếu mọi model cloud lỗi, kích hoạt bộ phân tích quy tắc nội bộ.</p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          )}

          {/* TAB 6: An Toàn Thông Tin & PII */}
          {activeTab === 'security_pii' && (
            <div className="space-y-6 animate-in fade-in duration-300">
              <div className="bg-slate-900/85 backdrop-blur-xl rounded-2xl border border-slate-700/70 shadow-2xl p-6 sm:p-9 space-y-6">
                
                <div className="border-b border-slate-800/80 pb-5">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-rose-500/20 border border-rose-500/30 flex items-center justify-center">
                      <ShieldCheck className="w-4 h-4 text-rose-400" />
                    </div>
                    <div>
                      <h2 className="text-xl font-bold text-white">An Toàn Thông Tin, Che Mờ PII &amp; Kiểm Soát Truy Cập RBAC</h2>
                      <p className="text-xs sm:text-sm text-slate-400 mt-0.5">
                        Bảo đảm quyền riêng tư tuyệt đối cho khách hàng và tuân thủ các quy định bảo vệ dữ liệu doanh nghiệp.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {/* PII Masker */}
                  <div className="p-5 rounded-xl border border-slate-800 bg-slate-950/70 space-y-3">
                    <h3 className="font-bold text-rose-300 text-sm flex items-center gap-2">
                      <Lock className="w-4 h-4 text-rose-400" />
                      Mô-đun Khử Khuẩn PII (PIIMasker Engine)
                    </h3>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Mọi nội dung ticket, tiêu đề và bình luận trước khi được chuyển đến bất kỳ mô hình AI nào đều bắt buộc đi qua bộ lọc Regex của <code>PIIMasker</code>:
                    </p>
                    <ul className="text-xs text-slate-400 space-y-2 list-disc pl-4 leading-relaxed">
                      <li><strong>Số điện thoại:</strong> <code>0912345678</code> ➔ Tự động biến đổi thành <code>[PHONE_REDACTED]</code>.</li>
                      <li><strong>Địa chỉ Email cá nhân:</strong> <code>user@gmail.com</code> ➔ Tự động biến đổi thành <code>[EMAIL_REDACTED]</code>.</li>
                      <li><strong>Mật khẩu / Token bí mật:</strong> Các chuỗi hash, OTP, Access Token tự động bị bóc tách và loại bỏ.</li>
                      <li>Dữ liệu gốc chỉ được lưu mã hóa trong Database nội bộ, máy chủ AI không thể học hay thu thập thông tin cá nhân.</li>
                    </ul>
                  </div>

                  {/* RBAC 4 Cấp Độ */}
                  <div className="p-5 rounded-xl border border-slate-800 bg-slate-950/70 space-y-3">
                    <h3 className="font-bold text-indigo-300 text-sm flex items-center gap-2">
                      <Users className="w-4 h-4 text-indigo-400" />
                      Phân Quyền Vai Trò 4 Cấp (RBAC Matrix)
                    </h3>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Hệ thống kiểm tra Token JWT kèm vai trò tại từng API endpoint (Role-Based Access Control):
                    </p>
                    <div className="space-y-2 text-xs">
                      <div className="p-2 rounded bg-slate-900 border border-slate-800">
                        <span className="font-bold text-red-400">ADMIN:</span> Toàn quyền cấu hình AI settings, quản lý nhân viên, xóa ticket, thiết lập SLA policies.
                      </div>
                      <div className="p-2 rounded bg-slate-900 border border-slate-800">
                        <span className="font-bold text-amber-400">TEAM_LEAD:</span> Phân công lại ticket, duyệt chuyển cấp, theo dõi báo cáo hiệu suất toàn đội ngũ.
                      </div>
                      <div className="p-2 rounded bg-slate-900 border border-slate-800">
                        <span className="font-bold text-indigo-400">SUPPORT_AGENT (L1/L2):</span> Nhận và xử lý ticket được gán, dùng AI Copilot, viết ghi chú nội bộ.
                      </div>
                      <div className="p-2 rounded bg-slate-900 border border-slate-800">
                        <span className="font-bold text-emerald-400">REQUESTER (User):</span> Chỉ xem và phản hồi các ticket do chính bản thân tạo, tra cứu FAQ và chat với bot.
                      </div>
                    </div>
                  </div>
                </div>

                {/* Cơ Chế Bảo Vệ Mã Nguồn & Token Blacklist */}
                <div className="p-5 rounded-xl bg-slate-950/80 border border-slate-800 space-y-3">
                  <h3 className="font-bold text-slate-200 text-sm flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    Cơ Chế Thu Hồi Phiên JWT (Redis Blacklist) &amp; Bảo Vệ GitHub
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-slate-300">
                    <div className="space-y-1">
                      <span className="font-semibold text-white">1. Hủy Phiên Tức Thì (Instant Token Revocation):</span>
                      <p className="text-slate-400 leading-relaxed">
                        Khác với JWT truyền thống không thể thu hồi trước khi hết hạn, hệ thống lưu token đã đăng xuất vào Redis Blacklist với TTL bằng đúng thời hạn sống còn lại của token. Bất kỳ request nào mang token trong blacklist đều bị chặn ngay lập tức.
                      </p>
                    </div>
                    <div className="space-y-1">
                      <span className="font-semibold text-white">2. Push Protection Chống Lộ Bí Mật:</span>
                      <p className="text-slate-400 leading-relaxed">
                        Toàn bộ API Key, thông tin database thực và file cấu hình mật đều được bảo vệ trong biến môi trường và file <code>.gitignore</code>, tự động thay thế bằng dữ liệu mẫu an toàn trước khi đẩy lên kho mã nguồn.
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          )}

        </main>

        {/* Footer */}
        <footer className="border-t border-slate-800/80 bg-slate-950/80 backdrop-blur-xl py-6 px-4 text-center text-xs text-slate-400 mt-auto shadow-2xl">
          <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>CSKH IT Service Desk &copy; 2026 • Hệ Thống Hỗ Trợ Kỹ Thuật Độc Lập</span>
            </div>
            <div className="text-[11px] text-slate-500 font-mono">
              Trang kỹ thuật nội bộ • Truy cập bảo mật trực tiếp
            </div>
          </div>
        </footer>

      </div>
    </div>
  );
}
