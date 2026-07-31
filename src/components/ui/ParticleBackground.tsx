"use client";

import React, { useEffect, useState } from "react";

export const ParticleBackground: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden select-none">
      {/* Mouse Spotlight Glow */}
      <div
        className="absolute w-[500px] h-[500px] rounded-full transition-transform duration-300 ease-out opacity-20 bg-gradient-to-r from-[#0A84FF] to-[#7C3AED] blur-[120px]"
        style={{
          transform: `translate(${mousePosition.x - 250}px, ${mousePosition.y - 250}px)`,
        }}
      />

      {/* Floating Ambient Glowing Orbs */}
      <div className="absolute top-[10%] left-[15%] w-72 h-72 rounded-full bg-[#0A84FF]/10 blur-[90px] animate-pulse-glow" />
      <div className="absolute top-[45%] right-[10%] w-96 h-96 rounded-full bg-[#7C3AED]/10 blur-[100px] animate-pulse-glow" style={{ animationDelay: "2s" }} />
      <div className="absolute bottom-[15%] left-[20%] w-80 h-80 rounded-full bg-[#F05138]/10 blur-[90px] animate-pulse-glow" style={{ animationDelay: "4s" }} />

      {/* Subtle Linear Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]" 
        style={{
          backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.4) 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
        }}
      />
    </div>
  );
};
