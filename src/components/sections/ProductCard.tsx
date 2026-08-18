"use client";

import { PrimaryButton } from "@/components/ui/PrimaryButton";
import type { Product } from "@/config/products";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const [activeImage, setActiveImage] = useState(0);

  // Placeholder images from Unsplash - replace with actual product images
  const productImages = [
    "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&h=600&fit=crop",
  ];

  // Demo data - replace with actual product data
  const stats = {
    downloads: "170k+",
    users: "200k+",
    revenue: "10 Crore+",
  };

  const keyFeatures = [
    "Live Classes & Recorded Classes for flexible learning.",
    "Gamified Rewards System based on student performance.",
    "Affiliate Program for referrals & Printing Service.",
    "Interactive Quizzes & Exams.",
  ];

  const links = {
    website: "www.acsfutureschool.com",
    playstore: "https://play.google.com/store",
  };

  return (
    <motion.div
      // whileHover={{ y: -4 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="group relative flex w-full flex-col overflow-hidden rounded-xl2 border border-line shadow-card transition-shadow duration-300 "
    >
      {/* Top gradient line */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-signal/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        aria-hidden="true"
      />

      <div className="flex flex-col lg:flex-row gap-6 p-6 sm:p-8">
        {/* Left Column - Image Gallery */}
        <div className="lg:w-[45%] xl:w-[40%] flex-shrink-0">
          {/* Main Image */}
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-lg bg-ink/5">
            <Image
              src={productImages[activeImage] || ""}
              alt={product.name}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
            {/* Gradient overlay for premium feel */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
          </div>

          {/* Thumbnail Images */}
          <div className="mt-3 grid grid-cols-4 gap-2">
            {productImages.map((img, index) => (
              <button
                key={index}
                onClick={() => setActiveImage(index)}
                className={`relative aspect-[16/9] overflow-hidden rounded-lg border-2 transition-all duration-200 ${activeImage === index
                  ? "border-signal shadow-md"
                  : "border-transparent hover:border-signal/30"
                  }`}
                aria-label={`View image ${index + 1}`}
              >
                <Image
                  src={img}
                  alt={`${product.name} thumbnail ${index + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 25vw, 10vw"
                />
                {activeImage === index && (
                  <div className="absolute inset-0 bg-signal/10" />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Right Column - Content */}
        <div className="flex-1 flex flex-col">
          {/* Eyebrow */}
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-signal/20 bg-signal-soft px-2.5 py-1 font-mono text-[10px] uppercase tracking-wide text-signal-dim">
            {product.eyebrow}
          </span>

          {/* Title */}
          <h3 className="mt-4 font-display text-2xl font-semibold text-ink">
            {product.name}
            <span className="ml-2 text-slate-dim">({product.shortName})</span>
          </h3>

          {/* Description */}
          <p className="mt-3 text-[15px] leading-relaxed text-slate">
            {product.description}
          </p>

          {/* Stats Section - Premium Design */}
          {/* <div className="mt-6 grid grid-cols-3 gap-4 rounded-xl bg-gradient-to-br from-signal-soft/20 to-transparent p-4 border border-signal/10">
            <div className="text-center">
              <p className="font-display text-xl font-semibold text-ink">
                {stats.downloads}
              </p>
              <p className="text-[10px] uppercase tracking-wider text-slate-dim">
                Downloads
              </p>
            </div>
            <div className="text-center border-x border-signal/10">
              <p className="font-display text-xl font-semibold text-ink">
                {stats.users}
              </p>
              <p className="text-[10px] uppercase tracking-wider text-slate-dim">
                Active Users
              </p>
            </div>
            <div className="text-center">
              <p className="font-display text-xl font-semibold text-signal">
                {stats.revenue}
              </p>
              <p className="text-[10px] uppercase tracking-wider text-slate-dim">
                Revenue
              </p>
            </div>
          </div> */}

          {/* Key Features */}
          <ul className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2.5">
            {product.features.map((feature) => (
              <li key={feature} className="flex items-start gap-2 text-sm text-ink/85">
                <svg
                  viewBox="0 0 20 20"
                  fill="none"
                  className="mt-0.5 h-4 w-4 shrink-0 text-signal"
                  aria-hidden="true"
                >
                  <path
                    d="M4 10.5l3.5 3.5L16 6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                {feature}
              </li>
            ))}
          </ul>

          {/* Links Section */}
          <div className="mt-6 space-y-2">
            <a
              // href={`https://${links.website}`}
              href={product.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-signal hover:text-signal/80 transition-colors duration-200"
            >
              <svg
                viewBox="0 0 20 20"
                fill="none"
                className="h-4 w-4"
                aria-hidden="true"
              >
                <path
                  d="M2 10a8 8 0 0116 0 8 8 0 01-16 0z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <path
                  d="M2 10h16M10 2a8 8 0 000 16"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
              </svg>
              {product.url}
            </a>
            {/* <a
              href={links.playstore}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-slate-dim hover:text-slate transition-colors duration-200"
            >
              <svg
                viewBox="0 0 20 20"
                fill="none"
                className="h-4 w-4"
                aria-hidden="true"
              >
                <path
                  d="M3 4.5v11l4-5.5-4-5.5zM17 4.5l-4 5.5 4 5.5v-11zM7.5 10l2.5 3.5L10 10l-2.5-3.5L7.5 10z"
                  fill="currentColor"
                />
                <path
                  d="M12.5 10L10 13.5 7.5 10 10 6.5 12.5 10z"
                  fill="currentColor"
                />
              </svg>
              Play Store
            </a> */}
          </div>

          {/* CTA Button */}
          <div className="mt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-line pt-6">
            <p className="text-xs text-slate-dim leading-relaxed">
              Real-Time Tracking. Smarter Fleet Management.
            </p>
            <PrimaryButton
              href={product.url}
              withArrow
              aria-label={`${product.ctaLabel} — opens in a new tab`}
              className="flex-shrink-0"
            >
              {product.ctaLabel}
            </PrimaryButton>
          </div>
        </div>
      </div>
    </motion.div>
  );
}





// "use client";

// import { PrimaryButton } from "@/components/ui/PrimaryButton";
// import type { Product } from "@/config/products";
// import { motion } from "framer-motion";

// interface ProductCardProps {
//   product: Product;
// }

// function VtsVisual() {
//   return (
//     <div className="relative h-full w-full overflow-hidden rounded-xl border border-white/10 bg-ink">
//       <div className="absolute inset-0 bg-grid-dark bg-[length:22px_22px]" />
//       <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-signal/25 blur-2xl" />
//       <svg viewBox="0 0 300 170" className="absolute inset-0 h-full w-full" aria-hidden="true">
//         <path
//           d="M16,140 C60,80 100,150 140,110 C176,74 210,120 284,60"
//           fill="none"
//           stroke="#2F6FED"
//           strokeWidth="2"
//           strokeDasharray="1 9"
//           strokeLinecap="round"
//           opacity="0.85"
//         />
//         <circle cx="16" cy="140" r="3.5" fill="#8C94A3" />
//         <circle cx="284" cy="60" r="3.5" fill="#00D9B5" />
//       </svg>
//       <motion.div
//         className="absolute h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-live"
//         animate={{
//           left: ["6%", "20%", "34%", "47%", "58%", "70%", "94%"],
//           top: ["82%", "47%", "88%", "65%", "51%", "38%", "35%"],
//         }}
//         transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
//       >
//         <span className="absolute inset-0 animate-pulse-ring rounded-full bg-live" />
//       </motion.div>
//       <div className="absolute left-3 top-3 rounded-md border border-white/10 bg-white/5 px-2 py-1 font-mono text-[10px] text-live">
//         ● Live
//       </div>
//     </div>
//   );
// }

// function VmsVisual() {
//   const rows = [
//     { label: "Unit FL-1042", status: "Active" },
//     { label: "Unit FL-1108", status: "Maintenance" },
//     { label: "Unit FL-1231", status: "Active" },
//   ];
//   return (
//     <div className="relative h-full w-full overflow-hidden rounded-xl border border-white/10 bg-ink p-4">
//       <div className="absolute -left-8 -bottom-10 h-40 w-40 rounded-full bg-live/15 blur-2xl" />
//       <div className="relative flex items-center justify-between font-mono text-[10px] uppercase tracking-wide text-white/50">
//         <span>Fleet Records</span>
//         <span>3 of 128</span>
//       </div>
//       <div className="relative mt-3 space-y-2">
//         {rows.map((row, i) => (
//           <motion.div
//             key={row.label}
//             initial={{ opacity: 0, x: -8 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ delay: 0.15 * i, duration: 0.4 }}
//             className="flex items-center justify-between rounded-lg border border-white/10 bg-white/5 px-3 py-2"
//           >
//             <span className="text-xs font-medium text-white">{row.label}</span>
//             <span
//               className={`rounded-full px-2 py-0.5 font-mono text-[10px] ${row.status === "Active"
//                 ? "bg-live/15 text-live"
//                 : "bg-white/10 text-white/60"
//                 }`}
//             >
//               {row.status}
//             </span>
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export function ProductCard({ product }: ProductCardProps) {
//   const isVts = product.id === "vts";

//   return (
//     <motion.div
//       whileHover={{ y: -6 }}
//       transition={{ duration: 0.25, ease: "easeOut" }}
//       className="group relative flex h-full flex-col overflow-hidden rounded-xl2 border border-line bg-white p-6 shadow-card transition-shadow duration-300 hover:shadow-card-hover sm:p-8"
//     >
//       <div
//         className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-signal/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
//         aria-hidden="true"
//       />

//       <div className="mb-6 aspect-[16/10] w-full">
//         {isVts ? <VtsVisual /> : <VmsVisual />}
//       </div>

//       <span className="inline-flex w-fit items-center gap-2 rounded-full border border-signal/20 bg-signal-soft px-2.5 py-1 font-mono text-[10px] uppercase tracking-wide text-signal-dim">
//         {product.eyebrow}
//       </span>

//       <h3 className="mt-4 font-display text-2xl font-semibold text-ink">
//         {product.name}
//         <span className="ml-2 text-slate-dim">({product.shortName})</span>
//       </h3>

//       <p className="mt-3 text-[15px] leading-relaxed text-slate">
//         {product.description}
//       </p>

//       <ul className="mt-6 grid grid-cols-1 gap-x-4 gap-y-2.5 sm:grid-cols-2">
//         {product.features.map((feature) => (
//           <li key={feature} className="flex items-start gap-2 text-sm text-ink/85">
//             <svg
//               viewBox="0 0 20 20"
//               fill="none"
//               className="mt-0.5 h-4 w-4 shrink-0 text-signal"
//               aria-hidden="true"
//             >
//               <path
//                 d="M4 10.5l3.5 3.5L16 6"
//                 stroke="currentColor"
//                 strokeWidth="2"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//               />
//             </svg>
//             {feature}
//           </li>
//         ))}
//       </ul>

//       <div className="mt-8 flex items-center justify-between gap-4 border-t border-line pt-6">
//         <div>
//           <p className="font-mono text-2xl font-semibold text-ink">
//             {product.stat.value}
//           </p>
//           <p className="text-xs text-slate-dim">{product.stat.label}</p>
//         </div>
//         <PrimaryButton href={product.url} withArrow aria-label={`${product.ctaLabel} — opens in a new tab`}>
//           {product.ctaLabel}
//         </PrimaryButton>
//       </div>
//     </motion.div>
//   );
// }