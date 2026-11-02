"use client";

import React from "react";
import {
  Atom,
  Blocks,
  Braces,
  Code2,
  Database,
  FileCode2,
  Github,
  GitBranch,
  Globe2,
  Send,
  Server,
  Wind,
} from "lucide-react";

const technicalSkills = [
  ["React / Next.js", 90],
  ["JavaScript (ES6+)", 90],
  ["Node.js / Express.js", 85],
  ["MongoDB / Mongoose", 85],
  ["PostgreSQL", 70],
  ["Tailwind CSS / CSS", 90],
  ["Git / GitHub", 85],
  ["REST API", 85],
];

const technologies = [
  ["React", Atom, "text-cyan-400"],
  ["Next.js", Globe2, "text-white"],
  ["Node.js", Server, "text-green-400"],
  ["Express.js", Braces, "text-[#e0e0e6]"],
  ["MongoDB", Database, "text-green-400"],
  ["PostgreSQL", Database, "text-sky-300"],
  ["Tailwind CSS", Wind, "text-cyan-300"],
  ["Bootstrap", Blocks, "text-purple-400"],
  ["Git", GitBranch, "text-orange-400"],
  ["GitHub", Github, "text-white"],
  ["VS Code", FileCode2, "text-sky-400"],
  ["Postman", Send, "text-orange-400"],
];

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 py-20 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl sm:text-5xl lg:text-5xl font-black tracking-tight text-white leading-tight">
          My <span className="text-gradient">Skills</span>
        </h2>
        <div className="section-title-underline mt-6" />

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-[#1a1a22]/30 bg-gradient-to-br from-slate-900/60 to-slate-950/60 p-6 sm:p-8 lg:min-h-[480px]">
            <h3 className="text-lg sm:text-xl font-bold text-white">
              Technical Skills
            </h3>
            <div className="mt-8 space-y-6">
              {technicalSkills.map(([name, value]) => (
                <div key={name}>
                  <div className="mb-2.5 flex items-center justify-between gap-3">
                    <span className="text-sm font-semibold text-[#d0d0d6]">
                      {name}
                    </span>
                    <span className="text-sm font-bold text-cyan-300">
                      {value}%
                    </span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-slate-700/50 shadow-inner">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 shadow-[0_0_12px_rgba(0,212,255,0.4)]"
                      style={{ width: `${value}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-[#1a1a22]/30 bg-gradient-to-br from-slate-900/60 to-slate-950/60 p-6 sm:p-8 lg:min-h-[480px]">
            <h3 className="text-lg sm:text-xl font-bold text-white">
              Tools &amp; Technologies
            </h3>
            <div className="mt-8 grid grid-cols-3 gap-4 sm:grid-cols-4">
              {technologies.map(([name, Icon, color]) => (
                <div
                  key={name}
                  className="group flex min-h-32 flex-col items-center justify-center gap-3 rounded-xl border border-[#1a1a22]/40 bg-[#101014]/50 px-2 py-4 text-center transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400/50 hover:bg-[#101014]/80 hover:shadow-[0_12px_32px_-8px_rgba(0,212,255,0.2)]"
                >
                  <Icon className={`h-8 w-8 transition-transform duration-300 group-hover:scale-110 ${color}`} />
                  <span className="text-xs sm:text-sm font-semibold text-[#d0d0d6] group-hover:text-white">
                    {name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
