import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const steps = [
  {
    number: "01",
    title: "Understand",
    body: "We start with your business, the problem you're trying to solve, and the outcome you actually need — not a generic requirements form.",
  },
  {
    number: "02",
    title: "Build / Improve",
    body: "We design, build or improve the solution — a website, an application, an automation, or a delivery approach — with regular visibility along the way.",
  },
  {
    number: "03",
    title: "Deliver",
    body: "We launch, measure what matters, and keep improving. Nothing is treated as finished the moment it ships.",
  },
];

export function ProcessSection() {
  return (
    <section className="border-t border-ink/10 py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Working together"
          title="A straightforward process, start to finish"
        />

        <ol className="mt-14 grid grid-cols-1 gap-10 sm:grid-cols-3 sm:gap-8">
          {steps.map((step, i) => (
            <li key={step.title} className="reveal" style={{ transitionDelay: `${i * 100}ms` }}>
              <span className="text-sm font-medium text-bronze-dark">{step.number}</span>
              <h3 className="mt-3 text-xl font-medium tracking-tight text-ink">{step.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-stone">{step.body}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
