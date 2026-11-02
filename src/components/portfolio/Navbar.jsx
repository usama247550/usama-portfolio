"use client";
import React, { useState, useEffect } from "react";
import Logo from "./Logo";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      // Detect active section
      const sections = ["home", "about", "skills", "projects", "experience", "education", "contact"];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
  ];

  const isLinkActive = (href) => activeSection === href.substring(1);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#050505]/95 backdrop-blur-lg py-3 shadow-[0_8px_32px_-8px_rgba(0,0,0,0.5)] border-b border-[#1a1a22]"
          : "bg-[#050505]/50 backdrop-blur-md py-4 border-b border-[#1a1a22]/50"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo Section */}
          <div className="flex-shrink-0">
            <Logo />
          </div>

          {/* Desktop Navigation Links (Centered) */}
          <nav className="hidden md:flex items-center justify-center flex-1 px-8">
            <div className="flex items-center gap-1">
              {navLinks.map((link) => {
                const active = isLinkActive(link.href);
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    className={`relative px-4 py-2 text-sm font-semibold transition-all duration-300 group ${
                      active
                        ? "text-cyan-300"
                        : "text-[#a1a1aa] hover:text-[#e0e0e6]"
                    }`}
                  >
                    <span className="relative">
                      {link.name}
                      {active && (
                        <span className="absolute inset-x-0 -bottom-1 h-0.5 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 shadow-[0_0_12px_rgba(0,212,255,0.6)]" />
                      )}
                      {!active && (
                        <span className="absolute inset-x-0 -bottom-1 h-0.5 rounded-full bg-cyan-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                      )}
                    </span>
                  </a>
                );
              })}
            </div>
          </nav>

          {/* Desktop Right Spacer */}
          <div className="hidden md:flex flex-shrink-0" />

          {/* Mobile Hamburger Button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2.5 rounded-xl border transition-all duration-300 ${
                mobileMenuOpen
                  ? "bg-cyan-500/10 border-cyan-400/40 text-cyan-400"
                  : "bg-[#101014]/80 border-[#1a1a22]/50 text-[#d0d0d6] hover:border-cyan-400/40 hover:text-cyan-400"
              }`}
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#080808]/98 border-t border-[#1a1a22]/30 backdrop-blur-xl px-4 py-4 shadow-2xl animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => {
              const active = isLinkActive(link.href);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                    active
                      ? "bg-cyan-500/15 border border-cyan-400/30 text-cyan-300 font-semibold"
                      : "text-[#d0d0d6] hover:bg-slate-800/50 hover:text-white"
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
}
