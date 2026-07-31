"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Cpu, Search, Sparkles, Code2, Layers, Terminal } from "lucide-react";
import { SKILL_CATEGORIES } from "@/data/portfolioData";

export const TechStackSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const categories = ["All", ...SKILL_CATEGORIES.map((cat) => cat.title)];

  const allSkills = SKILL_CATEGORIES.flatMap((cat) =>
    cat.skills.map((s) => ({ ...s, parentCategory: cat.title }))
  );

  const filteredSkills = allSkills.filter((skill) => {
    const matchesCat =
      selectedCategory === "All" || skill.parentCategory === selectedCategory;
    const matchesSearch = skill.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <section id="skills" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="text-xs font-mono tracking-widest text-[#0A84FF] uppercase">
            // Technology Stack & Tooling
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
            Architectural <span className="gradient-text-apple">Mastery</span> & Frameworks
          </h2>
          <p className="text-sm sm:text-base text-zinc-400">
            Proven track record utilizing cutting-edge Apple ecosystem libraries, high-performance video streaming frameworks, and automated CI/CD pipelines.
          </p>
        </div>

        {/* Search & Category Filter Controls */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-12 bg-zinc-900/60 p-3 rounded-2xl border border-white/10 backdrop-blur-md">
          
          {/* Category Tabs */}
          <div className="flex items-center gap-1 overflow-x-auto w-full md:w-auto p-1">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-medium whitespace-nowrap transition-all ${
                  selectedCategory === cat
                    ? "bg-[#0A84FF] text-white shadow-lg shadow-[#0A84FF]/25 font-semibold"
                    : "text-zinc-400 hover:text-white hover:bg-white/5"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Instant Search Bar */}
          <div className="relative w-full md:w-64">
            <Search className="w-4 h-4 text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search skill (e.g. Swift, HLS)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 bg-zinc-950 rounded-xl border border-white/10 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-[#0A84FF]"
            />
          </div>
        </div>

        {/* Skill Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {filteredSkills.map((skill, idx) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: idx * 0.02 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className={`p-4 rounded-2xl glass-panel-hover flex flex-col justify-between space-y-3 relative overflow-hidden group ${
                skill.highlight ? "border-[#0A84FF]/30 bg-zinc-900/80" : "bg-zinc-900/40"
              }`}
            >
              {/* Highlight Star Badge */}
              {skill.highlight && (
                <div className="absolute top-2 right-2">
                  <Sparkles className="w-3.5 h-3.5 text-[#0A84FF]" />
                </div>
              )}

              <div>
                <span className="text-[10px] font-mono uppercase text-zinc-500 block mb-1">
                  {skill.category}
                </span>
                <h4 className="text-sm font-bold text-white group-hover:text-[#0A84FF] transition-colors">
                  {skill.name}
                </h4>
              </div>

              {/* Progress Bar & Level Metric */}
              <div className="space-y-1 pt-2 border-t border-white/5">
                <div className="flex justify-between text-[10px] font-mono text-zinc-400">
                  <span>Proficiency</span>
                  <span className="text-white font-bold">{skill.level}%</span>
                </div>
                <div className="h-1.5 w-full bg-zinc-800 rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full transition-all duration-1000 ${
                      skill.highlight
                        ? "bg-gradient-to-r from-[#0A84FF] to-[#7C3AED]"
                        : "bg-zinc-500 group-hover:bg-[#0A84FF]"
                    }`}
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredSkills.length === 0 && (
          <div className="text-center py-12 text-zinc-500 text-sm">
            No technologies found matching &quot;{searchQuery}&quot;. Try resetting search.
          </div>
        )}

      </div>
    </section>
  );
};
