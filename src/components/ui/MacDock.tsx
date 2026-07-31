"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Home, User, Briefcase, Code, Terminal, Mail, FileText } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";
import { PERSONAL_DATA } from "@/data/portfolioData";

export const MacDock: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const dockItems = [
    { name: "Home", href: "#hero", icon: Home },
    { name: "About", href: "#about", icon: User },
    { name: "Experience", href: "#experience", icon: Briefcase },
    { name: "Projects", href: "#projects", icon: Code },
    { name: "Terminal", href: "#about", icon: Terminal },
    { name: "Contact", href: "#contact", icon: Mail },
    { name: "GitHub", href: PERSONAL_DATA.github, icon: GithubIcon, external: true },
    { name: "LinkedIn", href: PERSONAL_DATA.linkedin, icon: LinkedinIcon, external: true },
  ];

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 hidden md:block">
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        className="flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-zinc-900/70 border border-white/10 backdrop-blur-2xl shadow-2xl shadow-black/80"
      >
        {dockItems.map((item, index) => {
          const Icon = item.icon;
          const isHovered = hoveredIndex === index;
          const isNeighbor =
            hoveredIndex !== null && Math.abs(hoveredIndex - index) === 1;

          let scale = 1;
          if (isHovered) scale = 1.35;
          else if (isNeighbor) scale = 1.15;

          return (
            <div key={item.name} className="relative group">
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 px-2.5 py-1 bg-zinc-800 text-white text-[11px] font-medium rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap border border-white/10">
                {item.name}
              </div>

              <motion.a
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                animate={{ scale }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
                className="w-10 h-10 rounded-xl bg-zinc-800/80 border border-white/10 flex items-center justify-center text-zinc-300 hover:text-white hover:bg-[#0A84FF] hover:border-[#0A84FF] transition-colors shadow-md"
              >
                <Icon className="w-5 h-5" />
              </motion.a>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
};
