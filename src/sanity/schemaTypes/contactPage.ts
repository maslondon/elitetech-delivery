import { defineField, defineType } from "sanity";

export const contactPage = defineType({
  name: "contactPage",
  title: "Contact Page",
  type: "document",
  fields: [
    defineField({ name: "eyebrow", title: "Eyebrow", type: "string" }),
    defineField({ name: "heading", title: "Heading", type: "string" }),
    defineField({ name: "intro", title: "Intro copy", type: "text", rows: 3 }),
    defineField({ name: "emailLabel", title: "Email field label", type: "string", initialValue: "Email" }),
    defineField({ name: "phoneLabel", title: "Phone field label", type: "string", initialValue: "Phone / WhatsApp" }),
    defineField({ name: "responseTimeLabel", title: "Response time label", type: "string", initialValue: "Response time" }),
    defineField({ name: "responseTimeText", title: "Response time text", type: "string" }),
    defineField({ name: "formHeading", title: "Form section text", type: "text", rows: 2 }),
    defineField({ name: "submitButtonLabel", title: "Submit button text", type: "string" }),
    defineField({ name: "successHeading", title: "Success message heading", type: "string" }),
    defineField({ name: "successBody", title: "Success message body", type: "text", rows: 2 }),
  ],
  preview: { prepare: () => ({ title: "Contact Page" }) },
});
