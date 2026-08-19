import { defineField, defineType } from "sanity";

export const homePage = defineType({
  name: "homePage",
  title: "Homepage",
  type: "document",
  groups: [
    { name: "hero", title: "Hero" },
    { name: "services", title: "Services intro" },
    { name: "why", title: "Why us" },
    { name: "process", title: "Process" },
    { name: "cta", title: "Final CTA" },
  ],
  fields: [
    // Hero
    defineField({ name: "heroEyebrow", title: "Eyebrow", type: "string", group: "hero" }),
    defineField({ name: "heroHeadline", title: "Headline", type: "text", rows: 3, group: "hero", validation: (r) => r.required() }),
    defineField({ name: "heroSubhead", title: "Supporting copy", type: "text", rows: 3, group: "hero" }),
    defineField({ name: "heroPrimaryCta", title: "Primary button text", type: "string", group: "hero" }),
    defineField({ name: "heroSecondaryCta", title: "Secondary button text", type: "string", group: "hero" }),

    // Services intro (the bento cards themselves pull from Service documents)
    defineField({ name: "servicesEyebrow", title: "Eyebrow", type: "string", group: "services" }),
    defineField({ name: "servicesHeading", title: "Heading", type: "string", group: "services" }),
    defineField({ name: "servicesDescription", title: "Description", type: "text", rows: 2, group: "services" }),

    // Why us
    defineField({ name: "whyEyebrow", title: "Eyebrow", type: "string", group: "why" }),
    defineField({ name: "whyHeading", title: "Heading", type: "string", group: "why" }),
    defineField({
      name: "whyReasons",
      title: "Reasons",
      type: "array",
      of: [{ type: "titledPoint" }],
      group: "why",
    }),

    // Process
    defineField({ name: "processEyebrow", title: "Eyebrow", type: "string", group: "process" }),
    defineField({ name: "processHeading", title: "Heading", type: "string", group: "process" }),
    defineField({
      name: "processSteps",
      title: "Steps",
      type: "array",
      of: [{ type: "titledPoint" }],
      group: "process",
    }),

    // Final CTA
    defineField({ name: "ctaHeading", title: "Heading", type: "string", group: "cta" }),
    defineField({ name: "ctaBody", title: "Body", type: "text", rows: 2, group: "cta" }),
    defineField({ name: "ctaButtonLabel", title: "Button text", type: "string", group: "cta" }),
  ],
  preview: {
    prepare: () => ({ title: "Homepage" }),
  },
});
