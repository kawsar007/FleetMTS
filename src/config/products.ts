/**
 * Centralized product configuration.
 *
 * Update `url` for each product to point to the live VTS / VMS
 * application once available. Nothing else in the codebase should
 * hardcode these URLs — always import from here.
 */

export type ProductId = "vts" | "vms";

export interface Product {
  id: ProductId;
  name: string;
  shortName: string;
  eyebrow: string;
  description: string;
  features: string[];
  url: string;
  ctaLabel: string;
  stat: { value: string; label: string };
}

export const products: Product[] = [
  {
    id: "vts",
    name: "Vehicle Tracking System",
    shortName: "VTS",
    eyebrow: "Real-time visibility",
    description:
      "Watch every vehicle move in real time. VTS gives you precise GPS tracking, route history, and instant alerts, so you always know where your fleet is and how it's performing.",
    features: [
      "Track Vehicles in Real Time",
      "Monitor Live Vehicle Locations",
      "Optimize Routes & Monitor Journeys",
      "Replay Trips with Detailed History",
      "Monitor & Improve Driver Behavior",
      "Get Complete Fleet-Wide Visibility",
      "Create & Manage Smart Geofences",
      "Access Comprehensive Fleet Reports"
    ],
    url: "https://vts-landing-page.vercel.app/",
    ctaLabel: "Explore VTS",
    stat: { value: "2s", label: "location refresh" },
  },
  {
    id: "vms",
    name: "Vehicle Management System",
    shortName: "VMS",
    eyebrow: "Complete operations",
    description:
      "Run the full lifecycle of your fleet from one place. VMS handles vehicles, drivers, maintenance schedules, and reporting, so operations stay organized as you scale.",
    features: [
      "Vehicle records management",
      "Driver management",
      "Maintenance scheduling",
      "Fleet documentation",
      "Operational workflows",
      "Reports & analytics",
    ],
    url: "https://vms.example.com",
    ctaLabel: "Explore VMS",
    stat: { value: "1", label: "unified dashboard" },
  },
];

export const getProduct = (id: ProductId): Product => {
  const product = products.find((p) => p.id === id);
  if (!product) throw new Error(`Unknown product id: ${id}`);
  return product;
};
