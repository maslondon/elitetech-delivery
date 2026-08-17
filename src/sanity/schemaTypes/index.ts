import { sectionIntro, ctaButton, titledPoint } from "./objects";
import { homePage } from "./homePage";
import { service } from "./service";
import { servicesPage } from "./servicesPage";
import { aboutPage } from "./aboutPage";
import { article } from "./article";
import { insightsPage } from "./insightsPage";
import { contactPage } from "./contactPage";
import { footer } from "./footer";
import { siteSettings } from "./siteSettings";
import { legalPage } from "./legalPage";

export const schemaTypes = [
  // objects
  sectionIntro,
  ctaButton,
  titledPoint,
  // singletons
  homePage,
  servicesPage,
  aboutPage,
  insightsPage,
  contactPage,
  footer,
  siteSettings,
  // collections
  service,
  article,
  legalPage,
];

export const singletonTypes = new Set([
  "homePage",
  "servicesPage",
  "aboutPage",
  "insightsPage",
  "contactPage",
  "footer",
  "siteSettings",
]);
