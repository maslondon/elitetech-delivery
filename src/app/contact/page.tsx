import { Container } from "@/components/layout/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ContactForm } from "./ContactForm";
import { siteConfig } from "@/lib/site-config";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Contact",
  description:
    "Book a consultation with Elite Tech Delivery about a website, web application, AI solution or technical delivery need.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <section className="pt-16 pb-24 sm:pt-24 sm:pb-28">
      <Container>
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div>
            <Eyebrow>Contact</Eyebrow>
            <h1 className="mt-4 text-4xl font-medium tracking-tight text-ink text-balance sm:text-5xl">
              Book a consultation
            </h1>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-stone">
              Whether you&apos;re planning a new website, exploring a digital
              product, looking at practical AI opportunities or need help
              delivering an existing technology initiative, get in touch.
            </p>

            <div className="mt-10 space-y-4 text-[15px] text-ink/80">
              <p>
                <span className="block text-xs font-medium uppercase tracking-[0.15em] text-stone">
                  Email
                </span>
                <a href={`mailto:${siteConfig.email}`} className="mt-1 inline-block text-bronze-dark hover:underline">
                  {siteConfig.email}
                </a>
              </p>
              <p>
                <span className="block text-xs font-medium uppercase tracking-[0.15em] text-stone">
                  Response time
                </span>
                We typically reply within one working day.
              </p>
            </div>
          </div>

          <div className="rounded-2xl bg-white/60 p-8 ring-1 ring-ink/10 sm:p-10">
            <ContactForm />
          </div>
        </div>
      </Container>
    </section>
  );
}
