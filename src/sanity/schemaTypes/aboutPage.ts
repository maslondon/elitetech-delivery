import { defineField, defineType } from "sanity";

export const aboutPage = defineType({
  name: "aboutPage",
  title: "About Page",
  type: "document",
  groups: [
    { name: "hero", title: "Hero" },
    { name: "founder", title: "Founder" },
    { name: "background", title: "Background" },
    { name: "cta", title: "Bottom CTA" },
  ],
  fields: [
    defineField({ name: "eyebrow", title: "Eyebrow", type: "string", group: "hero" }),
    defineField({ name: "heading", title: "Heading", type: "text", rows: 2, group: "hero" }),
    defineField({ name: "intro", title: "Intro copy", type: "text", rows: 3, group: "hero" }),

    defineField({ name: "founderName", title: "Founder name", type: "string", group: "founder" }),
    defineField({ name: "founderPhoto", title: "Founder photo", type: "image", options: { hotspot: true }, group: "founder" }),

    defineField({ name: "backgroundEyebrow", title: "Eyebrow", type: "string", group: "background" }),
    defineField({ name: "backgroundHeading", title: "Heading", type: "string", group: "background" }),
    defineField({
      name: "backgroundParagraphs",
      title: "Body paragraphs",
      type: "array",
      of: [{ type: "text", rows: 3 }],
      group: "background",
    }),
    defineField({ name: "experienceHeading", title: "Experience list heading", type: "string", group: "background" }),
    defineField({
      name: "experienceAreas",
      title: "Experience areas",
      type: "array",
      of: [{ type: "string" }],
      group: "background",
    }),

    defineField({ name: "ctaHeading", title: "Heading", type: "string", group: "cta" }),
    defineField({ name: "ctaBody", title: "Body", type: "text", rows: 2, group: "cta" }),
    defineField({ name: "ctaButtonLabel", title: "Button text", type: "string", group: "cta" }),
  ],
  preview: { prepare: () => ({ title: "About Page" }) },
});
