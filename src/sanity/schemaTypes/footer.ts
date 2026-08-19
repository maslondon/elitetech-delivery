import { defineField, defineType } from "sanity";

export const footer = defineType({
  name: "footer",
  title: "Footer",
  type: "document",
  fields: [
    defineField({ name: "tagline", title: "Tagline (under the logo)", type: "text", rows: 2 }),
    defineField({ name: "siteColumnLabel", title: "'Site' column label", type: "string", initialValue: "Site" }),
    defineField({ name: "contactColumnLabel", title: "'Get in touch' column label", type: "string", initialValue: "Get in touch" }),
    defineField({ name: "copyrightSuffix", title: "Text after company name in copyright line", type: "string" }),
  ],
  preview: { prepare: () => ({ title: "Footer" }) },
});
