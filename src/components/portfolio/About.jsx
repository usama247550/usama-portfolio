"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  BriefcaseBusiness,
  Code2,
  Lightbulb,
  LocateFixed,
  Mail,
  Rocket,
  Users,
} from "lucide-react";

const details = [
  {
    label: "Name",
    value: "Usama Javed",
    icon: BriefcaseBusiness,
    accent: "cyan",
  },
  {
    label: "Location",
    value: "Faisalabad, Pakistan",
    icon: LocateFixed,
    accent: "cyan",
  },
  {
    label: "Email",
    value: "saimcodehub@gmail.com",
    icon: Mail,
    accent: "purple",
  },
  {
    label: "Availability",
    value: "Open to Work",
    icon: BriefcaseBusiness,
    accent: "purple",
  },
];

const strengths = [
  {
    title: "Clean Code",
    text: "I write clean, readable and maintainable code.",
    icon: Code2,
    accent: "purple",
  },
  {
    title: "Problem Solver",
    text: "I love to solve complex, real-world problems.",
    icon: Mail,
    accent: "cyan",
  },
  {
    title: "Fast Learner",
    text: "I quickly adapt to new technologies.",
    icon: Rocket,
    accent: "blue",
  },
  {
    title: "Team Player",
    text: "I enjoy working and collaborating in teams.",
    icon: Users,
    accent: "orange",
  },
];

function TechTile({ children, className = "" }) {
  return (
    <div
      className={`flex h-20 w-20 items-center justify-center rounded-xl border border-[#1a1a22]/80 bg-slate-900/90 shadow-[0_12px_25px_rgba(0,0,0,0.25)] ${className}`}
    >
      {children}
    </div>
  );
}

export default function About() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 },
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="scroll-mt-24 py-20 sm:py-28 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-start gap-16 lg:grid-cols-2 lg:gap-20">
          <div>
            <h2
              className={`about-heading-reveal ${isVisible ? "is-visible" : ""} text-4xl sm:text-5xl lg:text-5xl font-black tracking-tight text-white leading-tight`}
            >
              About <span className="text-gradient">Me</span>
            </h2>
            <div className="section-title-underline mt-6" />
            <p className="mt-8 max-w-2xl text-base sm:text-lg leading-8 text-[#a1a1aa]">
              I&apos;m a passionate Full Stack Developer with strong knowledge
              of the MERN stack and experience in building scalable web
              applications. I love solving problems, learning new technologies
              and creating impactful solutions.
            </p>

            <div className="mt-10 space-y-3.5">
              {details.map(({ label, value, icon: Icon, accent }) => (
                <div key={label} className="flex items-center gap-3.5 text-sm">
                  <span
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border font-semibold transition-all duration-300 ${
                      accent === "cyan"
                        ? "border-cyan-400/50 bg-cyan-400/15 text-cyan-300"
                        : "border-purple-400/50 bg-purple-400/15 text-purple-300"
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                  </span>
                  <div className="flex flex-col gap-0.5">
                    <span className="text-xs font-semibold text-[#d0d0d6] uppercase tracking-wide">
                      {label}
                    </span>
                    <span className="text-sm sm:text-base font-medium text-[#e0e0e6]">
                      {value}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="hero-reveal relative mx-auto h-[330px] w-full max-w-[470px] [animation-delay:180ms]">
            <div className="absolute right-4 top-0 grid grid-cols-2 gap-4 sm:right-8">
              <TechTile className="border-purple-500/60 text-cyan-400">
                <span className="text-5xl font-bold">⚛</span>
              </TechTile>
              <TechTile className="border-[#1a1a22] text-green-400">
                <span className="text-2xl font-bold">node</span>
                <span className="text-lg">●</span>
              </TechTile>
              <TechTile className="border-amber-500/50 bg-amber-950/20 text-4xl font-bold text-amber-400">
                JS
              </TechTile>
              <TechTile className="border-cyan-400/50 text-4xl">🍃</TechTile>
            </div>

            <div className="absolute bottom-8 left-1/2 h-5 w-64 -translate-x-1/2 rounded-[50%] bg-cyan-500/10 shadow-[0_0_25px_rgba(0,212,255,0.25)]" />
            <div className="absolute bottom-10 left-1/2 h-20 w-44 -translate-x-1/2 skew-x-[-10deg] rounded-lg border border-slate-400/70 bg-gradient-to-br from-slate-500 via-slate-800 to-slate-950 shadow-[0_20px_25px_rgba(0,0,0,0.45)]">
              <div className="flex h-full items-center justify-center text-3xl text-white">
                ●
              </div>
            </div>
            <div className="absolute bottom-3 left-1/2 h-3 w-60 -translate-x-1/2 skew-x-[-18deg] rounded-b-xl border border-[#1a1a22] bg-slate-700 shadow-lg" />
            <div className="absolute bottom-0 left-1/2 h-9 w-12 -translate-x-1/2 rounded-full bg-gradient-to-t from-green-900 to-green-400/60 opacity-80" />
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {strengths.map(({ title, text, icon: Icon, accent }, index) => (
            <div
              key={title}
              style={{ animationDelay: `${200 + index * 80}ms` }}
              className={`about-card-reveal ${
                index === 0
                  ? "about-card-from-left"
                  : index === strengths.length - 1
                    ? "about-card-from-right"
                    : "about-card-from-center"
              } ${
                isVisible ? "is-visible" : ""
              } group rounded-xl border bg-gradient-to-br from-slate-900/60 to-slate-950/60 p-5 sm:p-6 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400/30 hover:shadow-[0_16px_40px_-8px_rgba(0,212,255,0.2)]`}
            >
              <div
                className={`inline-flex h-12 w-12 items-center justify-center rounded-lg font-bold text-lg transition-all duration-300 ${
                  accent === "purple"
                    ? "bg-purple-500/20 border border-purple-500/40 text-purple-300 group-hover:bg-purple-500/30 group-hover:border-purple-400"
                    : accent === "orange"
                      ? "bg-orange-500/20 border border-orange-500/40 text-orange-300 group-hover:bg-orange-500/30 group-hover:border-orange-400"
                      : accent === "blue"
                        ? "bg-cyan-500/20 border border-cyan-400/40 text-cyan-300 group-hover:bg-cyan-500/30 group-hover:border-cyan-400"
                        : "bg-cyan-500/20 border border-cyan-400/40 text-cyan-300 group-hover:bg-cyan-500/30 group-hover:border-cyan-400"
                }`}
              >
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-bold text-white">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-[#a1a1aa]">
                {text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
