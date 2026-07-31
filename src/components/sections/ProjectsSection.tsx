"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Search, Sparkles, Code, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { FEATURED_PROJECTS, Project } from "@/data/portfolioData";
import { ProjectModal } from "../ui/ProjectModal";

export const ProjectsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const categories = ["All", "iOS / tvOS", "OTT Streaming", "Fullstack / Cloud", "E-Commerce"];

  const filteredProjects = FEATURED_PROJECTS.filter((proj) => {
    const matchesCat =
      selectedCategory === "All" || proj.category === selectedCategory;
    const matchesSearch =
      proj.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      proj.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      proj.tech.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCat && matchesSearch;
  });

  return (
    <section id="projects" className="py-24 relative">
      {/* Modal viewer */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="text-xs font-mono tracking-widest text-[#0A84FF] uppercase">
            // Portfolio Showcase
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
            Featured <span className="gradient-text-apple">Engineering Projects</span>
          </h2>
          <p className="text-sm sm:text-base text-zinc-400">
            A curated selection of high-concurrency video platforms, SaaS applications, AI media engines, and retail e-commerce solutions.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-12 bg-zinc-900/60 p-3 rounded-2xl border border-white/10 backdrop-blur-md">
          
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

          <div className="relative w-full md:w-64">
            <Search className="w-4 h-4 text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search projects or tech..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 bg-zinc-950 rounded-xl border border-white/10 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-[#0A84FF]"
            />
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              whileHover={{ y: -6 }}
              className="linear-card p-8 flex flex-col justify-between space-y-6 group"
            >
              <div className="space-y-4 text-left">
                {/* Header Category & External URL */}
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full bg-[#0A84FF]/10 border border-[#0A84FF]/30 text-[11px] font-mono text-[#0A84FF] font-medium">
                    {project.category}
                  </span>

                  {project.url && (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-zinc-400 hover:text-white flex items-center gap-1 font-mono transition-colors"
                    >
                      Live Link <ArrowUpRight className="w-3.5 h-3.5 text-[#0A84FF]" />
                    </a>
                  )}
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-[#0A84FF] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-zinc-400 font-mono mt-0.5">{project.subtitle}</p>
                </div>

                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                  {project.description}
                </p>

                {/* Key Features Bullet Summary */}
                <div className="space-y-1.5 pt-2">
                  {project.keyFeatures.slice(0, 3).map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-2 text-xs text-zinc-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0A84FF]" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer: Tech Badges & View Architecture Details Button */}
              <div className="space-y-4 pt-4 border-t border-white/10 text-left">
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-lg bg-zinc-900 border border-white/10 text-[11px] font-mono text-zinc-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-2">
                  <button
                    onClick={() => setActiveModalProject(project)}
                    className="text-xs font-semibold text-[#0A84FF] hover:text-white flex items-center gap-1 transition-colors"
                  >
                    View Architecture Details →
                  </button>

                  {project.metrics && (
                    <span className="text-[11px] text-emerald-400 font-mono">
                      {project.metrics.split(" ")[0]} {project.metrics.split(" ")[1]}
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-16 text-zinc-500 text-sm">
            No projects found matching search query.
          </div>
        )}

      </div>
    </section>
  );
};
