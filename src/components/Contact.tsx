"use client";

import React, { useState } from "react";
import { Mail, ArrowRight } from "lucide-react";

const GithubIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.24c3-.34 6-1.53 6-6.76a5.2 5.2 0 0 0-1.39-3.6 5.5 5.5 0 0 0-.14-3.5s-1.13-.36-3.7 1.38a12.8 12.8 0 0 0-6.8 0C6.13 2.5 5 2.86 5 2.86a5.5 5.5 0 0 0-.14 3.5A5.2 5.2 0 0 0 3.47 10c0 5.22 3 6.42 6 6.76a4.8 4.8 0 0 0-1 3.24V22" />
  </svg>
);

const FacebookIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Liên hệ từ Portfolio: ${formData.name}`);
    const body = encodeURIComponent(`Tên: ${formData.name}\nEmail: ${formData.email}\n\nNội dung:\n${formData.message}`);
    window.open(`mailto:nguyenphat0976459403@gmail.com?subject=${subject}&body=${body}`, '_blank');
  };

  return (
    <section id="contact" className="py-24">
      <div className="flex flex-col items-center mb-16">
        <p className="font-[family-name:var(--font-mono)] px-4 py-1.5 rounded-full border border-border bg-surface/50 text-accent text-sm tracking-widest mb-6">
          CONNECT
        </p>
        <h2 className="text-4xl md:text-5xl font-bold text-center">Liên hệ</h2>
        <p className="text-muted mt-4 text-center max-w-lg">
          Mình luôn sẵn sàng trao đổi về các cơ hội công việc, dự án hoặc chỉ đơn giản là thảo luận về Cybersecurity. Đừng ngần ngại liên hệ nhé!
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 max-w-5xl mx-auto">
        {/* CỘT TRÁI - Contact Info */}
        <div className="lg:col-span-2 flex flex-col gap-4">
          <a
            href="https://www.facebook.com/tien.phat.516688"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-6 rounded-2xl border border-white/5 bg-surface/40 backdrop-blur-md hover:bg-surface/60 hover:border-accent/40 transition-all duration-300 group hover:shadow-[0_0_20px_rgba(56,189,248,0.1)] hover:-translate-y-1"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                <FacebookIcon className="w-5 h-5 text-accent" />
              </div>
              <div>
                <p className="text-xs text-muted mb-1 font-[family-name:var(--font-mono)]">Facebook</p>
                <p className="font-semibold text-sm md:text-base text-text group-hover:text-accent transition-colors">Nguyễn Văn Tiến Phát</p>
              </div>
            </div>
            <ArrowRight className="w-5 h-5 text-muted group-hover:text-accent group-hover:translate-x-1 transition-all" />
          </a>

          <a
            href="mailto:nguyenphat0976459403@gmail.com"
            className="flex items-center justify-between p-6 rounded-2xl border border-white/5 bg-surface/40 backdrop-blur-md hover:bg-surface/60 hover:border-accent/40 transition-all duration-300 group hover:shadow-[0_0_20px_rgba(56,189,248,0.1)] hover:-translate-y-1"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                <Mail className="w-5 h-5 text-accent" />
              </div>
              <div>
                <p className="text-xs text-muted mb-1 font-[family-name:var(--font-mono)]">Email</p>
                <p className="font-semibold text-sm md:text-base text-text group-hover:text-accent transition-colors">nguyenphat...gmail.com</p>
              </div>
            </div>
            <ArrowRight className="w-5 h-5 text-muted group-hover:text-accent group-hover:translate-x-1 transition-all" />
          </a>

          <a
            href="https://github.com/TienPhat2310"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-6 rounded-2xl border border-white/5 bg-surface/40 backdrop-blur-md hover:bg-surface/60 hover:border-accent/40 transition-all duration-300 group hover:shadow-[0_0_20px_rgba(56,189,248,0.1)] hover:-translate-y-1"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                <GithubIcon className="w-5 h-5 text-accent" />
              </div>
              <div>
                <p className="text-xs text-muted mb-1 font-[family-name:var(--font-mono)]">Github</p>
                <p className="font-semibold text-sm md:text-base text-text group-hover:text-accent transition-colors">TienPhat2310</p>
              </div>
            </div>
            <ArrowRight className="w-5 h-5 text-muted group-hover:text-accent group-hover:translate-x-1 transition-all" />
          </a>
        </div>

        {/* CỘT PHẢI - Form */}
        <div className="lg:col-span-3 bg-surface/40 backdrop-blur-md p-8 rounded-2xl border border-white/5 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none group-hover:bg-accent/10 transition-colors duration-500"></div>
          
          <h3 className="text-xl font-bold text-text mb-6 relative z-10">Gửi tin nhắn</h3>
          
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-xs text-muted font-[family-name:var(--font-mono)] tracking-wider">HỌ TÊN</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="bg-black/30 border border-white/10 rounded-xl px-4 py-3 text-text focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/50 transition-colors backdrop-blur-sm"
                  placeholder="Nguyễn Văn A"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-xs text-muted font-[family-name:var(--font-mono)] tracking-wider">EMAIL</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="bg-black/30 border border-white/10 rounded-xl px-4 py-3 text-text focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/50 transition-colors backdrop-blur-sm"
                  placeholder="email@example.com"
                />
              </div>
            </div>
            
            <div className="flex flex-col gap-2 mt-2">
              <label htmlFor="message" className="text-xs text-muted font-[family-name:var(--font-mono)] tracking-wider">NỘI DUNG</label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="bg-black/30 border border-white/10 rounded-xl px-4 py-3 text-text focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/50 transition-colors resize-none backdrop-blur-sm"
                placeholder="Bạn muốn trao đổi về..."
              />
            </div>
            
            <button
              type="submit"
              className="mt-4 bg-accent text-black font-bold py-3 px-6 rounded-xl hover:opacity-90 transition-all font-[family-name:var(--font-mono)] text-sm shadow-[0_0_20px_rgba(57,255,136,0.2)] hover:shadow-[0_0_30px_rgba(57,255,136,0.4)] hover:-translate-y-0.5"
            >
              GỬI TIN NHẮN
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
