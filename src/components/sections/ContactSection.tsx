"use client";

import React, { useState } from "react";
import { Mail, FileText, CheckCircle2, Copy, MapPin, BookOpen } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "../ui/Icons";
import { PERSONAL_DATA } from "@/data/portfolioData";

export const ContactSection: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);

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

        {/* Centered Contact Cards Container */}
        <div className="max-w-3xl mx-auto grid sm:grid-cols-2 gap-6 text-left">
          
          {/* Direct Contact Card */}
          <div className="linear-card p-6 flex flex-col justify-between space-y-6">
            <div>
              <h3 className="text-lg font-bold text-white mb-4">Direct Contact</h3>

              {/* Email Row */}
              <div className="p-4 rounded-xl bg-zinc-900/80 border border-white/10 flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-[#0A84FF]/10 text-[#0A84FF]">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-zinc-500 block">Email Address</span>
                    <a href={`mailto:${PERSONAL_DATA.email}`} className="text-xs font-semibold text-white hover:text-[#0A84FF] transition-colors">
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

            <a
              href={`mailto:${PERSONAL_DATA.email}`}
              className="w-full py-3 text-xs font-bold text-white bg-gradient-to-r from-[#0A84FF] to-[#0066CC] hover:from-[#0066CC] hover:to-[#0A84FF] rounded-xl shadow-lg shadow-[#0A84FF]/20 flex items-center justify-center gap-2 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <Mail className="w-4 h-4" /> Send Email Direct
            </a>
          </div>

          {/* Professional Channels & Resume Download Card */}
          <div className="linear-card p-6 flex flex-col justify-between space-y-6">
            <div>
              <h3 className="text-lg font-bold text-white mb-4">Professional Channels</h3>

              <div className="grid grid-cols-3 gap-3 mb-4">
                <a
                  href={PERSONAL_DATA.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-zinc-900 border border-white/10 hover:border-[#0A84FF] flex flex-col items-center justify-center gap-1.5 text-xs font-semibold text-zinc-300 hover:text-white transition-all hover:scale-105"
                >
                  <LinkedinIcon className="w-5 h-5 text-[#0A84FF]" />
                  <span>LinkedIn</span>
                </a>

                <a
                  href={PERSONAL_DATA.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-zinc-900 border border-white/10 hover:border-[#0A84FF] flex flex-col items-center justify-center gap-1.5 text-xs font-semibold text-zinc-300 hover:text-white transition-all hover:scale-105"
                >
                  <GithubIcon className="w-5 h-5 text-white" />
                  <span>GitHub</span>
                </a>

                <a
                  href={PERSONAL_DATA.mediumUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-zinc-900 border border-white/10 hover:border-[#0A84FF] flex flex-col items-center justify-center gap-1.5 text-xs font-semibold text-zinc-300 hover:text-white transition-all hover:scale-105"
                >
                  <BookOpen className="w-5 h-5 text-emerald-400" />
                  <span>Medium</span>
                </a>
              </div>
            </div>

            <a
              href={PERSONAL_DATA.resumeUrl}
              download="Niraj_Paul_Senior_iOS_Developer_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full p-3.5 rounded-xl bg-gradient-to-r from-zinc-800 to-zinc-900 hover:from-zinc-700 hover:to-zinc-800 border border-white/10 flex items-center justify-center gap-2 text-xs font-semibold text-white transition-all shadow-lg hover:scale-[1.02] active:scale-[0.98]"
            >
              <FileText className="w-4 h-4 text-[#0A84FF]" /> Download Official Resume (PDF)
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};
