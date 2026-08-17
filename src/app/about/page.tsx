import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "About",
  description:
    "Elite Tech Delivery combines experienced technology delivery with a practical, hands-on approach to building digital products.",
  path: "/about",
});

const experienceAreas = [
  "Digital product design and development",
  "Technology programmes and transformation initiatives",
  "Delivery team leadership and coaching",
  "Collaboration across product, engineering and business stakeholders",
];

export default function AboutPage() {
  return (
    <>
      <section className="pt-16 pb-16 sm:pt-24 sm:pb-20">
        <Container>
          <div className="max-w-2xl">
            <Eyebrow>About</Eyebrow>
            <h1 className="mt-4 text-4xl font-medium tracking-tight text-ink text-balance sm:text-5xl">
              Experienced delivery, applied to modern digital work
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-stone">
              Elite Tech Delivery was created to combine experienced
              technology delivery with a more practical, hands-on approach to
              building digital products.
            </p>
          </div>
        </Container>
      </section>

      <section className="border-t border-ink/10 py-16 sm:py-20">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            <div className="reveal">
              <div className="group aspect-[4/5] w-full max-w-sm overflow-hidden rounded-2xl bg-ink/5 ring-1 ring-ink/10">
                <Image
                  src="/images/founder.jpg"
                  alt="Founder, Elite Tech Delivery"
                  width={1254}
                  height={1254}
                  className="h-full w-full object-cover grayscale transition-all duration-500 ease-out group-hover:grayscale-0"
                  priority
                />
              </div>
              <p className="mt-4 max-w-sm text-sm text-stone">
                [PLACEHOLDER — Founder name], Founder, Elite Tech Delivery
              </p>
            </div>

            <div className="reveal">
              <SectionHeading
                eyebrow="Background"
                title="Substantial delivery experience, now applied to hands-on building"
              />
              <div className="mt-6 space-y-5 text-[15px] leading-relaxed text-ink/80">
                <p>
                  Elite Tech Delivery is built on years of experience working
                  across digital products, technology programmes and delivery
                  teams within complex organisations
                  {" "}[PLACEHOLDER — add named organisations here only where accurate, without implying their endorsement].
                  That experience spans working closely with product,
                  engineering and business teams — understanding not just how
                  technology gets built, but how it gets delivered well.
                </p>
                <p>
                  That combination of technology and delivery experience is
                  now applied directly to client work: designing and building
                  websites and digital products, incorporating AI where it
                  genuinely helps, and providing technical delivery
                  consultancy for organisations that need it.
                </p>
                <p>
                  The aim is straightforward — bring senior-level judgement to
                  work that&apos;s often left to generalists, without the
                  overhead of a large agency.
                </p>
              </div>

              <h3 className="mt-10 text-sm font-medium uppercase tracking-[0.15em] text-stone">
                Where the experience comes from
              </h3>
              <ul className="mt-4 space-y-2.5">
                {experienceAreas.map((item) => (
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

      <section className="border-t border-ink/10 py-16 sm:py-20">
        <Container className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-2xl font-medium tracking-tight text-ink sm:text-3xl">
              Want to talk about your project?
            </h2>
            <p className="mt-2 max-w-lg text-stone">
              We&apos;re happy to have an honest conversation about whether
              we&apos;re the right fit.
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
