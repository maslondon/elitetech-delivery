import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BentoGrid, BentoCard } from "@/components/ui/BentoGrid";
import type { Service } from "@/lib/content/services";
import type { HomePageData } from "@/sanity/fetch";

const icons: Record<string, React.ReactNode> = {
  websites: (
    <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
      <rect x="2.5" y="4" width="15" height="12" rx="1.5" stroke="currentColor" strokeWidth="1.4" />
      <path d="M2.5 7.5h15" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="5" cy="5.75" r="0.6" fill="currentColor" />
    </svg>
  ),
  "web-applications": (
    <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
      <rect x="2.5" y="2.5" width="6.5" height="6.5" rx="1" stroke="currentColor" strokeWidth="1.4" />
      <rect x="11" y="2.5" width="6.5" height="6.5" rx="1" stroke="currentColor" strokeWidth="1.4" />
      <rect x="2.5" y="11" width="6.5" height="6.5" rx="1" stroke="currentColor" strokeWidth="1.4" />
      <rect x="11" y="11" width="6.5" height="6.5" rx="1" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  ),
  "ai-automation": (
    <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
      <path
        d="M10 2.5 11.6 8 17 10l-5.4 2L10 17.5 8.4 12 3 10l5.4-2L10 2.5Z"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinejoin="round"
      />
    </svg>
  ),
  "technical-delivery": (
    <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
      <path d="M3 10h4l2-5 4 10 2-5h2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
};

export function ServicesBento({ data, services }: { data: HomePageData; services: Service[] }) {
  const [websites, webApps, aiAutomation, technicalDelivery] = services;

  return (
    <section className="border-t border-ink/10 py-20 sm:py-28">
      <Container>
        <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow={data.servicesEyebrow}
            title={data.servicesHeading}
            description={data.servicesDescription}
          />
        </div>

        <div className="mt-12 reveal">
          <BentoGrid>
            <BentoCard
              title={websites.shortTitle}
              description={websites.cardDescription}
              href={`/services#${websites.slug}`}
              icon={icons[websites.slug]}
            />
            <BentoCard
              title={webApps.shortTitle}
              description={webApps.cardDescription}
              href={`/services#${webApps.slug}`}
              icon={icons[webApps.slug]}
              accent
              span="wide"
            />
            <BentoCard
              title={aiAutomation.shortTitle}
              description={aiAutomation.cardDescription}
              href={`/services#${aiAutomation.slug}`}
              icon={icons[aiAutomation.slug]}
            />
            <BentoCard
              title={technicalDelivery.shortTitle}
              description={technicalDelivery.cardDescription}
              href={`/services#${technicalDelivery.slug}`}
              icon={icons[technicalDelivery.slug]}
              span="full"
            />
          </BentoGrid>
        </div>
      </Container>
    </section>
  );
}
