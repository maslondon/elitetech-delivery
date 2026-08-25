import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { pageMetadata } from "@/lib/metadata";
import { getServices, getServicesPage } from "@/sanity/fetch";
import { serviceIcons } from "@/lib/service-icons";

export const metadata = pageMetadata({
  title: "Services",
  description:
    "Website design and development, web applications and digital products, AI solutions and automation, and technical delivery consultancy.",
  path: "/services",
});

export default async function ServicesPage() {
  const [page, services] = await Promise.all([getServicesPage(), getServices()]);

  return (
    <>
      <section className="pt-12 pb-9 sm:pt-14 sm:pb-11">
        <Container>
          <div className="max-w-2xl">
            <Eyebrow>{page.eyebrow}</Eyebrow>
            <h1 className="mt-4 text-4xl font-medium tracking-tight text-ink text-balance sm:text-5xl">
              {page.heading}
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-stone">{page.intro}</p>
          </div>

          <nav aria-label="Jump to service" className="mt-6 flex flex-wrap gap-3">
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

          <div className="group mt-8 aspect-[16/7] w-full overflow-hidden rounded-2xl bg-ink/5 ring-1 ring-ink/10">
            <Image
              src="/images/services-collaboration.jpg"
              alt="A man and woman working through a problem together at a laptop"
              width={2000}
              height={875}
              className="h-full w-full object-cover grayscale transition-all duration-500 ease-out group-hover:grayscale-0"
              priority
            />
          </div>
        </Container>
      </section>

      {services.map((service, i) => (
        <section
          key={service.slug}
          id={service.slug}
          className={
            i % 2 === 1
              ? "scroll-mt-24 border-t border-ink/10 bg-white/50 py-10 sm:py-12"
              : "scroll-mt-24 border-t border-ink/10 py-10 sm:py-12"
          }
        >
          <Container>
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_1.2fr] lg:gap-9">
              <div>
                <div className="flex items-center gap-4">
                  <div
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-bronze/15 text-bronze-dark"
                    aria-hidden="true"
                  >
                    {serviceIcons[service.slug]}
                  </div>
                  <span className="text-sm font-medium text-bronze-dark">{`0${i + 1}`}</span>
                </div>
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

      <section className="border-t border-ink/10 py-10 sm:py-12">
        <Container className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-2xl font-medium tracking-tight text-ink sm:text-3xl">
              {page.bottomHeading}
            </h2>
            <p className="mt-2 max-w-lg text-stone">{page.bottomBody}</p>
          </div>
          <Button href="/contact" variant="primary" className="shrink-0">
            {page.bottomButtonLabel}
          </Button>
        </Container>
      </section>
    </>
  );
}
