import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { searchIcon, buildIcon, rocketIcon } from "@/lib/icons";
import type { HomePageData } from "@/sanity/fetch";

const processIcons = [searchIcon, buildIcon, rocketIcon];

export function ProcessSection({ data }: { data: HomePageData }) {
  return (
    <section className="border-t border-ink/10 py-20 sm:py-28">
      <Container>
        <SectionHeading eyebrow={data.processEyebrow} title={data.processHeading} />

        <ol className="mt-14 grid grid-cols-1 gap-10 sm:grid-cols-3 sm:gap-8">
          {data.processSteps.map((step, i) => (
            <li key={step.title} className="reveal" style={{ transitionDelay: `${i * 100}ms` }}>
              <div
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-bronze/15 text-bronze-dark"
                aria-hidden="true"
              >
                {processIcons[i]}
              </div>
              <span className="mt-3 block text-sm font-medium text-bronze-dark">{`0${i + 1}`}</span>
              <h3 className="mt-1 text-xl font-medium tracking-tight text-ink">{step.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-stone">{step.body}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
