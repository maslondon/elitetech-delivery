import { Hero } from "@/components/homepage/Hero";
import { ServicesBento } from "@/components/homepage/ServicesBento";
import { WhySection } from "@/components/homepage/WhySection";
import { ProcessSection } from "@/components/homepage/ProcessSection";
import { FinalCta } from "@/components/homepage/FinalCta";
import { getHomePage, getServices } from "@/sanity/fetch";

export default async function HomePage() {
  const [homeData, services] = await Promise.all([getHomePage(), getServices()]);

  return (
    <>
      <Hero data={homeData} />
      <ServicesBento data={homeData} services={services} />
      <WhySection data={homeData} />
      <ProcessSection data={homeData} />
      <FinalCta data={homeData} />
    </>
  );
}
