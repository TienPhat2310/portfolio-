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
  const [downloadStatus, setDownloadStatus] = useState<"idle" | "downloading" | "downloaded">("idle");
  const [progress, setProgress] = useState(0);

  const handleStartAnimation = () => {
    if (downloadStatus !== "idle") return;
    
    // DELAY the React state update slightly so the browser has time to 
    // process the native <a> tag click and start the download.
    // If we update state synchronously, React removes the clicked element 
    // from the DOM, which causes Chrome to cancel the download action!
    setTimeout(() => {
      setDownloadStatus("downloading");
      setProgress(0);

      const duration = 1200;
      const intervalTime = 30;
      const steps = duration / intervalTime;
      let currentStep = 0;

      const timer = setInterval(() => {
        currentStep++;
        const nextProgress = Math.min(Math.round((currentStep / steps) * 100), 100);
        setProgress(nextProgress);

        if (currentStep >= steps) {
          clearInterval(timer);
          setDownloadStatus("downloaded");
          
          setTimeout(() => {
            setDownloadStatus("idle");
            setProgress(0);
          }, 2000);
        }
      }, intervalTime);
    }, 100);
  };

  return (
    <a
      href={resumeUrl}
      download={fileName}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleStartAnimation}
      className={`rounded-full border border-border bg-surface/40 backdrop-blur-3xl px-6 py-3 text-sm font-semibold hover:border-accent/30 hover:shadow-lg transition-all flex items-center justify-center gap-2 group relative overflow-hidden select-none cursor-pointer min-w-[130px] hover:scale-105 active:scale-95 duration-200 ${
        downloadStatus !== "idle" ? "pointer-events-none" : ""
      } ${className}`}
    >
      {/* Progress Bar background overlay */}
      {downloadStatus === "downloading" && (
        <div
          className="absolute inset-0 bg-accent/20 transition-all duration-100 ease-out z-0 origin-left"
          style={{ transform: `scaleX(${progress / 100})`, width: "100%" }}
        />
      )}

      {/* Content wrapper to stay above background progress */}
      <span className="relative z-10 flex items-center gap-2">
        {downloadStatus === "idle" && (
          <>
            <Download className="w-4 h-4 group-hover:text-accent transition-colors" />
            <span>Tải CV</span>
          </>
        )}
        {downloadStatus === "downloading" && (
          <>
            <Loader2 className="w-4 h-4 animate-spin text-accent" />
            <span>{progress}%</span>
          </>
        )}
        {downloadStatus === "downloaded" && (
          <>
            <CheckCircle className="w-4 h-4 text-accent animate-bounce" />
            <span className="text-accent">Đã tải xong</span>
          </>
        )}
      </span>
    </a>
  );
}
