export type Service = {
  slug: string;
  shortTitle: string;
  title: string;
  cardDescription: string;
  summary: string;
  problem: string;
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
      "New sites, redesigns and lightweight functionality — built to load fast, read clearly and turn visitors into enquiries.",
    summary:
      "Your website is usually the first real impression a prospective client forms of your business. Whether it's a straightforward brochure site or one with booking forms and light interactive features built in, it needs to load quickly, explain what you do without effort, and make it obvious what to do next.",
    problem:
      "Many small business websites are slow, dated, or built on templates that don't reflect the quality of the work behind them. Visitors bounce before they understand what's on offer, and enquiries never arrive.",
    provide: [
      "New site builds and full redesigns, from a handful of pages to larger content-led sites",
      "Responsive, mobile-first development with clean, semantic code",
      "Light interactive features built in — forms, booking widgets, calculators — without a full separate product",
      "Conversion-focused layouts and clear calls to action",
      "SEO-friendly structure — sensible URLs, heading hierarchy and metadata from day one",
      "Performance optimisation for fast load times and strong Core Web Vitals",
    ],
    outcomes: [
      "A site that loads fast and works properly on every device",
      "Clearer messaging that helps visitors understand your offer quickly",
      "A stronger foundation for organic search — without guaranteed ranking promises",
      "A site you can hand over to us for updates, or manage yourself",
    ],
    ctaLabel: "Talk about your website",
  },
  {
    slug: "web-applications",
    shortTitle: "Digital Products",
    title: "Digital Products",
    cardDescription:
      "Bespoke portals, internal tools and custom-built products, designed around how your business actually works.",
    summary:
      "Sometimes a website isn't enough — you need something built specifically for your business: a client portal, an internal tool, or a standalone product for your own customers.",
    problem:
      "Off-the-shelf software often forces a business to change how it works to fit the tool. Custom-built alternatives are frequently over-scoped, slow to ship, or built by teams more interested in the technology than the problem.",
    provide: [
      "Bespoke client and staff portals",
      "Internal tools that remove manual, repetitive work",
      "Custom booking and workflow systems built around your process",
      "Lightweight SaaS products and standalone digital products",
      "MVPs designed to test an idea quickly before committing to a larger build",
    ],
    outcomes: [
      "A product that fits the way your business already operates",
      "Less time lost to manual admin and spreadsheets",
      "A working product you can put in front of real users quickly",
      "A codebase built to be extended, not thrown away",
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
    problem:
      "Many businesses know AI could help somewhere but aren't sure where, and are wary of consultants who lead with buzzwords rather than outcomes. Meanwhile useful, unglamorous automation — the kind that saves hours every week — often goes unbuilt.",
    provide: [
      "AI-assisted workflows for content, research and internal processes",
      "Business process automation that removes repetitive manual work",
      "AI-enabled features within websites and web applications",
      "Intelligent search and content workflows",
      "Conversational interfaces where they genuinely improve the experience",
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
    problem:
      "Technology programmes stall when delivery lacks structure, stakeholders aren't aligned, or teams haven't been given the support to work effectively together. Adding more process rarely fixes this — the right delivery leadership usually does.",
    provide: [
      "Technical delivery management for projects and programmes",
      "Agile delivery support, tailored to how your teams actually work",
      "Team coaching to improve collaboration and delivery pace",
      "Delivery improvement reviews and practical recommendations",
      "Programme and project leadership",
      "Stakeholder management, and closer collaboration between product, engineering and business teams",
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
