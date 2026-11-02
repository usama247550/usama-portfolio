"use client";

import React, { useState } from "react";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import Image from "next/image";
import projectsData from "@/data/projects.json";

function ProjectImage({ project }) {
  const [imageError, setImageError] = useState(false);

  if (imageError) {
    // Gradient fallback agar image load na ho
    return (
      <div className="relative w-full aspect-video bg-gradient-to-br from-[#101014] via-[#0d0d12] to-[#050505] overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 right-0 w-40 h-40 bg-cyan-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl" />
        </div>
        <span className="relative text-[#717178] text-sm font-medium">
          {project.title}
        </span>
      </div>
    );
  }

  return (
    <div className="relative w-full aspect-video bg-[#0d0d12] overflow-hidden">
      <Image
        src={project.image}
        alt={project.title}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
        className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
        loading="lazy"
        onError={() => setImageError(true)}
      />
    </div>
  );
};

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-24 py-20 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-[1380px] px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
          <div>
            <h2 className="projects-heading text-4xl sm:text-5xl lg:text-5xl font-black tracking-tight text-white leading-tight">
              My <span className="text-gradient">Projects</span>
            </h2>
            <div className="section-title-underline mt-6" />
          </div>
          <a
            href="#contact"
            className="projects-link group inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-cyan-300 transition-all hover:text-purple-300 hover:gap-3"
          >
            View All
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </div>
        
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projectsData.map((project) => (
            <article
              key={project.id}
              className="project-card group overflow-hidden rounded-2xl border border-[#1a1a22] bg-gradient-to-br from-[#101014]/80 to-[#0d0d12]/90 flex flex-col"
            >
              <ProjectImage project={project} />
              <div className="project-card-body flex-1 flex flex-col p-5 sm:p-6">
                <div className="flex items-start justify-between gap-3 mb-3">
                  <h3 className="project-title text-lg sm:text-xl font-bold tracking-tight text-white leading-snug">
                    {project.title}
                  </h3>
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Open ${project.title}`}
                    className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-[#1a1a22]/50 bg-[#101014]/70 text-[#717178] hover:border-cyan-400/50 hover:bg-cyan-400/10 hover:text-cyan-300 hover:shadow-[0_0_12px_rgba(0,212,255,0.2)] transition-all duration-300 group-hover:scale-110"
                  >
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
                <p className="project-description mt-2 text-sm sm:text-base leading-6 text-[#a1a1aa] flex-1">
                  {project.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="project-tag rounded-full border border-[#1a1a22] bg-[#0d0d12]/70 px-3 py-1 text-xs sm:text-sm font-semibold text-[#d0d0d6] hover:border-cyan-400/50 hover:bg-cyan-400/10 hover:text-cyan-300 transition-all duration-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
