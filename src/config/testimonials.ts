export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  role: string;
  company: string;
  rating: number; // out of 5
}

export const testimonials: Testimonial[] = [
  {
    id: "meridian",
    quote:
      "We went from calling drivers to find out where they were, to just looking at a screen. VTS paid for itself in the first month on fuel savings alone.",
    name: "Farhan Ahmed",
    role: "Operations Manager",
    company: "Meridian Logistics",
    rating: 5,
  },
  {
    id: "northstar",
    quote:
      "Maintenance used to sneak up on us. Now VMS flags every vehicle coming due for service before it becomes a breakdown on the road.",
    name: "Priya Nair",
    role: "Fleet Director",
    company: "Northstar Transit",
    rating: 5,
  },
  {
    id: "apex",
    quote:
      "Our equipment sits across a dozen job sites at any given time. Fleetline is the first tool that's actually kept up with how spread out we are.",
    name: "Daniel Osei",
    role: "Site Operations Lead",
    company: "Apex Construction Group",
    rating: 5,
  },
  {
    id: "harborline",
    quote:
      "The reports alone changed how we plan routes. We cut idle time noticeably in the first quarter just by seeing where it was happening.",
    name: "Elena Vasquez",
    role: "Logistics Coordinator",
    company: "Harborline Freight",
    rating: 4,
  },
  {
    id: "civicworks",
    quote:
      "Rolling this out across a municipal fleet could have been a nightmare. The onboarding team made it a two-week project, not a two-quarter one.",
    name: "Tanvir Rahman",
    role: "Fleet Administrator",
    company: "CivicWorks Municipal Services",
    rating: 5,
  },
  {
    id: "swiftcargo",
    quote:
      "Support actually picks up the phone. When we've had questions during setup, we've talked to a person, not a chatbot.",
    name: "Grace Mwangi",
    role: "Operations Lead",
    company: "SwiftCargo Freight",
    rating: 5,
  },
];
