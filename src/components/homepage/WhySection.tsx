import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { medalIcon, codeIcon, handshakeIcon, chatIcon, targetIcon, slidersIcon } from "@/lib/icons";
import type { HomePageData } from "@/sanity/fetch";

const whyIcons = [medalIcon, codeIcon, handshakeIcon, chatIcon, targetIcon, slidersIcon];

export function WhySection({ data }: { data: HomePageData }) {
  return (
    <section className="bg-ink py-20 text-ivory sm:py-28">
      <Container>
        <SectionHeading eyebrow={data.whyEyebrow} title={data.whyHeading} onDark />

        <div className="mt-14 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {data.whyReasons.map((reason, i) => (
            <div key={reason.title} className="reveal border-t border-ivory/15 pt-5">
              <div
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-ivory/10 text-bronze"
                aria-hidden="true"
              >
                {whyIcons[i]}
              </div>
              <h3 className="mt-4 text-base font-medium text-ivory">{reason.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-ivory/70">{reason.body}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
