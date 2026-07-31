"use client";

import React, { useState, useEffect } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Command, Download, Menu, X, FileText } from "lucide-react";
import { PERSONAL_DATA } from "@/data/portfolioData";

interface NavbarProps {
  onOpenCommandPalette: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenCommandPalette }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ["hero", "about", "skills", "experience", "projects", "blog", "contact"];
      const current = sections.find((section) => {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 200 && rect.bottom >= 200;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about", id: "about" },
    { name: "Tech Stack", href: "#skills", id: "skills" },
    { name: "Experience", href: "#experience", id: "experience" },
    { name: "Projects", href: "#projects", id: "projects" },
    { name: "Articles", href: "#blog", id: "blog" },
    { name: "Contact", href: "#contact", id: "contact" },
  ];

  return (
    <>
      {/* Top Reading Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#0A84FF] via-[#7C3AED] to-[#F05138] z-50 transform-origin-left"
        style={{ scaleX }}
      />

      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? "py-3 bg-[#09090B]/80 backdrop-blur-xl border-b border-white/10 shadow-2xl"
            : "py-5 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo & Available Tag */}
          <a href="#hero" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-white/10 flex items-center justify-center text-white font-bold text-lg group-hover:border-[#0A84FF]/50 transition-all">
              <span className="gradient-text-apple font-mono">NP</span>
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-semibold tracking-tight text-white group-hover:text-[#0A84FF] transition-colors">
                Niraj Paul
              </span>
              <span className="text-[11px] text-zinc-400 flex items-center gap-1.5 font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Senior iOS Developer
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1 bg-zinc-900/60 p-1.5 rounded-full border border-white/10 backdrop-blur-md">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  className={`px-4 py-1.5 text-xs font-medium rounded-full transition-all duration-200 relative ${
                    isActive
                      ? "text-white bg-white/10 shadow-sm"
                      : "text-zinc-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden md:flex items-center gap-3">
            {/* Command Palette Trigger (⌘K) */}
            <button
              onClick={onOpenCommandPalette}
              className="flex items-center gap-2 px-3 py-1.5 text-xs font-medium text-zinc-400 bg-zinc-900/80 hover:bg-zinc-800 border border-white/10 hover:border-white/20 rounded-lg transition-all"
              title="Search shortcuts (⌘K)"
            >
              <Command className="w-3.5 h-3.5 text-[#0A84FF]" />
              <span className="font-mono text-[11px]">⌘K</span>
            </button>

            {/* Direct Contact Button */}
            <a
              href="#contact"
              className="flex items-center gap-1.5 px-4 py-1.5 text-xs font-medium text-white bg-gradient-to-r from-[#0A84FF] to-[#0066CC] hover:from-[#0066CC] hover:to-[#0A84FF] rounded-lg shadow-lg shadow-[#0A84FF]/20 transition-all hover:scale-105 active:scale-95"
            >
              Hire Me
            </a>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={onOpenCommandPalette}
              className="p-2 text-zinc-400 hover:text-white bg-zinc-900 rounded-lg border border-white/10"
            >
              <Command className="w-4 h-4 text-[#0A84FF]" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-zinc-300 hover:text-white bg-zinc-900 rounded-lg border border-white/10"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden bg-[#09090B]/95 backdrop-blur-2xl border-b border-white/10 px-4 py-6 space-y-4 shadow-2xl"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-2.5 rounded-lg text-sm font-medium text-zinc-300 hover:text-white hover:bg-white/5 flex items-center justify-between"
                >
                  {link.name}
                  {activeSection === link.id && (
                    <span className="w-2 h-2 rounded-full bg-[#0A84FF]" />
                  )}
                </a>
              ))}
            </div>

            <div className="pt-4 border-t border-white/10 flex flex-col gap-2">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-2.5 text-sm font-semibold text-white bg-[#0A84FF] rounded-lg shadow-lg shadow-[#0A84FF]/20"
              >
                Hire Me
              </a>
            </div>
          </motion.div>
        )}
      </header>
    </>
  );
};
