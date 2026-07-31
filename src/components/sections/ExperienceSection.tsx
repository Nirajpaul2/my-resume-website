"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, Award, ChevronRight, CheckCircle2, Building2 } from "lucide-react";
import { WORK_EXPERIENCES } from "@/data/portfolioData";

export const ExperienceSection: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string>(WORK_EXPERIENCES[0].id);

  return (
    <section id="experience" className="py-24 relative bg-zinc-950/40 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-mono tracking-widest text-[#0A84FF] uppercase">
            // Career History
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
            11+ Years of <span className="gradient-text-apple">Impactful Leadership</span>
          </h2>
          <p className="text-sm sm:text-base text-zinc-400">
            Proven track record leading video streaming pipelines, e-commerce checkout platforms, and broadcast news applications.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="relative max-w-4xl mx-auto">
          
          {/* Vertical Glowing Line */}
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#0A84FF] via-[#7C3AED] to-zinc-800 -translate-x-1/2 hidden sm:block" />

          <div className="space-y-12">
            {WORK_EXPERIENCES.map((exp, index) => {
              const isEven = index % 2 === 0;
              const isExpanded = expandedId === exp.id;

              return (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative flex flex-col sm:flex-row items-center gap-8 ${
                    isEven ? "sm:flex-row-reverse" : ""
                  }`}
                >
                  {/* Timeline Center Node */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-zinc-950 border-2 border-[#0A84FF] flex items-center justify-center text-xs font-bold text-white shadow-lg shadow-[#0A84FF]/30 z-10 hidden sm:flex">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#0A84FF] animate-pulse" />
                  </div>

                  {/* Card Container */}
                  <div className="w-full sm:w-[calc(50%-2rem)]">
                    <div
                      onClick={() => setExpandedId(isExpanded ? "" : exp.id)}
                      className={`linear-card p-6 cursor-pointer transition-all duration-300 ${
                        isExpanded ? "border-[#0A84FF]/50 shadow-2xl shadow-[#0A84FF]/10" : "hover:border-white/20"
                      }`}
                    >
                      {/* Company & Role Header */}
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-[#0A84FF]/20 to-[#7C3AED]/20 border border-white/10 flex items-center justify-center font-mono font-bold text-lg text-white">
                            {exp.logo}
                          </div>
                          <div>
                            <h3 className="text-lg font-bold text-white group-hover:text-[#0A84FF] transition-colors">
                              {exp.company}
                            </h3>
                            <p className="text-xs font-semibold text-[#0A84FF]">
                              {exp.role}
                            </p>
                          </div>
                        </div>

                        <span className="px-2.5 py-1 rounded-md bg-zinc-900 border border-white/10 text-[11px] font-mono text-zinc-300 whitespace-nowrap">
                          {exp.duration}
                        </span>
                      </div>

                      {/* Location & Period Meta */}
                      <div className="flex items-center gap-4 text-xs text-zinc-400 mt-4 pt-3 border-t border-white/5">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5 text-zinc-500" />
                          {exp.period}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5 text-zinc-500" />
                          {exp.location}
                        </span>
                      </div>

                      <p className="text-xs text-zinc-300 mt-3 leading-relaxed">
                        {exp.description}
                      </p>

                      {/* Achievements List */}
                      {isExpanded && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="mt-4 pt-4 border-t border-white/10 space-y-2"
                        >
                          <h4 className="text-xs font-mono text-[#0A84FF] uppercase font-semibold">
                            Key Achievements & Impact:
                          </h4>
                          {exp.achievements.map((ach, i) => (
                            <div key={i} className="flex items-start gap-2 text-xs text-zinc-300">
                              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                              <span>{ach}</span>
                            </div>
                          ))}
                        </motion.div>
                      )}

                      {/* Tech Stack Badges */}
                      <div className="mt-4 pt-3 border-t border-white/5 flex flex-wrap gap-1.5">
                        {exp.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-0.5 rounded bg-zinc-900 border border-white/10 text-[10px] font-mono text-zinc-400"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
