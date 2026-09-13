"use client";

import React from "react";
import { useWatch } from "@/context/WatchContext";
import { Sliders, CheckCircle2, RotateCcw } from "lucide-react";

export default function ExplodedSection() {
  const { explodeProgress, setExplodeProgress, isExploded, setIsExploded } = useWatch();

  const components = [
    { step: "01", name: "Front Sapphire Crystal", desc: "Double-domed synthetic corundum with 7-layer anti-reflective coating." },
    { step: "02", name: "Hands & Floating Dial", desc: "Diamond-cut multi-faceted hands with Super-LumiNova luminescence." },
    { step: "03", name: "Kinetic Gear Train", desc: "Micro-machined brass wheels with optimized cycloidal tooth profiling." },
    { step: "04", name: "Escapement & 26 Jewels", desc: "Low-friction synthetic rubies ensuring precision 28,800 vph oscillation." },
    { step: "05", name: "Heavy Rotor & Caseback", desc: "High-inertia oscillating weight mounted on ceramic ball bearings." },
  ];

  return (
    <section id="movement" className="relative w-full min-h-screen py-32 px-6 lg:px-16 pointer-events-none flex items-center justify-between">
      <div className="max-w-6xl mx-auto w-full flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Left Interactive Exploded Controller */}
        <div className="lg:w-5/12 w-full pointer-events-auto bg-white/80 backdrop-blur-lg border border-black/10 p-8 rounded-3xl shadow-sm">
          <span className="font-inter text-xs uppercase tracking-[0.25em] text-black/50 block mb-3">
            Chapter 02 • Calibre 60P
          </span>
          <h2 className="font-nekst text-3xl sm:text-4xl font-black uppercase tracking-tight text-black mb-4">
            Exploded Mechanics
          </h2>
          <p className="font-inter text-sm text-black/70 leading-relaxed mb-8">
            Interact with the internal anatomy of the FS 60P. Disassemble the case, dial, jewel bearings, gear trains, and self-winding rotor in full 3D space.
          </p>

          {/* Interactive Slider */}
          <div className="bg-black/5 p-5 rounded-2xl border border-black/10 mb-6">
            <div className="flex items-center justify-between mb-3">
              <span className="font-inter text-xs uppercase font-bold tracking-wider text-black flex items-center gap-2">
                <Sliders className="w-3.5 h-3.5" />
                Explosion Distance
              </span>
              <span className="font-nekst font-black text-sm text-black">
                {Math.round((isExploded ? 1 : explodeProgress) * 100)}%
              </span>
            </div>

            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={isExploded ? 1 : explodeProgress}
              onChange={(e) => {
                setIsExploded(false);
                setExplodeProgress(parseFloat(e.target.value));
              }}
              className="w-full h-1.5 bg-black/20 rounded-lg appearance-none cursor-pointer accent-black"
            />

            <div className="flex items-center justify-between mt-4">
              <button
                onClick={() => {
                  setIsExploded(false);
                  setExplodeProgress(0);
                }}
                className="text-[10px] font-bold uppercase tracking-wider text-black/60 hover:text-black flex items-center gap-1 transition-colors"
              >
                <RotateCcw className="w-3 h-3" /> Reset Assembly
              </button>
              <button
                onClick={() => {
                  setIsExploded(true);
                  setExplodeProgress(1);
                }}
                className="text-[10px] font-bold uppercase tracking-wider bg-black text-white px-3 py-1 rounded-full hover:bg-black/80 transition-colors"
              >
                Full Explode
              </button>
            </div>
          </div>
        </div>

        {/* Right Component Step Cards */}
        <div className="lg:w-6/12 w-full space-y-3 pointer-events-auto">
          {components.map((item) => (
            <div
              key={item.step}
              className="bg-white/70 backdrop-blur-md border border-black/10 p-4 rounded-2xl flex items-start gap-4 shadow-sm hover:border-black/30 transition-all"
            >
              <span className="font-nekst font-black text-lg text-black/30 pt-0.5">
                {item.step}
              </span>
              <div>
                <h4 className="font-nekst font-bold text-sm text-black uppercase tracking-tight">
                  {item.name}
                </h4>
                <p className="font-inter text-xs text-black/65 mt-0.5 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
