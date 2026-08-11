/**
 * Centralized site configuration.
 *
 * This is the single place to update company info, contact details,
 * and navigation. Product data (VTS / VMS) lives in `products.ts`.
 */

export const siteConfig = {
  name: "Fleetline",
  legalName: "Fleetline Technologies",
  tagline: "Smarter Fleet Management. Complete Control.",
  description:
    "Fleetline gives modern fleets real-time visibility and complete operational control — from live GPS tracking to vehicle, driver, and maintenance management, in one connected platform.",
  url: "https://www.fleetline.example.com",

  nav: [
    { label: "Products", href: "#products" },
    { label: "Use Cases", href: "#use-cases" },
    { label: "Features", href: "#features" },
    { label: "Why Us", href: "#why-us" },
    { label: "Reviews", href: "#reviews" },
    { label: "Contact", href: "#contact" },
  ],

  cta: {
    primary: { label: "Get Started", href: "#contact" },
  },

  contact: {
    email: "hello@fleetline.example.com",
    phone: "+880 1XXX-XXXXXX",
    // Digits only, international format, no symbols — used to build the wa.me link.
    whatsapp: "8801XXXXXXXXX",
    whatsappMessage: "Hi Fleetline, I'd like to learn more about your fleet solutions.",
  },
} as const;

export type SiteConfig = typeof siteConfig;
