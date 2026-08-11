"use client";

import { motion } from "framer-motion";
import type { Product } from "@/config/products";
import { PrimaryButton } from "@/components/ui/PrimaryButton";

interface ProductCardProps {
  product: Product;
}

function VtsVisual() {
  return (
    <div className="relative h-full w-full overflow-hidden rounded-xl border border-white/10 bg-ink">
      <div className="absolute inset-0 bg-grid-dark bg-[length:22px_22px]" />
      <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-signal/25 blur-2xl" />
      <svg viewBox="0 0 300 170" className="absolute inset-0 h-full w-full" aria-hidden="true">
        <path
          d="M16,140 C60,80 100,150 140,110 C176,74 210,120 284,60"
          fill="none"
          stroke="#2F6FED"
          strokeWidth="2"
          strokeDasharray="1 9"
          strokeLinecap="round"
          opacity="0.85"
        />
        <circle cx="16" cy="140" r="3.5" fill="#8C94A3" />
        <circle cx="284" cy="60" r="3.5" fill="#00D9B5" />
      </svg>
      <motion.div
        className="absolute h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-live"
        animate={{
          left: ["6%", "20%", "34%", "47%", "58%", "70%", "94%"],
          top: ["82%", "47%", "88%", "65%", "51%", "38%", "35%"],
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
      >
        <span className="absolute inset-0 animate-pulse-ring rounded-full bg-live" />
      </motion.div>
      <div className="absolute left-3 top-3 rounded-md border border-white/10 bg-white/5 px-2 py-1 font-mono text-[10px] text-live">
        ● Live
      </div>
    </div>
  );
}

function VmsVisual() {
  const rows = [
    { label: "Unit FL-1042", status: "Active" },
    { label: "Unit FL-1108", status: "Maintenance" },
    { label: "Unit FL-1231", status: "Active" },
  ];
  return (
    <div className="relative h-full w-full overflow-hidden rounded-xl border border-white/10 bg-ink p-4">
      <div className="absolute -left-8 -bottom-10 h-40 w-40 rounded-full bg-live/15 blur-2xl" />
      <div className="relative flex items-center justify-between font-mono text-[10px] uppercase tracking-wide text-white/50">
        <span>Fleet Records</span>
        <span>3 of 128</span>
      </div>
      <div className="relative mt-3 space-y-2">
        {rows.map((row, i) => (
          <motion.div
            key={row.label}
            initial={{ opacity: 0, x: -8 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 * i, duration: 0.4 }}
            className="flex items-center justify-between rounded-lg border border-white/10 bg-white/5 px-3 py-2"
          >
            <span className="text-xs font-medium text-white">{row.label}</span>
            <span
              className={`rounded-full px-2 py-0.5 font-mono text-[10px] ${
                row.status === "Active"
                  ? "bg-live/15 text-live"
                  : "bg-white/10 text-white/60"
              }`}
            >
              {row.status}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export function ProductCard({ product }: ProductCardProps) {
  const isVts = product.id === "vts";

  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="group relative flex h-full flex-col overflow-hidden rounded-xl2 border border-line bg-white p-6 shadow-card transition-shadow duration-300 hover:shadow-card-hover sm:p-8"
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-signal/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        aria-hidden="true"
      />

      <div className="mb-6 aspect-[16/10] w-full">
        {isVts ? <VtsVisual /> : <VmsVisual />}
      </div>

      <span className="inline-flex w-fit items-center gap-2 rounded-full border border-signal/20 bg-signal-soft px-2.5 py-1 font-mono text-[10px] uppercase tracking-wide text-signal-dim">
        {product.eyebrow}
      </span>

      <h3 className="mt-4 font-display text-2xl font-semibold text-ink">
        {product.name}
        <span className="ml-2 text-slate-dim">({product.shortName})</span>
      </h3>

      <p className="mt-3 text-[15px] leading-relaxed text-slate">
        {product.description}
      </p>

      <ul className="mt-6 grid grid-cols-1 gap-x-4 gap-y-2.5 sm:grid-cols-2">
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

      <div className="mt-8 flex items-center justify-between gap-4 border-t border-line pt-6">
        <div>
          <p className="font-mono text-2xl font-semibold text-ink">
            {product.stat.value}
          </p>
          <p className="text-xs text-slate-dim">{product.stat.label}</p>
        </div>
        <PrimaryButton href={product.url} withArrow aria-label={`${product.ctaLabel} — opens in a new tab`}>
          {product.ctaLabel}
        </PrimaryButton>
      </div>
    </motion.div>
  );
}
