import type { StructureResolver } from "sanity/structure";

/**
 * Singleton "page" documents get a direct link (no list, no create/delete),
 * everything else (services, articles, legal pages) gets a normal list view.
 */
export const structure: StructureResolver = (S) =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("Homepage")
        .child(S.document().schemaType("homePage").documentId("homePage")),
      S.listItem()
        .title("Services Page")
        .child(S.document().schemaType("servicesPage").documentId("servicesPage")),
      S.documentTypeListItem("service").title("Services"),
      S.listItem()
        .title("About Page")
        .child(S.document().schemaType("aboutPage").documentId("aboutPage")),
      S.listItem()
        .title("Insights Page")
        .child(S.document().schemaType("insightsPage").documentId("insightsPage")),
      S.documentTypeListItem("article").title("Insights Articles"),
      S.listItem()
        .title("Contact Page")
        .child(S.document().schemaType("contactPage").documentId("contactPage")),
      S.listItem()
        .title("Footer")
        .child(S.document().schemaType("footer").documentId("footer")),
      S.listItem()
        .title("Site Settings")
        .child(S.document().schemaType("siteSettings").documentId("siteSettings")),
      S.documentTypeListItem("legalPage").title("Legal Pages"),
    ]);
