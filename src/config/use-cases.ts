import type { LucideIcon } from "lucide-react";
import { Truck, Building2, Car, Wrench } from "lucide-react";

export interface UseCase {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
  metric: { value: string; label: string };
}

export const useCases: UseCase[] = [
  {
    id: "logistics",
    icon: Truck,
    title: "Logistics & Delivery",
    description:
      "Keep delivery windows tight and customers informed with live ETAs, route history, and exception alerts across every vehicle on the road.",
    metric: { value: "18%", label: "avg. faster deliveries" },
  },
  {
    id: "transport",
    icon: Car,
    title: "Transport & Ride Fleets",
    description:
      "Monitor driver behavior, trip patterns, and vehicle utilization to keep passenger and transport fleets safe, efficient, and accountable.",
    metric: { value: "24/7", label: "live fleet visibility" },
  },
  {
    id: "construction",
    icon: Wrench,
    title: "Construction & Heavy Equipment",
    description:
      "Track high-value machinery across job sites, schedule preventive maintenance, and cut idle time on equipment that's expensive to leave standing still.",
    metric: { value: "30%", label: "less unplanned downtime" },
  },
  {
    id: "corporate",
    icon: Building2,
    title: "Corporate & Field Service",
    description:
      "Give field teams and corporate fleets a single system of record, from vehicle assignment to service history, without the spreadsheet sprawl.",
    metric: { value: "1", label: "system of record" },
  },
];
