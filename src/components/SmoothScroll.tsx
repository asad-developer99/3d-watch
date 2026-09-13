"use client";

import React, { useEffect } from "react";
import Lenis from "lenis";
import { useWatch } from "@/context/WatchContext";

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  const { setExplodeProgress, isExploded } = useWatch();

  useEffect(() => {
    // Initialize Lenis smooth scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
    });

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      
      // Calculate scroll progress specifically around the movement section
      const movementSection = document.getElementById("movement");
      if (movementSection && !isExploded) {
        const rect = movementSection.getBoundingClientRect();
        const winHeight = window.innerHeight;
        
        // Progress from 0 to 1 as the movement section enters and centers in viewport
        const start = winHeight * 0.8;
        const end = winHeight * 0.2;
        if (rect.top <= start && rect.top >= -rect.height) {
          const progress = Math.min(Math.max((start - rect.top) / (start - end), 0), 1);
          setExplodeProgress(progress);
        }
      }
    };

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      lenis.destroy();
      window.removeEventListener("scroll", handleScroll);
    };
  }, [setExplodeProgress, isExploded]);

  return <>{children}</>;
}
