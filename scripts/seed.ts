/**
 * One-time content seed: pushes the site's existing copy into Sanity as
 * real, editable documents, so the Studio opens pre-populated instead of
 * empty.
 *
 * Run with:
 *   npx sanity exec scripts/seed.ts --with-user-token
 *
 * That flag runs this script using your own `sanity login` session — no
 * API token is ever typed, pasted, or stored anywhere.
 *
 * Safe to re-run: every write uses createOrReplace against a fixed ID, so
 * running it twice just re-syncs the same documents rather than duplicating
 * anything.
 */
import fs from "node:fs";
import path from "node:path";
import { getCliClient } from "sanity/cli";

const client = getCliClient({ apiVersion: "2026-01-01" });

async function uploadFounderPhoto() {
  const filePath = path.join(process.cwd(), "public/images/founder.jpg");
  if (!fs.existsSync(filePath)) return undefined;
  const asset = await client.assets.upload("image", fs.createReadStream(filePath), {
    filename: "founder.jpg",
  });
  return { _type: "image", asset: { _type: "reference", _ref: asset._id } };
}

function block(text: string, style: "normal" | "h2" = "normal") {
  return {
    _type: "block",
    style,
    children: [{ _type: "span", text }],
  };
}

async function run() {
  console.log("Seeding Elite Tech Delivery content into Sanity…");

  // ---------- Site settings ----------
  await client.createOrReplace({
    _id: "siteSettings",
    _type: "siteSettings",
    email: "marc@elitetechdelivery.co.uk",
    phone: "",
    linkedin: "https://www.linkedin.com/company/elite-tech-delivery",
    navServices: "Services",
    navAbout: "About",
    navInsights: "Insights",
    navContact: "Contact",
    navPrivacy: "Privacy policy",
    navTerms: "Terms",
    headerCtaLabel: "Book a consultation",
  });

  // ---------- Footer ----------
  await client.createOrReplace({
    _id: "footer",
    _type: "footer",
    tagline:
      "Websites, web applications and technical delivery consultancy for businesses that want modern digital work done properly.",
    siteColumnLabel: "Site",
    contactColumnLabel: "Get in touch",
    linkedinLabel: "LinkedIn",
  });

  // ---------- Homepage ----------
  await client.createOrReplace({
    _id: "homePage",
    _type: "homePage",
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
        _key: "trust-1",
        title: "Senior delivery experience",
        body: "Years spent leading technology programmes and delivery teams inside complex organisations — brought to bear on every engagement, however small.",
      },
      {
        _key: "trust-2",
        title: "Modern development capability",
        body: "Current frameworks, tooling and — where it genuinely helps — AI, used to build and ship faster without cutting corners.",
      },
      {
        _key: "trust-3",
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
      { _key: "why-1", title: "Senior technology delivery experience", body: "Grounded in years of leading digital programmes, not a portfolio built entirely on small freelance jobs." },
      { _key: "why-2", title: "Hands-on development capability", body: "Work is actually built, not just scoped and handed to a subcontractor." },
      { _key: "why-3", title: "Practical, not buzzword-driven", body: "Plain explanations of what's being built and why, without technical theatre." },
      { _key: "why-4", title: "Focused on business outcomes", body: "Every recommendation is judged against the problem it solves for your business." },
      { _key: "why-5", title: "Flexible engagement", body: "One-off projects, ongoing support, or delivery consultancy alongside your existing team." },
      { _key: "why-6", title: "Clear communication throughout", body: "Straightforward updates and honest timelines — no jargon, no surprises." },
    ],
    processEyebrow: "Working together",
    processHeading: "A straightforward process, start to finish",
    processSteps: [
      { _key: "step-1", title: "Understand", body: "We start with your business, the problem you're trying to solve, and the outcome you actually need — not a generic requirements form." },
      { _key: "step-2", title: "Build / Improve", body: "We design, build or improve the solution — a website, an application, an automation, or a delivery approach — with regular visibility along the way." },
      { _key: "step-3", title: "Deliver", body: "We launch, measure what matters, and keep improving. Nothing is treated as finished the moment it ships." },
    ],
    ctaHeading: "Have a project in mind?",
    ctaBody: "Tell us what you're trying to achieve and we'll explore the best way forward.",
    ctaButtonLabel: "Book a consultation",
  });

  // ---------- Services ----------
  const services = [
    {
      id: "service-websites",
      slug: "websites",
      shortTitle: "Websites",
      title: "Website Design & Development",
      cardDescription:
        "New sites, redesigns and landing pages that load fast, read clearly and turn visitors into enquiries.",
      summary:
        "Your website is usually the first real impression a prospective client forms of your business. It needs to load quickly, explain what you do without effort, and make it obvious what to do next.",
      problem:
        "Many small business websites are slow, dated, or built on templates that don't reflect the quality of the work behind them. Visitors bounce before they understand what's on offer, and enquiries never arrive.",
      provide: [
        "New site builds and full redesigns, from a handful of pages to larger content-led sites",
        "Responsive, mobile-first development with clean, semantic code",
        "Conversion-focused layouts and clear calls to action",
        "SEO-friendly structure — sensible URLs, heading hierarchy and metadata from day one",
        "Performance optimisation for fast load times and strong Core Web Vitals",
        "Website audits and ongoing improvements for existing sites",
      ],
      outcomes: [
        "A site that loads fast and works properly on every device",
        "Clearer messaging that helps visitors understand your offer quickly",
        "A stronger foundation for organic search — without guaranteed ranking promises",
        "A site you can hand over to us for updates, or manage yourself",
      ],
      ctaLabel: "Talk about your website",
      orderRank: 1,
    },
    {
      id: "service-web-applications",
      slug: "web-applications",
      shortTitle: "Web Applications",
      title: "Web Applications & Digital Products",
      cardDescription:
        "Custom portals, internal tools and booking systems built around how your business actually works.",
      summary:
        "Sometimes a website isn't enough — you need something that does work for you: a portal, a booking system, an internal tool, or a lightweight product for your own customers.",
      problem:
        "Off-the-shelf software often forces a business to change how it works to fit the tool. Custom-built alternatives are frequently over-scoped, slow to ship, or built by teams more interested in the technology than the problem.",
      provide: [
        "Custom web applications and client or staff portals",
        "Internal tools that remove manual, repetitive work",
        "Booking systems and workflow applications built around your process",
        "Lightweight SaaS products and prototypes",
        "MVPs designed to test an idea quickly before committing to a larger build",
      ],
      outcomes: [
        "A tool that fits the way your business already operates",
        "Less time lost to manual admin and spreadsheets",
        "A working product you can put in front of real users quickly",
        "A codebase built to be extended, not thrown away",
      ],
      ctaLabel: "Discuss a web application",
      orderRank: 2,
    },
    {
      id: "service-ai-automation",
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
      orderRank: 3,
    },
    {
      id: "service-technical-delivery",
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
      orderRank: 4,
    },
  ];

  for (const s of services) {
    await client.createOrReplace({
      _id: s.id,
      _type: "service",
      slug: { _type: "slug", current: s.slug },
      shortTitle: s.shortTitle,
      title: s.title,
      cardDescription: s.cardDescription,
      summary: s.summary,
      problem: s.problem,
      provide: s.provide,
      outcomes: s.outcomes,
      ctaLabel: s.ctaLabel,
      orderRank: s.orderRank,
    });
  }

  // ---------- Services page shell ----------
  await client.createOrReplace({
    _id: "servicesPage",
    _type: "servicesPage",
    eyebrow: "Services",
    heading: "Four ways we help businesses build and deliver",
    intro:
      "Each service can stand alone or work alongside the others. Most relationships start with a website or a digital product and extend from there.",
    bottomHeading: "Not sure which service fits?",
    bottomBody:
      "That's a normal starting point. Tell us what you're trying to achieve and we'll help you work out the best approach.",
    bottomButtonLabel: "Book a consultation",
  });

  // ---------- About page ----------
  const founderPhoto = await uploadFounderPhoto();
  await client.createOrReplace({
    _id: "aboutPage",
    _type: "aboutPage",
    eyebrow: "About",
    heading: "Experienced delivery, applied to modern digital work",
    intro:
      "Elite Tech Delivery was created to combine experienced technology delivery with a more practical, hands-on approach to building digital products.",
    founderName: "Marc Schneider, Founder, Elite Tech Delivery",
    ...(founderPhoto ? { founderPhoto } : {}),
    backgroundEyebrow: "Background",
    backgroundHeading: "Substantial delivery experience, now applied to hands-on building",
    backgroundParagraphs: [
      "Elite Tech Delivery is built on years of experience working across digital products, technology programmes and delivery teams within complex organisations [PLACEHOLDER — add named organisations here only where accurate, without implying their endorsement]. That experience spans working closely with product, engineering and business teams — understanding not just how technology gets built, but how it gets delivered well.",
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
  });

  // ---------- Insights page shell ----------
  await client.createOrReplace({
    _id: "insightsPage",
    _type: "insightsPage",
    eyebrow: "Insights",
    heading: "Practical thinking on websites, AI and delivery",
    intro:
      "Useful articles, written plainly, for people who'd rather get on with running their business than decode jargon.",
  });

  // ---------- Articles ----------
  const articles = [
    {
      id: "article-website-2026",
      slug: "what-makes-a-good-business-website-in-2026",
      title: "What makes a good business website in 2026?",
      excerpt:
        "Fewer trends, better fundamentals. What actually separates a business website that generates enquiries from one that quietly gets ignored.",
      date: "2026-06-02",
      readingTime: "6 min read",
      body: [
        block(
          "Every year brings a fresh wave of web design trends, and every year the businesses that get the most out of their website tend to ignore most of them. A good business website in 2026 isn't defined by the latest animation library or a clever hero video. It's defined by whether a visitor understands what you do, trusts you, and knows what to do next — within about ten seconds."
        ),
        block("Clarity beats cleverness", "h2"),
        block(
          "The most common fault we see on small business websites isn't bad design — it's unclear messaging. Visitors land on a homepage and have to work to understand what the business actually offers, who it's for, and why they should choose it over anyone else. If a visitor has to scroll and hunt to answer 'what is this?', you've already lost a share of your audience."
        ),
        block(
          "A strong homepage answers four questions almost immediately: what you do, who you help, why someone should trust you, and what they should do next. Everything else on the page exists to support those four answers."
        ),
        block("Speed is a feature, not an afterthought", "h2"),
        block(
          "Page speed affects both user experience and search visibility, and it's one of the easiest things to get wrong. Heavy image files, bloated third-party scripts and unnecessary animation libraries are the usual culprits. A website built with modern tooling and a bit of restraint will consistently outperform a heavier, trend-chasing site — on both load time and how it actually feels to use."
        ),
        block("Design that earns trust quietly", "h2"),
        block(
          "Trust on a website is built from small, consistent signals: clean typography, sensible spacing, real contact details, clear navigation, and a visual identity that looks intentional rather than templated. None of this needs to be flashy. In fact, restraint is usually what makes a site feel more credible, not less — over-designed sites often read as trying too hard."
        ),
        block("Mobile is not an edge case", "h2"),
        block(
          "For most small businesses, a meaningful share of traffic now arrives on a phone. A website that was 'made responsive' as an afterthought usually shows it — text too small, buttons too close together, layouts that technically work but feel cramped. Designing mobile-first, rather than shrinking a desktop layout down, tends to produce a better result on every device."
        ),
        block("A website is never really finished", "h2"),
        block(
          "The businesses that get the most value from their website treat it as something to maintain and improve, not a one-off project to tick off a list. Small, regular improvements — updated content, better calls to action, a faster-loading image here and there — compound over time. A launch date is a starting point, not a finish line."
        ),
        block(
          "None of this requires chasing trends. It requires clarity about what the site needs to do, and the discipline to build it properly. That's a more useful definition of 'good' than anything a design trend report will tell you."
        ),
      ],
    },
    {
      id: "article-ai-small-business",
      slug: "where-ai-can-genuinely-help-a-small-business",
      title: "Where AI can genuinely help a small business",
      excerpt:
        "Not every business needs a chatbot. A practical look at where AI actually saves time — and where it's not worth the effort yet.",
      date: "2026-05-14",
      readingTime: "7 min read",
      body: [
        block(
          "AI is one of the most over-promised and under-explained topics a small business owner will encounter. Every tool claims to be AI-powered; every consultant has a pitch. Stripped of the hype, AI is simply a set of capabilities that are genuinely useful for a narrower set of problems than most marketing suggests — and unhelpful, or premature, for a lot of others."
        ),
        block("Where it tends to help", "h2"),
        block(
          "Repetitive content work, searching and summarising large amounts of internal information, first-line responses to common customer questions, automating handoffs between tools, and speeding up research and first drafts during early project stages."
        ),
        block(
          "The common thread is that AI works best on tasks that are repetitive, well-defined, and where a human reviewing the output is fast and cheap. It's an accelerator for work that already has a clear shape — not a replacement for judgement."
        ),
        block("Where it's less useful (for now)", "h2"),
        block(
          "AI is a poor fit for tasks that require genuine judgement about your specific customers, tasks where mistakes are costly and hard to catch, or tasks that only happen rarely enough that automating them isn't worth the setup effort. It's also not a fix for a process that's fundamentally unclear — automating a confused process just produces confusion faster."
        ),
        block(
          "A conversational chatbot on your website sounds impressive, but if your actual problem is that your service pages don't clearly explain your offer, a chatbot won't fix that — clearer copy will."
        ),
        block("Starting small works better than starting big", "h2"),
        block(
          "The businesses that get real value from AI usually start with one specific, unglamorous task — cutting the time spent on a weekly report, or drafting first-pass responses to common enquiries — rather than an ambitious, business-wide 'AI strategy'. A single automation that reliably saves two hours a week is worth more than an impressive-sounding project that never quite gets finished."
        ),
        block(
          "It's also worth being honest about maintenance. An AI-assisted workflow still needs oversight — checking outputs, adjusting prompts or logic as your business changes, and stepping in when something goes wrong. It's a capability to manage, not something to switch on and forget."
        ),
        block("The practical starting point", "h2"),
        block(
          "Rather than asking 'how can we use AI?', it's usually more productive to ask 'where are we losing the most time to repetitive work?' — and then look at whether AI is the right tool for that specific problem. Sometimes it is. Often, a smaller and less exciting fix — better structured data, a simpler form, a clearer process — gets you further, faster."
        ),
      ],
    },
    {
      id: "article-digital-delivery",
      slug: "why-digital-projects-struggle-and-how-better-delivery-helps",
      title: "Why digital projects struggle — and how better delivery helps",
      excerpt:
        "Most failed technology projects aren't failed by the technology. A look at the delivery problems that actually derail digital work.",
      date: "2026-04-21",
      readingTime: "7 min read",
      body: [
        block(
          "When a digital project runs late, over budget, or simply fails to deliver what the business needed, it's tempting to blame the technology — the wrong platform, the wrong developer, the wrong tool. In practice, most struggling projects are let down by delivery, not technology. The code usually works. The way the work was scoped, sequenced and communicated usually didn't."
        ),
        block("Unclear ownership", "h2"),
        block(
          "Projects stall when it isn't obvious who owns a decision. Requirements change halfway through because no one had the authority — or the confidence — to say no earlier. Small ambiguities compound into large delays. Clear ownership from the start, even on a small project, prevents most of this."
        ),
        block("Scope that grows quietly", "h2"),
        block(
          "Scope creep rarely arrives as one obvious decision. It arrives as a series of reasonable-sounding small additions, each one easy to say yes to in isolation. Without a deliberate process for evaluating new requests against the original goal, a well-scoped project slowly turns into an unscoped one — and the timeline and budget follow."
        ),
        block("Delivery structured to hide risk, not reduce it", "h2"),
        block(
          "Some delivery approaches are structured in a way that makes progress look steady right up until it isn't — all the integration, testing and hard problems left until the end, with 'on track' status updates the whole way there. Better delivery surfaces risk early, when there's still time to do something about it, even if that means an uncomfortable conversation sooner rather than a worse one later."
        ),
        block("Weak collaboration between business and technical teams", "h2"),
        block(
          "A lot of friction in technology projects comes from business and technical teams talking past each other — not through lack of goodwill, but because no one is translating between the two. Someone needs to genuinely understand both the commercial goal and the technical reality, and keep pulling them back into alignment as the project evolves."
        ),
        block("What good delivery actually looks like", "h2"),
        block(
          "Clear ownership of decisions, agreed early. A deliberate process for handling new requirements, rather than silent scope creep. Regular, honest visibility into progress and risk. Someone bridging business goals and technical execution, in both directions. A willingness to raise problems early, even when the update isn't a good one."
        ),
        block(
          "None of this is exotic. It's the unglamorous discipline of running delivery properly — and it's usually the difference between a technology project that lands well and one that becomes a cautionary story. It's also exactly where experienced delivery leadership earns its keep: not by doing the technical work itself, but by making sure the conditions are in place for that work to succeed."
        ),
      ],
    },
  ];

  for (const a of articles) {
    await client.createOrReplace({
      _id: a.id,
      _type: "article",
      title: a.title,
      slug: { _type: "slug", current: a.slug },
      excerpt: a.excerpt,
      date: a.date,
      readingTime: a.readingTime,
      body: a.body,
    });
  }

  // ---------- Contact page ----------
  await client.createOrReplace({
    _id: "contactPage",
    _type: "contactPage",
    eyebrow: "Contact",
    heading: "Book a consultation",
    intro:
      "Whether you're planning a new website, exploring a digital product, looking at practical AI opportunities or need help delivering an existing technology initiative, get in touch.",
    emailLabel: "Email",
    responseTimeLabel: "Response time",
    responseTimeText: "We typically reply within one working day.",
    submitButtonLabel: "Send enquiry",
    successHeading: "Thank you — message sent",
    successBody:
      "We've received your enquiry and will come back to you shortly. If it's urgent, you can also email us directly at",
  });

  console.log("Done — Studio should now open fully populated.");
}

run().catch((error) => {
  console.error(error);
  process.exit(1);
});
