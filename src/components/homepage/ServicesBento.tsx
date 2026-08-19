import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BentoGrid, BentoCard } from "@/components/ui/BentoGrid";
import type { Service } from "@/lib/content/services";
import type { HomePageData } from "@/sanity/fetch";
import { serviceIcons as icons } from "@/lib/service-icons";

export function ServicesBento({ data, services }: { data: HomePageData; services: Service[] }) {
  const [websites, webApps, aiAutomation, technicalDelivery] = services;

  return (
    <section className="border-t border-ink/10 py-14 sm:py-20">
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
