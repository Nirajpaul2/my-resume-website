"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Zap, Tv, Cpu, Terminal, CheckCircle2, Award, Building2 } from "lucide-react";
import { PERSONAL_DATA } from "@/data/portfolioData";
import { TerminalWidget } from "../ui/TerminalWidget";

export const AboutSection: React.FC = () => {
  const [viewMode, setViewMode] = useState<"narrative" | "terminal">("narrative");

  const coreCompetencies = [
    {
      icon: Tv,
      title: "OTT & Video Streaming",
      desc: "Architected AVPlayer & HLS video pipelines with FairPlay DRM, ABR optimization, and SSAI/CSAI ad engines for SonyLIV & Tegna."
    },
    {
      icon: Cpu,
      title: "Swift & SwiftUI Mastery",
      desc: "Deep experience with reactive Combine pipelines, Swift 6 Concurrency (async/await, actors), and custom metal-backed SwiftUI layouts."
    },
    {
      icon: ShieldCheck,
      title: "Clean Architecture & Security",
      desc: "Enforcing scalable MVVM Clean Architecture, strict modularization via SPM, secure key storage, and end-to-end FairPlay DRM."
    },
    {
      icon: Zap,
      title: "Performance & Memory Audit",
      desc: "Profiling apps with Xcode Instruments to eliminate memory leaks, reduce app start time, and ensure constant 60fps scrolling."
    }
  ];

  return (
    <section id="about" className="py-24 relative bg-zinc-950/50 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-xs font-mono tracking-widest text-[#0A84FF] uppercase">
              // Engineering Background
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mt-2">
              11+ Years of <span className="gradient-text-apple">Apple Ecosystem</span> Leadership
            </h2>
          </div>

          {/* Narrative vs Terminal Toggle */}
          <div className="flex items-center gap-1 bg-zinc-900 p-1.5 rounded-xl border border-white/10 self-start md:self-auto">
            <button
              onClick={() => setViewMode("narrative")}
              className={`px-4 py-2 rounded-lg text-xs font-medium transition-all ${
                viewMode === "narrative"
                  ? "bg-[#0A84FF] text-white shadow-md"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              Overview
            </button>
            <button
              onClick={() => setViewMode("terminal")}
              className={`px-4 py-2 rounded-lg text-xs font-medium transition-all flex items-center gap-1.5 ${
                viewMode === "terminal"
                  ? "bg-[#0A84FF] text-white shadow-md"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              <Terminal className="w-3.5 h-3.5" /> macOS Terminal
            </button>
          </div>
        </div>

        {viewMode === "terminal" ? (
          <TerminalWidget />
        ) : (
          <div className="space-y-16">
            
            {/* Narrative & Enterprise Partners Grid */}
            <div className="grid lg:grid-cols-12 gap-8 items-stretch">
              
              {/* Left Bio Card */}
              <div className="lg:col-span-7 linear-card p-8 flex flex-col justify-between space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-white mb-4">
                    High-Performance Mobile Architect
                  </h3>
                  <p className="text-zinc-300 text-sm leading-relaxed mb-4">
                    {PERSONAL_DATA.detailedBio}
                  </p>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    Over the past decade, I have spearheaded the delivery of flagship consumer applications across iOS, tvOS, and macOS. My expertise spans low-level media player framework extensions, high-concurrency video streaming optimization, and building robust e-commerce checkout funnels.
                  </p>
                </div>

                {/* Core Expertise Tags */}
                <div className="pt-4 border-t border-white/10">
                  <h4 className="text-xs font-mono uppercase text-zinc-400 mb-3">Core Expertise</h4>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Swift", "SwiftUI", "UIKit", "tvOS", "Combine", "AVFoundation",
                      "Clean Architecture", "MVVM", "Performance Optimization",
                      "Security & DRM", "Animation"
                    ].map((item) => (
                      <span
                        key={item}
                        className="px-3 py-1 rounded-md bg-zinc-800/80 border border-white/10 text-xs font-medium text-white flex items-center gap-1.5"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#0A84FF]" />
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Enterprise Partners Showcase */}
              <div className="lg:col-span-5 linear-card p-8 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-bold text-white flex items-center gap-2">
                      <Building2 className="w-5 h-5 text-[#0A84FF]" /> Enterprise Brands
                    </h3>
                    <span className="text-xs font-mono text-zinc-500">11+ Yrs Track Record</span>
                  </div>

                  <div className="space-y-4">
                    {PERSONAL_DATA.companies.map((co) => (
                      <div
                        key={co.name}
                        className="p-4 rounded-xl bg-zinc-900/80 border border-white/10 hover:border-[#0A84FF]/40 transition-all flex items-center justify-between"
                      >
                        <div>
                          <h4 className="text-sm font-bold text-white">{co.name}</h4>
                          <p className="text-xs text-zinc-400">{co.role}</p>
                          <span className="text-[11px] text-zinc-500 mt-1 block">{co.description}</span>
                        </div>
                        <span className="w-8 h-8 rounded-lg bg-[#0A84FF]/10 text-[#0A84FF] font-mono text-xs font-bold flex items-center justify-center border border-[#0A84FF]/20">
                          {co.name.substring(0, 2).toUpperCase()}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-white/10 text-xs text-zinc-400">
                  <span className="text-white font-semibold">Enterprise Scale:</span> Apps handled 50M+ monthly users with &lt;0.02% crash rate.
                </div>
              </div>

            </div>

            {/* Core Competencies 4-Column Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {coreCompetencies.map((comp) => {
                const IconComponent = comp.icon;
                return (
                  <motion.div
                    key={comp.title}
                    whileHover={{ y: -4 }}
                    className="p-6 rounded-2xl bg-zinc-900/60 border border-white/10 hover:border-[#0A84FF]/40 transition-all space-y-3"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#0A84FF]/10 border border-[#0A84FF]/20 flex items-center justify-center text-[#0A84FF]">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <h4 className="text-base font-bold text-white">{comp.title}</h4>
                    <p className="text-xs text-zinc-400 leading-relaxed">{comp.desc}</p>
                  </motion.div>
                );
              })}
            </div>

          </div>
        )}

      </div>
    </section>
  );
};
