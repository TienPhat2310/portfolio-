import React from "react";
import { Search, Zap, BrainCircuit, Globe } from "lucide-react";

const skillsData = [
  {
    title: "SIEM & Phân tích Log",
    description: "Triển khai, cấu hình và giám sát trên nền tảng Wazuh và KUMA. Xây dựng rules để phát hiện bất thường.",
    icon: <Search className="w-8 h-8 text-emerald-400" />,
    className: "md:col-span-2",
    gradient: "from-emerald-500/10 to-transparent",
    borderGlow: "hover:border-emerald-500/50 hover:shadow-[0_0_30px_rgba(16,185,129,0.15)]",
  },
  {
    title: "Tự động hóa SOAR",
    description: "Xây dựng luồng phản ứng sự cố (Incident Response) tự động bằng n8n kết nối API các hệ thống.",
    icon: <Zap className="w-8 h-8 text-yellow-400" />,
    className: "md:col-span-1",
    gradient: "from-yellow-500/10 to-transparent",
    borderGlow: "hover:border-yellow-500/50 hover:shadow-[0_0_30px_rgba(234,179,8,0.15)]",
  },
  {
    title: "AI trong Bảo mật",
    description: "Nghiên cứu ứng dụng Machine Learning phân loại lỗi mạng SDN, phát hiện tấn công DDoS.",
    icon: <BrainCircuit className="w-8 h-8 text-purple-400" />,
    className: "md:col-span-1",
    gradient: "from-purple-500/10 to-transparent",
    borderGlow: "hover:border-purple-500/50 hover:shadow-[0_0_30px_rgba(168,85,247,0.15)]",
  },
  {
    title: "Network Security",
    description: "Kiến trúc SDN, cấu hình firewall, giám sát network traffic và packet analysis.",
    icon: <Globe className="w-8 h-8 text-blue-400" />,
    className: "md:col-span-2",
    gradient: "from-blue-500/10 to-transparent",
    borderGlow: "hover:border-blue-500/50 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]",
  },
];

const techStack = [
  "Linux", "Bash", "Python", "Wazuh", "KUMA", "n8n", "Machine Learning", "Wireshark", "Docker"
];

export default function Skills() {
  return (
    <section id="skills" className="py-24">
      <div className="flex flex-col items-center mb-16">
        <p className="font-[family-name:var(--font-mono)] px-4 py-1.5 rounded-full border border-white/10 bg-surface/20 backdrop-blur-3xl text-accent text-sm tracking-widest mb-6">
          EXPERTISE
        </p>
        <h2 className="text-4xl md:text-5xl font-bold text-center">Kỹ năng chuyên môn</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {skillsData.map((skill, index) => (
          <div
            key={index}
            className={`relative p-8 rounded-3xl border border-white/10 bg-surface/40 backdrop-blur-3xl overflow-hidden transition-all duration-500 hover:-translate-y-1 ${skill.className} ${skill.borderGlow} hover:border-white/20 group`}
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${skill.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
            
            <div className="relative z-10">
              <div className="mb-6 p-3 bg-black/30 rounded-xl w-fit border border-white/5 backdrop-blur-sm shadow-inner group-hover:scale-110 transition-transform duration-300">
                {skill.icon}
              </div>
              <h3 className="text-2xl font-bold mb-3 text-text">{skill.title}</h3>
              <p className="text-muted text-base leading-relaxed">{skill.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Tech Stack tags */}
      <div className="p-8 rounded-3xl border border-white/10 bg-surface/40 backdrop-blur-3xl relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent opacity-20"></div>
        <h3 className="font-[family-name:var(--font-mono)] text-accent/80 text-sm mb-6 flex items-center gap-2">
          <span className="text-muted">❯</span> tech_stack.json
        </h3>
        <div className="flex flex-wrap gap-3">
          {techStack.map((tech, index) => (
            <span
              key={index}
              className="px-4 py-2 bg-black/40 border border-white/5 text-muted text-sm font-medium rounded-lg hover:border-accent/50 hover:text-accent hover:shadow-lg hover:-translate-y-0.5 transition-all cursor-default backdrop-blur-md"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
