"use client";

import React from "react";

export default function StorySection() {
  const highlights = [
    { label: "Diameter", value: "40.0 mm", desc: "Balanced case proportions" },
    { label: "Thickness", value: "10.5 mm", desc: "Ultra-slim ergonomic profile" },
    { label: "Frequency", value: "28,800 vph", desc: "4 Hz high-beat kinetic cadence" },
    { label: "Power Reserve", value: "38 Hours", desc: "Bidirectional self-winding" },
  ];

  return (
    <section id="story" className="relative w-full min-h-screen py-32 px-6 lg:px-16 pointer-events-none flex items-center">
      <div className="max-w-6xl mx-auto w-full flex flex-col lg:flex-row items-start justify-between gap-16">
        {/* Left Editorial Narrative */}
        <div className="lg:w-1/2 pointer-events-auto bg-white/75 backdrop-blur-lg border border-black/10 p-8 lg:p-12 rounded-3xl shadow-sm">
          <span className="font-inter text-xs uppercase tracking-[0.25em] text-black/50 block mb-4">
            Chapter 01 • The Philosophy
          </span>
          <h2 className="font-nekst text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-black leading-tight mb-6">
            Timeless Architecture for the Modern Wrist
          </h2>
          <div className="space-y-4 font-inter text-sm lg:text-base text-black/70 leading-relaxed">
            <p>
              Conceived as a tribute to purist horological mechanics and modern geometric design, the FS 60P represents the seamless fusion of classical watchmaking disciplines and contemporary digital artistry.
            </p>
            <p>
              Every surface undergoes a dual-treatment process: linear satin brushing contrasts against hand-polished chamfers, reflecting light with purposeful intention. Beneath the double-domed anti-reflective sapphire crystal, the dial celebrates clarity through deep negative space and bespoke typography.
            </p>
          </div>
        </div>

        {/* Right Stats Metrics Grid */}
        <div className="lg:w-5/12 grid grid-cols-2 gap-4 pointer-events-auto">
          {highlights.map((item, idx) => (
            <div
              key={idx}
              className="bg-white/70 backdrop-blur-md border border-black/10 p-6 rounded-2xl flex flex-col justify-between shadow-sm hover:border-black/30 transition-colors"
            >
              <span className="font-inter text-[10px] uppercase tracking-widest text-black/40">
                {item.label}
              </span>
              <div className="my-3">
                <span className="font-nekst text-2xl lg:text-3xl font-black text-black tracking-tight">
                  {item.value}
                </span>
              </div>
              <span className="font-inter text-xs text-black/60">
                {item.desc}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
