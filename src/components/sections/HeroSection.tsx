"use client";

import React from "react";
import { useWatch, COLORWAYS, ColorwayId } from "@/context/WatchContext";
import { ArrowDown } from "lucide-react";

export default function HeroSection() {
  const { colorway, setColorway, activeColorInfo } = useWatch();

  const colorwaysList: ColorwayId[] = ["first", "second", "third", "fourth", "fifth", "sixth"];

  return (
    <section id="overview" className="relative w-full min-h-screen flex flex-col justify-between px-6 py-28 lg:px-16 lg:py-32 pointer-events-none">
      {/* Top Editorial Headline */}
      <div className="max-w-4xl pt-8 pointer-events-auto">
        <span className="font-inter text-[11px] lg:text-xs uppercase tracking-[0.3em] text-black/50 block mb-3">
          Manufacture Horlogère • 60fps
        </span>
        <h1 className="font-nekst text-6xl sm:text-7xl lg:text-9xl font-black tracking-tight text-black uppercase leading-none">
          FS 60P
        </h1>
        <p className="font-inter text-sm sm:text-base lg:text-lg text-black/70 max-w-md mt-4 leading-relaxed">
          The timeless automatic watch. Engineered with architectural proportions, high-beat kinetic precision, and dual-finish materials.
        </p>
      </div>

      {/* Bottom Controls & Colorway Switcher */}
      <div className="w-full flex flex-col sm:flex-row items-start sm:items-end justify-between gap-8 pb-4 pointer-events-auto">
        {/* Active Material Description Card */}
        <div className="bg-white/70 backdrop-blur-md border border-black/10 p-5 rounded-2xl max-w-sm shadow-sm transition-all">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: activeColorInfo.swatch }} />
            <span className="font-nekst font-bold text-xs uppercase tracking-wider text-black">
              Edition {activeColorInfo.tag} • {activeColorInfo.name}
            </span>
          </div>
          <p className="font-inter text-xs text-black/60 leading-relaxed">
            {activeColorInfo.description}
          </p>
        </div>

        {/* 4 Interactive Colorway Pills */}
        <div className="flex items-center gap-4 bg-white/70 backdrop-blur-md border border-black/10 px-5 py-3 rounded-full shadow-sm">
          <span className="text-[10px] font-bold uppercase tracking-widest text-black/50 pr-2 border-r border-black/10 hidden sm:inline">
            Material
          </span>
          <div className="flex items-center gap-3">
            {colorwaysList.map((id) => {
              const item = COLORWAYS[id];
              const isSelected = colorway === id;
              return (
                <button
                  key={id}
                  onClick={() => setColorway(id)}
                  className={`group relative flex items-center justify-center w-8 h-8 rounded-full transition-all duration-300 ${
                    isSelected ? "ring-2 ring-black ring-offset-2 scale-110" : "hover:scale-105 opacity-80 hover:opacity-100"
                  }`}
                  style={{ backgroundColor: item.swatch }}
                  title={`${item.name} (${item.tag})`}
                >
                  <span className={`text-[9px] font-bold tracking-tighter ${id === "second" ? "text-white" : "text-black"}`}>
                    {item.tag}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Scroll prompt */}
        <div className="hidden lg:flex items-center gap-2 text-[10px] font-medium uppercase tracking-widest text-black/40">
          <span>Scroll to explore</span>
          <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
        </div>
      </div>
    </section>
  );
}
