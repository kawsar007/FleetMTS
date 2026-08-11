"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

type Direction = "up" | "down" | "left" | "right" | "none";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  /** Stagger delay in seconds — use to offset siblings entering together. */
  delay?: number;
  direction?: Direction;
  /** Distance (px) the element travels into place. */
  distance?: number;
  duration?: number;
  as?: "div" | "li";
}

const offsets: Record<Direction, { x?: number; y?: number }> = {
  up: { y: 1 },
  down: { y: -1 },
  left: { x: 1 },
  right: { x: -1 },
  none: {},
};

/**
 * Fade + slide entrance animation, triggered once when the element
 * scrolls into view. Used to give every major section and card a
 * consistent, subtle reveal.
 */
export function AnimatedSection({
  children,
  className,
  delay = 0,
  direction = "up",
  distance = 28,
  duration = 0.6,
  as = "div",
}: AnimatedSectionProps) {
  const offset = offsets[direction];

  const variants: Variants = {
    hidden: {
      opacity: 0,
      x: offset.x ? offset.x * distance : 0,
      y: offset.y ? offset.y * distance : 0,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const Component = motion[as];

  return (
    <Component
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={variants}
    >
      {children}
    </Component>
  );
}
