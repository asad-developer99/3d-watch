"use client";

import React from "react";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative w-full py-16 px-6 lg:px-16 pointer-events-auto border-t border-black/10 bg-white/40 backdrop-blur-md">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <span className="font-nekst text-xl font-bold uppercase tracking-tight text-black">
            FS 60P
          </span>
          <p className="font-inter text-xs text-black/50 mt-1">
            Inspired by the original masterpiece from <a href="https://thewatch.60fps.fr" target="_blank" rel="noreferrer" className="underline hover:text-black">60fps.fr</a>
          </p>
        </div>

        <div className="flex items-center gap-6">
          <span className="font-inter text-xs text-black/40">
            Next.js • Three.js • WebGL
          </span>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-4 py-2 rounded-full border border-black/20 text-xs font-medium uppercase tracking-wider text-black hover:bg-black hover:text-white transition-all"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
