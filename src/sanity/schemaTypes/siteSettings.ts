import { defineField, defineType } from "sanity";

export const siteSettings = defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  groups: [
    { name: "contact", title: "Contact details" },
    { name: "nav", title: "Navigation labels" },
    { name: "cta", title: "Header CTA" },
  ],
  fields: [
    defineField({ name: "email", title: "Contact email", type: "string", group: "contact" }),
    defineField({ name: "phone", title: "Phone (leave blank to hide)", type: "string", group: "contact" }),
    defineField({ name: "linkedin", title: "LinkedIn URL", type: "url", group: "contact" }),

    defineField({ name: "navServices", title: "\"Services\" label", type: "string", initialValue: "Services", group: "nav" }),
    defineField({ name: "navAbout", title: "\"About\" label", type: "string", initialValue: "About", group: "nav" }),
    defineField({ name: "navInsights", title: "\"Insights\" label", type: "string", initialValue: "Insights", group: "nav" }),
    defineField({ name: "navContact", title: "\"Contact\" label", type: "string", initialValue: "Contact", group: "nav" }),
    defineField({ name: "navPrivacy", title: "\"Privacy policy\" label", type: "string", initialValue: "Privacy policy", group: "nav" }),
    defineField({ name: "navTerms", title: "\"Terms\" label", type: "string", initialValue: "Terms", group: "nav" }),

    defineField({ name: "headerCtaLabel", title: "Header CTA button text", type: "string", initialValue: "Book a consultation", group: "cta" }),
  ],
  preview: { prepare: () => ({ title: "Site Settings" }) },
});
