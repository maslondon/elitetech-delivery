import { defineField, defineType } from "sanity";

export const servicesPage = defineType({
  name: "servicesPage",
  title: "Services Page",
  type: "document",
  fields: [
    defineField({ name: "eyebrow", title: "Eyebrow", type: "string" }),
    defineField({ name: "heading", title: "Heading", type: "text", rows: 2 }),
    defineField({ name: "intro", title: "Intro copy", type: "text", rows: 3 }),
    defineField({ name: "bottomHeading", title: "Bottom CTA heading", type: "string" }),
    defineField({ name: "bottomBody", title: "Bottom CTA body", type: "text", rows: 2 }),
    defineField({ name: "bottomButtonLabel", title: "Bottom CTA button text", type: "string" }),
  ],
  preview: { prepare: () => ({ title: "Services Page" }) },
});
