import { Container } from "@/components/layout/Container";
import { PortableBody } from "@/components/PortableBody";
import { pageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site-config";
import { getLegalPage } from "@/sanity/fetch";

export const metadata = pageMetadata({
  title: "Terms",
  description: `Terms and conditions for ${siteConfig.name}.`,
  path: "/terms",
});

const prose = "text-[17px] leading-[1.7] text-ink/80";
const h2 = "mt-10 text-xl font-medium tracking-tight text-ink";

export default async function TermsPage() {
  const cms = await getLegalPage("terms");

  if (cms?.body?.length) {
    return (
      <section className="pt-16 pb-16 sm:pt-20 sm:pb-20">
        <Container>
          <div className="mx-auto max-w-2xl">
            <h1 className="text-4xl font-medium tracking-tight text-ink sm:text-5xl">
              {cms.heading || "Terms & Conditions"}
            </h1>
            {cms.lastUpdated && (
              <p className="mt-4 text-sm text-stone">Last updated: {cms.lastUpdated}</p>
            )}
            {cms.noteBox && (
              <div className="mt-6 rounded-xl bg-white/60 p-5 text-sm leading-relaxed text-stone ring-1 ring-ink/10">
                {cms.noteBox}
              </div>
            )}
            <div className="mt-8">
              <PortableBody value={cms.body} />
            </div>
          </div>
        </Container>
      </section>
    );
  }

  return (
    <section className="pt-16 pb-16 sm:pt-20 sm:pb-20">
      <Container>
        <div className="mx-auto max-w-2xl">
          <h1 className="text-4xl font-medium tracking-tight text-ink sm:text-5xl">
            Terms &amp; Conditions
          </h1>
          <p className="mt-4 text-sm text-stone">
            Last updated: 19 August 2026
          </p>

          <p className={`${prose} mt-8`}>
            These terms and conditions govern your use of this website,
            operated by Elite Tech Delivery Limited (&quot;we&quot;,
            &quot;us&quot;, &quot;our&quot;). By using this website, you
            accept these terms in full.
          </p>

          <h2 className={h2}>Use of this website</h2>
          <p className={`${prose} mt-3`}>
            You may use this website for lawful purposes only. You must not
            use it in any way that causes damage to the website or impairs
            its availability, or in any way that is unlawful, fraudulent, or
            harmful.
          </p>

          <h2 className={h2}>Intellectual property</h2>
          <p className={`${prose} mt-3`}>
            Unless otherwise stated, we own the intellectual property rights
            in this website and its content, including text, graphics, and
            the Elite Tech Delivery name and wordmark. You may view and
            print pages from this site for your own personal, non-commercial
            use, but you must not otherwise reproduce, distribute, or
            republish any content without our prior written consent.
          </p>

          <h2 className={h2}>Accuracy of information</h2>
          <p className={`${prose} mt-3`}>
            We take reasonable care to keep the content of this website
            accurate and up to date, but we make no warranties or
            representations, express or implied, as to its completeness or
            accuracy. Content is provided for general information only and
            does not constitute professional or legal advice, nor a formal
            quotation for services — any project work is agreed separately
            in writing.
          </p>

          <h2 className={h2}>No guarantees</h2>
          <p className={`${prose} mt-3`}>
            Any statements about likely outcomes on this website (for
            example, relating to website performance or search engine
            visibility) reflect our professional approach and experience,
            not a guarantee of specific results.
          </p>

          <h2 className={h2}>Limitation of liability</h2>
          <p className={`${prose} mt-3`}>
            To the fullest extent permitted by law, we exclude liability for
            any loss or damage arising from your use of this website,
            including indirect or consequential loss. Nothing in these
            terms excludes or limits our liability for death or personal
            injury caused by our negligence, fraud, or any other liability
            that cannot be excluded by law.
          </p>

          <h2 className={h2}>Links to other websites</h2>
          <p className={`${prose} mt-3`}>
            This website may contain links to third-party websites. We are
            not responsible for the content, accuracy, or practices of any
            linked websites, and including a link does not imply
            endorsement.
          </p>

          <h2 className={h2}>Changes to these terms</h2>
          <p className={`${prose} mt-3`}>
            We may update these terms from time to time. The date at the top
            of this page shows when they were last revised. Continued use of
            the website after changes are published constitutes acceptance
            of the revised terms.
          </p>

          <h2 className={h2}>Governing law</h2>
          <p className={`${prose} mt-3`}>
            These terms are governed by the laws of England and Wales, and
            any disputes will be subject to the exclusive jurisdiction of
            the courts of England and Wales.
          </p>

          <h2 className={h2}>Contact us</h2>
          <p className={`${prose} mt-3`}>
            Questions about these terms can be sent to{" "}
            <a href={`mailto:${siteConfig.email}`} className="text-accent-dark hover:underline">
              {siteConfig.email}
            </a>
            .
          </p>
        </div>
      </Container>
    </section>
  );
}
