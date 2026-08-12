import type { LucideIcon } from "lucide-react";
import { BellRing, FileBarChart, Gauge, Radar, Smartphone, Truck } from "lucide-react";

export interface Benefit {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
}

export const benefits: Benefit[] = [
  {
    id: "vehicle-management",
    icon: Truck,
    title: "Vehicle Management System",
    description:
      "VMS is built for reliability and speed, so your team spends less time chasing paperwork and more time keeping vehicles on the road.",
  },
  {
    id: "live-tracking",
    icon: Radar,
    title: "Live Tracking",
    description:
      "Locate any vehicle in your fleet in seconds, from a phone or the web dashboard, without waiting on a call to the driver.",
  },
  {
    id: "reports",
    icon: FileBarChart,
    title: "Reports & Analytics",
    description:
      "Generate reports on speeding, fuel, and vehicle movement in a tap, exportable whenever you need to share them.",
  },
  {
    id: "apps",
    icon: Smartphone,
    title: "Mobile App",
    description:
      "One app that works across your fleet's smart devices, so drivers and managers stay on the same page from anywhere.",
  },
  {
    id: "alerts",
    icon: BellRing,
    title: "Alerts & Notifications",
    description:
      "Real-time updates keep you informed of your vehicles' position and status the moment something needs your attention.",
  },
  {
    id: "overspeed",
    icon: Gauge,
    title: "Over-Speed Alerts",
    description:
      "Speed restraint alerts give you control over how fast every vehicle travels, helping keep drivers and cargo safe.",
  },
];