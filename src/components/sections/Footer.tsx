"use client";

import React from "react";
import { Mail, ArrowUp } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "../ui/Icons";
import { PERSONAL_DATA } from "@/data/portfolioData";

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-12 border-t border-white/10 bg-[#09090B] text-zinc-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left Brand & Status */}
        <div className="flex items-center gap-4">
          <span className="font-mono text-white font-bold text-sm">Niraj Paul</span>
          <span className="text-zinc-600">|</span>
          <span className="flex items-center gap-1.5 text-[11px] text-zinc-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
            System Status: 100% Operational
          </span>
        </div>

        {/* Center Quick Links */}
        <div className="flex items-center gap-6 text-xs text-zinc-400">
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#skills" className="hover:text-white transition-colors">Tech Stack</a>
          <a href="#experience" className="hover:text-white transition-colors">Experience</a>
          <a href="#projects" className="hover:text-white transition-colors">Projects</a>
          <a href="#blog" className="hover:text-white transition-colors">Articles</a>
        </div>

        {/* Right Social Icons & Back To Top */}
        <div className="flex items-center gap-4">
          <a
            href={PERSONAL_DATA.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white transition-colors"
            title="GitHub"
          >
            <GithubIcon className="w-4 h-4" />
          </a>

          <a
            href={PERSONAL_DATA.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white transition-colors"
            title="LinkedIn"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>

          <a
            href={`mailto:${PERSONAL_DATA.email}`}
            className="p-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white transition-colors"
            title="Email"
          >
            <Mail className="w-4 h-4" />
          </a>

          <button
            onClick={scrollToTop}
            className="p-2 rounded-lg bg-[#0A84FF]/10 text-[#0A84FF] hover:bg-[#0A84FF] hover:text-white transition-all ml-2"
            title="Back to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 pt-6 border-t border-white/5 text-center text-[11px] text-zinc-600 font-mono">
        © {new Date().getFullYear()} Niraj Paul. All rights reserved. Crafted with Next.js, SwiftUI inspiration & Linear aesthetics.
      </div>
    </footer>
  );
};
