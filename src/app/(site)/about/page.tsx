import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { pageMetadata } from "@/lib/metadata";
import { getAboutPage } from "@/sanity/fetch";
import { briefcaseIcon } from "@/lib/icons";

export const metadata = pageMetadata({
  title: "About",
  description:
    "Elite Tech Delivery combines experienced technology delivery with a practical, hands-on approach to building digital products.",
  path: "/about",
});

export default async function AboutPage() {
  const page = await getAboutPage();

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

          <div className="group mt-8 aspect-[16/7] w-full overflow-hidden rounded-2xl bg-ink/5 ring-1 ring-ink/10">
            <Image
              src="/images/about-office.jpg"
              alt="A team of colleagues gathered round a wooden table in relaxed conversation"
              width={2000}
              height={875}
              className="h-full w-full object-cover grayscale-0 transition-all duration-500 ease-out group-hover:grayscale"
              priority
            />
          </div>
        </Container>
      </section>

      <section className="border-t border-ink/10 py-9 sm:py-11">
        <Container>
          <div className="grid grid-cols-1 gap-9 lg:grid-cols-[0.6fr_1.4fr] lg:gap-9">
            <div className="reveal">
              <div className="group aspect-square w-full max-w-60 overflow-hidden rounded-2xl bg-ink/5 ring-1 ring-ink/10">
                {page.founderPhotoUrl && (
                  <Image
                    src={page.founderPhotoUrl}
                    alt={page.founderName}
                    width={1254}
                    height={1254}
                    className="h-full w-full object-cover grayscale-0 transition-all duration-500 ease-out group-hover:grayscale"
                    priority
                  />
                )}
              </div>
              <p className="mt-4 max-w-sm text-sm text-stone">{page.founderName}</p>
            </div>

            <div className="reveal">
              <SectionHeading eyebrow={page.backgroundEyebrow} title={page.backgroundHeading} />
              <div className="mt-6 space-y-5 text-[15px] leading-relaxed text-ink/80">
                {page.backgroundParagraphs.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>

              <div className="mt-8 flex items-center gap-3">
                <div
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-bronze/15 text-bronze-dark"
                  aria-hidden="true"
                >
                  {briefcaseIcon}
                </div>
                <h3 className="text-sm font-medium uppercase tracking-[0.15em] text-stone">
                  {page.experienceHeading}
                </h3>
              </div>
              <ul className="mt-4 space-y-2.5">
                {page.experienceAreas.map((item) => (
                  <li key={item} className="flex gap-2.5 text-[15px] leading-relaxed text-ink/80">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-bronze" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-t border-ink/10 py-9 sm:py-11">
        <Container className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-2xl font-medium tracking-tight text-ink sm:text-3xl">
              {page.ctaHeading}
            </h2>
            <p className="mt-2 max-w-lg text-stone">{page.ctaBody}</p>
          </div>
          <Button href="/contact" variant="primary" className="shrink-0">
            {page.ctaButtonLabel}
          </Button>
        </Container>
      </section>
    </>
  );
}
