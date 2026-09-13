"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

export type ColorwayId = "first" | "second" | "third" | "fourth";

export interface ColorwayInfo {
  id: ColorwayId;
  name: string;
  tag: string;
  swatch: string;
  metalColor: string;
  dialColor: string;
  description: string;
}

export const COLORWAYS: Record<ColorwayId, ColorwayInfo> = {
  first: {
    id: "first",
    name: "Classic Steel",
    tag: "01",
    swatch: "#d5d5d5",
    metalColor: "#d5d5d5",
    dialColor: "#8c8c8c",
    description: "Cold-forged 316L medical grade stainless steel with vertical satin brushing and mirror polished bevels.",
  },
  second: {
    id: "second",
    name: "Titanium Dark",
    tag: "02",
    swatch: "#5a5a5a",
    metalColor: "#6e6e6e",
    dialColor: "#222222",
    description: "Micro-blasted Grade 5 Titanium with deep DLC anthracite coating and monochromatic high-contrast indices.",
  },
  third: {
    id: "third",
    name: "Yellow Gold",
    tag: "03",
    swatch: "#ffebc6",
    metalColor: "#ffebc6",
    dialColor: "#d9c59a",
    description: "18K 3N yellow gold alloy with hand-finished chamfered edges and brushed sunray champagne dial.",
  },
  fourth: {
    id: "fourth",
    name: "Rose Gold",
    tag: "04",
    swatch: "#fde2d2",
    metalColor: "#fde2d2",
    dialColor: "#cbb1a0",
    description: "Proprietary 5N rose gold enriched with platinum for enduring luster and warm architectural elegance.",
  },
};

interface WatchContextType {
  colorway: ColorwayId;
  setColorway: (id: ColorwayId) => void;
  isExploded: boolean;
  setIsExploded: (val: boolean) => void;
  explodeProgress: number;
  setExplodeProgress: (val: number) => void;
  isLoading: boolean;
  setIsLoading: (val: boolean) => void;
  soundEnabled: boolean;
  setSoundEnabled: (val: boolean) => void;
  activeColorInfo: ColorwayInfo;
}

const WatchContext = createContext<WatchContextType | undefined>(undefined);

export function WatchProvider({ children }: { children: ReactNode }) {
  const [colorway, setColorway] = useState<ColorwayId>("first");
  const [isExploded, setIsExploded] = useState(false);
  const [explodeProgress, setExplodeProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [soundEnabled, setSoundEnabled] = useState(false);

  const activeColorInfo = COLORWAYS[colorway];

  return (
    <WatchContext.Provider
      value={{
        colorway,
        setColorway,
        isExploded,
        setIsExploded,
        explodeProgress,
        setExplodeProgress,
        isLoading,
        setIsLoading,
        soundEnabled,
        setSoundEnabled,
        activeColorInfo,
      }}
    >
      {children}
    </WatchContext.Provider>
  );
}

export function useWatch() {
  const context = useContext(WatchContext);
  if (!context) {
    throw new Error("useWatch must be used within a WatchProvider");
  }
  return context;
}
