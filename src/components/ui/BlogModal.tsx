"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Clock, Calendar, Tag, BookOpen, Share2 } from "lucide-react";
import { Article } from "@/data/portfolioData";

interface BlogModalProps {
  article: Article | null;
  onClose: () => void;
}

export const BlogModal: React.FC<BlogModalProps> = ({ article, onClose }) => {
  if (!article) return null;

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
          {/* Header */}
          <div className="p-6 border-b border-white/10 flex items-center justify-between bg-zinc-900/60">
            <div>
              <div className="flex items-center gap-3 text-xs text-zinc-400 font-mono mb-1">
                <span className="text-[#0A84FF] font-semibold">{article.topic}</span>
                <span>•</span>
                <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {article.date}</span>
                <span>•</span>
                <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {article.readTime}</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white leading-tight">
                {article.title}
              </h3>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-full bg-zinc-800 text-zinc-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Article Body */}
          <div className="p-6 overflow-y-auto space-y-6 text-left font-sans text-sm text-zinc-300 leading-relaxed">
            <div className="p-4 rounded-xl bg-zinc-900 border border-white/10 italic text-zinc-400">
              {article.excerpt}
            </div>

            <div className="prose prose-invert max-w-none space-y-4">
              {article.content.split("\n\n").map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            <div className="pt-6 border-t border-white/10 flex items-center justify-between">
              <div className="flex flex-wrap gap-1.5">
                {article.tags.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 rounded-md bg-zinc-900 border border-white/10 text-xs font-mono text-zinc-400"
                  >
                    #{t}
                  </span>
                ))}
              </div>

              <button
                onClick={() => {
                  navigator.clipboard.writeText(window.location.href);
                  alert("Article link copied!");
                }}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-xs font-medium text-white transition-colors"
              >
                <Share2 className="w-3.5 h-3.5" /> Share Article
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
