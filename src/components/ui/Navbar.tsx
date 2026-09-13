"use client";

import React from "react";
import { Volume2, VolumeX, Eye, Layers } from "lucide-react";
import { useWatch } from "@/context/WatchContext";

export default function Navbar() {
  const { soundEnabled, setSoundEnabled, isExploded, setIsExploded, activeColorInfo } = useWatch();

  return (
    <header className="fixed top-0 left-0 w-full z-40 px-6 py-6 lg:px-12 lg:py-8 flex items-center justify-between pointer-events-auto mix-blend-difference text-white">
      {/* Brand logo */}
      <div className="flex items-center gap-3">
        <a href="#" className="font-nekst text-xl lg:text-2xl font-bold tracking-tight uppercase hover:opacity-80 transition-opacity">
          FS 60P
        </a>
        <span className="hidden sm:inline-block text-[10px] tracking-widest uppercase opacity-60 border-l border-white/30 pl-3">
          Automatic Chronometer
        </span>
      </div>

      {/* Navigation links */}
      <nav className="hidden md:flex items-center gap-8 text-[11px] font-medium uppercase tracking-widest opacity-80">
        <a href="#overview" className="hover:opacity-100 transition-opacity">Overview</a>
        <a href="#story" className="hover:opacity-100 transition-opacity">Story</a>
        <a href="#movement" className="hover:opacity-100 transition-opacity">Movement</a>
        <a href="#gallery" className="hover:opacity-100 transition-opacity">Gallery</a>
        <a href="#specs" className="hover:opacity-100 transition-opacity">Specs</a>
      </nav>

      {/* Action Controls */}
      <div className="flex items-center gap-4">
        {/* Exploded View Toggle */}
        <button
          onClick={() => setIsExploded(!isExploded)}
          className={`flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/40 text-[10px] uppercase tracking-wider transition-all ${
            isExploded ? "bg-white text-black" : "hover:bg-white/10"
          }`}
          title="Toggle Exploded Assembly View"
        >
          <Layers className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">{isExploded ? "Assembled" : "Exploded View"}</span>
        </button>

        {/* Sound toggle */}
        <button
          onClick={() => setSoundEnabled(!soundEnabled)}
          className="p-2 rounded-full border border-white/30 hover:bg-white/10 transition-colors"
          title={soundEnabled ? "Mute Sound" : "Enable Audio Experience"}
        >
          {soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
        </button>

        {/* Selected Config Badge */}
        <div className="hidden lg:flex items-center gap-2 pl-2 border-l border-white/30 text-[11px] uppercase tracking-widest">
          <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: activeColorInfo.swatch }} />
          <span className="opacity-90">{activeColorInfo.name}</span>
        </div>
      </div>
    </header>
  );
}
