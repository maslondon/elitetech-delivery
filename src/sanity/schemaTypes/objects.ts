import { defineField, defineType } from "sanity";

/** A single "eyebrow + headline + optional description" block, used at the top of most sections. */
export const sectionIntro = defineType({
  name: "sectionIntro",
  title: "Section intro",
  type: "object",
  fields: [
    defineField({ name: "eyebrow", title: "Eyebrow label", type: "string" }),
    defineField({ name: "heading", title: "Heading", type: "string", validation: (r) => r.required() }),
    defineField({ name: "description", title: "Description", type: "text", rows: 3 }),
  ],
});

export const ctaButton = defineType({
  name: "ctaButton",
  title: "Button",
  type: "object",
  fields: [
    defineField({ name: "label", title: "Button text", type: "string", validation: (r) => r.required() }),
  ],
});

/** title + body pair used for repeated point/reason/step lists. */
export const titledPoint = defineType({
  name: "titledPoint",
  title: "Point",
  type: "object",
  fields: [
    defineField({ name: "title", title: "Title", type: "string", validation: (r) => r.required() }),
    defineField({ name: "body", title: "Body", type: "text", rows: 2, validation: (r) => r.required() }),
  ],
});
