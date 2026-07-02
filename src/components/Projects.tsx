import React from "react";
import { ArrowUpRight } from "lucide-react";
import TiltCard from "./TiltCard";

const projects = [
  {
    title: "Enterprise SOC Integration — pfSense + Suricata + Wazuh + n8n",
    description: "Đồ án cuối kỳ: Thiết kế và triển khai hệ thống giám sát an toàn thông tin doanh nghiệp, tích hợp tường lửa pfSense, IDS/IPS Suricata, Wazuh SIEM và tự động hoá quy trình phản ứng sự cố (SOAR) qua n8n cảnh báo Telegram.",
    tags: ["pfSense", "Suricata", "Wazuh SIEM", "n8n SOAR"],
    category: "SYSTEM & SECURITY",
    gradient: "from-emerald-500/20 to-teal-900/40",
    borderGlow: "hover:border-emerald-500/50 hover:shadow-[0_0_30px_rgba(16,185,129,0.15)]",
    textHover: "group-hover:text-emerald-400",
    glareColor: "color-mix(in srgb, #10b981 15%, transparent)",
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
  {
    title: "SDN Network Fault Detection — ML & Data Engineering",
    description: "Khóa luận tốt nghiệp: Xây dựng hệ thống thu thập và chuẩn hóa log mạng SDN doanh nghiệp, phân loại tự động 7 kịch bản lỗi (DDoS, Lỗi phần cứng, Môi trường...) bằng Machine Learning (Random Forest) với độ chính xác 99.43%.",
    tags: ["SDN", "Python", "Data Engineering", "Machine Learning"],
    category: "AI/ML & SYSTEM",
    gradient: "from-purple-500/20 to-pink-900/40",
    borderGlow: "hover:border-purple-500/50 hover:shadow-[0_0_30px_rgba(168,85,247,0.15)]",
    textHover: "group-hover:text-purple-400",
    glareColor: "color-mix(in srgb, #a855f7 15%, transparent)",
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <TiltCard
            key={index}
            glareColor={project.glareColor}
            className={`group flex flex-col rounded-3xl border border-border bg-white/60 dark:bg-surface/40 backdrop-blur-3xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${project.borderGlow} overflow-hidden cursor-pointer shadow-[0_8px_30px_rgba(0,0,0,0.02)] dark:shadow-none`}
          >
            {/* Image Placeholder with Gradient */}
            <div className={`h-48 w-full bg-gradient-to-br ${project.gradient} relative overflow-hidden border-b border-border/50`}>
              <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
              <div className="absolute top-4 right-4 bg-white/80 dark:bg-black/40 backdrop-blur-xl p-2 rounded-full border border-border dark:border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                <ArrowUpRight className="w-5 h-5 text-text" />
              </div>
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
                    className="px-3 py-1.5 text-xs font-medium text-muted bg-white/70 dark:bg-black/30 border border-black/5 dark:border-white/5 rounded-md backdrop-blur-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </TiltCard>
        ))}
      </div>
    </section>
  );
}
