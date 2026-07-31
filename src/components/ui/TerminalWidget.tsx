"use client";

import React, { useState, useRef, useEffect } from "react";
import { Terminal as TerminalIcon, CornerDownLeft, Copy, Check } from "lucide-react";
import { TERMINAL_COMMANDS } from "@/data/portfolioData";

export const TerminalWidget: React.FC = () => {
  const [history, setHistory] = useState<Array<{ cmd: string; output: string }>>([
    {
      cmd: "help",
      output: TERMINAL_COMMANDS["help"]
    }
  ]);
  const [inputVal, setInputVal] = useState("");
  const [copied, setCopied] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  const handleCommand = (cmdStr: string) => {
    const trimmed = cmdStr.trim().toLowerCase();
    if (!trimmed) return;

    if (trimmed === "clear") {
      setHistory([]);
      setInputVal("");
      return;
    }

    const output = TERMINAL_COMMANDS[trimmed] || `zsh: command not found: ${trimmed}. Type 'help' to see valid commands.`;
    setHistory((prev) => [...prev, { cmd: cmdStr, output }]);
    setInputVal("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleCommand(inputVal);
    }
  };

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  const copyLogs = () => {
    const logText = history.map((h) => `$ ${h.cmd}\n${h.output}`).join("\n\n");
    navigator.clipboard.writeText(logText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div id="terminal-widget" className="w-full max-w-4xl mx-auto rounded-2xl bg-[#0C0C0E] border border-white/10 overflow-hidden shadow-2xl font-mono text-xs text-zinc-300">
      {/* Terminal Titlebar */}
      <div className="flex items-center justify-between px-4 py-3 bg-zinc-900/80 border-b border-white/10">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-rose-500/80" />
          <div className="w-3 h-3 rounded-full bg-amber-500/80" />
          <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
          <span className="ml-2 text-zinc-400 font-sans text-xs font-medium flex items-center gap-1.5">
            <TerminalIcon className="w-3.5 h-3.5 text-[#0A84FF]" /> nirajpaul@macbook-pro ~ zsh
          </span>
        </div>

        <button
          onClick={copyLogs}
          className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-zinc-800 hover:bg-zinc-700 text-zinc-400 hover:text-white transition-colors text-[11px]"
        >
          {copied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
          {copied ? "Copied" : "Copy Log"}
        </button>
      </div>

      {/* Quick Command Pills */}
      <div className="px-4 py-2 bg-zinc-950/60 border-b border-white/5 flex items-center gap-2 overflow-x-auto">
        <span className="text-[11px] text-zinc-500 whitespace-nowrap">Quick Commands:</span>
        {["bio", "skills", "experience", "projects", "contact", "clear"].map((cmd) => (
          <button
            key={cmd}
            onClick={() => handleCommand(cmd)}
            className="px-2.5 py-1 rounded bg-zinc-900 hover:bg-[#0A84FF]/20 text-[#0A84FF] border border-[#0A84FF]/30 transition-colors text-[11px] font-mono whitespace-nowrap"
          >
            ${cmd}
          </button>
        ))}
      </div>

      {/* Terminal Body */}
      <div className="p-4 max-h-80 overflow-y-auto space-y-3 leading-relaxed">
        {history.map((item, idx) => (
          <div key={idx} className="space-y-1">
            <div className="flex items-center gap-2 text-emerald-400 font-semibold">
              <span>nirajpaul@macbook-pro ~ %</span>
              <span className="text-white">{item.cmd}</span>
            </div>
            <pre className="text-zinc-400 whitespace-pre-wrap font-mono text-xs pl-2 border-l border-zinc-800">
              {item.output}
            </pre>
          </div>
        ))}

        {/* Input Prompt Line */}
        <div className="flex items-center gap-2 text-emerald-400 pt-1">
          <span>nirajpaul@macbook-pro ~ %</span>
          <input
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type 'bio', 'skills', 'projects', 'help'..."
            className="flex-1 bg-transparent text-white focus:outline-none font-mono text-xs placeholder-zinc-600"
          />
          <CornerDownLeft className="w-3.5 h-3.5 text-zinc-500" />
        </div>
        <div ref={bottomRef} />
      </div>
    </div>
  );
};
