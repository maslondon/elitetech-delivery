import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";

export function FinalCta() {
  return (
    <section className="border-t border-ink/10 py-20 sm:py-28">
      <Container>
        <div className="reveal flex flex-col items-start gap-8 rounded-3xl bg-white/60 p-10 ring-1 ring-ink/10 sm:p-14 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-xl">
            <h2 className="text-3xl font-medium tracking-tight text-ink text-balance sm:text-4xl">
              Have a project in mind?
            </h2>
            <p className="mt-4 text-base leading-relaxed text-stone sm:text-lg">
              Tell us what you&apos;re trying to achieve and we&apos;ll explore the
              best way forward.
            </p>
          </div>
          <Button href="/contact" variant="primary" className="shrink-0">
            Book a free consultation
          </Button>
        </div>
      </Container>
    </section>
  );
}
