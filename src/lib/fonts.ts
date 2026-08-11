import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";

/**
 * Display face — used for headings and the logo wordmark.
 * Geometric and technical, suited to a telemetry/data-driven product.
 */
export const fontDisplay = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

/** Body face — used for paragraphs and general UI copy. */
export const fontBody = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

/** Utility face — used for telemetry readouts: coordinates, timestamps, stats. */
export const fontMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});
