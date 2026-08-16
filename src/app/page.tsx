import { Hero } from "@/components/homepage/Hero";
import { TrustSection } from "@/components/homepage/TrustSection";
import { ServicesBento } from "@/components/homepage/ServicesBento";
import { WhySection } from "@/components/homepage/WhySection";
import { ProcessSection } from "@/components/homepage/ProcessSection";
import { FinalCta } from "@/components/homepage/FinalCta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustSection />
      <ServicesBento />
      <WhySection />
      <ProcessSection />
      <FinalCta />
    </>
  );
}
