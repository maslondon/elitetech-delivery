/**
 * Third pass on services 1 & 2 — the second pass fixed the framing but the
 * two still read too similarly and lacked a real hook. This sharpens the
 * distinction: Websites & Apps is the public-facing site people land on;
 * Digital Products is software people log into repeatedly to do a job.
 *
 * Run with:
 *   npx sanity exec scripts/update-services-copy-3.ts --with-user-token
 */
import { getCliClient } from "sanity/cli";

const client = getCliClient({ apiVersion: "2026-01-01" });

async function run() {
  console.log("Updating Websites & Apps / Digital Products copy (pass 3)…");

  await client
    .patch("service-websites")
    .set({
      cardDescription:
        "The site that brings people to you, and the small tools on it that turn a visit into an enquiry — calculators, configurators, booking forms, quote tools.",
      summary:
        "This is the public face of your business: the site people land on, judge you by in about five seconds, and either explore or leave. Sometimes that's a clean, fast, well-written website. Sometimes it's a website plus something people can actually use — a calculator, a configurator, a quote tool, a booking form that does more than collect a name and email. Either way, the job is the same: get the right people to understand what you do, trust you, and take the next step.",
      problem:
        "Too many small business websites are slow, generic, and built on a template that doesn't reflect the quality of the work behind them. And the moment a business needs something interactive — a calculator, a live quote, a proper booking flow — it either gets bolted on badly, or skipped altogether because it feels like a bigger job than it should be.",
      provide: [
        "New site builds and full redesigns, from a handful of pages to larger content-led sites",
        "Interactive tools built into the site itself — calculators, configurators, booking flows, quote tools",
        "Responsive, mobile-first development with clean, semantic code",
        "Conversion-focused layouts and clear calls to action",
        "SEO-friendly structure — sensible URLs, heading hierarchy and metadata from day one",
        "Performance optimisation for fast load times and strong Core Web Vitals",
      ],
      outcomes: [
        "A site that loads fast and works properly on every device",
        "Interactive tools that actually help visitors, not just decorate the page",
        "Messaging that gets your offer across in the first five seconds",
        "A site you can hand to us for updates, or manage yourself",
      ],
    })
    .commit();

  await client
    .patch("service-web-applications")
    .set({
      cardDescription:
        "Software built specifically for your business — a portal your clients log into, a tool your team relies on daily, or a product you sell in its own right. Not a website with extra features bolted on.",
      summary:
        "Some things aren't really websites at all — they're software your business runs on. A client portal people log into again and again. An internal tool that replaces a spreadsheet three people fight over. A standalone product built for your own customers. These aren't about being found online; they're about doing a specific job well, for people who already know they need it. That's a different kind of build, with different priorities — and it's genuinely custom, designed around how your business actually works rather than how a piece of off-the-shelf software expects it to.",
      problem:
        "Off-the-shelf software forces a business to change how it works to fit the tool — and the workarounds pile up. The custom alternative often isn't much better: over-scoped, slow to ship, or built by a team more interested in the technology than the problem it's meant to solve. What's missing is something built for exactly what you need, sized to match, and shipped fast enough to be useful.",
      provide: [
        "Bespoke client and staff portals people log into and actually use",
        "Internal tools that remove manual, repetitive admin",
        "Workflow and process systems built around how your team really operates",
        "Lightweight SaaS products and standalone digital products for your own customers",
        "MVPs designed to test an idea quickly before committing to a larger build",
      ],
      outcomes: [
        "Software that fits how your business already works, not the other way round",
        "Hours back each week that were going into manual admin and spreadsheets",
        "A working product you can put in front of real users quickly",
        "A codebase built to be extended as the product grows, not thrown away",
      ],
    })
    .commit();

  console.log("Done — refresh the site in about a minute to see the update.");
}

run().catch((error) => {
  console.error(error);
  process.exit(1);
});
