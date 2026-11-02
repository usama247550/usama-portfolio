"use client";

import React from "react";
import SocialLinks from "./SocialLinks";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

const technologies = [
  "React",
  "Next.js",
  "Node.js",
  "MongoDB",
  "Express.js",
  "Tailwind CSS",
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[#1a1a22]/20 bg-gradient-to-b from-[#0b1117] to-[#050709]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 py-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:py-16">
          {/* Brand Section */}
          <div className="col-span-full sm:col-span-2 md:col-span-1 lg:col-span-1">
            <a
              href="#home"
              className="inline-flex items-center gap-3 transition-transform hover:scale-105"
              aria-label="Usama Javed Portfolio Home"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-lg border border-cyan-400/40 bg-gradient-to-br from-cyan-400 to-purple-600 text-lg font-black italic text-white shadow-[0_0_20px_rgba(0,212,255,0.25)]">
                UJ
              </span>
              <span className="text-base sm:text-lg font-black tracking-tight text-white">
                USAMA <span className="text-gradient">JAVED</span>
              </span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-6 text-[#a1a1aa]">
              MERN Stack Developer who loves building modern, fast and scalable
              web applications.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-sm font-bold text-white uppercase tracking-wide">
              Quick Links
            </h2>
            <nav className="mt-5 grid gap-3" aria-label="Footer navigation">
              {quickLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="group flex items-center gap-2 text-sm text-[#a1a1aa] transition-colors hover:text-cyan-300"
                >
                  <span className="text-purple-400 transition-transform group-hover:translate-x-1">
                    →
                  </span>
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Technologies */}
          <div>
            <h2 className="text-sm font-bold text-white uppercase tracking-wide">
              Technologies
            </h2>
            <ul className="mt-5 grid gap-3">
              {technologies.map((technology) => (
                <li
                  key={technology}
                  className="flex items-center gap-2 text-sm text-[#a1a1aa] transition-colors hover:text-cyan-300"
                >
                  <span className="text-purple-400">●</span>
                  {technology}
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h2 className="text-sm font-bold text-white uppercase tracking-wide">
              Let&apos;s Connect
            </h2>
            <div className="mt-5">
              <SocialLinks className="gap-2" />
            </div>
          </div>
        </div>

        {/* Footer Divider */}
        <div className="border-t border-[#1a1a22]/20" />

        {/* Copyright */}
        <div className="py-6 text-center text-sm text-slate-500">
          <p>
            © {currentYear} Usama Javed. All rights reserved. | Built with{" "}
            <span className="text-cyan-400">React</span>,{" "}
            <span className="text-cyan-400">Next.js</span>, and{" "}
            <span className="text-cyan-400">Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
