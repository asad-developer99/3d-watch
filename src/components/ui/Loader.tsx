"use client";

import React, { useEffect, useState } from "react";
import { useWatch } from "@/context/WatchContext";

export default function Loader() {
  const { isLoading } = useWatch();
  const [shouldRender, setShouldRender] = useState(true);
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    if (!isLoading) {
      // Smooth fade out
      const timeout = setTimeout(() => {
        setOpacity(0);
        setTimeout(() => setShouldRender(false), 800);
      }, 600);
      return () => clearTimeout(timeout);
    }
  }, [isLoading]);

  if (!shouldRender) return null;

  return (
    <div
      style={{
        opacity,
        transition: "opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
      }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#EBEBEB] pointer-events-none select-none"
    >
      <div className="relative flex items-center justify-center w-full h-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 700 700"
          className="absolute inset-[-100%] m-auto max-w-[90%] max-h-[90%] lg:max-w-[75%] lg:max-h-[75%] min-w-[340px] pointer-events-none"
        >
          <path
            strokeOpacity="1"
            stroke="#DCDCDC"
            strokeWidth="1.5"
            d="M350 695c190.538 0 345-154.462 345-345S540.538 5 350 5 5 159.462 5 350s154.462 345 345 345Z"
          />
          <path
            className="progress-arc"
            strokeOpacity="1"
            strokeWidth="3"
            stroke="#111111"
            d="M350 695c190.538 0 345-154.462 345-345S540.538 5 350 5 5 159.462 5 350s154.462 345 345 345Z"
          />
        </svg>

        <div className="font-inter text-[11px] lg:text-[0.83333vw] uppercase tracking-widest text-black flex items-center gap-1">
          <span className="text-black/40">Now</span> loading
        </div>
      </div>
    </div>
  );
}
