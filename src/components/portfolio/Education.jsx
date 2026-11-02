"use client";

import React from "react";
import { GraduationCap, University } from "lucide-react";

const educationItems = [
  {
    icon: University,
    logo: "/images/vu-logo.png",
    institute: "Virtual University of Pakistan",
    degree: "Graduation (BSc) in Web Design & Development",
    description:
      "Continuing my degree while building real-world projects and enhancing my development skills.",
    accent: "cyan",
  },
  {
    icon: GraduationCap,
    institute: "Govt Post Graduate College of Science, Faisalabad",
    degree: "Intermediate, ICS (Computer Science)",
    description: "Completed intermediate with a focus on computer science, mathematics and physics.",
    accent: "purple",
  },
  {
    icon: GraduationCap,
    institute: "The skills institute and software house",
    degree: "MERN Stack Development Course",
    description:
      "Hands-on training in MongoDB, Express.js, React.js and Node.js with real-world projects.",
    accent: "cyan",
  },
];

export default function Education() {
  return (
    <section id="education" className="scroll-mt-24 py-20 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl sm:text-5xl lg:text-5xl font-black tracking-tight text-white leading-tight">
          <span className="text-gradient">Education</span>
        </h2>
        <div className="section-title-underline mt-6" />

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {educationItems.map(
            ({ icon: Icon, logo, institute, degree, description, accent }) => (
              <article
                key={institute}
                className="group flex flex-col gap-5 sm:gap-6 rounded-2xl border border-[#1a1a22]/30 bg-gradient-to-br from-slate-900/60 to-slate-950/60 p-6 sm:p-7 lg:p-8 shadow-[inset_0_1px_0_rgba(100,116,139,0.08)] transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400/30 hover:shadow-[0_16px_40px_-8px_rgba(0,212,255,0.2)]"
              >
                <div className="flex items-start gap-5">
                  <div
                    className={`flex h-20 w-20 shrink-0 items-center justify-center rounded-xl border bg-slate-900/90 transition-all duration-300 ${
                      accent === "cyan"
                        ? "border-cyan-400/30 text-cyan-300 group-hover:border-cyan-400/50"
                        : "border-purple-500/30 text-purple-400 group-hover:border-purple-400/50"
                    }`}
                  >
                    {logo ? (
                      <img
                        src={logo}
                        alt={`${institute} logo`}
                        className="h-full w-full rounded-xl object-contain p-2"
                      />
                    ) : (
                      <Icon className="h-10 w-10" strokeWidth={1.5} />
                    )}
                  </div>

                  <div className="min-w-0 flex-1">
                    <h3 className="text-lg sm:text-xl font-bold leading-tight text-white">
                      {institute}
                    </h3>
                    <p className="mt-1 text-sm sm:text-base font-semibold text-[#d0d0d6]">
                      {degree}
                    </p>
                  </div>
                </div>
                
                <p className="text-sm sm:text-base leading-6 text-[#a1a1aa]">
                  {description}
                </p>
              </article>
            ),
          )}
        </div>
      </div>
    </section>
  );
}
