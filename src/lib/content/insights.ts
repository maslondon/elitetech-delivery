export type ContentBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "ul"; items: string[] };

export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  date: string; // ISO
  readingTime: string;
  body: ContentBlock[];
};

export const articles: Article[] = [
  {
    slug: "what-makes-a-good-business-website-in-2026",
    title: "What makes a good business website in 2026?",
    excerpt:
      "Fewer trends, better fundamentals. What actually separates a business website that generates enquiries from one that quietly gets ignored.",
    date: "2026-06-02",
    readingTime: "6 min read",
    body: [
      {
        type: "p",
        text: "Every year brings a fresh wave of web design trends, and every year the businesses that get the most out of their website tend to ignore most of them. A good business website in 2026 isn't defined by the latest animation library or a clever hero video. It's defined by whether a visitor understands what you do, trusts you, and knows what to do next — within about ten seconds.",
      },
      { type: "h2", text: "Clarity beats cleverness" },
      {
        type: "p",
        text: "The most common fault we see on small business websites isn't bad design — it's unclear messaging. Visitors land on a homepage and have to work to understand what the business actually offers, who it's for, and why they should choose it over anyone else. If a visitor has to scroll and hunt to answer 'what is this?', you've already lost a share of your audience.",
      },
      {
        type: "p",
        text: "A strong homepage answers four questions almost immediately: what you do, who you help, why someone should trust you, and what they should do next. Everything else on the page exists to support those four answers.",
      },
      { type: "h2", text: "Speed is a feature, not an afterthought" },
      {
        type: "p",
        text: "Page speed affects both user experience and search visibility, and it's one of the easiest things to get wrong. Heavy image files, bloated third-party scripts and unnecessary animation libraries are the usual culprits. A website built with modern tooling and a bit of restraint will consistently outperform a heavier, trend-chasing site — on both load time and how it actually feels to use.",
      },
      { type: "h2", text: "Design that earns trust quietly" },
      {
        type: "p",
        text: "Trust on a website is built from small, consistent signals: clean typography, sensible spacing, real contact details, clear navigation, and a visual identity that looks intentional rather than templated. None of this needs to be flashy. In fact, restraint is usually what makes a site feel more credible, not less — over-designed sites often read as trying too hard.",
      },
      { type: "h2", text: "Mobile is not an edge case" },
      {
        type: "p",
        text: "For most small businesses, a meaningful share of traffic now arrives on a phone. A website that was 'made responsive' as an afterthought usually shows it — text too small, buttons too close together, layouts that technically work but feel cramped. Designing mobile-first, rather than shrinking a desktop layout down, tends to produce a better result on every device.",
      },
      { type: "h2", text: "A website is never really finished" },
      {
        type: "p",
        text: "The businesses that get the most value from their website treat it as something to maintain and improve, not a one-off project to tick off a list. Small, regular improvements — updated content, better calls to action, a faster-loading image here and there — compound over time. A launch date is a starting point, not a finish line.",
      },
      {
        type: "p",
        text: "None of this requires chasing trends. It requires clarity about what the site needs to do, and the discipline to build it properly. That's a more useful definition of 'good' than anything a design trend report will tell you.",
      },
    ],
  },
  {
    slug: "where-ai-can-genuinely-help-a-small-business",
    title: "Where AI can genuinely help a small business",
    excerpt:
      "Not every business needs a chatbot. A practical look at where AI actually saves time — and where it's not worth the effort yet.",
    date: "2026-05-14",
    readingTime: "7 min read",
    body: [
      {
        type: "p",
        text: "AI is one of the most over-promised and under-explained topics a small business owner will encounter. Every tool claims to be AI-powered; every consultant has a pitch. Stripped of the hype, AI is simply a set of capabilities that are genuinely useful for a narrower set of problems than most marketing suggests — and unhelpful, or premature, for a lot of others.",
      },
      { type: "h2", text: "Where it tends to help" },
      {
        type: "ul",
        items: [
          "Repetitive content work — drafting first versions of routine documents, emails or listings that a person then reviews and finalises",
          "Searching and summarising large amounts of internal information, so staff aren't manually digging through documents or spreadsheets",
          "First-line responses to common, well-understood customer questions",
          "Automating handoffs between tools that don't currently talk to each other — pulling data from one system into another without manual re-entry",
          "Speeding up research and first drafts during the early stages of a project",
        ],
      },
      {
        type: "p",
        text: "The common thread is that AI works best on tasks that are repetitive, well-defined, and where a human reviewing the output is fast and cheap. It's an accelerator for work that already has a clear shape — not a replacement for judgement.",
      },
      { type: "h2", text: "Where it's less useful (for now)" },
      {
        type: "p",
        text: "AI is a poor fit for tasks that require genuine judgement about your specific customers, tasks where mistakes are costly and hard to catch, or tasks that only happen rarely enough that automating them isn't worth the setup effort. It's also not a fix for a process that's fundamentally unclear — automating a confused process just produces confusion faster.",
      },
      {
        type: "p",
        text: "A conversational chatbot on your website sounds impressive, but if your actual problem is that your service pages don't clearly explain your offer, a chatbot won't fix that — clearer copy will.",
      },
      { type: "h2", text: "Starting small works better than starting big" },
      {
        type: "p",
        text: "The businesses that get real value from AI usually start with one specific, unglamorous task — cutting the time spent on a weekly report, or drafting first-pass responses to common enquiries — rather than an ambitious, business-wide 'AI strategy'. A single automation that reliably saves two hours a week is worth more than an impressive-sounding project that never quite gets finished.",
      },
      {
        type: "p",
        text: "It's also worth being honest about maintenance. An AI-assisted workflow still needs oversight — checking outputs, adjusting prompts or logic as your business changes, and stepping in when something goes wrong. It's a capability to manage, not something to switch on and forget.",
      },
      { type: "h2", text: "The practical starting point" },
      {
        type: "p",
        text: "Rather than asking 'how can we use AI?', it's usually more productive to ask 'where are we losing the most time to repetitive work?' — and then look at whether AI is the right tool for that specific problem. Sometimes it is. Often, a smaller and less exciting fix — better structured data, a simpler form, a clearer process — gets you further, faster.",
      },
    ],
  },
  {
    slug: "why-digital-projects-struggle-and-how-better-delivery-helps",
    title: "Why digital projects struggle — and how better delivery helps",
    excerpt:
      "Most failed technology projects aren't failed by the technology. A look at the delivery problems that actually derail digital work.",
    date: "2026-04-21",
    readingTime: "7 min read",
    body: [
      {
        type: "p",
        text: "When a digital project runs late, over budget, or simply fails to deliver what the business needed, it's tempting to blame the technology — the wrong platform, the wrong developer, the wrong tool. In practice, most struggling projects are let down by delivery, not technology. The code usually works. The way the work was scoped, sequenced and communicated usually didn't.",
      },
      { type: "h2", text: "Unclear ownership" },
      {
        type: "p",
        text: "Projects stall when it isn't obvious who owns a decision. Requirements change halfway through because no one had the authority — or the confidence — to say no earlier. Small ambiguities compound into large delays. Clear ownership from the start, even on a small project, prevents most of this.",
      },
      { type: "h2", text: "Scope that grows quietly" },
      {
        type: "p",
        text: "Scope creep rarely arrives as one obvious decision. It arrives as a series of reasonable-sounding small additions, each one easy to say yes to in isolation. Without a deliberate process for evaluating new requests against the original goal, a well-scoped project slowly turns into an unscoped one — and the timeline and budget follow.",
      },
      { type: "h2", text: "Delivery structured to hide risk, not reduce it" },
      {
        type: "p",
        text: "Some delivery approaches are structured in a way that makes progress look steady right up until it isn't — all the integration, testing and hard problems left until the end, with 'on track' status updates the whole way there. Better delivery surfaces risk early, when there's still time to do something about it, even if that means an uncomfortable conversation sooner rather than a worse one later.",
      },
      { type: "h2", text: "Weak collaboration between business and technical teams" },
      {
        type: "p",
        text: "A lot of friction in technology projects comes from business and technical teams talking past each other — not through lack of goodwill, but because no one is translating between the two. Someone needs to genuinely understand both the commercial goal and the technical reality, and keep pulling them back into alignment as the project evolves.",
      },
      { type: "h2", text: "What good delivery actually looks like" },
      {
        type: "ul",
        items: [
          "Clear ownership of decisions, agreed early",
          "A deliberate process for handling new requirements, rather than silent scope creep",
          "Regular, honest visibility into progress and risk — not just status updates that say 'on track'",
          "Someone bridging business goals and technical execution, in both directions",
          "A willingness to raise problems early, even when the update isn't a good one",
        ],
      },
      {
        type: "p",
        text: "None of this is exotic. It's the unglamorous discipline of running delivery properly — and it's usually the difference between a technology project that lands well and one that becomes a cautionary story. It's also exactly where experienced delivery leadership earns its keep: not by doing the technical work itself, but by making sure the conditions are in place for that work to succeed.",
      },
    ],
  },
];

export function getArticleBySlug(slug: string) {
  return articles.find((article) => article.slug === slug);
}
