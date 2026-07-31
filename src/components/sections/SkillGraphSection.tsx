"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { GitCommit, Cpu, Share2, Sparkles } from "lucide-react";

export const SkillGraphSection: React.FC = () => {
  const [selectedNode, setSelectedNode] = useState<string>("SwiftUI & AVPlayer");

  const nodes = [
    { id: "swift", label: "Swift 6 / Concurrency", category: "Language", desc: "Strict data race safety & async/await actors." },
    { id: "swiftui", label: "SwiftUI & Custom Layouts", category: "UI Engine", desc: "Declarative UI primitives, metal renderers & tvOS Focus." },
    { id: "avplayer", label: "AVPlayer & HLS Stream", category: "Media Engine", desc: "Low-latency ABR, chapter scrubbing, and SSAI ad insertion." },
    { id: "drm", label: "FairPlay DRM", category: "Security", desc: "Encrypted stream key exchange & content protection." },
    { id: "combine", label: "Combine & Reactive State", category: "Architecture", desc: "Publisher pipelines, state streams & MVVM binding." },
    { id: "ci", label: "Fastlane & GitHub Actions", category: "DevOps", desc: "Automated test suites & TestFlight / App Store submission." }
  ];

  // Deterministic contribution grid pattern to ensure server & client HTML hydration match 100%
  const generateContributionDays = () => {
    const days = [];
    for (let i = 0; i < 180; i++) {
      // Deterministic math formula derived from index (0, 1, 2, 3)
      const level = (i * 7 + (i % 5) * 3 + 2) % 4;
      days.push(level);
    }
    return days;
  };

  const contributionGrid = generateContributionDays();

  return (
    <section className="py-24 relative bg-zinc-950/40 border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-mono tracking-widest text-[#0A84FF] uppercase">
            // Ecosystem & Activity Graph
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
            Architecture Dependency <span className="gradient-text-apple">Graph</span>
          </h2>
          <p className="text-sm sm:text-base text-zinc-400">
            Interactive breakdown of Niraj&apos;s modular iOS architecture dependencies and continuous commit history.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Dependency Node Cards */}
          <div className="lg:col-span-7 linear-card p-6 flex flex-col justify-between space-y-6">
            <div>
              <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                <Share2 className="w-5 h-5 text-[#0A84FF]" /> Core System Modules
              </h3>
              <p className="text-xs text-zinc-400 mb-6">
                Click any module node below to inspect architectural role and integration bindings.
              </p>

              <div className="grid grid-cols-2 gap-3">
                {nodes.map((node) => {
                  const isSelected = selectedNode === node.label;
                  return (
                    <button
                      key={node.id}
                      onClick={() => setSelectedNode(node.label)}
                      className={`p-3 rounded-xl text-left border transition-all ${
                        isSelected
                          ? "bg-[#0A84FF]/20 border-[#0A84FF] shadow-lg shadow-[#0A84FF]/20"
                          : "bg-zinc-900/60 border-white/10 hover:border-white/20"
                      }`}
                    >
                      <span className="text-[10px] font-mono uppercase text-[#0A84FF] block">
                        {node.category}
                      </span>
                      <span className="text-xs font-bold text-white block mt-0.5">
                        {node.label}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Selected Node Details Display */}
            <div className="p-4 rounded-xl bg-zinc-950 border border-white/10 text-left space-y-1">
              <span className="text-[11px] font-mono text-zinc-500">Selected Component:</span>
              <h4 className="text-sm font-bold text-white">{selectedNode}</h4>
              <p className="text-xs text-zinc-300">
                {nodes.find((n) => n.label === selectedNode)?.desc}
              </p>
            </div>
          </div>

          {/* Right Simulated GitHub Contribution Heatmap */}
          <div className="lg:col-span-5 linear-card p-6 flex flex-col justify-between space-y-6">
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <GitCommit className="w-5 h-5 text-emerald-400" /> Continuous Commit Activity
                </h3>
                <span className="text-xs font-mono text-emerald-400 font-bold">1,840+ Commits</span>
              </div>
              <p className="text-xs text-zinc-400 mb-6">
                Active contribution stream maintaining high code quality across client repositories and open-source tooling.
              </p>

              {/* Heatmap Grid */}
              <div className="grid grid-cols-18 gap-1.5 p-3 rounded-xl bg-zinc-950 border border-white/10 overflow-x-auto">
                {contributionGrid.map((lvl, idx) => {
                  let bgClass = "bg-zinc-900";
                  if (lvl === 1) bgClass = "bg-emerald-950 border border-emerald-800";
                  if (lvl === 2) bgClass = "bg-emerald-700";
                  if (lvl === 3) bgClass = "bg-emerald-400 shadow-sm shadow-emerald-400";

                  return (
                    <div
                      key={idx}
                      className={`w-3 h-3 rounded-sm ${bgClass} transition-colors hover:scale-125`}
                      title={`Activity index: ${lvl}`}
                    />
                  );
                })}
              </div>
            </div>

            <div className="flex items-center justify-between text-xs text-zinc-400 pt-4 border-t border-white/10 font-mono">
              <span>Less</span>
              <div className="flex items-center gap-1">
                <span className="w-2.5 h-2.5 rounded-sm bg-zinc-900" />
                <span className="w-2.5 h-2.5 rounded-sm bg-emerald-950" />
                <span className="w-2.5 h-2.5 rounded-sm bg-emerald-700" />
                <span className="w-2.5 h-2.5 rounded-sm bg-emerald-400" />
              </div>
              <span>More</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
