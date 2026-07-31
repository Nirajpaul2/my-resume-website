"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, CheckCircle2, Layers, Cpu, Sparkles } from "lucide-react";
import { GithubIcon } from "./Icons";
import { Project } from "@/data/portfolioData";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25 }}
          className="w-full max-w-3xl bg-[#121215] border border-white/15 rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
        >
          {/* Modal Header */}
          <div className="p-6 border-b border-white/10 flex items-center justify-between bg-zinc-900/50">
            <div>
              <span className="text-[11px] font-mono uppercase text-[#0A84FF] tracking-wider">
                {project.category}
              </span>
              <h3 className="text-2xl font-bold text-white mt-1">{project.title}</h3>
              <p className="text-xs text-zinc-400">{project.subtitle}</p>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-full bg-zinc-800 text-zinc-400 hover:text-white hover:bg-zinc-700 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Body */}
          <div className="p-6 overflow-y-auto space-y-6 text-left">
            <div>
              <h4 className="text-xs font-mono uppercase text-zinc-400 mb-2">Overview</h4>
              <p className="text-sm text-zinc-300 leading-relaxed">
                {project.fullDescription}
              </p>
            </div>

            {project.metrics && (
              <div className="p-4 rounded-xl bg-[#0A84FF]/10 border border-[#0A84FF]/30 flex items-center gap-3">
                <Sparkles className="w-5 h-5 text-[#0A84FF] shrink-0" />
                <span className="text-xs font-semibold text-white font-mono">
                  Impact Metric: {project.metrics}
                </span>
              </div>
            )}

            {/* Key Features */}
            <div>
              <h4 className="text-xs font-mono uppercase text-zinc-400 mb-3">Core Features & Architecture</h4>
              <div className="space-y-2">
                {project.keyFeatures.map((feat, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-zinc-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack Badges */}
            <div>
              <h4 className="text-xs font-mono uppercase text-zinc-400 mb-3">Technologies Used</h4>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 rounded-lg bg-zinc-900 border border-white/10 text-xs font-mono text-white"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Modal Footer */}
          <div className="p-6 border-t border-white/10 bg-zinc-950/80 flex items-center justify-between">
            <span className="text-xs text-zinc-500 font-mono">Role: {project.role}</span>

            <div className="flex items-center gap-3">
              {project.url && (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2 text-xs font-semibold text-white bg-[#0A84FF] hover:bg-[#0066CC] rounded-xl flex items-center gap-1.5 transition-all shadow-lg shadow-[#0A84FF]/20"
                >
                  Visit Live Project <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
