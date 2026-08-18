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
      whileHover={{ y: -4 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="group relative flex w-full flex-col overflow-hidden rounded-xl2 border border-line bg-white shadow-card transition-shadow duration-300 hover:shadow-card-hover"
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
              src={productImages[activeImage]}
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
          <div className="mt-6 grid grid-cols-3 gap-4 rounded-xl bg-gradient-to-br from-signal-soft/20 to-transparent p-4 border border-signal/10">
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
          </div>

          {/* Key Features */}
          <ul className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2.5">
            {keyFeatures.map((feature) => (
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
              href={`https://${links.website}`}
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
              {links.website}
            </a>
            <a
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
            </a>
          </div>

          {/* CTA Button */}
          <div className="mt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-line pt-6">
            <p className="text-xs text-slate-dim leading-relaxed">
              Enabling massive scale education delivery for Class 6 to 10 students in Bangladesh.
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