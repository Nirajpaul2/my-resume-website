"use client";

import React from "react";
import { motion } from "framer-motion";
import { ACHIEVEMENTS } from "@/data/portfolioData";
import { Award, Users, Smartphone, ShieldCheck } from "lucide-react";

export const AchievementsSection: React.FC = () => {
  const icons = [Award, Smartphone, Users, ShieldCheck];

  return (
    <section className="py-20 relative bg-gradient-to-b from-[#09090B] via-zinc-950 to-[#09090B] border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {ACHIEVEMENTS.map((item, idx) => {
            const IconComponent = icons[idx % icons.length];
            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="linear-card p-6 text-center space-y-3 group hover:border-[#0A84FF]/40 transition-all"
              >
                <div className="w-12 h-12 mx-auto rounded-2xl bg-[#0A84FF]/10 border border-[#0A84FF]/20 flex items-center justify-center text-[#0A84FF] group-hover:scale-110 transition-transform">
                  <IconComponent className="w-6 h-6" />
                </div>

                <div>
                  <div className="text-3xl sm:text-5xl font-extrabold text-white font-mono tracking-tight gradient-text-apple">
                    {item.value}{item.suffix}
                  </div>
                  <div className="text-xs sm:text-sm font-semibold text-zinc-200 mt-1">
                    {item.label}
                  </div>
                </div>

                <p className="text-[11px] text-zinc-500 font-sans leading-tight">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
