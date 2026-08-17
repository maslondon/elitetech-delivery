import { Container } from "@/components/layout/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ContactForm } from "./ContactForm";
import { pageMetadata } from "@/lib/metadata";
import { getContactPage, getSiteSettings } from "@/sanity/fetch";

export const metadata = pageMetadata({
  title: "Contact",
  description:
    "Book a consultation with Elite Tech Delivery about a website, web application, AI solution or technical delivery need.",
  path: "/contact",
});

export default async function ContactPage() {
  const [page, settings] = await Promise.all([getContactPage(), getSiteSettings()]);

  return (
    <section className="pt-16 pb-24 sm:pt-24 sm:pb-28">
      <Container>
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div>
            <Eyebrow>{page.eyebrow}</Eyebrow>
            <h1 className="mt-4 text-4xl font-medium tracking-tight text-ink text-balance sm:text-5xl">
              {page.heading}
            </h1>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-stone">{page.intro}</p>

            <div className="mt-10 space-y-4 text-[15px] text-ink/80">
              <p>
                <span className="block text-xs font-medium uppercase tracking-[0.15em] text-stone">
                  {page.emailLabel}
                </span>
                <a href={`mailto:${settings.email}`} className="mt-1 inline-block text-bronze-dark hover:underline">
                  {settings.email}
                </a>
              </p>
              <p>
                <span className="block text-xs font-medium uppercase tracking-[0.15em] text-stone">
                  {page.responseTimeLabel}
                </span>
                {page.responseTimeText}
              </p>
            </div>
          </div>

          <div className="rounded-2xl bg-white/60 p-8 ring-1 ring-ink/10 sm:p-10">
            <ContactForm
              email={settings.email}
              submitButtonLabel={page.submitButtonLabel}
              successHeading={page.successHeading}
              successBody={page.successBody}
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
