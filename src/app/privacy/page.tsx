import { Container } from "@/components/layout/Container";
import { pageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site-config";

export const metadata = pageMetadata({
  title: "Privacy Policy",
  description: `Privacy policy for ${siteConfig.name}.`,
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <section className="pt-16 pb-24 sm:pt-24 sm:pb-28">
      <Container>
        <div className="mx-auto max-w-2xl">
          <h1 className="text-4xl font-medium tracking-tight text-ink sm:text-5xl">
            Privacy Policy
          </h1>
          <div className="mt-8 rounded-2xl bg-white/60 p-6 text-sm leading-relaxed text-stone ring-1 ring-ink/10">
            [PLACEHOLDER — this page needs a full privacy policy before
            launch, covering what data is collected via the contact form and
            any analytics tooling, how it is stored and used, how long it is
            retained, and how visitors can request access to or deletion of
            their data, in line with UK GDPR. Consider having this reviewed
            by a solicitor or a template service (e.g. Rocket Lawyer, Seq
            Legal) before publishing.]
          </div>
          <p className="mt-8 text-[15px] leading-relaxed text-ink/80">
            Last updated: [PLACEHOLDER — date]. For questions about this
            policy, contact {siteConfig.email}.
          </p>
        </div>
      </Container>
    </section>
  );
}
