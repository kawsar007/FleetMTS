"use client";

import { MotionConfig } from "framer-motion";
import type { ReactNode } from "react";

/**
 * Wraps the app so every Framer Motion animation automatically respects
 * the user's OS-level "reduce motion" preference. The CSS-level rule in
 * globals.css only covers CSS transitions/animations — Framer Motion
 * drives animations via JS/WAAPI, so it needs this separately.
 */
export function MotionProvider({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
