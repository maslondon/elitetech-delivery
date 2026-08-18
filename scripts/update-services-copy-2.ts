/**
 * Second pass on services 1 & 2 — the first update fixed the titles but
 * left the body copy still leaning on the old framing ("your website is
 * usually..." / "sometimes a website isn't enough..."). This rewrites the
 * summary, problem and provide list for both so each stands on its own.
 *
 * Run with:
 *   npx sanity exec scripts/update-services-copy-2.ts --with-user-token
 */
import { getCliClient } from "sanity/cli";

const client = getCliClient({ apiVersion: "2026-01-01" });

async function run() {
  console.log("Updating Websites & Apps / Digital Products copy (pass 2)…");

  await client
    .patch("service-websites")
    .set({
      cardDescription:
        "New sites, redesigns and the lightweight interactive tools that go with them — built to load fast, read clearly and do exactly what visitors need.",
      summary:
        "Most businesses need a strong website first — but increasingly, that's only half the job. A calculator, a configurator, a quote tool, a booking flow that does more than take a name and email: these still live inside a website, but they need to actually work, not just look right. This service covers both the core site and the lighter interactive tools that sit alongside it.",
      problem:
        "Many small business websites are slow, dated, or built on templates that don't reflect the quality of the work behind them — and when a business needs something slightly more interactive, it's often bolted on badly, or skipped altogether because it feels like a bigger job than it should be.",
      provide: [
        "New site builds and full redesigns, from a handful of pages to larger content-led sites",
        "Responsive, mobile-first development with clean, semantic code",
        "Lightweight interactive tools — calculators, configurators, booking flows, quote tools",
        "Conversion-focused layouts and clear calls to action",
        "SEO-friendly structure — sensible URLs, heading hierarchy and metadata from day one",
        "Performance optimisation for fast load times and strong Core Web Vitals",
      ],
      outcomes: [
        "A site that loads fast and works properly on every device",
        "Interactive features that actually work, not just look like they should",
        "Clearer messaging that helps visitors understand your offer quickly",
        "A site you can hand over to us for updates, or manage yourself",
      ],
    })
    .commit();

  await client
    .patch("service-web-applications")
    .set({
      cardDescription:
        "Bespoke portals, internal tools and standalone products, built specifically around how your business works — not bent to fit somebody else's software.",
      summary:
        "Some problems need more than a website with extra features — they need something built specifically for your business: a client portal, an internal tool your team relies on daily, or a standalone product for your own customers. This is genuinely custom software, designed around your process rather than the other way round.",
    })
    .commit();

  console.log("Done — refresh the site in about a minute to see the update.");
}

run().catch((error) => {
  console.error(error);
  process.exit(1);
});
