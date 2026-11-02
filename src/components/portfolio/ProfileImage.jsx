"use client";
import React, { useState } from "react";
import { User } from "lucide-react";

/* 
  Profile Image Component:
  - Glowing Neon Circle & Tech Grid positioned BEHIND the photo (z-0)
  - Developer photo positioned IN FRONT (z-10), popping outside the circle frame
  - Exactly matching screenshot layout
*/
const PROFILE_IMAGE_URL = "";

export default function ProfileImage({
  customSrc = PROFILE_IMAGE_URL,
  className = "",
}) {
  const [imageError, setImageError] = useState(false);
  const activeSrc = customSrc || PROFILE_IMAGE_URL;

  const isValidSrc =
    typeof activeSrc === "string" &&
    (activeSrc.startsWith("/") ||
      activeSrc.startsWith("http://") ||
      activeSrc.startsWith("https://"));

  return (
    <div
      className={`relative flex aspect-square w-full max-w-[460px] select-none items-center justify-center mx-auto my-auto ${className}`}
    >
      {/* 1. SOFT AMBIENT GLOW BACKDROP (BEHIND CIRCLE) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[75%] h-[75%] rounded-full bg-gradient-to-tr from-cyan-500/30 via-blue-600/20 to-purple-600/35 blur-3xl pointer-events-none z-0" />

      {/* 2. GLOWING NEON CIRCLE WITH TECH GRID (BEHIND THE PERSON IMAGE) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[76%] h-[76%] sm:w-[78%] sm:h-[78%] rounded-full p-[3.5px] bg-gradient-to-tr from-cyan-400 via-blue-500 to-purple-600 shadow-[0_0_50px_rgba(0,212,255,0.4)] pointer-events-none z-0">
        {/* Dark Circle Interior with Tech Grid */}
        <div className="relative w-full h-full rounded-full bg-[#050814] overflow-hidden">
          {/* Tech Constellation & Hexagonal Grid Lines inside Circle */}
          <div className="absolute inset-0 opacity-45">
            <svg viewBox="0 0 400 400" className="w-full h-full">
              {/* Concentric Tech Orbits */}
              <circle
                cx="200"
                cy="200"
                r="180"
                stroke="#00d4ff"
                strokeWidth="0.8"
                strokeDasharray="4 8"
                fill="none"
              />
              <circle
                cx="200"
                cy="200"
                r="135"
                stroke="#8b5cf6"
                strokeWidth="0.6"
                strokeDasharray="3 6"
                fill="none"
              />
              <circle
                cx="200"
                cy="200"
                r="90"
                stroke="#3b82f6"
                strokeWidth="0.5"
                strokeDasharray="2 4"
                fill="none"
              />

              {/* Hexagonal / Grid Mesh Lines */}
              <path
                d="M 100 100 L 200 50 L 300 100 L 300 200 L 200 250 L 100 200 Z"
                stroke="#00d4ff"
                strokeWidth="0.4"
                strokeDasharray="3 3"
                fill="none"
              />
              <path
                d="M 50 200 L 100 100 M 350 200 L 300 100 M 200 350 L 200 250"
                stroke="#8b5cf6"
                strokeWidth="0.4"
                strokeDasharray="3 3"
                fill="none"
              />

              {/* Glowing Constellation Orbit Nodes */}
              <circle
                cx="80"
                cy="140"
                r="3.5"
                fill="#00d4ff"
                className="animate-pulse"
              />
              <circle
                cx="330"
                cy="180"
                r="4"
                fill="#a855f7"
                className="animate-pulse"
              />
              <circle
                cx="310"
                cy="300"
                r="3.5"
                fill="#3b82f6"
                className="animate-pulse"
              />
              <circle cx="90" cy="290" r="3" fill="#00d4ff" />
            </svg>
          </div>
        </div>
      </div>

      {/* 3. FOREGROUND DEVELOPER PERSON IMAGE (IN FRONT OF THE CIRCLE - POPPING OUT) */}
      <div className="relative z-10 w-full h-full flex items-center justify-center">
        {isValidSrc && !imageError ? (
          <div className="relative w-[96%] h-[96%] flex items-center justify-center">
            <img
              src={activeSrc}
              alt="Usama Javed - MERN Stack Developer"
              className="w-full h-full object-contain object-bottom mix-blend-lighten transform scale-105 transition-transform duration-500 hover:scale-110"
              onError={() => setImageError(true)}
            />
            {/* Bottom Subtle Gradient Blend so torso edge fades nicely into page background */}
            <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-[#030712] via-[#030712]/60 to-transparent pointer-events-none" />
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center p-6 text-center text-[#a1a1aa]">
            <div className="w-16 h-16 rounded-full bg-[#101014] border border-cyan-400/30 flex items-center justify-center text-cyan-400 mb-3 shadow-[0_0_15px_rgba(0,212,255,0.2)]">
              <User className="w-8 h-8" />
            </div>
            <span className="text-sm font-bold text-white mb-1">
              Usama Javed
            </span>
            <span className="text-xs text-[#a1a1aa] font-mono">
              MERN Stack Developer
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
