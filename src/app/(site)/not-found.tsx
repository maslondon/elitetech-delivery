import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="flex min-h-[60vh] items-center pt-16 pb-24 sm:pt-24">
      <Container>
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent-dark">404</p>
        <h1 className="mt-4 text-4xl font-medium tracking-tight text-ink sm:text-5xl">
          Page not found
        </h1>
        <p className="mt-4 max-w-md text-lg leading-relaxed text-stone">
          The page you&apos;re looking for doesn&apos;t exist or may have moved.
        </p>
        <div className="mt-8">
          <Button href="/" variant="primary">
            Back to homepage
          </Button>
        </div>
      </Container>
    </section>
  );
}
