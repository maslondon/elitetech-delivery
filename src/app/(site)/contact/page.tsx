import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ContactForm } from "./ContactForm";
import { pageMetadata } from "@/lib/metadata";
import { getContactPage, getSiteSettings } from "@/sanity/fetch";
import { mailIcon, clockIcon, phoneIcon } from "@/lib/icons";

export const metadata = pageMetadata({
  title: "Contact",
  description:
    "Book a consultation with Elite Tech Delivery about a website, web application, AI solution or technical delivery need.",
  path: "/contact",
});

export default async function ContactPage() {
  const [page, settings] = await Promise.all([getContactPage(), getSiteSettings()]);

  return (
    <section className="pt-16 pb-16 sm:pt-20 sm:pb-20">
      <Container>
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div>
            <Eyebrow>{page.eyebrow}</Eyebrow>
            <h1 className="mt-4 text-4xl font-medium tracking-tight text-ink text-balance sm:text-5xl">
              {page.heading}
            </h1>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-stone">{page.intro}</p>

            <div className="mt-10 space-y-5 text-[15px] text-ink/80">
              <div className="flex gap-3">
                <div
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-bronze/15 text-bronze-dark"
                  aria-hidden="true"
                >
                  {mailIcon}
                </div>
                <p>
                  <span className="block text-xs font-medium uppercase tracking-[0.15em] text-stone">
                    {page.emailLabel}
                  </span>
                  <a href={`mailto:${settings.email}`} className="mt-1 inline-block text-bronze-dark hover:underline">
                    {settings.email}
                  </a>
                </p>
              </div>
              {settings.phone && (
                <div className="flex gap-3">
                  <div
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-bronze/15 text-bronze-dark"
                    aria-hidden="true"
                  >
                    {phoneIcon}
                  </div>
                  <p>
                    <span className="block text-xs font-medium uppercase tracking-[0.15em] text-stone">
                      {page.phoneLabel}
                    </span>
                    <a
                      href={`tel:${settings.phone.replace(/\s+/g, "")}`}
                      className="mt-1 inline-block text-bronze-dark hover:underline"
                    >
                      {settings.phone}
                    </a>
                  </p>
                </div>
              )}
              <div className="flex gap-3">
                <div
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-bronze/15 text-bronze-dark"
                  aria-hidden="true"
                >
                  {clockIcon}
                </div>
                <p>
                  <span className="block text-xs font-medium uppercase tracking-[0.15em] text-stone">
                    {page.responseTimeLabel}
                  </span>
                  {page.responseTimeText}
                </p>
              </div>
            </div>

            <div className="group mt-10 aspect-[4/3] w-full max-w-md overflow-hidden rounded-2xl bg-ink/5 ring-1 ring-ink/10">
              <Image
                src="/images/contact-typing.jpg"
                alt="Close-up of someone typing on a laptop"
                width={1200}
                height={800}
                className="h-full w-full object-cover grayscale transition-all duration-500 ease-out group-hover:grayscale-0"
                priority
              />
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
