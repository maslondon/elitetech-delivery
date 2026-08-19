import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import type { HomePageData } from "@/sanity/fetch";

export function Hero({ data }: { data: HomePageData }) {
  return (
    <section className="overflow-hidden pt-16 pb-14 sm:pt-20 sm:pb-20">
      <Container>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-bronze-dark">
              {data.heroEyebrow}
            </p>
            <h1 className="mt-5 text-4xl font-medium tracking-tight text-ink text-balance sm:text-5xl lg:text-6xl">
              {data.heroHeadline}
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-stone">
              {data.heroSubhead}
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Button href="/contact" variant="primary">
                {data.heroPrimaryCta}
              </Button>
              <Button href="/services" variant="secondary">
                {data.heroSecondaryCta}
              </Button>
            </div>
          </div>

          <div className="group aspect-[4/5] w-full overflow-hidden rounded-2xl bg-ink/5 ring-1 ring-ink/10">
            <Image
              src="/images/hero-team.jpg"
              alt="A team presenting and working together in a bright modern office"
              width={2000}
              height={2500}
              className="h-full w-full object-cover grayscale transition-all duration-500 ease-out group-hover:grayscale-0"
              priority
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
