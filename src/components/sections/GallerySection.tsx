"use client";

import React from "react";
import Image from "next/image";
import { useWatch } from "@/context/WatchContext";

export default function GallerySection() {
  const { colorway, activeColorInfo } = useWatch();

  const imageIndices = [1, 2, 3, 4, 5];

  return (
    <section id="gallery" className="relative w-full py-32 px-6 lg:px-16 pointer-events-none">
      <div className="max-w-7xl mx-auto w-full">
        {/* Header Title */}
        <div className="pointer-events-auto mb-12 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="font-inter text-xs uppercase tracking-[0.25em] text-black/50 block mb-2">
              Visual Archive
            </span>
            <h2 className="font-nekst text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-black">
              {activeColorInfo.name} Perspectives
            </h2>
          </div>
          <p className="font-inter text-xs uppercase tracking-widest text-black/50">
            5 Curated Macro Angles • High Definition
          </p>
        </div>

        {/* Dynamic Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 pointer-events-auto">
          {imageIndices.map((idx) => {
            const imgSrc = `/assets/the-watch/img/images-section/${colorway}_${idx}.webp`;
            return (
              <div
                key={idx}
                className="group relative overflow-hidden rounded-2xl bg-white/70 backdrop-blur-md border border-black/10 shadow-sm aspect-[4/5] transition-all duration-500 hover:shadow-lg hover:border-black/30"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={imgSrc}
                  alt={`FS 60P ${activeColorInfo.name} view ${idx}`}
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="font-inter text-[11px] font-bold text-white uppercase tracking-wider">
                    Angle 0{idx} • {activeColorInfo.tag}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
