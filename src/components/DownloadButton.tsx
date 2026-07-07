"use client";

import React, { useState } from "react";
import { Download, Loader2, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

interface DownloadButtonProps {
  className?: string;
  resumeUrl: string;
  fileName: string;
}

export default function DownloadButton({ className = "", resumeUrl, fileName }: DownloadButtonProps) {
  // Dummy comment to force a Vercel rebuild (trigger webhook)
  return (
    <a
      href={resumeUrl}
      download={fileName}
      target="_blank"
      rel="noopener noreferrer"
      className={`rounded-full border border-border bg-surface/40 backdrop-blur-3xl px-6 py-3 text-sm font-semibold hover:border-accent/30 hover:shadow-lg transition-all flex items-center justify-center gap-2 group relative overflow-hidden select-none cursor-pointer min-w-[130px] hover:scale-105 active:scale-95 duration-200 ${className}`}
    >
      <span className="relative z-10 flex items-center gap-2">
        <Download className="w-4 h-4 group-hover:text-accent transition-colors" />
        <span>Tải CV</span>
      </span>
    </a>
  );
}
