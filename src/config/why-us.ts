import type { LucideIcon } from "lucide-react";
import { Gauge, Layers, HeadphonesIcon, Lock } from "lucide-react";

export interface Reason {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
}

export const reasons: Reason[] = [
  {
    id: "reliable",
    icon: Gauge,
    title: "Built for reliability",
    description:
      "99.9% platform uptime with redundant infrastructure, so your fleet visibility never goes dark when you need it most.",
  },
  {
    id: "scalable",
    icon: Layers,
    title: "Scales with your fleet",
    description:
      "From ten vehicles to ten thousand, the same platform grows with you, no re-platforming, no lost history.",
  },
  {
    id: "support",
    icon: HeadphonesIcon,
    title: "Real support, real people",
    description:
      "A dedicated onboarding team and responsive support, not a ticket queue that disappears after the sale.",
  },
  {
    id: "secure",
    icon: Lock,
    title: "Security by default",
    description:
      "Encrypted data in transit and at rest, granular access controls, and regular audits protect your fleet data.",
  },
];

export const trustStats = [
  { value: "400+", label: "fleet operators" },
  { value: "12k+", label: "vehicles tracked" },
  { value: "99.9%", label: "platform uptime" },
  { value: "24/7", label: "monitoring & support" },
];
