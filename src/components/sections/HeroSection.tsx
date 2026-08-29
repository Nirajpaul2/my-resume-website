"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download, Mail, Play, Code, Sparkles, ChevronDown, CheckCircle2, ExternalLink } from "lucide-react";
import { PERSONAL_DATA } from "@/data/portfolioData";

export const HeroSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"preview" | "swift">("preview");

  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-44 md:pb-32 overflow-hidden">
      {/* Background Glow Mesh */}
      <div className="hero-glow" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Typography */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Status Pill Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-zinc-900/80 border border-white/10 text-xs font-medium text-zinc-300 backdrop-blur-md shadow-lg"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span>Available for Enterprise iOS & tvOS Consulting</span>
              <span className="text-zinc-500">|</span>
              <span className="text-[#0A84FF] font-semibold">{PERSONAL_DATA.location}</span>
            </motion.div>

            {/* Main Headline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-2"
            >
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.08]">
                Architecting <br />
                <span className="gradient-text-apple">High-Performance</span> <br />
                iOS & Apple TV Apps.
              </h1>
              <p className="text-lg sm:text-xl text-zinc-400 max-w-2xl pt-2 font-normal leading-relaxed">
                {PERSONAL_DATA.shortIntro}
              </p>
            </motion.div>

            {/* Specialization Tags Pill Row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-wrap gap-2 pt-1"
            >
              {PERSONAL_DATA.specializations.slice(0, 6).map((spec) => (
                <span
                  key={spec}
                  className="px-3 py-1 rounded-md bg-zinc-900/60 border border-white/10 text-xs font-medium text-zinc-300 hover:border-[#0A84FF]/40 transition-colors"
                >
                  {spec}
                </span>
              ))}
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap items-center gap-3 pt-4"
            >
              <a
                href="#contact"
                className="px-6 py-3.5 text-sm font-semibold text-white bg-gradient-to-r from-[#0A84FF] to-[#0066CC] hover:from-[#0066CC] hover:to-[#0A84FF] rounded-xl shadow-xl shadow-[#0A84FF]/25 flex items-center gap-2 transition-all hover:scale-105 active:scale-95"
              >
                Hire Me <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={PERSONAL_DATA.resumeUrl}
                download="Niraj_Paul_Senior_iOS_Developer_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 text-sm font-semibold text-zinc-200 bg-zinc-900/90 hover:bg-zinc-800 border border-white/10 hover:border-white/20 rounded-xl flex items-center gap-2 transition-all hover:scale-105 active:scale-95"
              >
                <Download className="w-4 h-4 text-[#0A84FF]" /> Download Resume
              </a>

              <a
                href="#projects"
                className="px-5 py-3.5 text-sm font-semibold text-zinc-400 hover:text-white bg-transparent hover:bg-white/5 rounded-xl flex items-center gap-2 transition-all"
              >
                See Projects
              </a>
            </motion.div>

            {/* Quick Experience Trust Metric */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="pt-6 flex items-center gap-8 border-t border-white/10 text-zinc-400 text-xs"
            >
              <div>
                <span className="block text-xl font-bold text-white font-mono">11+ Years</span>
                <span>iOS Engineering</span>
              </div>
              <div className="h-8 w-px bg-white/10" />
              <div>
                <span className="block text-xl font-bold text-white font-mono">50M+</span>
                <span>Active Streaming Users</span>
              </div>
              <div className="h-8 w-px bg-white/10" />
              <div>
                <span className="block text-xl font-bold text-white font-mono">Top Brands</span>
                <span>Tegna, SonyLIV, Fabindia</span>
              </div>
            </motion.div>

          </div>

          {/* Right Floating Device Mockup & Avatar Card */}
          <div className="lg:col-span-5 relative flex justify-center">
            
            {/* Floating Swift Logo */}
            <motion.div
              animate={{ y: [-10, 10, -10], rotate: [0, 4, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-8 -left-6 z-30 p-3 rounded-2xl bg-gradient-to-tr from-[#F05138] to-[#FFB03A] shadow-xl shadow-[#F05138]/30 flex items-center gap-2 text-white text-xs font-bold font-mono"
            >
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path d="M21.5 14c-1.3-1.6-3.8-3.4-6.4-4.5.3.8.4 1.7.3 2.6 1.7.8 3.3 2 4.4 3.4.4.5.2 1.3-.4 1.6-.2.1-.5.1-.7.1-1.8 0-3.6-.6-5.2-1.7 1 1.6 1.4 3.5 1.1 5.3-.1.6-.7 1-1.3.9-.1 0-.2 0-.3-.1-1.5-.7-2.7-1.9-3.4-3.4-.6 1.5-1.7 2.7-3.2 3.5-.6.3-1.3.1-1.6-.5 0-.1-.1-.2-.1-.3 0-1.8.6-3.6 1.7-5.1-1.5 1-3.2 1.5-5 1.4-.6 0-1.1-.5-1.1-1.1 0-.2.1-.5.2-.7 1.3-1.6 3.1-2.7 5.1-3.3-.4-.8-.6-1.7-.6-2.6 0-1.2.4-2.4 1.1-3.4C7.8 8.6 10.4 10 13 11c-.2-.9-.2-1.8.1-2.7C14 6.8 15.3 5.7 17 5c.6-.2 1.2.1 1.4.7.1.2.1.5.1.7 0 1.5-.5 3-1.4 4.3 1.9 1.1 3.4 2.7 4.4 4.7.3.6 0 1.3-.6 1.6-.1 0-.3.1-.4.0z" />
              </svg>
              Swift 6 & SwiftUI
            </motion.div>

            {/* Apple TV / iPhone Frame Glass Container */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="w-full max-w-md rounded-3xl bg-zinc-900/90 border border-white/15 p-4 shadow-2xl backdrop-blur-xl relative overflow-hidden"
            >
              {/* Card Header Switcher */}
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-[#0A84FF]/20 border border-[#0A84FF]/40 flex items-center justify-center text-xs font-bold text-[#0A84FF]">
                    NP
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-white leading-tight">Niraj Paul</h3>
                    <p className="text-[10px] text-zinc-400">Senior iOS Developer</p>
                  </div>
                </div>

                <div className="flex items-center gap-1 bg-zinc-950 p-1 rounded-lg border border-white/10 text-[11px]">
                  <button
                    onClick={() => setActiveTab("preview")}
                    className={`px-2.5 py-1 rounded-md transition-colors ${
                      activeTab === "preview" ? "bg-[#0A84FF] text-white font-medium" : "text-zinc-400"
                    }`}
                  >
                    OTT Player
                  </button>
                  <button
                    onClick={() => setActiveTab("swift")}
                    className={`px-2.5 py-1 rounded-md transition-colors ${
                      activeTab === "swift" ? "bg-[#0A84FF] text-white font-medium" : "text-zinc-400"
                    }`}
                  >
                    Swift Code
                  </button>
                </div>
              </div>

              {/* Dynamic Content Body */}
              <div className="pt-4">
                {activeTab === "preview" ? (
                  <div className="space-y-3">
                    {/* Live 4K Video Player Screen */}
                    <div className="relative rounded-xl overflow-hidden aspect-video bg-zinc-950 border border-white/10 shadow-2xl group">
                      <iframe
                        src="https://www.youtube.com/embed/Z58A6DTNclE?autoplay=0&rel=0&start=4"
                        title="Niraj Paul Live Project Showcase"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="w-full h-full border-0 relative z-10"
                      />

                      {/* Live Streaming Badge */}
                      <div className="absolute top-2 left-2 z-20 px-2 py-0.5 rounded bg-rose-600/90 text-[10px] font-bold text-white tracking-wider flex items-center gap-1 pointer-events-none">
                        <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
                        LIVE DEMO
                      </div>
                    </div>

                    <div className="space-y-1 text-left">
                      <div className="flex items-center justify-between">
                        <h4 className="text-xs font-semibold text-white">Live System Showcase</h4>
                        <a
                          href="https://www.youtube.com/watch?v=Z58A6DTNclE"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[10px] font-mono text-[#0A84FF] hover:underline flex items-center gap-0.5"
                        >
                          Watch on YouTube <ExternalLink className="w-2.5 h-2.5" />
                        </a>
                      </div>
                      <p className="text-[11px] text-zinc-400">
                        Demonstrating live architecture, real-time seat reservation, and high-concurrency streaming.
                      </p>
                    </div>

                    <div className="pt-2 flex items-center justify-between text-[11px] text-zinc-500 font-mono border-t border-white/5">
                      <span>Latency: 1.2s</span>
                      <span>DRM: FairPlay</span>
                      <span>FPS: 60</span>
                    </div>
                  </div>
                ) : (
                  <div className="rounded-xl bg-zinc-950 p-3 border border-white/10 font-mono text-[11px] text-zinc-300 text-left overflow-x-auto">
                    <div className="text-zinc-500">// SwiftUI AVPlayer Pipeline</div>
                    <div><span className="text-[#0A84FF]">import</span> SwiftUI</div>
                    <div><span className="text-[#0A84FF]">import</span> AVKit</div>
                    <div><span className="text-[#0A84FF]">import</span> Combine</div>
                    <br />
                    <div><span className="text-[#7C3AED]">struct</span> <span className="text-emerald-400">OTTStreamView</span>: View &#123;</div>
                    <div className="pl-3"><span className="text-[#F05138]">@StateObject</span> <span className="text-white">var</span> engine = VideoEngine()</div>
                    <div className="pl-3"><span className="text-[#0A84FF]">var</span> body: <span className="text-[#0A84FF]">some</span> View &#123;</div>
                    <div className="pl-6 text-emerald-300">AVPlayerOverlay(player: engine.player)</div>
                    <div className="pl-9 text-amber-300">.onReceive(engine.$bitrate) &#123; _ in &#125;</div>
                    <div className="pl-3">&#125;</div>
                    <div>&#125;</div>
                  </div>
                )}
              </div>

            </motion.div>
          </div>

        </div>

        {/* Scroll Indicator */}
        <div className="pt-16 flex justify-center">
          <a href="#about" className="flex flex-col items-center gap-1.5 text-zinc-500 hover:text-white transition-colors group">
            <span className="text-[11px] font-mono tracking-widest uppercase">Explore Experience</span>
            <ChevronDown className="w-4 h-4 animate-bounce group-hover:text-[#0A84FF]" />
          </a>
        </div>
      </div>
    </section>
  );
};
