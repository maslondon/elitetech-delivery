import { Container } from "@/components/layout/Container";
import { pageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site-config";

export const metadata = pageMetadata({
  title: "Terms",
  description: `Terms and conditions for ${siteConfig.name}.`,
  path: "/terms",
});

export default function TermsPage() {
  return (
    <section className="pt-16 pb-24 sm:pt-24 sm:pb-28">
      <Container>
        <div className="mx-auto max-w-2xl">
          <h1 className="text-4xl font-medium tracking-tight text-ink sm:text-5xl">
            Terms &amp; Conditions
          </h1>
          <div className="mt-8 rounded-2xl bg-white/60 p-6 text-sm leading-relaxed text-stone ring-1 ring-ink/10">
            [PLACEHOLDER — this page needs full website terms of use and, if
            relevant, engagement/service terms before launch. Consider having
            this reviewed by a solicitor or a template service before
            publishing.]
          </div>
          <p className="mt-8 text-[15px] leading-relaxed text-ink/80">
            Last updated: [PLACEHOLDER — date]. For questions about these
            terms, contact {siteConfig.email}.
          </p>
        </div>
      </Container>
    </section>
  );
}
