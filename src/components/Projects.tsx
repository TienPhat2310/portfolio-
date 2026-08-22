import React from "react";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import TiltCard from "./TiltCard";

const projects = [
  {
    title: "SOC Monitoring & Security Automation",
    description: "Xây dựng môi trường SOC thực hành để giám sát sự kiện mạng, tập trung log, phát hiện mối đe dọa và tự động hóa cảnh báo sự cố với pfSense, Suricata, Wazuh SIEM và n8n.",
    tags: ["pfSense", "Suricata", "Wazuh SIEM", "n8n SOAR"],
    category: "SYSTEM & SECURITY",
    gradient: "from-emerald-500/20 to-teal-900/40",
    borderGlow: "hover:border-emerald-500/50 hover:shadow-[0_0_30px_rgba(16,185,129,0.15)]",
    textHover: "group-hover:text-emerald-400",
    glareColor: "color-mix(in srgb, #10b981 15%, transparent)",
    link: "https://youtu.be/oZpSPreHq7I?si=KCANn2dBY9n0ZtlD",
  },
  {
    title: "Kaspersky KUMA SIEM & SOAR Integration",
    description: "Kinh nghiệm thực tế (SOC Intern): Triển khai hệ thống SIEM doanh nghiệp (Kaspersky KUMA), cấu hình agent thu thập log Web Server, xây dựng 5 quy tắc tương quan phát hiện tấn công (SQLi, Web Shell) và tích hợp luồng tự động phản ứng (n8n) & nền tảng điều tra DFIR-IRIS theo tiêu chuẩn NIST SP 800-61r2.",
    tags: ["KUMA SIEM", "n8n SOAR", "DFIR-IRIS", "NIST"],
    category: "CYBERSECURITY",
    gradient: "from-blue-500/20 to-indigo-900/40",
    borderGlow: "hover:border-blue-500/50 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]",
    textHover: "group-hover:text-blue-400",
    glareColor: "color-mix(in srgb, #3b82f6 15%, transparent)",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="flex flex-col items-center mb-16">
        <p className="font-[family-name:var(--font-mono)] px-4 py-1.5 rounded-full border border-border bg-surface/20 backdrop-blur-3xl text-accent text-sm tracking-widest mb-6">
          PROJECTS
        </p>
        <h2 className="text-4xl md:text-5xl font-bold text-center">Featured Work</h2>
        <p className="text-muted mt-4 text-center">Một số dự án tiêu biểu trong quá trình học tập và làm việc</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {projects.map((project, index) => {
          const card = (
            <TiltCard
              glareColor={project.glareColor}
              className={`group h-full flex flex-col rounded-3xl border border-border bg-white dark:bg-surface/40 backdrop-blur-3xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${project.borderGlow} overflow-hidden ${project.link ? 'cursor-pointer' : ''} shadow-[0_8px_30px_rgba(0,0,0,0.02)] dark:shadow-none`}
            >
              {/* Image Placeholder with Gradient */}
              <div className={`h-48 w-full bg-gradient-to-br ${project.gradient} relative overflow-hidden border-b border-border/50`}>
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
                {project.link && (
                  <div className="absolute top-4 right-4 bg-white/80 dark:bg-black/40 backdrop-blur-xl p-2 rounded-full border border-border dark:border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <ArrowUpRight className="w-5 h-5 text-text" />
                  </div>
                )}
              </div>

              <div className="p-6 flex flex-col flex-1">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-xs font-bold tracking-widest text-muted font-[family-name:var(--font-mono)]">
                    {project.category}
                  </span>
                  <span className="text-xs font-bold tracking-widest text-muted font-[family-name:var(--font-mono)]">
                    PRIVATE
                  </span>
                </div>
                
                <h3 className={`text-xl font-bold mb-3 text-text ${project.textHover} transition-colors duration-300`}>
                  {project.title}
                </h3>
                
                <p className="text-muted text-sm leading-relaxed mb-6 flex-1">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mt-auto pt-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1.5 text-xs font-medium text-slate-700 dark:text-muted bg-slate-100 dark:bg-black/30 border border-slate-200 dark:border-white/5 rounded-md backdrop-blur-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </TiltCard>
          );

          return project.link ? (
            <a key={index} href={project.link} target="_blank" rel="noopener noreferrer" className="block h-full outline-none">
              {card}
            </a>
          ) : (
            <div key={index} className="block h-full">
              {card}
            </div>
          );
        })}
      </div>

      {/* Featured AI/ML Project - Full Width */}
      <div className="relative overflow-hidden style-3d flex flex-col rounded-3xl border border-border bg-white dark:bg-surface/40 backdrop-blur-3xl transition-all duration-500 shadow-[0_8px_30px_rgba(0,0,0,0.02)] dark:shadow-none mt-12 w-full">
        <div className="p-8 md:p-10 flex flex-col gap-8 relative z-10">
          {/* Header */}
          <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-start md:items-center border-b border-border/50 pb-8">
            {/* Paper Badge */}
            <div className="flex-shrink-0 flex flex-col items-center justify-center w-24 h-28 bg-gradient-to-b from-slate-800 to-black rounded-xl border border-white/10 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 w-full bg-accent/20 text-accent text-[10px] font-bold tracking-widest text-center py-1">EIDT</div>
              <div className="text-4xl font-bold text-white mt-4">26</div>
            </div>
            {/* Info */}
            <div className="flex-1">
              <h3 className="text-2xl md:text-3xl font-bold mb-3 text-text">
                Ablation-Aware Operational Anomaly Detection in Controlled SDN Logs Using Temporal Neural Models
              </h3>
              <p className="text-muted text-sm leading-relaxed mb-4">
                Accepted conference paper in AI-driven log intelligence, temporal neural modeling, and operational anomaly detection.
                <br />
                <strong className="text-text mt-1 inline-block">Authors:</strong> ThS. Cao Tiến Thành, Phạm Quốc Huy, Nguyễn Văn Tiến Phát, PGS.TS. Trần Mạnh Hà, TS. Trần Thị Minh Khoa
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1.5 text-xs font-medium text-slate-700 dark:text-muted bg-slate-100 dark:bg-black/30 border border-slate-200 dark:border-white/5 rounded-md backdrop-blur-md">SDN Logs</span>
                <span className="px-3 py-1.5 text-xs font-medium text-slate-700 dark:text-muted bg-slate-100 dark:bg-black/30 border border-slate-200 dark:border-white/5 rounded-md backdrop-blur-md">Data Engineering</span>
                <span className="px-3 py-1.5 text-xs font-medium text-slate-700 dark:text-muted bg-slate-100 dark:bg-black/30 border border-slate-200 dark:border-white/5 rounded-md backdrop-blur-md">Anomaly Detection</span>
              </div>
            </div>
          </div>
          
          {/* Pipeline Architecture */}
          <div className="bg-black/5 dark:bg-black/40 rounded-2xl p-6 border border-border/50">
            <div className="flex justify-between items-center mb-6">
              <div className="text-xs font-bold tracking-widest text-accent font-[family-name:var(--font-mono)]">
                ARCHITECTURE
              </div>
              <div className="text-xs text-muted font-[family-name:var(--font-mono)] hidden sm:block">
                Data engineering pipeline
              </div>
            </div>
            
            <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
              <div className="flex flex-col items-center lg:items-start p-4 bg-surface/50 border border-border/50 rounded-xl w-full lg:w-auto flex-1 text-center lg:text-left">
                <span className="text-[10px] uppercase text-muted tracking-widest mb-1 font-[family-name:var(--font-mono)]">INFRASTRUCTURE</span>
                <strong className="text-text text-sm">Mininet & POX</strong>
              </div>
              <ArrowRight className="w-5 h-5 text-muted hidden lg:block flex-shrink-0" />
              <ArrowRight className="w-5 h-5 text-muted block lg:hidden rotate-90 flex-shrink-0" />

              <div className="flex flex-col items-center lg:items-start p-4 bg-surface/50 border border-border/50 rounded-xl w-full lg:w-auto flex-1 text-center lg:text-left">
                <span className="text-[10px] uppercase text-muted tracking-widest mb-1 font-[family-name:var(--font-mono)]">NETWORK NODE</span>
                <strong className="text-text text-sm">Open vSwitch</strong>
              </div>
              <ArrowRight className="w-5 h-5 text-muted hidden lg:block flex-shrink-0" />
              <ArrowRight className="w-5 h-5 text-muted block lg:hidden rotate-90 flex-shrink-0" />

              <div className="flex flex-col items-center lg:items-start p-4 bg-surface/50 border border-border/50 rounded-xl w-full lg:w-auto flex-1 text-center lg:text-left">
                <span className="text-[10px] uppercase text-muted tracking-widest mb-1 font-[family-name:var(--font-mono)]">COLLECTION</span>
                <strong className="text-text text-sm">sdn_collector</strong>
              </div>
              <ArrowRight className="w-5 h-5 text-muted hidden lg:block flex-shrink-0" />
              <ArrowRight className="w-5 h-5 text-muted block lg:hidden rotate-90 flex-shrink-0" />

              <div className="flex flex-col items-center lg:items-start p-4 bg-surface/50 border border-border/50 rounded-xl w-full lg:w-auto flex-1 text-center lg:text-left">
                <span className="text-[10px] uppercase text-muted tracking-widest mb-1 font-[family-name:var(--font-mono)]">PREPROCESSING</span>
                <strong className="text-text text-sm">Log Normalization</strong>
              </div>
              <ArrowRight className="w-5 h-5 text-muted hidden lg:block flex-shrink-0" />
              <ArrowRight className="w-5 h-5 text-muted block lg:hidden rotate-90 flex-shrink-0" />

              <div className="flex flex-col items-center lg:items-start p-4 border border-accent/30 bg-accent/10 rounded-xl w-full lg:w-auto flex-1 text-center lg:text-left">
                <span className="text-[10px] uppercase text-accent tracking-widest mb-1 font-[family-name:var(--font-mono)]">OUTPUT</span>
                <strong className="text-text text-sm">SDN Datasets</strong>
              </div>
            </div>
          </div>

          {/* Project Proof */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-4">
            <div className="lg:col-span-2">
              <h4 className="text-xs font-bold tracking-widest text-muted font-[family-name:var(--font-mono)] mb-6">WHAT I BUILT (DATA ENGINEERING)</h4>
              <ul className="space-y-6">
                <li className="flex gap-4 items-start">
                  <span className="text-accent font-mono text-sm mt-0.5 font-bold">01</span>
                  <div>
                    <strong className="text-text text-sm block mb-1">Mô phỏng mạng SDN</strong>
                    <span className="text-muted text-sm">Thiết kế Topology Tree (depth=3, fanout=2) trên Mininet, kết nối POX Controller, thiết lập giả lập môi trường mạng phức tạp.</span>
                  </div>
                </li>
                <li className="flex gap-4 items-start">
                  <span className="text-accent font-mono text-sm mt-0.5 font-bold">02</span>
                  <div>
                    <strong className="text-text text-sm block mb-1">Kịch bản lỗi (Fault Injection)</strong>
                    <span className="text-muted text-sm">Xây dựng kịch bản giả lập 7 tình huống: DDoS, Lỗi phần cứng, Rớt kết nối Controller, Tràn bảng Flow, Đứt liên kết...</span>
                  </div>
                </li>
                <li className="flex gap-4 items-start">
                  <span className="text-accent font-mono text-sm mt-0.5 font-bold">03</span>
                  <div>
                    <strong className="text-text text-sm block mb-1">Chuẩn hóa & Tiền xử lý Log</strong>
                    <span className="text-muted text-sm">Phát triển script lọc nhiễu, chống spam log, trích xuất đặc trưng mạng từ Open vSwitch thô sang định dạng chuẩn mực (Data Cleaning).</span>
                  </div>
                </li>
                <li className="flex gap-4 items-start">
                  <span className="text-accent font-mono text-sm mt-0.5 font-bold">04</span>
                  <div>
                    <strong className="text-text text-sm block mb-1">Xuất bản Dataset</strong>
                    <span className="text-muted text-sm">Hoàn thiện bộ dữ liệu chuẩn mực gần 300,000 dòng (Multi-class và Binary CSV/JSON) phục vụ trực tiếp cho việc huấn luyện mô hình AI học sâu (TCN).</span>
                  </div>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-bold tracking-widest text-muted font-[family-name:var(--font-mono)] mb-6">DEMO</h4>
              <a href="https://youtu.be/J-vdjccoH8g?si=wwlyS6QipLsHxxdy" target="_blank" rel="noopener noreferrer" className="w-full inline-flex justify-center items-center gap-2 rounded-xl border border-border bg-surface/50 hover:bg-surface/80 backdrop-blur-3xl px-6 py-4 text-sm font-semibold hover:border-white/20 hover:shadow-lg transition-all text-text group">
                  Watch Project Demo <ArrowUpRight className="w-4 h-4 text-muted group-hover:text-text transition-colors"/>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
