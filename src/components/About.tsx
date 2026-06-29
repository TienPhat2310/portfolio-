export default function About() {
  return (
    <section id="about" className="py-24">
      <div className="flex flex-col lg:flex-row gap-12 w-full items-center">
        
        {/* Left Column - Text */}
        <div className="flex-1">
          <p className="font-[family-name:var(--font-mono)] px-4 py-1.5 rounded-full border border-white/10 bg-surface/20 backdrop-blur-3xl text-accent text-sm tracking-widest w-fit mb-6">
            ABOUT ME
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Behind the <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-warm">screens</span>
          </h2>
          <div className="space-y-6 text-muted text-base md:text-lg leading-relaxed bg-surface/30 backdrop-blur-3xl border border-white/5 rounded-3xl p-8">
            <p>
              Chào bạn, mình là <span className="text-text font-bold">Nguyễn Văn Tiến Phát</span>. 
              Sinh viên năm cuối ngành An toàn thông tin tại HUFLIT, hiện đang là <span className="text-accent-warm font-bold">SOC Intern</span>.
            </p>
            <p>
              Đam mê lớn nhất của mình là phân tích log, phát hiện các mối đe dọa (Threat Detection) và tối ưu hóa quy trình phản ứng sự cố (Incident Response). Mình có kinh nghiệm triển khai và vận hành các nền tảng SIEM như <strong className="text-text">Wazuh</strong>, <strong className="text-text">KUMA</strong> và xây dựng các playbook tự động hóa bằng <strong className="text-text">n8n</strong>.
            </p>
            <p>
              Hiện tại, mình đang tập trung hoàn thành đồ án tốt nghiệp với đề tài <span className="text-accent italic font-medium">"Phân loại lỗi mạng SDN bằng AI"</span> — một sự kết hợp thú vị giữa bảo mật mạng Software-Defined Networking và Machine Learning.
            </p>
          </div>
        </div>

        {/* Right Column - Glass Terminal */}
        <div className="flex-1 w-full max-w-md lg:max-w-none">
          <div className="rounded-3xl border border-white/10 bg-surface/40 backdrop-blur-3xl overflow-hidden shadow-lg hover:shadow-xl hover:border-white/20 hover:-translate-y-2 transition-all duration-500 relative group">
            
            {/* Terminal Header */}
            <div className="flex items-center px-4 py-3 border-b border-white/5 bg-black/20">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80 shadow-[0_0_10px_rgba(239,68,68,0.5)]"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/80 shadow-[0_0_10px_rgba(234,179,8,0.5)]"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/80 shadow-[0_0_10px_rgba(34,197,94,0.5)]"></div>
              </div>
              <p className="ml-4 text-xs font-[family-name:var(--font-mono)] text-muted/70">guest@portfolio: ~</p>
            </div>
            
            {/* Terminal Body */}
            <div className="p-8 font-[family-name:var(--font-mono)] text-sm space-y-6 relative z-10">
              <div className="opacity-90">
                <span className="text-accent mr-2">❯</span><span className="text-text font-medium">whoami</span>
                <p className="text-muted mt-2 ml-4">nguyen_van_tien_phat</p>
              </div>
              
              <div className="opacity-90">
                <span className="text-accent mr-2">❯</span><span className="text-text font-medium">uptime</span>
                <p className="text-muted mt-2 ml-4">21 years up, studying cybersecurity</p>
              </div>
              
              <div className="opacity-90">
                <span className="text-accent mr-2">❯</span><span className="text-text font-medium">cat /var/log/interests.log</span>
                <div className="text-accent-warm mt-2 ml-4 leading-relaxed space-y-1">
                  <p className="flex items-center gap-2"><span className="text-muted text-xs">[INFO]</span> SIEM Architecture & Rules</p>
                  <p className="flex items-center gap-2"><span className="text-muted text-xs">[INFO]</span> Incident Response Automation</p>
                  <p className="flex items-center gap-2"><span className="text-muted text-xs">[INFO]</span> ML applied in SDN Security</p>
                </div>
              </div>
              
              <div className="flex items-center mt-4">
                <span className="text-accent mr-2">❯</span><span className="w-2.5 h-5 bg-accent animate-pulse block shadow-lg"></span>
              </div>
            </div>
            
            {/* Ambient Glow inside terminal */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none group-hover:bg-accent/10 transition-colors duration-500"></div>
          </div>
        </div>

      </div>
    </section>
  );
}
