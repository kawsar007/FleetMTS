import { BackToTop } from "@/components/shared/BackToTop";
import { GlobalLoader } from "@/components/shared/GlobalLoader";
import { MotionProvider } from "@/components/shared/MotionProvider";
import { OrganizationJsonLd } from "@/components/shared/OrganizationJsonLd";
import { SkipToContent } from "@/components/shared/SkipToContent";
import { WhatsAppButton } from "@/components/shared/WhatsAppButton";
import { siteConfig } from "@/config/site";
import { fontBody, fontDisplay, fontMono } from "@/lib/fonts";
import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — Smarter Fleet. Better Control.`,
    template: `%s — ${siteConfig.name}`,
  },
  description: siteConfig.description,
  alternates: {
    canonical: "/",
  },
  keywords: [
    "fleet management",
    "vehicle tracking system",
    "vehicle management system",
    "GPS fleet tracking",
    "fleet operations software",
  ],
  openGraph: {
    title: `${siteConfig.name} — Vehicle Fleet Management Solutions`,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — Vehicle Fleet Management Solutions`,
    description: siteConfig.description,
  },
};

export const viewport: Viewport = {
  themeColor: "#0A0E17",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${fontDisplay.variable} ${fontBody.variable} ${fontMono.variable}`}>
      <body className="overflow-x-hidden">
        <OrganizationJsonLd />
        <SkipToContent />
        <MotionProvider>
          <GlobalLoader />
          {children}
          <WhatsAppButton />
          <BackToTop />
        </MotionProvider>
      </body>
    </html>
  );
}
