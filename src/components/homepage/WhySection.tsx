import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const reasons = [
  {
    title: "Senior technology delivery experience",
    body: "Grounded in years of leading digital programmes, not a portfolio built entirely on small freelance jobs.",
  },
  {
    title: "Hands-on development capability",
    body: "Work is actually built, not just scoped and handed to a subcontractor.",
  },
  {
    title: "Practical, not buzzword-driven",
    body: "Plain explanations of what's being built and why, without technical theatre.",
  },
  {
    title: "Focused on business outcomes",
    body: "Every recommendation is judged against the problem it solves for your business.",
  },
  {
    title: "Flexible engagement",
    body: "One-off projects, ongoing support, or delivery consultancy alongside your existing team.",
  },
  {
    title: "Clear communication throughout",
    body: "Straightforward updates and honest timelines — no jargon, no surprises.",
  },
];

export function WhySection() {
  return (
    <section className="bg-ink py-20 text-ivory sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Why Elite Tech Delivery"
          title="Senior thinking, applied practically"
          onDark
        />

        <div className="mt-14 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason) => (
            <div key={reason.title} className="reveal border-t border-ivory/15 pt-5">
              <h3 className="text-base font-medium text-ivory">{reason.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-ivory/70">{reason.body}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
