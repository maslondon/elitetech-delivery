export type Service = {
  slug: string;
  shortTitle: string;
  title: string;
  cardDescription: string;
  summary: string;
  provide: string[];
  outcomes: string[];
  ctaLabel: string;
};

export const services: Service[] = [
  {
    slug: "websites",
    shortTitle: "Websites & Apps",
    title: "Websites & Apps",
    cardDescription:
      "The site that brings people to you, and the small tools on it that turn a visit into an enquiry — calculators, configurators, booking forms, quote tools.",
    summary:
      "This is the public face of your business — the site people land on, judge you by in five seconds, and either explore or leave. Sometimes that's a clean, fast website; sometimes it's a website plus something people can actually use, like a calculator or booking tool.",
    provide: [
      "New site builds and full redesigns, from a handful of pages to larger content-led sites",
      "Interactive tools built into the site itself — calculators, configurators, booking flows, quote tools",
      "Conversion-focused layouts and clear calls to action",
      "Performance and SEO built in from day one, not bolted on after",
    ],
    outcomes: [
      "A site that loads fast and works properly on every device",
      "Interactive tools that actually help visitors, not just decorate the page",
      "Messaging that gets your offer across in the first five seconds",
      "A site you can hand to us for updates, or manage yourself",
    ],
    ctaLabel: "Talk about your website",
  },
  {
    slug: "web-applications",
    shortTitle: "Digital Products",
    title: "Digital Products",
    cardDescription:
      "Software built specifically for your business — a portal your clients log into, a tool your team relies on daily, or a product you sell in its own right. Not a website with extra features bolted on.",
    summary:
      "Some things aren't really websites at all — they're software your business runs on: a client portal, an internal tool, a standalone product for your own customers. This is genuinely custom software, built around how your business works rather than the other way round.",
    provide: [
      "Bespoke client and staff portals people log into and actually use",
      "Internal tools that remove manual, repetitive admin",
      "Workflow and process systems built around how your team really operates",
      "MVPs designed to test an idea quickly before committing to a larger build",
    ],
    outcomes: [
      "Software that fits how your business already works, not the other way round",
      "Hours back each week that were going into manual admin and spreadsheets",
      "A working product you can put in front of real users quickly",
      "A codebase built to be extended as the product grows, not thrown away",
    ],
    ctaLabel: "Discuss a digital product",
  },
  {
    slug: "ai-automation",
    shortTitle: "AI & Automation",
    title: "AI Solutions & Automation",
    cardDescription:
      "Practical AI-assisted workflows and automation that remove repetitive work — without the hype.",
    summary:
      "AI is a genuinely useful capability when it's applied to a specific, well-understood problem. It's less useful as a headline feature bolted onto something that didn't need it.",
    provide: [
      "AI-assisted workflows for content, research and internal processes",
      "Business process automation that removes repetitive manual work",
      "AI-enabled features within websites and web applications",
      "Integrations between the tools your business already uses",
    ],
    outcomes: [
      "Time saved on repetitive, low-value tasks",
      "AI capability applied where it earns its place, not everywhere at once",
      "Solutions built with practical, current tools rather than experimental ones",
      "A clear-eyed view of what AI can and can't sensibly do for your business",
    ],
    ctaLabel: "Explore AI for your business",
  },
  {
    slug: "technical-delivery",
    shortTitle: "Technical Delivery",
    title: "Technical Delivery Consultancy",
    cardDescription:
      "Senior delivery support for teams and programmes that need to move with more clarity and pace.",
    summary:
      "Good technology often struggles for the same reasons: unclear ownership, delivery that isn't structured to reduce risk, and teams that aren't set up to collaborate well. This is where experienced delivery leadership makes the difference.",
    provide: [
      "Technical delivery management for projects and programmes",
      "Agile delivery support, tailored to how your teams actually work",
      "Team coaching to improve collaboration and delivery pace",
      "Programme and project leadership, with closer collaboration across teams",
    ],
    outcomes: [
      "Clearer delivery structure and ownership",
      "Improved pace without cutting corners",
      "Teams that collaborate more effectively across disciplines",
      "Stakeholders who understand progress and risk without having to chase it",
    ],
    ctaLabel: "Talk about delivery support",
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((service) => service.slug === slug);
}
