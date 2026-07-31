"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Quote, Star, ChevronLeft, ChevronRight, Building } from "lucide-react";
import { TESTIMONIALS } from "@/data/portfolioData";

export const TestimonialsSection: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState(0);

  const handleNext = () => {
    setActiveIdx((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const handlePrev = () => {
    setActiveIdx((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  return (
    <section className="py-24 relative bg-zinc-950/60 border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-mono tracking-widest text-[#0A84FF] uppercase">
            // Client & Leadership Feedback
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
            Endorsed by <span className="gradient-text-apple">Engineering Leaders</span>
          </h2>
          <p className="text-sm sm:text-base text-zinc-400">
            What VP level executives, product managers, and lead architects say about Niraj&apos;s technical mastery.
          </p>
        </div>

        {/* Testimonials Carousel & Cards */}
        <div className="max-w-4xl mx-auto relative">
          <motion.div
            key={TESTIMONIALS[activeIdx].id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="linear-card p-8 md:p-12 relative flex flex-col justify-between space-y-8"
          >
            <Quote className="w-12 h-12 text-[#0A84FF]/30 absolute top-6 right-8 pointer-events-none" />

            {/* Stars rating */}
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
              ))}
            </div>

            {/* Testimonial Quote */}
            <p className="text-base sm:text-xl text-zinc-200 font-normal leading-relaxed italic text-left">
              &quot;{TESTIMONIALS[activeIdx].text}&quot;
            </p>

            {/* Author Meta */}
            <div className="flex items-center justify-between pt-6 border-t border-white/10">
              <div className="flex items-center gap-4 text-left">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#0A84FF] to-[#7C3AED] flex items-center justify-center text-white font-bold font-mono text-base shadow-lg shadow-[#0A84FF]/20">
                  {TESTIMONIALS[activeIdx].avatar}
                </div>
                <div>
                  <h4 className="text-base font-bold text-white leading-tight">
                    {TESTIMONIALS[activeIdx].name}
                  </h4>
                  <p className="text-xs text-[#0A84FF] font-medium">
                    {TESTIMONIALS[activeIdx].role} • {TESTIMONIALS[activeIdx].company}
                  </p>
                  <span className="text-[11px] text-zinc-500 font-mono">
                    {TESTIMONIALS[activeIdx].relationship}
                  </span>
                </div>
              </div>

              {/* Controls */}
              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrev}
                  className="p-2.5 rounded-xl bg-zinc-900 border border-white/10 text-zinc-400 hover:text-white hover:border-[#0A84FF] transition-colors"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={handleNext}
                  className="p-2.5 rounded-xl bg-zinc-900 border border-white/10 text-zinc-400 hover:text-white hover:border-[#0A84FF] transition-colors"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>

          {/* Dots Indicator */}
          <div className="flex justify-center items-center gap-2 mt-6">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIdx(i)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  activeIdx === i ? "w-8 bg-[#0A84FF]" : "bg-zinc-800 hover:bg-zinc-700"
                }`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
