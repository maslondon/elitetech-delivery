import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { services } from "@/lib/content/services";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Services",
  description:
    "Website design and development, web applications and digital products, AI solutions and automation, and technical delivery consultancy.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <section className="pt-16 pb-14 sm:pt-24 sm:pb-16">
        <Container>
          <div className="max-w-2xl">
            <Eyebrow>Services</Eyebrow>
            <h1 className="mt-4 text-4xl font-medium tracking-tight text-ink text-balance sm:text-5xl">
              Four ways we help businesses build and deliver
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-stone">
              Each service can stand alone or work alongside the others. Most
              relationships start with a website or a digital product and
              extend from there.
            </p>
          </div>

          <nav aria-label="Jump to service" className="mt-10 flex flex-wrap gap-3">
            {services.map((service) => (
              <a
                key={service.slug}
                href={`#${service.slug}`}
                className="rounded-full border border-ink/15 px-4 py-2 text-sm font-medium text-ink hover:border-bronze hover:text-bronze-dark"
              >
                {service.shortTitle}
              </a>
            ))}
          </nav>
        </Container>
      </section>

      {services.map((service, i) => (
        <section
          key={service.slug}
          id={service.slug}
          className={
            i % 2 === 1
              ? "scroll-mt-24 border-t border-ink/10 bg-white/50 py-20 sm:py-24"
              : "scroll-mt-24 border-t border-ink/10 py-20 sm:py-24"
          }
        >
          <Container>
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
              <div>
                <span className="text-sm font-medium text-bronze-dark">{`0${i + 1}`}</span>
                <h2 className="mt-3 text-3xl font-medium tracking-tight text-ink text-balance sm:text-4xl">
                  {service.title}
                </h2>
                <p className="mt-5 text-base leading-relaxed text-stone">{service.summary}</p>

                <div className="mt-8">
                  <Button href="/contact" variant="primary">
                    {service.ctaLabel}
                  </Button>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
                <div>
                  <h3 className="text-sm font-medium uppercase tracking-[0.15em] text-stone">
                    The problem
                  </h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-ink/80">{service.problem}</p>

                  <h3 className="mt-8 text-sm font-medium uppercase tracking-[0.15em] text-stone">
                    What we provide
                  </h3>
                  <ul className="mt-3 space-y-2.5">
                    {service.provide.map((item) => (
                      <li key={item} className="flex gap-2.5 text-[15px] leading-relaxed text-ink/80">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-bronze" aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-sm font-medium uppercase tracking-[0.15em] text-stone">
                    Likely outcomes
                  </h3>
                  <ul className="mt-3 space-y-2.5">
                    {service.outcomes.map((item) => (
                      <li key={item} className="flex gap-2.5 text-[15px] leading-relaxed text-ink/80">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-bronze" aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </Container>
        </section>
      ))}

      <section className="border-t border-ink/10 py-20 sm:py-24">
        <Container className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-2xl font-medium tracking-tight text-ink sm:text-3xl">
              Not sure which service fits?
            </h2>
            <p className="mt-2 max-w-lg text-stone">
              That&apos;s a normal starting point. Tell us what you&apos;re trying to
              achieve and we&apos;ll help you work out the best approach.
            </p>
          </div>
          <Button href="/contact" variant="primary" className="shrink-0">
            Book a consultation
          </Button>
        </Container>
      </section>
    </>
  );
}
