"use client";
import React, { useEffect, useState } from "react";
import ProfileImage from "./ProfileImage";
import SocialLinks from "./SocialLinks";
import StatCard from "./StatCard";
import { ArrowRight, Rocket, Folder, Code2, Target } from "lucide-react";

export default function Hero() {
  const roles = [
    "Full Stack Developer",
    "MERN Stack Developer",
  ];
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedRole, setDisplayedRole] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const isComplete = displayedRole === currentRole;
    const isEmpty = displayedRole === "";
    const delay = isComplete && !isDeleting ? 2000 : isDeleting ? 50 : 80;

    const timer = setTimeout(() => {
      if (isComplete && !isDeleting) {
        setIsDeleting(true);
      } else if (isEmpty && isDeleting) {
        setIsDeleting(false);
        setRoleIndex((index) => (index + 1) % roles.length);
      } else {
        setDisplayedRole((role) =>
          isDeleting
            ? role.slice(0, -1)
            : currentRole.slice(0, role.length + 1),
        );
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [displayedRole, isDeleting, roleIndex]);

  const stats = [
    {
      value: "2",
      label: "Years of Learning",
      icon: Rocket,
      accent: "purple",
    },
    {
      value: "10+",
      label: "Projects Completed",
      icon: Folder,
      accent: "cyan",
    },
    {
      value: "12+",
      label: "Technologies",
      icon: Code2,
      accent: "purple",
    },
    {
      value: "100%",
      label: "Dedication",
      icon: Target,
      accent: "cyan",
    },
  ];

  const handleScrollToProjects = (e) => {
    e.preventDefault();
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleScrollToContact = (e) => {
    e.preventDefault();
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Two-Column Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center">
          {/* Left Column: Hero Content */}
          <div className="hero-reveal lg:col-span-6 flex flex-col items-start text-left">
            {/* Greeting Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#101014]/80 border border-cyan-400/40 text-xs font-semibold text-[#e0e0e6] mb-8 shadow-[0_0_20px_rgba(0,212,255,0.1)] hover:border-cyan-400/60 transition-all duration-300">
              <span className="tracking-widest uppercase">Hi, I'm</span>
            </div>

            {/* Main Name Title */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight leading-tight mb-4">
              Usama <span className="text-gradient">Javed</span>
            </h1>

            {/* Role Subtitle */}
            <h2 className="mb-8 flex min-h-12 items-center text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#d0d0d6]">
              <span className="inline-block">{displayedRole}</span>
              <span
                className="ml-2 inline-block h-10 w-1 animate-pulse bg-cyan-400 rounded-sm"
                aria-hidden="true"
              />
            </h2>

            {/* Description */}
            <p className="text-base sm:text-lg text-[#a1a1aa] max-w-2xl leading-relaxed mb-10 font-normal">
              I build modern, responsive and user-friendly web applications
              using the MERN stack and Next.js. I love turning ideas into real
              products and solving problems with clean and efficient code.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-12 w-full sm:w-auto">
              <button
                onClick={handleScrollToProjects}
                className="px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 hover:from-cyan-300 hover:via-blue-400 hover:to-purple-500 text-white text-sm font-bold tracking-wide flex items-center justify-center gap-2.5 shadow-[0_4px_24px_rgba(0,212,255,0.35)] hover:shadow-[0_8px_32px_rgba(139,92,246,0.45)] transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0 cursor-pointer"
              >
                <span>View My Work</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={handleScrollToContact}
                className="px-8 py-4 rounded-xl bg-white/5 border border-cyan-400/40 hover:border-cyan-300/60 text-white text-sm font-bold tracking-wide flex items-center justify-center gap-2 shadow-none hover:shadow-[0_0_24px_rgba(0,212,255,0.25)] transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0 cursor-pointer"
              >
                <span>Get In Touch</span>
              </button>
            </div>

            {/* Social Links Section */}
            <div className="flex flex-col gap-3.5">
              <span className="text-xs font-semibold text-[#717178] tracking-widest uppercase">
                Let's Connect
              </span>
              <SocialLinks />
            </div>
          </div>

          {/* Right Column: Profile Image Visual */}
          <div className="hero-reveal lg:col-span-6 flex justify-center lg:justify-end [animation-delay:150ms]">
            <ProfileImage className="hero-float" />
          </div>
        </div>

        {/* Hero Bottom Stat Cards Container */}
        <div className="hero-reveal mt-16 rounded-2xl border border-[#1a1a22]/40 bg-[#0d0d12]/40 p-4 backdrop-blur-lg [animation-delay:300ms] lg:mt-20">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-4">
            {stats.map((stat, index) => (
              <StatCard
                key={index}
                value={stat.value}
                label={stat.label}
                icon={stat.icon}
                accent={stat.accent}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
