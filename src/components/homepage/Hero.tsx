import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import type { HomePageData } from "@/sanity/fetch";

export function Hero({ data }: { data: HomePageData }) {
  return (
    <section className="overflow-hidden pt-12 pb-10 sm:pt-14 sm:pb-14">
      <Container>
        <div className="grid grid-cols-1 items-center gap-9 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-bronze-dark">
              {data.heroEyebrow}
            </p>
            <h1 className="mt-5 text-4xl font-medium tracking-tight text-ink text-balance sm:text-5xl">
              {data.heroHeadline}
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-stone">
              {data.heroSubhead}
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Button href="/contact" variant="primary">
                {data.heroPrimaryCta}
              </Button>
              <Button href="/services" variant="secondary">
                {data.heroSecondaryCta}
              </Button>
            </div>
          </div>

          <div className="group aspect-[1480/1350] w-full overflow-hidden rounded-2xl bg-ink/5 ring-1 ring-ink/10">
            <Image
              src="/images/hero-code-desk.jpg"
              alt="A laptop showing code on a shared studio desk, with a colleague working at another machine in the background"
              width={1480}
              height={1350}
              className="h-full w-full object-cover grayscale transition-all duration-500 ease-out group-hover:grayscale-0"
              priority
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
