import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import type { HomePageData } from "@/sanity/fetch";

export function FinalCta({ data }: { data: HomePageData }) {
  return (
    <section className="border-t border-ink/10 py-10 sm:py-14">
      <Container>
        <div className="reveal flex flex-col items-start gap-8 rounded-3xl bg-white/60 p-10 ring-1 ring-ink/10 sm:p-14 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-xl">
            <h2 className="text-3xl font-medium tracking-tight text-ink text-balance sm:text-4xl">
              {data.ctaHeading}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-stone sm:text-lg">{data.ctaBody}</p>
          </div>
          <Button href="/contact" variant="primary" className="shrink-0">
            {data.ctaButtonLabel}
          </Button>
        </div>
      </Container>
    </section>
  );
}
