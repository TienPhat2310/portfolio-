import { Download, Terminal, Shield, ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="min-h-[90vh] flex flex-col justify-center py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Column - Intro */}
        <div className="flex flex-col items-start">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-accent/30 bg-accent/10 text-accent text-sm font-[family-name:var(--font-mono)] mb-6">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
            SOC Intern & Cybersecurity Student
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight text-text">
            Securing systems,
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-warm">
              one log at a time.
            </span>
          </h1>
          
          <p className="mt-6 max-w-xl text-muted text-lg leading-relaxed">
            Thực hành SIEM (Wazuh, KUMA), tự động hoá phản ứng sự cố với n8n, 
            và đang hoàn thiện đồ án tốt nghiệp về phân loại lỗi mạng SDN bằng AI.
          </p>
          
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-black hover:opacity-90 hover:scale-105 transition-all shadow-[0_0_20px_rgba(57,255,136,0.4)] flex items-center gap-2"
            >
              Xem Projects <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#contact"
              className="rounded-full border border-border bg-surface/40 backdrop-blur-md px-6 py-3 text-sm font-semibold hover:border-accent hover:shadow-[0_0_15px_rgba(57,255,136,0.15)] transition-all flex items-center gap-2"
            >
              Liên hệ
            </a>
            <a
              href="/CV_NguyenTienPhat.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-border bg-surface/40 backdrop-blur-md px-6 py-3 text-sm font-semibold hover:border-accent hover:shadow-[0_0_15px_rgba(57,255,136,0.15)] transition-all flex items-center gap-2 group"
            >
              <Download className="w-4 h-4 group-hover:text-accent transition-colors" />
              Tải CV
            </a>
          </div>
        </div>

        {/* Right Column - Bento Grid Cards */}
        <div className="grid grid-cols-2 gap-4">
          <div className="col-span-2 bg-surface/40 backdrop-blur-md border border-border rounded-2xl p-6 hover:border-accent/40 hover:shadow-[0_0_15px_rgba(57,255,136,0.1)] transition-all">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-accent/20 to-accent-warm/20 border border-accent/30 flex items-center justify-center">
                <Terminal className="text-accent w-8 h-8" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-text">Nguyễn Văn Tiến Phát</h3>
                <p className="text-muted font-[family-name:var(--font-mono)] text-sm">SOC Analyst / Security Engineer</p>
              </div>
            </div>
            <p className="text-sm text-muted">
              Đam mê giám sát an toàn thông tin, phân tích log và tự động hoá quy trình (SOAR).
            </p>
          </div>

          <div className="bg-surface/40 backdrop-blur-md border border-border rounded-2xl p-6 flex flex-col justify-between hover:border-accent/40 hover:shadow-[0_0_15px_rgba(57,255,136,0.1)] transition-all group">
            <p className="text-xs text-muted uppercase tracking-wider mb-2 font-[family-name:var(--font-mono)]">Focus</p>
            <h4 className="text-lg font-bold text-text group-hover:text-accent transition-colors">Security & Systems</h4>
            <Shield className="w-6 h-6 text-muted mt-4 opacity-50" />
          </div>

          <div className="bg-surface/40 backdrop-blur-md border border-border rounded-2xl p-6 flex flex-col justify-between hover:border-accent/40 hover:shadow-[0_0_15px_rgba(57,255,136,0.1)] transition-all group">
            <p className="text-xs text-muted uppercase tracking-wider mb-2 font-[family-name:var(--font-mono)]">Academic</p>
            <h4 className="text-lg font-bold text-text group-hover:text-accent-warm transition-colors">GPA: 3.12/4.0</h4>
            <p className="text-sm text-muted mt-2">Senior Year, HUFLIT</p>
          </div>
        </div>

      </div>
    </section>
  );
}
