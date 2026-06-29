import React from "react";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "SOC Lab — pfSense + Suricata + Wazuh + n8n",
    description: "Hệ thống lab tự xây, tích hợp IDS (Suricata), SIEM (Wazuh), tự động hoá phản ứng sự cố qua n8n và cảnh báo Telegram.",
    tags: ["pfSense", "Suricata", "Wazuh", "n8n"],
    category: "SYSTEM",
    gradient: "from-emerald-500/20 to-teal-900/40",
    borderGlow: "group-hover:border-emerald-500/50",
  },
  {
    title: "KUMA SIEM — Web Attack Detection",
    description: "Triển khai KUMA SIEM tại DTG Corp, viết 5 correlation rules phát hiện tấn công web, soạn IRM playbook theo NIST SP 800-61r2.",
    tags: ["KUMA SIEM", "Linux", "NIST"],
    category: "CYBERSECURITY",
    gradient: "from-blue-500/20 to-indigo-900/40",
    borderGlow: "group-hover:border-blue-500/50",
  },
  {
    title: "SDN Network Fault Detection — ML & Data Engineering",
    description: "Khóa luận tốt nghiệp: Xây dựng hệ thống thu thập và chuẩn hóa log mạng SDN doanh nghiệp, phân loại tự động 7 kịch bản lỗi (DDoS, Lỗi phần cứng, Môi trường...) bằng Machine Learning (Random Forest) với độ chính xác 99.43%.",
    tags: ["SDN", "Python", "Data Engineering", "Machine Learning"],
    category: "AI/ML & SYSTEM",
    gradient: "from-purple-500/20 to-pink-900/40",
    borderGlow: "group-hover:border-purple-500/50",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="flex flex-col items-center mb-16">
        <p className="font-[family-name:var(--font-mono)] px-4 py-1.5 rounded-full border border-border bg-surface  text-accent text-sm tracking-widest mb-6">
          PROJECTS
        </p>
        <h2 className="text-4xl md:text-5xl font-bold text-center">Featured Work</h2>
        <p className="text-muted mt-4 text-center">Một số dự án tiêu biểu trong quá trình học tập và làm việc</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`group flex flex-col rounded-3xl border border-border bg-surface  transition-all duration-500 hover:-translate-y-2  hover:border-border ${project.borderGlow} overflow-hidden cursor-pointer`}
          >
            {/* Image Placeholder with Gradient */}
            <div className={`h-48 w-full bg-gradient-to-br ${project.gradient} relative overflow-hidden border-b border-border/50`}>
              <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
              <div className="absolute top-4 right-4 bg-surface  p-2 rounded-full border border-border opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                <ArrowUpRight className="w-5 h-5 text-white" />
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
              
              <h3 className="text-xl font-bold mb-3 text-text group-hover:text-accent transition-colors duration-300">
                {project.title}
              </h3>
              
              <p className="text-muted text-sm leading-relaxed mb-6 flex-1">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mt-auto pt-4">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-3 py-1.5 text-xs font-medium text-muted bg-surface border border-border rounded-md "
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
