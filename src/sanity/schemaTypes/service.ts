import { defineField, defineType } from "sanity";

export const service = defineType({
  name: "service",
  title: "Service",
  type: "document",
  fields: [
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title" },
      validation: (r) => r.required(),
    }),
    defineField({ name: "shortTitle", title: "Short title (bento card)", type: "string", validation: (r) => r.required() }),
    defineField({ name: "title", title: "Full title", type: "string", validation: (r) => r.required() }),
    defineField({ name: "cardDescription", title: "Bento card description", type: "text", rows: 2 }),
    defineField({ name: "summary", title: "Summary (services page intro)", type: "text", rows: 3 }),
    defineField({ name: "provide", title: "What we provide", type: "array", of: [{ type: "string" }] }),
    defineField({ name: "outcomes", title: "Likely outcomes", type: "array", of: [{ type: "string" }] }),
    defineField({ name: "ctaLabel", title: "CTA button text", type: "string" }),
    defineField({ name: "orderRank", title: "Display order", type: "number", initialValue: 0 }),
  ],
  orderings: [
    { title: "Display order", name: "orderRankAsc", by: [{ field: "orderRank", direction: "asc" }] },
  ],
  preview: {
    select: { title: "title", subtitle: "shortTitle" },
  },
});
