"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, FileText, Send, CheckCircle2, Copy, Sparkles, MapPin } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "../ui/Icons";
import { PERSONAL_DATA } from "@/data/portfolioData";
import confetti from "canvas-confetti";

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({ name: "", email: "", projectType: "Enterprise iOS App", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", projectType: "Enterprise iOS App", message: "" });
    }, 4000);
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_DATA.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="contact" className="py-24 relative bg-zinc-950/80 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Large CTA Banner Header */}
        <div className="text-center max-w-4xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-mono tracking-widest text-[#0A84FF] uppercase">
            // Initiate Collaboration
          </span>
          <h2 className="text-4xl sm:text-6xl font-bold tracking-tight text-white leading-tight">
            Let&apos;s Build <span className="gradient-text-apple">Something Amazing</span>.
          </h2>
          <p className="text-base sm:text-lg text-zinc-400 max-w-2xl mx-auto">
            Available for Senior iOS Lead roles, high-concurrency OTT streaming consulting, and enterprise Apple TV architectures.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start max-w-5xl mx-auto">
          
          {/* Left Contact Information Cards */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <div className="linear-card p-6 space-y-4">
              <h3 className="text-lg font-bold text-white mb-2">Direct Contact</h3>

              {/* Email Row */}
              <div className="p-4 rounded-xl bg-zinc-900/80 border border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-[#0A84FF]/10 text-[#0A84FF]">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-zinc-500 block">Email Address</span>
                    <a href={`mailto:${PERSONAL_DATA.email}`} className="text-xs font-semibold text-white hover:text-[#0A84FF]">
                      {PERSONAL_DATA.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={copyEmail}
                  className="p-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-400 hover:text-white transition-colors"
                  title="Copy email"
                >
                  {copiedEmail ? <CheckCircle2 className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Location Row */}
              <div className="p-4 rounded-xl bg-zinc-900/80 border border-white/10 flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-[#7C3AED]/10 text-[#7C3AED]">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-zinc-500 block">Location</span>
                  <span className="text-xs font-semibold text-white">{PERSONAL_DATA.location}</span>
                </div>
              </div>
            </div>

            {/* Social Links & Resume Download Card */}
            <div className="linear-card p-6 space-y-4">
              <h3 className="text-sm font-bold text-white uppercase font-mono tracking-wider">
                Professional Channels
              </h3>

              <div className="grid grid-cols-2 gap-3">
                <a
                  href={PERSONAL_DATA.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-zinc-900 border border-white/10 hover:border-[#0A84FF] flex items-center gap-2 text-xs font-semibold text-zinc-300 hover:text-white transition-all"
                >
                  <LinkedinIcon className="w-4 h-4 text-[#0A84FF]" /> LinkedIn
                </a>

                <a
                  href={PERSONAL_DATA.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-zinc-900 border border-white/10 hover:border-[#0A84FF] flex items-center gap-2 text-xs font-semibold text-zinc-300 hover:text-white transition-all"
                >
                  <GithubIcon className="w-4 h-4 text-white" /> GitHub
                </a>
              </div>

              <a
                href={PERSONAL_DATA.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full p-3.5 rounded-xl bg-gradient-to-r from-zinc-800 to-zinc-900 hover:from-zinc-700 hover:to-zinc-800 border border-white/10 flex items-center justify-center gap-2 text-xs font-semibold text-white transition-all shadow-lg"
              >
                <FileText className="w-4 h-4 text-[#0A84FF]" /> Download Official Resume (PDF)
              </a>
            </div>
          </div>

          {/* Right Interactive Form */}
          <div className="lg:col-span-7 linear-card p-8 text-left">
            <h3 className="text-xl font-bold text-white mb-6">Send Message</h3>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-8 rounded-2xl bg-emerald-950/40 border border-emerald-500/40 text-center space-y-3"
              >
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                  <Sparkles className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-white">Message Transmitted!</h4>
                <p className="text-xs text-zinc-300">
                  Thank you for reaching out. Niraj will review your request and reply shortly.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-zinc-400 mb-1.5">Your Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Sarah Jenkins"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 bg-zinc-950 rounded-xl border border-white/10 text-xs text-white placeholder-zinc-600 focus:outline-none focus:border-[#0A84FF]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-zinc-400 mb-1.5">Email Address</label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. sarah@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 bg-zinc-950 rounded-xl border border-white/10 text-xs text-white placeholder-zinc-600 focus:outline-none focus:border-[#0A84FF]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-zinc-400 mb-1.5">Inquiry Type</label>
                  <select
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className="w-full px-4 py-3 bg-zinc-950 rounded-xl border border-white/10 text-xs text-white focus:outline-none focus:border-[#0A84FF]"
                  >
                    <option value="Enterprise iOS App">Enterprise iOS / SwiftUI Project</option>
                    <option value="OTT Streaming Architecture">OTT / Apple TV Video Streaming Engine</option>
                    <option value="Full-Time Lead Role">Senior iOS Lead / Architect Hiring</option>
                    <option value="Advisory / Consulting">Technical Advisory & Code Audit</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono text-zinc-400 mb-1.5">Project Details / Message</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Briefly describe your objectives, architecture requirements, or timeline..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 bg-zinc-950 rounded-xl border border-white/10 text-xs text-white placeholder-zinc-600 focus:outline-none focus:border-[#0A84FF]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 text-xs font-bold text-white bg-gradient-to-r from-[#0A84FF] to-[#7C3AED] hover:from-[#0066CC] hover:to-[#6D28D9] rounded-xl shadow-xl shadow-[#0A84FF]/25 flex items-center justify-center gap-2 transition-all hover:scale-[1.01] active:scale-[0.99]"
                >
                  Send Message <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
