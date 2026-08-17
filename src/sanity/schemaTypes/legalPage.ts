import { defineField, defineType } from "sanity";

export const legalPage = defineType({
  name: "legalPage",
  title: "Legal Page",
  type: "document",
  fields: [
    defineField({
      name: "pageId",
      title: "Which page",
      type: "string",
      options: { list: [{ title: "Privacy Policy", value: "privacy" }, { title: "Terms & Conditions", value: "terms" }] },
      validation: (r) => r.required(),
    }),
    defineField({ name: "heading", title: "Heading", type: "string" }),
    defineField({ name: "lastUpdated", title: "Last updated", type: "date" }),
    defineField({ name: "noteBox", title: "Note box (the reviewer reminder)", type: "text", rows: 3 }),
    defineField({
      name: "body",
      title: "Body",
      type: "array",
      of: [{ type: "block" }],
    }),
  ],
  preview: {
    select: { title: "heading", subtitle: "pageId" },
  },
});
