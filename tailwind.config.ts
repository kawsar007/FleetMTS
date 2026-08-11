import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#0A0E17",
          soft: "#121826",
          border: "rgba(255,255,255,0.08)",
        },
        paper: "#FFFFFF",
        mist: "#F4F6F9",
        slate: {
          DEFAULT: "#5B6472",
          dim: "#8C94A3",
        },
        line: "#E4E8EE",
        signal: {
          DEFAULT: "#2F6FED",
          dim: "#1C4FC2",
          soft: "#EAF1FE",
        },
        live: {
          DEFAULT: "#00D9B5",
          soft: "#E3FBF6",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      maxWidth: {
        content: "1280px",
      },
      boxShadow: {
        card: "0 1px 2px rgba(10,14,23,0.04), 0 12px 32px -12px rgba(10,14,23,0.12)",
        "card-hover": "0 4px 12px rgba(10,14,23,0.06), 0 24px 48px -16px rgba(10,14,23,0.18)",
        chip: "0 8px 24px -8px rgba(10,14,23,0.35)",
      },
      borderRadius: {
        xl2: "1.25rem",
      },
      backgroundImage: {
        "grid-light":
          "linear-gradient(to right, rgba(10,14,23,0.045) 1px, transparent 1px), linear-gradient(to bottom, rgba(10,14,23,0.045) 1px, transparent 1px)",
        "grid-dark":
          "linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)",
      },
      keyframes: {
        "pulse-ring": {
          "0%": { transform: "scale(0.6)", opacity: "0.7" },
          "100%": { transform: "scale(2.2)", opacity: "0" },
        },
        marquee: {
          "0%": { strokeDashoffset: "0" },
          "100%": { strokeDashoffset: "-40" },
        },
      },
      animation: {
        "pulse-ring": "pulse-ring 2.2s cubic-bezier(0.4,0,0.6,1) infinite",
        marquee: "marquee 1.2s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
