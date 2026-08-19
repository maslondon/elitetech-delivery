import { sanityClient } from "./client";
import { services as staticServices, type Service } from "@/lib/content/services";
import { articles as staticArticles, type Article, type ContentBlock } from "@/lib/content/insights";
import { siteConfig, primaryNav, legalNav } from "@/lib/site-config";

// Fetch failures (bad token, network hiccup, empty dataset) should never take
// the live site down — every helper below falls back to the existing static
// content on any error, not just when Sanity is unconfigured.
async function safeFetch<T>(query: string, params: Record<string, unknown> = {}): Promise<T | null> {
  if (!sanityClient) return null;
  try {
    return await sanityClient.fetch<T>(query, params, { next: { revalidate: 60 } });
  } catch (error) {
    console.error("[sanity] fetch failed, falling back to static content:", error);
    return null;
  }
}

// ---------- Site settings (email/phone/linkedin/nav labels) ----------

export type SiteSettingsData = {
  email: string;
  phone: string;
  linkedin: string;
  navServices: string;
  navAbout: string;
  navInsights: string;
  navContact: string;
  navPrivacy: string;
  navTerms: string;
  headerCtaLabel: string;
};

const staticSiteSettings: SiteSettingsData = {
  email: siteConfig.email,
  phone: siteConfig.phone,
  linkedin: siteConfig.linkedin,
  navServices: primaryNav.find((n) => n.href === "/services")?.label ?? "Services",
  navAbout: primaryNav.find((n) => n.href === "/about")?.label ?? "About",
  navInsights: primaryNav.find((n) => n.href === "/insights")?.label ?? "Insights",
  navContact: primaryNav.find((n) => n.href === "/contact")?.label ?? "Contact",
  navPrivacy: legalNav.find((n) => n.href === "/privacy")?.label ?? "Privacy policy",
  navTerms: legalNav.find((n) => n.href === "/terms")?.label ?? "Terms",
  headerCtaLabel: "Book a consultation",
};

export async function getSiteSettings(): Promise<SiteSettingsData> {
  const data = await safeFetch<Partial<SiteSettingsData>>(`*[_type == "siteSettings"][0]`);
  return { ...staticSiteSettings, ...stripEmpty(data) };
}

// ---------- Services ----------

type RawServiceDoc = Omit<Partial<Service>, "slug"> & { slug?: { current?: string } };

export async function getServices(): Promise<Service[]> {
  const data = await safeFetch<RawServiceDoc[]>(
    `*[_type == "service"] | order(orderRank asc)`
  );
  if (!data || data.length === 0) return staticServices;
  return data.map((doc, i) => {
    const fallback = staticServices[i] ?? staticServices[0];
    const { slug, ...rest } = doc;
    return {
      ...fallback,
      ...stripEmpty(rest),
      slug: slug?.current ?? fallback.slug,
    };
  });
}

export async function getServiceBySlug(slug: string): Promise<Service | undefined> {
  const list = await getServices();
  return list.find((s) => s.slug === slug);
}

// ---------- Homepage ----------

export type HomePageData = {
  heroEyebrow: string;
  heroHeadline: string;
  heroSubhead: string;
  heroPrimaryCta: string;
  heroSecondaryCta: string;
  trustEyebrow: string;
  trustHeading: string;
  trustPoints: { title: string; body: string }[];
  servicesEyebrow: string;
  servicesHeading: string;
  servicesDescription: string;
  whyEyebrow: string;
  whyHeading: string;
  whyReasons: { title: string; body: string }[];
  processEyebrow: string;
  processHeading: string;
  processSteps: { title: string; body: string }[];
  ctaHeading: string;
  ctaBody: string;
  ctaButtonLabel: string;
};

const staticHomePage: HomePageData = {
  heroEyebrow: "Digital delivery, done properly",
  heroHeadline:
    "Websites, digital products and technology delivery that move your business forward",
  heroSubhead:
    "Elite Tech Delivery helps businesses design, build and deliver modern digital solutions — from high-performance websites and custom web applications to practical AI solutions and technical delivery consultancy.",
  heroPrimaryCta: "Book a consultation",
  heroSecondaryCta: "View our services",
  trustEyebrow: "Why it works",
  trustHeading: "Experience where it matters. Modern technology where it helps.",
  trustPoints: [
    {
      title: "Senior delivery experience",
      body: "Years spent leading technology programmes and delivery teams inside complex organisations — brought to bear on every engagement, however small.",
    },
    {
      title: "Modern development capability",
      body: "Current frameworks, tooling and — where it genuinely helps — AI, used to build and ship faster without cutting corners.",
    },
    {
      title: "One point of accountability",
      body: "No handoffs between sales and delivery. The person who scopes the work is the person who delivers it.",
    },
  ],
  servicesEyebrow: "What we do",
  servicesHeading: "Four ways we help businesses move forward",
  servicesDescription:
    "Most engagements start with a website or a digital product. Many extend into automation or delivery support as the relationship grows.",
  whyEyebrow: "Why Elite Tech Delivery",
  whyHeading: "Senior thinking, applied practically",
  whyReasons: [
    { title: "Senior technology delivery experience", body: "Grounded in years of leading digital programmes, not a portfolio built entirely on small freelance jobs." },
    { title: "Hands-on development capability", body: "Work is actually built, not just scoped and handed to a subcontractor." },
    { title: "Practical, not buzzword-driven", body: "Plain explanations of what's being built and why, without technical theatre." },
    { title: "Focused on business outcomes", body: "Every recommendation is judged against the problem it solves for your business." },
    { title: "Flexible engagement", body: "One-off projects, ongoing support, or delivery consultancy alongside your existing team." },
    { title: "Clear communication throughout", body: "Straightforward updates and honest timelines — no jargon, no surprises." },
  ],
  processEyebrow: "Working together",
  processHeading: "A straightforward process, start to finish",
  processSteps: [
    { title: "Understand", body: "We start with your business, the problem you're trying to solve, and the outcome you actually need — not a generic requirements form." },
    { title: "Build / Improve", body: "We design, build or improve the solution — a website, an application, an automation, or a delivery approach — with regular visibility along the way." },
    { title: "Deliver", body: "We launch, measure what matters, and keep improving. Nothing is treated as finished the moment it ships." },
  ],
  ctaHeading: "Have a project in mind?",
  ctaBody: "Tell us what you're trying to achieve and we'll explore the best way forward.",
  ctaButtonLabel: "Book a consultation",
};

export async function getHomePage(): Promise<HomePageData> {
  const data = await safeFetch<Partial<HomePageData>>(`*[_type == "homePage"][0]`);
  return { ...staticHomePage, ...stripEmpty(data) };
}

// ---------- Articles ----------

export async function getArticles(): Promise<Article[]> {
  const data = await safeFetch<Array<Record<string, unknown>>>(
    `*[_type == "article"] | order(date desc){ ..., "slug": slug.current }`
  );
  if (!data || data.length === 0) return staticArticles;
  return data.map((doc) => ({
    slug: (doc.slug as string) ?? "",
    title: (doc.title as string) ?? "",
    excerpt: (doc.excerpt as string) ?? "",
    date: (doc.date as string) ?? "",
    readingTime: (doc.readingTime as string) ?? "",
    body: (doc.body as ContentBlock[]) ?? [],
  }));
}

export async function getArticleBySlug(slug: string): Promise<Article | undefined> {
  const list = await getArticles();
  return list.find((a) => a.slug === slug);
}

// ---------- Services page shell ----------

export type ServicesPageData = {
  eyebrow: string;
  heading: string;
  intro: string;
  bottomHeading: string;
  bottomBody: string;
  bottomButtonLabel: string;
};

const staticServicesPage: ServicesPageData = {
  eyebrow: "Services",
  heading: "Four ways we help businesses build and deliver",
  intro:
    "Each service can stand alone or work alongside the others. Most relationships start with a website or a digital product and extend from there.",
  bottomHeading: "Not sure which service fits?",
  bottomBody:
    "That's a normal starting point. Tell us what you're trying to achieve and we'll help you work out the best approach.",
  bottomButtonLabel: "Book a consultation",
};

export async function getServicesPage(): Promise<ServicesPageData> {
  const data = await safeFetch<Partial<ServicesPageData>>(`*[_type == "servicesPage"][0]`);
  return { ...staticServicesPage, ...stripEmpty(data) };
}

// ---------- About page ----------

export type AboutPageData = {
  eyebrow: string;
  heading: string;
  intro: string;
  founderName: string;
  founderPhotoUrl: string | undefined;
  backgroundEyebrow: string;
  backgroundHeading: string;
  backgroundParagraphs: string[];
  experienceHeading: string;
  experienceAreas: string[];
  ctaHeading: string;
  ctaBody: string;
  ctaButtonLabel: string;
};

const staticAboutPage: AboutPageData = {
  eyebrow: "About",
  heading: "Experienced delivery, applied to modern digital work",
  intro:
    "Elite Tech Delivery was created to combine experienced technology delivery with a more practical, hands-on approach to building digital products.",
  founderName: "Marc Schneider, Founder, Elite Tech Delivery",
  founderPhotoUrl: "/images/founder.jpg",
  backgroundEyebrow: "Background",
  backgroundHeading: "Substantial delivery experience, now applied to hands-on building",
  backgroundParagraphs: [
    "Elite Tech Delivery is built on years of experience working across digital products, technology programmes and delivery teams within complex organisations. That experience spans working closely with product, engineering and business teams — understanding not just how technology gets built, but how it gets delivered well.",
    "That combination of technology and delivery experience is now applied directly to client work: designing and building websites and digital products, incorporating AI where it genuinely helps, and providing technical delivery consultancy for organisations that need it.",
    "The aim is straightforward — bring senior-level judgement to work that's often left to generalists, without the overhead of a large agency.",
  ],
  experienceHeading: "Where the experience comes from",
  experienceAreas: [
    "Digital product design and development",
    "Technology programmes and transformation initiatives",
    "Delivery team leadership and coaching",
    "Collaboration across product, engineering and business stakeholders",
  ],
  ctaHeading: "Want to talk about your project?",
  ctaBody: "We're happy to have an honest conversation about whether we're the right fit.",
  ctaButtonLabel: "Book a consultation",
};

export async function getAboutPage(): Promise<AboutPageData> {
  const data = await safeFetch<
    (Partial<Omit<AboutPageData, "founderPhotoUrl">> & { founderPhoto?: { asset?: { _ref?: string } } }) | null
  >(`*[_type == "aboutPage"][0]`);

  if (!data) return staticAboutPage;

  const { urlForImage } = await import("./image");
  const photoUrl = data.founderPhoto ? urlForImage(data.founderPhoto as never)?.url() : undefined;

  return {
    ...staticAboutPage,
    ...stripEmpty(data as Partial<AboutPageData>),
    founderPhotoUrl: photoUrl || staticAboutPage.founderPhotoUrl,
  };
}

// ---------- Insights page shell ----------

export type InsightsPageData = { eyebrow: string; heading: string; intro: string };

const staticInsightsPage: InsightsPageData = {
  eyebrow: "Insights",
  heading: "Practical thinking on websites, AI and delivery",
  intro: "Useful articles, written plainly, for people who'd rather get on with running their business than decode jargon.",
};

export async function getInsightsPage(): Promise<InsightsPageData> {
  const data = await safeFetch<Partial<InsightsPageData>>(`*[_type == "insightsPage"][0]`);
  return { ...staticInsightsPage, ...stripEmpty(data) };
}

// ---------- Contact page ----------

export type ContactPageData = {
  eyebrow: string;
  heading: string;
  intro: string;
  emailLabel: string;
  phoneLabel: string;
  responseTimeLabel: string;
  responseTimeText: string;
  submitButtonLabel: string;
  successHeading: string;
  successBody: string;
};

const staticContactPage: ContactPageData = {
  eyebrow: "Contact",
  heading: "Book a consultation",
  intro:
    "Whether you're planning a new website, exploring a digital product, looking at practical AI opportunities or need help delivering an existing technology initiative, get in touch.",
  emailLabel: "Email",
  phoneLabel: "Phone / WhatsApp",
  responseTimeLabel: "Response time",
  responseTimeText: "We typically reply within one working day.",
  submitButtonLabel: "Send enquiry",
  successHeading: "Thank you — message sent",
  successBody:
    "We've received your enquiry and will come back to you shortly. If it's urgent, you can also email us directly.",
};

export async function getContactPage(): Promise<ContactPageData> {
  const data = await safeFetch<Partial<ContactPageData>>(`*[_type == "contactPage"][0]`);
  return { ...staticContactPage, ...stripEmpty(data) };
}

// ---------- Footer ----------

export type FooterData = {
  tagline: string;
  siteColumnLabel: string;
  contactColumnLabel: string;
  linkedinLabel: string;
};

const staticFooter: FooterData = {
  tagline: "Websites, web applications and technical delivery consultancy for businesses that want modern digital work done properly.",
  siteColumnLabel: "Site",
  contactColumnLabel: "Get in touch",
  linkedinLabel: "LinkedIn",
};

export async function getFooter(): Promise<FooterData> {
  const data = await safeFetch<Partial<FooterData>>(`*[_type == "footer"][0]`);
  return { ...staticFooter, ...stripEmpty(data) };
}

// ---------- Legal pages ----------

export type LegalPageData = {
  heading: string;
  lastUpdated: string;
  noteBox: string;
  body: Array<Record<string, unknown>>;
};

export async function getLegalPage(pageId: "privacy" | "terms"): Promise<LegalPageData | null> {
  return safeFetch<LegalPageData>(`*[_type == "legalPage" && pageId == $pageId][0]`, { pageId });
}

// ---------- Small helper ----------

/** Drops undefined/null/empty-string keys so a partial CMS doc only
 * overrides the fields an editor has actually filled in. */
function stripEmpty<T extends object>(obj: T | null | undefined): Partial<T> {
  if (!obj) return {};
  const out: Partial<T> = {};
  for (const [key, value] of Object.entries(obj)) {
    if (value !== undefined && value !== null && value !== "") {
      (out as Record<string, unknown>)[key] = value;
    }
  }
  return out;
}
