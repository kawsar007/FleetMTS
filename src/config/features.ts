import type { LucideIcon } from "lucide-react";
import {
  Radar,
  MapPinned,
  BellRing,
  Wrench,
  FileBarChart,
  ShieldCheck,
} from "lucide-react";

export interface Feature {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
}

export const features: Feature[] = [
  {
    id: "live-tracking",
    icon: Radar,
    title: "Real-time tracking",
    description:
      "See every vehicle's exact location updating live on the map, no refreshing, no delay.",
  },
  {
    id: "geofencing",
    icon: MapPinned,
    title: "Geofencing & zones",
    description:
      "Draw zones around depots, sites, or restricted areas and get notified the moment a vehicle enters or leaves.",
  },
  {
    id: "alerts",
    icon: BellRing,
    title: "Instant alerts",
    description:
      "Speeding, unscheduled stops, route deviations, and idle time trigger alerts the moment they happen, not the next morning.",
  },
  {
    id: "maintenance",
    icon: Wrench,
    title: "Maintenance scheduling",
    description:
      "Set service intervals by mileage or time and get ahead of repairs before they become breakdowns.",
  },
  {
    id: "reports",
    icon: FileBarChart,
    title: "Reports & analytics",
    description:
      "Turn raw fleet data into readable reports on utilization, fuel, and driver performance, exportable in a click.",
  },
  {
    id: "security",
    icon: ShieldCheck,
    title: "Role-based access",
    description:
      "Control exactly who can see what, from a single driver's trip history to fleet-wide financials.",
  },
];
