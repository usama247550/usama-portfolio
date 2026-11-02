"use client";
import React from "react";

export default function Logo() {
  return (
    <a
      href="#home"
      className="group flex items-center focus:outline-none transition-transform duration-300 hover:scale-[1.02]"
      aria-label="Usama Javed Portfolio Home"
    >
      <div className="flex flex-col leading-tight">
        <span className="text-base font-extrabold tracking-wide text-white sm:text-lg">
          USAMA <span className="text-gradient">JAVED</span>
        </span>
        <span className="text-[10px] font-medium tracking-wide text-[#a1a1aa] sm:text-xs">
          MERN Stack Developer
        </span>
      </div>
    </a>
  );
}
