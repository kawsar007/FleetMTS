export interface Client {
  id: string;
  name: string;
  /** Path under /public — e.g. "/clients/bsrm.png" */
  logo: string;
}

/**
 * Trusted-by logos shown in the Hero section's auto-scrolling strip.
 * Add your actual logo files to `public/clients/` and update the paths
 * below. Keep logos as transparent PNG/SVG for the best result.
 */
export const clients: Client[] = [
  { id: "bsrm", name: "BSRM", logo: "/clients/bsrm.png" },
  { id: "concord", name: "Concord", logo: "/clients/concord.png" },
  { id: "aarong", name: "Aarong", logo: "/clients/aarong.png" },
  { id: "transcom", name: "Transcom", logo: "/clients/transcom.png" },
  { id: "uttara-motors", name: "Uttara Motors", logo: "/clients/uttara.png" },
  { id: "rancon", name: "Rancon", logo: "/clients/rancon.png" },
  // TODO: replace these 6 with your remaining client logos.
  { id: "aci", name: "ACI", logo: "/clients/aci.png" },
  { id: "radiant", name: "Radiant", logo: "/clients/radiant.png" },
  { id: "crown", name: "Crown", logo: "/clients/crown.png" },
  { id: "brac", name: "BRAC", logo: "/clients/brac.png" },
];