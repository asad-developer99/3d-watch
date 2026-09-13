import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        nekst: ["Nekst", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        luxury: {
          bg: "#ebebeb",
          darkBg: "#0c0c0c",
          steel: "#d5d5d5",
          titanium: "#6a6a6a",
          gold: "#ffebc6",
          roseGold: "#fde2d2",
          border: "rgba(0, 0, 0, 0.08)",
          card: "rgba(255, 255, 255, 0.65)",
        },
      },
    },
  },
  plugins: [],
};
export default config;
