import { Container } from "@/components/layout/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import type { HomePageData } from "@/sanity/fetch";

export function TrustSection({ data }: { data: HomePageData }) {
  return (
    <section className="border-t border-ink/10 py-20 sm:py-28">
      <Container>
        <div className="reveal">
          <Eyebrow>{data.trustEyebrow}</Eyebrow>
          <h2 className="mt-4 max-w-2xl text-3xl font-medium tracking-tight text-ink text-balance sm:text-4xl">
            {data.trustHeading}
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-3">
          {data.trustPoints.map((point, i) => (
            <div
              key={point.title}
              className="reveal"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="text-sm font-medium text-bronze-dark">{`0${i + 1}`}</div>
              <h3 className="mt-3 text-lg font-medium text-ink">{point.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-stone">{point.body}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
