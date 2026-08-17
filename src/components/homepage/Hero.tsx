import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-16 pb-20 sm:pt-24 sm:pb-28">
      <HeroMotif />
      <Container className="relative">
        <div className="max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-bronze-dark">
            Digital delivery, done properly
          </p>
          <h1 className="mt-5 text-4xl font-medium tracking-tight text-ink text-balance sm:text-5xl lg:text-6xl">
            Websites, digital products and technology delivery that move your
            business forward
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-stone">
            Elite Tech Delivery helps businesses design, build and deliver
            modern digital solutions — from high-performance websites and
            custom web applications to practical AI solutions and technical
            delivery consultancy.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Button href="/contact" variant="primary">
              Book a consultation
            </Button>
            <Button href="/services" variant="secondary">
              View our services
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}

function HeroMotif() {
  return (
    <svg
      className="pointer-events-none absolute -right-24 top-0 hidden h-[560px] w-[560px] text-ink/[0.06] sm:block lg:-right-10 lg:text-ink/[0.08]"
      viewBox="0 0 560 560"
      fill="none"
      aria-hidden="true"
    >
      <rect x="0.5" y="0.5" width="559" height="559" rx="279.5" stroke="currentColor" />
      <rect x="70.5" y="70.5" width="419" height="419" rx="209.5" stroke="currentColor" />
      <rect x="140.5" y="140.5" width="279" height="279" rx="139.5" stroke="currentColor" />
      <circle cx="280" cy="280" r="4" fill="var(--color-bronze)" />
      <circle cx="489" cy="280" r="4" className="fill-ink/15" />
      <circle cx="280" cy="70" r="4" className="fill-ink/15" />
    </svg>
  );
}
