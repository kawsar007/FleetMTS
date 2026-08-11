"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { siteConfig } from "@/config/site";

/**
 * Full-screen loader shown on the initial page load.
 * Fades out once the window has finished loading (with a small
 * minimum duration so it never feels like a flicker).
 */
export function GlobalLoader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const minimumTimer = new Promise((resolve) => setTimeout(resolve, 500));

    const windowLoaded = new Promise<void>((resolve) => {
      if (document.readyState === "complete") {
        resolve();
      } else {
        window.addEventListener("load", () => resolve(), { once: true });
      }
    });

    Promise.all([minimumTimer, windowLoaded]).then(() => setIsLoading(false));
  }, []);

  return (
    <AnimatePresence>
      {isLoading ? (
        <motion.div
          role="status"
          aria-live="polite"
          aria-label="Loading page"
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center gap-6 bg-ink"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <div className="flex items-center gap-2.5">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-pulse-ring rounded-full bg-live" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-live" />
            </span>
            <span className="font-display text-xl font-semibold tracking-tight text-white">
              {siteConfig.name}
            </span>
          </div>

          <div className="h-[3px] w-40 overflow-hidden rounded-full bg-white/10">
            <motion.div
              className="h-full rounded-full bg-live"
              initial={{ x: "-100%" }}
              animate={{ x: "100%" }}
              transition={{
                duration: 1,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
