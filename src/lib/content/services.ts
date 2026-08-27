export type Service = {
  slug: string;
  shortTitle: string;
  title: string;
  cardDescription: string;
  summary: string;
  provide: string[];
  outcomes: string[];
  ctaLabel: string;
  image: string;
  imageAlt: string;
};

export const services: Service[] = [
  {
    slug: "websites",
    shortTitle: "Websites & Apps",
    title: "Websites & Apps",
    cardDescription:
      "The site that brings people to you, the tools on it that turn a visit into an enquiry, and mobile apps where a phone app beats a browser.",
    summary:
      "The public face of your business — the site people land on and judge you by in five seconds. Sometimes that's a fast, clean website; sometimes a website plus tools people can actually use; sometimes what you need is a mobile app.",
    provide: [
      "New site builds and full redesigns, from a few pages to larger content-led sites",
      "Interactive tools built into the site — calculators, booking flows, quote tools",
      "Mobile apps for iOS and Android, where a phone app genuinely beats a mobile site",
      "Performance and SEO built in from day one, not bolted on after",
    ],
    outcomes: [
      "A site — or app — that loads fast and works properly on every device",
      "Messaging that gets your offer across in the first five seconds",
      "A site you can hand back to us for updates, or manage yourself",
    ],
    ctaLabel: "Talk about your website",
    image: "/images/service-websites.jpg",
    imageAlt: "A laptop showing a website beside a phone displaying the same site as a mobile app, with a person's hands on both",
  },
  {
    slug: "web-applications",
    shortTitle: "Digital Products",
    title: "Digital Products",
    cardDescription:
      "Software built specifically for your business — a portal your clients log into, a tool your team relies on daily, or a product you sell in its own right. Not a website with extra features bolted on.",
    summary:
      "Some things aren't really websites at all — they're software your business runs on: a client portal, an internal tool, a product for your own customers. Built around how your business works, rather than the other way round.",
    provide: [
      "Bespoke client and staff portals people log into and actually use",
      "Internal tools that remove manual, repetitive admin",
      "Workflow systems built around how your team really operates",
      "MVPs that test an idea quickly before committing to a larger build",
    ],
    outcomes: [
      "Software that fits how your business already works",
      "Hours back each week from manual admin and spreadsheets",
      "A codebase built to be extended as the product grows",
    ],
    ctaLabel: "Discuss a digital product",
    image: "/images/service-web-applications.jpg",
    imageAlt: "A laptop displaying a dashboard of charts and reporting data",
  },
  {
    slug: "ai-automation",
    shortTitle: "AI & Automation",
    title: "AI Solutions & Automation",
    cardDescription:
      "Practical AI-assisted workflows and automation that remove repetitive work — without the hype.",
    summary:
      "AI is genuinely useful applied to a specific, well-understood problem. It's far less useful as a headline feature bolted onto something that didn't need it.",
    provide: [
      "AI-assisted workflows for content, research and internal processes",
      "Business process automation that removes repetitive manual work",
      "AI-enabled features within websites and web applications",
      "Integrations between the tools your business already uses",
    ],
    outcomes: [
      "Time saved on repetitive, low-value tasks",
      "AI applied where it earns its place, not everywhere at once",
      "A clear-eyed view of what AI can and can't do for your business",
    ],
    ctaLabel: "Explore AI for your business",
    image: "/images/service-ai-automation.jpg",
    imageAlt: "A laptop open on a code editor, on a pale wooden desk",
  },
  {
    slug: "technical-delivery",
    shortTitle: "Technical Delivery",
    title: "Technical Delivery Consultancy",
    cardDescription:
      "Senior delivery support for teams and programmes that need to move with more clarity and pace.",
    summary:
      "Good technology often struggles for the same reasons: unclear ownership, delivery that isn't structured to reduce risk, and teams that aren't set up to collaborate well. Experienced delivery leadership is what changes that.",
    provide: [
      "Technical delivery management for projects and programmes",
      "Agile delivery support, tailored to how your teams actually work",
      "Team coaching to improve collaboration and delivery pace",
      "Programme and project leadership across teams",
    ],
    outcomes: [
      "Clearer delivery structure and ownership",
      "Improved pace without cutting corners",
      "Stakeholders who understand progress and risk without chasing it",
    ],
    ctaLabel: "Talk about delivery support",
    image: "/images/service-technical-delivery.jpg",
    imageAlt: "A whiteboard split into to do, in progress and done columns with sticky notes",
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((service) => service.slug === slug);
}
