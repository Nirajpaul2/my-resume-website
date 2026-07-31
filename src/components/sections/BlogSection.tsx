"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { BookOpen, Clock, Tag, ArrowRight } from "lucide-react";
import { ARTICLES, Article } from "@/data/portfolioData";
import { BlogModal } from "../ui/BlogModal";

export const BlogSection: React.FC = () => {
  const [activeArticle, setActiveArticle] = useState<Article | null>(null);

  const topics = ["All", "SwiftUI", "Architecture", "Performance", "WWDC", "Concurrency", "AI"];
  const [selectedTopic, setSelectedTopic] = useState("All");

  const filteredArticles = ARTICLES.filter((art) => {
    if (selectedTopic === "All") return true;
    return art.topic === selectedTopic || art.tags.includes(selectedTopic);
  });

  return (
    <section id="blog" className="py-24 relative">
      <BlogModal
        article={activeArticle}
        onClose={() => setActiveArticle(null)}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="text-xs font-mono tracking-widest text-[#0A84FF] uppercase">
            // Thought Leadership & Articles
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
            Latest Technical <span className="gradient-text-apple">Insights</span>
          </h2>
          <p className="text-sm sm:text-base text-zinc-400">
            Deep dives into AVPlayer streaming engines, SwiftUI focus engines, Swift 6 concurrency, and enterprise app design.
          </p>
        </div>

        {/* Topic Filters */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto mb-12 pb-2">
          {topics.map((t) => (
            <button
              key={t}
              onClick={() => setSelectedTopic(t)}
              className={`px-4 py-2 rounded-xl text-xs font-medium transition-all ${
                selectedTopic === t
                  ? "bg-[#0A84FF] text-white shadow-lg shadow-[#0A84FF]/25"
                  : "bg-zinc-900/60 border border-white/10 text-zinc-400 hover:text-white"
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        {/* Articles Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {filteredArticles.map((article, idx) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              whileHover={{ y: -6 }}
              className="linear-card p-6 flex flex-col justify-between space-y-6 group cursor-pointer"
              onClick={() => setActiveArticle(article)}
            >
              <div className="space-y-3 text-left">
                <div className="flex items-center justify-between text-xs font-mono text-zinc-500">
                  <span className="px-2.5 py-1 rounded bg-[#0A84FF]/10 text-[#0A84FF] font-semibold">
                    {article.topic}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" /> {article.readTime}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-[#0A84FF] transition-colors leading-snug">
                  {article.title}
                </h3>

                <p className="text-xs text-zinc-400 leading-relaxed line-clamp-3">
                  {article.excerpt}
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <span className="text-xs font-semibold text-[#0A84FF] group-hover:translate-x-1 transition-transform flex items-center gap-1">
                  Read Article <ArrowRight className="w-3.5 h-3.5" />
                </span>

                <span className="text-[11px] text-zinc-500 font-mono">
                  {article.date}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
