import { Download } from "lucide-react";

interface DownloadButtonProps {
  className?: string;
  resumeUrl: string;
}

export default function DownloadButton({
  className = "",
  resumeUrl,
}: DownloadButtonProps) {
  return (
    <a
      href={resumeUrl}
      className={`rounded-full border border-border bg-white dark:bg-surface/40 backdrop-blur-3xl px-6 py-3 text-sm font-semibold hover:border-accent/30 hover:shadow-lg transition-all flex items-center justify-center gap-2 group relative overflow-hidden select-none cursor-pointer min-w-[130px] hover:scale-105 active:scale-95 duration-200 ${className}`}
    >
      <Download className="w-4 h-4 group-hover:text-accent transition-colors" />
      <span>Tải CV</span>
    </a>
  );
}
