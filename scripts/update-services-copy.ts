/**
 * One-off content update: pushes the revised "Websites & Apps" /
 * "Digital Products" copy into Sanity, replacing what the initial seed put
 * there.
 *
 * Run with:
 *   npx sanity exec scripts/update-services-copy.ts --with-user-token
 */
import { getCliClient } from "sanity/cli";

const client = getCliClient({ apiVersion: "2026-01-01" });

async function run() {
  console.log("Updating Websites & Apps / Digital Products copy…");

  await client
    .patch("service-websites")
    .set({
      shortTitle: "Websites & Apps",
      title: "Websites & Apps",
      cardDescription:
        "New sites, redesigns and lightweight functionality — built to load fast, read clearly and turn visitors into enquiries.",
      summary:
        "Your website is usually the first real impression a prospective client forms of your business. Whether it's a straightforward brochure site or one with booking forms and light interactive features built in, it needs to load quickly, explain what you do without effort, and make it obvious what to do next.",
      provide: [
        "New site builds and full redesigns, from a handful of pages to larger content-led sites",
        "Responsive, mobile-first development with clean, semantic code",
        "Light interactive features built in — forms, booking widgets, calculators — without a full separate product",
        "Conversion-focused layouts and clear calls to action",
        "SEO-friendly structure — sensible URLs, heading hierarchy and metadata from day one",
        "Performance optimisation for fast load times and strong Core Web Vitals",
      ],
    })
    .commit();

  await client
    .patch("service-web-applications")
    .set({
      shortTitle: "Digital Products",
      title: "Digital Products",
      cardDescription:
        "Bespoke portals, internal tools and custom-built products, designed around how your business actually works.",
      summary:
        "Sometimes a website isn't enough — you need something built specifically for your business: a client portal, an internal tool, or a standalone product for your own customers.",
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
    })
    .commit();

  console.log("Done — refresh the site in about a minute to see the update.");
}

run().catch((error) => {
  console.error(error);
  process.exit(1);
});
