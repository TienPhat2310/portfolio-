"use client";
import { Download, Terminal, Shield, ArrowRight } from "lucide-react";
import { motion, Variants } from "framer-motion";

export default function Hero() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="home" className="min-h-[90vh] flex flex-col justify-center py-20 relative overflow-hidden">
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10"
      >
        
        {/* Left Column - Intro */}
        <div className="flex flex-col items-start">
          <motion.div 
            variants={itemVariants} 
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-accent/30 bg-accent/10 text-accent text-sm font-[family-name:var(--font-mono)] mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
            SOC Intern & Cybersecurity Student
          </motion.div>
          
          <motion.h1 
            variants={itemVariants} 
            className="text-5xl md:text-7xl font-bold leading-tight tracking-tight text-text"
          >
            Securing systems,
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-warm">
              one log at a time.
            </span>
          </motion.h1>
          
          <motion.p 
            variants={itemVariants} 
            className="mt-6 max-w-xl text-muted text-lg leading-relaxed"
          >
            Thực hành SIEM (Wazuh, KUMA), tự động hoá phản ứng sự cố với n8n, 
            và đang hoàn thiện đồ án tốt nghiệp về phân loại lỗi mạng SDN bằng AI.
          </motion.p>
          
          <motion.div 
            variants={itemVariants} 
            className="mt-10 flex flex-wrap gap-4"
          >
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#projects"
              className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-black hover:opacity-90 transition-all shadow-[0_0_20px_rgba(57,255,136,0.4)] flex items-center gap-2"
            >
              Xem Projects <ArrowRight className="w-4 h-4" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="rounded-full border border-border bg-surface/40 backdrop-blur-md px-6 py-3 text-sm font-semibold hover:border-accent hover:shadow-[0_0_15px_rgba(57,255,136,0.15)] transition-all flex items-center gap-2"
            >
              Liên hệ
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/Nguyen_Van_Tien_Phat_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-border bg-surface/40 backdrop-blur-md px-6 py-3 text-sm font-semibold hover:border-accent hover:shadow-[0_0_15px_rgba(57,255,136,0.15)] transition-all flex items-center gap-2 group"
            >
              <Download className="w-4 h-4 group-hover:text-accent transition-colors" />
              Tải CV
            </motion.a>
          </motion.div>
        </div>

        {/* Right Column - Bento Grid Cards */}
        <motion.div 
          variants={itemVariants}
          className="grid grid-cols-2 gap-4"
        >
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="col-span-2 bg-surface/40 backdrop-blur-md border border-border rounded-2xl p-6 hover:border-accent/40 hover:shadow-[0_0_15px_rgba(57,255,136,0.1)] transition-all"
          >
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
          </motion.div>

          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="bg-surface/40 backdrop-blur-md border border-border rounded-2xl p-6 flex flex-col justify-between hover:border-accent/40 hover:shadow-[0_0_15px_rgba(57,255,136,0.1)] transition-all group"
          >
            <p className="text-xs text-muted uppercase tracking-wider mb-2 font-[family-name:var(--font-mono)]">Focus</p>
            <h4 className="text-lg font-bold text-text group-hover:text-accent transition-colors">Security & Systems</h4>
            <Shield className="w-6 h-6 text-muted mt-4 opacity-50" />
          </motion.div>

          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="bg-surface/40 backdrop-blur-md border border-border rounded-2xl p-6 flex flex-col justify-between hover:border-accent/40 hover:shadow-[0_0_15px_rgba(57,255,136,0.1)] transition-all group"
          >
            <p className="text-xs text-muted uppercase tracking-wider mb-2 font-[family-name:var(--font-mono)]">Academic</p>
            <h4 className="text-lg font-bold text-text group-hover:text-accent-warm transition-colors">GPA: 3.12/4.0</h4>
            <p className="text-sm text-muted mt-2">Senior Year, HUFLIT</p>
          </motion.div>
        </motion.div>

      </motion.div>
    </section>
  );
}
