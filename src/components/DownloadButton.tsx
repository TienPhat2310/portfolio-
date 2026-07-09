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
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloaded, setDownloaded] = useState(false);

  const handleDownload = () => {
    if (isDownloading) return;
    setIsDownloading(true);
    try {
      // Direct anchor click — no fetch, no blob, no popup-blocker issues
      const link = document.createElement("a");
      link.href = resumeUrl;
      link.download = fileName;
      link.target = "_blank";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      setDownloaded(true);
      setTimeout(() => setDownloaded(false), 3000);
    } catch (error) {
      console.error("Download failed:", error);
      // Last-resort fallback (may be blocked by popup blocker on desktop)
      window.open(resumeUrl, "_blank");
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <button
      onClick={handleDownload}
      disabled={isDownloading}
      className={`rounded-full border border-border bg-white dark:bg-surface/40 backdrop-blur-3xl px-6 py-3 text-sm font-semibold hover:border-accent/30 hover:shadow-lg transition-all flex items-center justify-center gap-2 group relative overflow-hidden select-none cursor-pointer min-w-[130px] hover:scale-105 active:scale-95 duration-200 disabled:opacity-70 disabled:cursor-not-allowed ${className}`}
    >
      <span className="relative z-10 flex items-center gap-2">
        {isDownloading ? (
          <Loader2 className="w-4 h-4 animate-spin text-accent" />
        ) : downloaded ? (
          <CheckCircle className="w-4 h-4 text-accent-warm" />
        ) : (
          <Download className="w-4 h-4 group-hover:text-accent transition-colors" />
        )}
        <span>{isDownloading ? "Đang tải..." : downloaded ? "Đã tải xong!" : "Tải CV"}</span>
      </span>
    </button>
  );
}
