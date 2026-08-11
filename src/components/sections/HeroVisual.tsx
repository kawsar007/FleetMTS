import { OptimizedImage } from "@/components/ui/OptimizedImage";

/**
 * Hero graphic — a single transparent image, no card/background/border/
 * shadow. The aspect-ratio wrapper (rather than fixed width/height) keeps
 * it responsive and layout-shift-free regardless of the source file's
 * exact pixel dimensions.
 */
export function HeroVisual() {
  return (
    <div className="relative mx-auto aspect-[25/12] w-full max-w-[560px] sm:max-w-[640px] lg:max-w-none">
      <OptimizedImage
        src="/hero/fleet-tracking.jpg"
        alt="FleetMTS live tracking preview showing a truck, van, car, motorbike, auto-rickshaw, and bus tracked on a city map"
        fill
        priority
        sizes="(min-width: 1024px) 50vw, 100vw"
        className="object-contain"
      />
    </div>
  );
}

// "use client";

// import { useEffect, useState } from "react";
// import { motion } from "framer-motion";

// // Sample points approximating the road path below (id="route-path"),
// // used to animate the tracking dot travelling along the route.
// const ROUTE_POINTS = [
//   { x: 24, y: 168 },
//   { x: 96, y: 96 },
//   { x: 168, y: 140 },
//   { x: 232, y: 76 },
//   { x: 296, y: 118 },
//   { x: 356, y: 58 },
//   { x: 404, y: 92 },
// ];

// const COORDS = [
//   "23.8103° N, 90.4125° E",
//   "23.8112° N, 90.4141° E",
//   "23.8127° N, 90.4159° E",
//   "23.8140° N, 90.4176° E",
// ];

// export function HeroVisual() {
//   const [coordIndex, setCoordIndex] = useState(0);
//   const [speed, setSpeed] = useState(52);

//   useEffect(() => {
//     const id = setInterval(() => {
//       setCoordIndex((i) => (i + 1) % COORDS.length);
//       setSpeed(48 + Math.round(Math.random() * 16));
//     }, 1800);
//     return () => clearInterval(id);
//   }, []);

//   return (
//     <div
//       className="relative aspect-[5/4] w-full overflow-hidden rounded-xl2 border border-line bg-ink shadow-card-hover sm:aspect-[4/3]"
//       role="img"
//       aria-label="Live preview of the FleetMTS dashboard showing a vehicle being tracked along its route in real time"
//     >
//       {/* Map grid backdrop */}
//       <div className="absolute inset-0 bg-grid-dark bg-[length:28px_28px]" />
//       <div className="absolute inset-0 bg-gradient-to-br from-ink via-ink/95 to-ink-soft" />
//       <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-signal/25 blur-3xl" />
//       <div className="pointer-events-none absolute -bottom-20 -left-10 h-56 w-56 rounded-full bg-live/15 blur-3xl" />

//       {/* Dashboard chrome */}
//       <div className="relative flex h-full flex-col p-5 sm:p-6">
//         <div className="flex items-center justify-between">
//           <div className="flex items-center gap-2">
//             <span className="flex h-2 w-2 rounded-full bg-live" aria-hidden="true" />
//             <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-white/70">
//               Live · Unit FL-1042
//             </span>
//           </div>
//           <span className="rounded-full border border-white/15 bg-white/5 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wide text-live">
//             On Route
//           </span>
//         </div>

//         {/* Route */}
//         <div className="relative mt-4 min-h-[150px] flex-1 sm:min-h-0">
//           <svg
//             viewBox="0 0 430 220"
//             className="absolute inset-0 h-full w-full"
//             aria-hidden="true"
//           >
//             <path
//               id="route-path"
//               d="M24,168 C80,90 130,180 168,140 C210,94 250,150 296,118 C332,92 372,110 404,92"
//               fill="none"
//               stroke="#2F6FED"
//               strokeWidth="2.5"
//               strokeDasharray="1 10"
//               strokeLinecap="round"
//               opacity="0.8"
//             />
//             <path
//               d="M24,168 C80,90 130,180 168,140 C210,94 250,150 296,118 C332,92 372,110 404,92"
//               fill="none"
//               stroke="#2F6FED"
//               strokeWidth="1"
//               opacity="0.15"
//             />
//             {/* Origin + destination markers */}
//             <circle cx="24" cy="168" r="4" fill="#8C94A3" />
//             <circle cx="404" cy="92" r="4" fill="#00D9B5" />
//           </svg>

//           {/* Animated tracking dot travelling the route */}
//           <motion.div
//             className="absolute h-3.5 w-3.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-live shadow-[0_0_0_4px_rgba(0,217,181,0.25)]"
//             animate={{
//               left: ROUTE_POINTS.map((p) => `${(p.x / 430) * 100}%`),
//               top: ROUTE_POINTS.map((p) => `${(p.y / 220) * 100}%`),
//             }}
//             transition={{
//               duration: 6,
//               repeat: Infinity,
//               ease: "linear",
//               repeatType: "loop",
//             }}
//           >
//             <span className="absolute inset-0 animate-pulse-ring rounded-full bg-live" />
//           </motion.div>

//           {/* Telemetry chips */}
//           <div className="absolute left-2 top-1 rounded-lg border border-white/10 bg-ink-soft/90 px-2.5 py-1.5 backdrop-blur-sm sm:left-4 sm:top-2 sm:px-3 sm:py-2">
//             <p className="font-mono text-[9px] uppercase tracking-wide text-white/50 sm:text-[10px]">
//               Speed
//             </p>
//             <p className="font-mono text-xs font-medium text-white sm:text-sm">
//               {speed} <span className="text-white/50">km/h</span>
//             </p>
//           </div>

//           <div className="absolute bottom-1 right-1 max-w-[130px] rounded-lg border border-white/10 bg-ink-soft/90 px-2.5 py-1.5 text-right backdrop-blur-sm sm:bottom-2 sm:right-2 sm:max-w-[190px] sm:px-3 sm:py-2">
//             <p className="font-mono text-[9px] uppercase tracking-wide text-white/50 sm:text-[10px]">
//               Position
//             </p>
//             <p className="font-mono text-[9px] font-medium leading-tight text-white sm:text-[11px]">
//               {COORDS[coordIndex]}
//             </p>
//           </div>
//         </div>

//         <div className="mt-4 flex items-center justify-between border-t border-white/10 pt-4">
//           <div>
//             <p className="font-mono text-[10px] uppercase tracking-wide text-white/50">
//               Driver
//             </p>
//             <p className="text-sm font-medium text-white">R. Hasan</p>
//           </div>
//           <div className="text-right">
//             <p className="font-mono text-[10px] uppercase tracking-wide text-white/50">
//               ETA
//             </p>
//             <p className="text-sm font-medium text-white">14 min</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
