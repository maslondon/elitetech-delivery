export const siteConfig = {
  name: "Elite Tech Delivery",
  legalName: "Elitetech Delivery Limited",
  domain: "elitetechdelivery.co.uk",
  url: "https://www.elitetechdelivery.co.uk",
  description:
    "Elite Tech Delivery helps businesses design, build and deliver modern digital solutions — from high-performance websites and custom web applications to practical AI solutions and technical delivery consultancy.",
  email: "marc@elitetechdelivery.co.uk",
  phone: "07958 391 825",
  linkedin: "https://www.linkedin.com/in/schneidermarc", // Marc's personal profile, until a company page exists
  companyNumber: "15808621",
  registeredOffice: "Second Floor, Kirkland House, 11-15 Peterborough Road, Harrow, Middlesex, HA1 2AX",
} as const;

export type NavItem = {
  label: string;
  href: string;
};

export const primaryNav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Insights", href: "/insights" },
  { label: "Contact", href: "/contact" },
];

export const footerNav: NavItem[] = [
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Insights", href: "/insights" },
  { label: "Contact", href: "/contact" },
];

export const legalNav: NavItem[] = [
  { label: "Privacy policy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
];
