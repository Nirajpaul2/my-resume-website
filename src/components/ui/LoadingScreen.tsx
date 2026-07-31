"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const LoadingScreen: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setLoading(false), 300);
          return 100;
        }
        return prev + 4;
      });
    }, 30);

    return () => clearInterval(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#09090B] text-white"
        >
          {/* Animated Swift Logo Icon */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative mb-8"
          >
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-[#F05138] via-[#F88535] to-[#FFB03A] p-0.5 shadow-2xl shadow-[#F05138]/40 flex items-center justify-center animate-pulse">
              <div className="w-full h-full bg-[#09090B] rounded-[14px] flex items-center justify-center">
                <svg
                  className="w-10 h-10 text-[#F05138]"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M21.5 14c-1.3-1.6-3.8-3.4-6.4-4.5.3.8.4 1.7.3 2.6 1.7.8 3.3 2 4.4 3.4.4.5.2 1.3-.4 1.6-.2.1-.5.1-.7.1-1.8 0-3.6-.6-5.2-1.7 1 1.6 1.4 3.5 1.1 5.3-.1.6-.7 1-1.3.9-.1 0-.2 0-.3-.1-1.5-.7-2.7-1.9-3.4-3.4-.6 1.5-1.7 2.7-3.2 3.5-.6.3-1.3.1-1.6-.5 0-.1-.1-.2-.1-.3 0-1.8.6-3.6 1.7-5.1-1.5 1-3.2 1.5-5 1.4-.6 0-1.1-.5-1.1-1.1 0-.2.1-.5.2-.7 1.3-1.6 3.1-2.7 5.1-3.3-.4-.8-.6-1.7-.6-2.6 0-1.2.4-2.4 1.1-3.4C7.8 8.6 10.4 10 13 11c-.2-.9-.2-1.8.1-2.7C14 6.8 15.3 5.7 17 5c.6-.2 1.2.1 1.4.7.1.2.1.5.1.7 0 1.5-.5 3-1.4 4.3 1.9 1.1 3.4 2.7 4.4 4.7.3.6 0 1.3-.6 1.6-.1 0-.3.1-.4.0z" />
                </svg>
              </div>
            </div>
          </motion.div>

          <h2 className="text-xl font-medium tracking-wider mb-2 font-mono">
            NIRAJ PAUL <span className="text-xs text-[#0A84FF]">v11.0</span>
          </h2>
          <p className="text-sm text-zinc-500 mb-8 tracking-widest uppercase text-xs">
            Senior iOS Developer & Mobile Architect
          </p>

          {/* Sleek Progress Bar */}
          <div className="w-56 h-1 bg-zinc-800 rounded-full overflow-hidden relative">
            <motion.div
              className="h-full bg-gradient-to-r from-[#0A84FF] via-[#7C3AED] to-[#F05138]"
              style={{ width: `${progress}%` }}
              transition={{ ease: "easeOut" }}
            />
          </div>

          <span className="mt-3 text-xs text-zinc-600 font-mono">
            Loading Modules... {progress}%
          </span>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
