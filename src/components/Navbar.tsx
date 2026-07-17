"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Home, User, Code2, Briefcase, Mail } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const navItems = [
  { name: "Home", url: "#home", icon: Home },
  { name: "About", url: "#about", icon: User },
  { name: "Skills", url: "#skills", icon: Code2 },
  { name: "Projects", url: "#projects", icon: Briefcase },
  { name: "Contact", url: "#contact", icon: Mail },
];

export default function Navbar() {
  const [activeTab, setActiveTab] = useState(navItems[0].name);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120;
      
      for (const item of navItems) {
        const element = document.getElementById(item.url.substring(1));
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveTab(item.name);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed bottom-0 sm:bottom-auto sm:top-0 left-1/2 -translate-x-1/2 z-50 mb-6 sm:mb-0 sm:pt-6 pointer-events-none">
      <div className="flex items-center gap-1 sm:gap-2 bg-surface/50 border border-border backdrop-blur-xl py-1 px-1.5 rounded-full shadow-2xl pointer-events-auto">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.name;

          return (
            <a
              key={item.name}
              href={item.url}
              onClick={() => setActiveTab(item.name)}
              className={`relative cursor-pointer text-xs sm:text-sm font-semibold px-4 sm:px-6 py-2 rounded-full transition-all duration-300 flex items-center justify-center ${
                isActive 
                  ? "text-accent bg-accent/5" 
                  : "text-muted hover:text-accent"
              }`}
            >
              <span className="hidden md:inline">{item.name}</span>
              <span className="md:hidden">
                <Icon size={18} strokeWidth={2.2} />
              </span>
              
              {isActive && (
                <motion.div
                  layoutId="lamp"
                  className="absolute inset-0 w-full bg-accent/5 rounded-full -z-10"
                  initial={false}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                  }}
                >
                  {/* Glowing lamp indicator */}
                  <div className="absolute -top-1 sm:top-auto sm:-bottom-1 left-1/2 -translate-x-1/2 w-8 h-1 bg-accent rounded-t-full sm:rounded-t-none sm:rounded-b-full">
                    <div className="absolute w-12 h-6 bg-accent/25 rounded-full blur-md -top-2 -left-2 sm:top-auto sm:-bottom-2" />
                    <div className="absolute w-8 h-6 bg-accent/25 rounded-full blur-sm -top-1 sm:top-auto sm:-bottom-1" />
                  </div>
                </motion.div>
              )}
            </a>
          );
        })}
        
        <div className="w-px h-6 bg-border mx-1"></div>
        <div className="px-1 flex items-center justify-center">
          <ThemeToggle className="hover:border-accent hover:bg-accent/5" />
        </div>
      </div>
    </div>
  );
}
