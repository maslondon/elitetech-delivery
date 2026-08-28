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
import { services as siteServices } from "../src/lib/content/services";

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
    phone: "07958 391 825",
    linkedin: "https://www.linkedin.com/in/schneidermarc",
    navServices: "Services",
    navAbout: "About",
    navInsights: "Insights",
    navContact: "Contact",
    navPrivacy: "Privacy policy",
    navTerms: "Terms",
    headerCtaLabel: "Get in touch",
  });

  // ---------- Footer ----------
  await client.createOrReplace({
    _id: "footer",
    _type: "footer",
    tagline:
      "Websites, web applications and technical delivery consultancy for businesses that want modern digital work done properly.",
    siteColumnLabel: "Site",
    contactColumnLabel: "Get in touch",
  });

  // ---------- Homepage ----------
  await client.createOrReplace({
    _id: "homePage",
    _type: "homePage",
    heroEyebrow: "Digital delivery, done properly",
    heroHeadline:
      "Websites, apps, digital products and AI that move your business forward",
    heroSubhead:
      "From websites and mobile apps to digital products, AI and automation, and technical delivery — senior expertise, without the overhead of a large agency.",
    heroPrimaryCta: "Get in touch",
    heroSecondaryCta: "View our services",
    servicesEyebrow: "What we do",
    servicesHeading: "Four ways we help businesses move forward",
    servicesDescription: "Each one stands alone, or works alongside the others.",
    whyEyebrow: "Why Elite Tech Delivery",
    whyHeading: "Senior thinking, applied practically",
    whyReasons: [
      { _key: "why-1", title: "Senior delivery experience", body: "Years leading technology programmes and delivery teams inside complex organisations." },
      { _key: "why-2", title: "Hands-on development capability", body: "Current frameworks and tooling, used to actually build the work — not just scope it." },
      { _key: "why-3", title: "One point of accountability", body: "No handoffs between sales and delivery. The person who scopes the work delivers it." },
      { _key: "why-4", title: "Practical, not buzzword-driven", body: "Plain explanations of what's being built and why, without technical theatre." },
      { _key: "why-5", title: "Focused on business outcomes", body: "Every recommendation is judged against the problem it solves for your business." },
      { _key: "why-6", title: "Flexible engagement", body: "One-off projects, ongoing support, or delivery consultancy alongside your team." },
    ],
    processEyebrow: "Working together",
    processHeading: "A straightforward process, start to finish",
    processSteps: [
      { _key: "step-1", title: "Understand", body: "We start with your business, the problem, and the outcome you actually need." },
      { _key: "step-2", title: "Build / Improve", body: "We design, build or improve the solution, with regular visibility along the way." },
      { _key: "step-3", title: "Deliver", body: "We launch, measure what matters, and keep improving." },
    ],
    ctaHeading: "Ready to move forward?",
    ctaBody: "A short, no-pressure conversation and we'll help you figure out the right starting point.",
    ctaButtonLabel: "Get in touch",
  });

  // ---------- Services ----------
  // Derived from the site's own content file so the two can never drift apart.
  const services = siteServices.map((s, i) => ({
    id: `service-${s.slug}`,
    slug: s.slug,
    shortTitle: s.shortTitle,
    title: s.title,
    cardDescription: s.cardDescription,
    summary: s.summary,
    provide: s.provide,
    outcomes: s.outcomes,
    ctaLabel: s.ctaLabel,
    orderRank: i + 1,
  }));

  for (const s of services) {
    await client.createOrReplace({
      _id: s.id,
      _type: "service",
      slug: { _type: "slug", current: s.slug },
      shortTitle: s.shortTitle,
      title: s.title,
      cardDescription: s.cardDescription,
      summary: s.summary,
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
    bottomButtonLabel: "Get in touch",
  });

  // ---------- About page ----------
  const founderPhoto = await uploadFounderPhoto();
  await client.createOrReplace({
    _id: "aboutPage",
    _type: "aboutPage",
    eyebrow: "About",
    heading: "Experienced delivery, applied to modern digital work",
    intro:
      "We created Elite Tech Delivery to combine experienced technology delivery with a more practical, hands-on approach to building digital products.",
    founderName: "Marc Schneider, Founder, Elite Tech Delivery",
    ...(founderPhoto ? { founderPhoto } : {}),
    backgroundEyebrow: "Background",
    backgroundHeading: "Substantial delivery experience, now applied to hands-on building",
    backgroundParagraphs: [
      "We're built on years of experience working across digital products, technology programmes and delivery teams within complex organisations. That experience spans working closely with product, engineering and business teams — understanding not just how technology gets built, but how it gets delivered well.",
      "We apply that combination of technology and delivery experience directly to client work: designing and building websites and digital products, incorporating AI where it genuinely helps, and providing technical delivery consultancy for organisations that need it.",
      "Our aim is straightforward — we bring senior-level judgement to work that's often left to generalists, without the overhead of a large agency.",
    ],
    experienceHeading: "Where the experience comes from",
    experienceAreas: [
      "Digital product design and development",
      "Technology programmes and transformation initiatives",
      "Delivery team leadership and coaching",
      "Collaboration across product, engineering and business stakeholders",
    ],
    ctaHeading: "Think we could be the right fit?",
    ctaBody: "Have an honest, no-obligation conversation with us before committing to anything.",
    ctaButtonLabel: "Get in touch",
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
    heading: "Get in touch",
    intro:
      "Whether you're planning a new website, exploring a digital product, looking at practical AI opportunities or need help delivering an existing technology initiative, we'd like to hear from you.",
    emailLabel: "Email",
    phoneLabel: "Phone / WhatsApp",
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
