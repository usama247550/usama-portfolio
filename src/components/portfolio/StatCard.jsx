"use client";
import React from "react";

export default function StatCard({
  value,
  label,
  icon: IconComponent,
  accent = "cyan",
}) {
  const isCyan = accent === "cyan";

  return (
    <div className="group relative flex min-w-0 flex-col sm:flex-row items-center gap-4 border-b sm:border-b-0 sm:border-r border-[#1a1a22]/30 bg-gradient-to-br from-slate-900/60 to-slate-950/60 px-3 py-7 sm:px-4 sm:py-7 min-h-[96px] transition-all duration-300 hover:bg-slate-900/90 hover:border-cyan-400/40 sm:hover:shadow-[0_8px_28px_-5px_rgba(0,212,255,0.18)] last:border-b-0 [&:nth-child(2n)]:sm:border-r-0">
      {/* Icon Badge */}
      <div
        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg font-bold transition-all duration-300 ${
          isCyan
            ? "bg-cyan-500/15 border border-cyan-400/40 text-cyan-400 group-hover:border-cyan-400 group-hover:bg-cyan-500/25 group-hover:shadow-[0_0_16px_rgba(0,212,255,0.4)]"
            : "bg-purple-500/15 border border-purple-500/40 text-purple-400 group-hover:border-purple-400 group-hover:bg-purple-500/25 group-hover:shadow-[0_0_16px_rgba(168,85,247,0.4)]"
        }`}
      >
        {IconComponent && <IconComponent className="h-5 w-5" />}
      </div>

      {/* Stat Text */}
      <div className="flex min-w-0 flex-col text-center sm:text-left">
        <span className="text-lg sm:text-xl font-black leading-tight tracking-tight text-white transition-colors group-hover:text-cyan-300">
          {value}
        </span>
        <span className="mt-0.5 text-[11px] sm:text-xs font-medium leading-none text-[#a1a1aa] transition-colors group-hover:text-[#d0d0d6]">
          {label}
        </span>
      </div>
    </div>
  );
}
