import React from "react";
import { ExternalLink, Eye, Users } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full border-t border-border bg-surface/50 mt-20 pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* Column 1: University Info */}
          <div className="flex gap-4 items-start">
            <div className="w-12 h-12 shrink-0 bg-yellow-400 rounded-full flex items-center justify-center font-bold text-black border-2 border-yellow-500 shadow-[0_0_15px_rgba(250,204,21,0.3)]">
              <span className="text-[10px] leading-none text-center">HUFLIT</span>
            </div>
            <div>
              <h3 className="font-bold text-text text-sm md:text-base leading-snug">
                Ho Chi Minh City University of Foreign Languages - Information Technology
              </h3>
              <div className="text-muted text-sm mt-3 space-y-1">
                <p>Faculty of Information Technology</p>
                <p>Major: Cybersecurity</p>
                <p>Expected: 2026</p>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-xs font-[family-name:var(--font-mono)] tracking-widest text-muted uppercase mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3 text-sm text-text/80">
              <li><a href="#home" className="hover:text-accent transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-accent transition-colors">About</a></li>
              <li><a href="#skills" className="hover:text-accent transition-colors">Skills</a></li>
              <li><a href="#projects" className="hover:text-accent transition-colors">Projects</a></li>
              <li><a href="#contact" className="hover:text-accent transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Column 3: Cloudflare Links */}
          <div>
            <h4 className="text-xs font-[family-name:var(--font-mono)] tracking-widest text-muted uppercase mb-4">
              OrangeCloud VN (Cloudflare)
            </h4>
            <ul className="space-y-3 text-sm text-text/80">
              <li>
                <a href="https://www.cloudflare.com/learning/" target="_blank" rel="noreferrer" className="hover:text-accent transition-colors flex items-center gap-1.5">
                  Cloudflare for Beginners <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </li>
              <li>
                <a href="https://blog.cloudflare.com/" target="_blank" rel="noreferrer" className="hover:text-accent transition-colors flex items-center gap-1.5">
                  Cloudflare News & Blog <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </li>
            </ul>
          </div>
          
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted font-[family-name:var(--font-mono)]">
          <p className="text-center md:text-left">
            © 2026 Nguyễn Văn Tiến Phát. All rights reserved. <span className="hidden md:inline mx-2">•</span> <br className="md:hidden" />
            <span className="text-accent/80">☁️ Protected by Cloudflare</span>
          </p>
          <div className="flex gap-6">
            <span className="flex items-center gap-1.5">
              <Eye className="w-4 h-4" /> VIEWS: <span className="text-text font-bold">171</span>
            </span>
            <span className="flex items-center gap-1.5">
              <Users className="w-4 h-4" /> VISITORS: <span className="text-text font-bold">61</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
