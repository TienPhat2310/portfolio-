import React from "react";
import { Award, FileCheck } from "lucide-react";
import TiltCard from "./TiltCard";

const publications = [
  {
    badge: "EIDT 2026",
    status: "Accepted Paper",
    title: "Ablation-Aware Operational Anomaly Detection in Controlled SDN Logs Using Temporal Neural Models",
    authors: "ThS. Cao Tiến Thành, Phạm Quốc Huy, Nguyễn Văn Tiến Phát, PGS.TS. Trần Mạnh Hà, TS. Trần Thị Minh Khoa",
    publisher: "Peer-Reviewed Academic Conference",
    abstract: "Proposes an end-to-end operational framework for software-defined networking (SDN) log collection, feature extraction, and temporal neural model inference to detect network anomalies and system fault scenarios.",
    tags: ["SDN Security", "Log Anomaly Detection", "Data Engineering", "Deep Learning"],
  },
];

export default function Research() {
  return (
    <section id="research" className="py-24">
      <div className="flex flex-col items-center mb-16">
        <p className="font-[family-name:var(--font-mono)] px-4 py-1.5 rounded-full border border-border bg-surface/20 backdrop-blur-3xl text-accent text-sm tracking-widest mb-6">
          PUBLICATIONS
        </p>
        <h2 className="text-4xl md:text-5xl font-bold text-center">Research &amp; Publications</h2>
        <p className="text-muted mt-4 text-center max-w-lg">
          Academic research contributions, conference proceedings, and cybersecurity intelligence.
        </p>
      </div>

      <div className="max-w-5xl mx-auto space-y-8">
        {publications.map((paper, index) => (
          <TiltCard
            key={index}
            scale={1.01}
            className="relative overflow-hidden style-3d rounded-3xl border border-border bg-white dark:bg-surface/40 backdrop-blur-3xl p-8 md:p-10 shadow-[0_8px_30px_rgba(0,0,0,0.02)] dark:shadow-none transition-all duration-500 hover:border-accent/40"
          >
            <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start">
              {/* Conference Badge */}
              <div className="flex-shrink-0 flex flex-col items-center justify-center w-24 h-28 bg-gradient-to-b from-slate-800 to-black rounded-2xl border border-white/10 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 w-full bg-accent/20 text-accent text-[10px] font-bold tracking-widest text-center py-1 font-[family-name:var(--font-mono)]">
                  CONFERENCE
                </div>
                <Award className="w-6 h-6 text-accent mt-3 mb-1" />
                <div className="text-sm font-bold text-white text-center px-1 font-[family-name:var(--font-mono)]">
                  {paper.badge}
                </div>
              </div>

              {/* Details */}
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-[family-name:var(--font-mono)]">
                    <FileCheck className="w-3.5 h-3.5" />
                    {paper.status}
                  </span>
                  <span className="text-xs text-muted font-[family-name:var(--font-mono)]">
                    {paper.publisher}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-text mb-3 leading-snug">
                  {paper.title}
                </h3>

                <p className="text-sm text-text/80 leading-relaxed mb-4">
                  <strong className="text-muted">Authors:</strong> {paper.authors}
                </p>

                <p className="text-sm text-muted leading-relaxed mb-6">
                  {paper.abstract}
                </p>

                <div className="flex flex-wrap gap-2">
                  {paper.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-3 py-1 text-xs font-medium text-slate-700 dark:text-muted bg-slate-100 dark:bg-black/30 border border-slate-200 dark:border-white/5 rounded-md backdrop-blur-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </TiltCard>
        ))}
      </div>
    </section>
  );
}
