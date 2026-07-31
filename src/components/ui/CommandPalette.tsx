"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Command, FileText, Mail, Terminal, ExternalLink, Code, Sparkles, X, User, Briefcase, Award } from "lucide-react";
import confetti from "canvas-confetti";
import { PERSONAL_DATA, FEATURED_PROJECTS } from "@/data/portfolioData";

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenTerminal?: () => void;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({
  isOpen,
  onClose,
  onOpenTerminal
}) => {
  const [query, setQuery] = useState("");

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        if (isOpen) onClose();
        else {
          // Trigger open via state callback in parent
        }
      }
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const triggerConfetti = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  const actions = [
    {
      id: "resume",
      title: "Download Niraj's Resume",
      category: "Quick Actions",
      icon: FileText,
      action: () => {
        window.open(PERSONAL_DATA.resumeUrl, "_blank");
        onClose();
      }
    },
    {
      id: "email",
      title: "Copy Direct Email (nirajpaul.dev@gmail.com)",
      category: "Quick Actions",
      icon: Mail,
      action: () => {
        navigator.clipboard.writeText(PERSONAL_DATA.email);
        alert("Email copied to clipboard!");
        onClose();
      }
    },
    {
      id: "terminal",
      title: "Open Interactive macOS Terminal",
      category: "Tools",
      icon: Terminal,
      action: () => {
        if (onOpenTerminal) onOpenTerminal();
        const terminalEl = document.getElementById("terminal-widget");
        if (terminalEl) terminalEl.scrollIntoView({ behavior: "smooth" });
        onClose();
      }
    },
    {
      id: "confetti",
      title: "Celebrate / Launch Confetti",
      category: "Fun",
      icon: Sparkles,
      action: () => {
        triggerConfetti();
        onClose();
      }
    },
    {
      id: "nav-about",
      title: "Go to About Section",
      category: "Navigation",
      icon: User,
      action: () => {
        window.location.hash = "about";
        onClose();
      }
    },
    {
      id: "nav-experience",
      title: "Go to Work Experience (11+ Years)",
      category: "Navigation",
      icon: Briefcase,
      action: () => {
        window.location.hash = "experience";
        onClose();
      }
    },
    {
      id: "nav-projects",
      title: "Go to Featured Projects",
      category: "Navigation",
      icon: Code,
      action: () => {
        window.location.hash = "projects";
        onClose();
      }
    }
  ];

  const filteredActions = actions.filter((act) =>
    act.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-start justify-center pt-24 px-4 bg-black/70 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: -10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: -10 }}
          transition={{ duration: 0.2 }}
          className="w-full max-w-2xl bg-[#121215] border border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col"
        >
          {/* Search Header */}
          <div className="flex items-center px-4 py-3.5 border-b border-white/10 bg-zinc-900/50">
            <Search className="w-5 h-5 text-zinc-400 mr-3" />
            <input
              type="text"
              placeholder="Type a command or search section..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full bg-transparent text-white placeholder-zinc-500 text-sm focus:outline-none font-sans"
              autoFocus
            />
            <button
              onClick={onClose}
              className="p-1 rounded-lg hover:bg-zinc-800 text-zinc-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Search Results */}
          <div className="max-h-80 overflow-y-auto p-2 space-y-1">
            {filteredActions.length > 0 ? (
              filteredActions.map((item) => {
                const IconComponent = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={item.action}
                    className="w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl hover:bg-zinc-800/80 text-left transition-colors group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-zinc-800 group-hover:bg-[#0A84FF]/20 text-zinc-400 group-hover:text-[#0A84FF] transition-colors">
                        <IconComponent className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="text-sm font-medium text-zinc-200 group-hover:text-white">
                          {item.title}
                        </span>
                        <span className="block text-[11px] text-zinc-500">
                          {item.category}
                        </span>
                      </div>
                    </div>
                    <span className="text-xs text-zinc-600 font-mono group-hover:text-zinc-400">
                      Select ↵
                    </span>
                  </button>
                );
              })
            ) : (
              <div className="py-8 text-center text-zinc-500 text-sm">
                No matching actions found.
              </div>
            )}
          </div>

          {/* Footer Shortcuts */}
          <div className="px-4 py-2.5 border-t border-white/10 bg-zinc-950/80 flex items-center justify-between text-xs text-zinc-500">
            <span className="flex items-center gap-2">
              <span className="px-1.5 py-0.5 rounded bg-zinc-800 font-mono text-[10px]">ESC</span> to close
            </span>
            <span className="flex items-center gap-1 font-mono text-[11px]">
              <Command className="w-3 h-3 text-[#0A84FF]" /> Niraj Paul Portfolio
            </span>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
