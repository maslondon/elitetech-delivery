import { defineField, defineType } from "sanity";

export const insightsPage = defineType({
  name: "insightsPage",
  title: "Insights Page",
  type: "document",
  fields: [
    defineField({ name: "eyebrow", title: "Eyebrow", type: "string" }),
    defineField({ name: "heading", title: "Heading", type: "text", rows: 2 }),
    defineField({ name: "intro", title: "Intro copy", type: "text", rows: 3 }),
  ],
  preview: { prepare: () => ({ title: "Insights Page" }) },
});
