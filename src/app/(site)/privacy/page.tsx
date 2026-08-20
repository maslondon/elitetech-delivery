import { Container } from "@/components/layout/Container";
import { PortableBody } from "@/components/PortableBody";
import { pageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site-config";
import { getLegalPage } from "@/sanity/fetch";

export const metadata = pageMetadata({
  title: "Privacy Policy",
  description: `Privacy policy for ${siteConfig.name}.`,
  path: "/privacy",
});

const prose = "text-[17px] leading-[1.7] text-ink/80";
const h2 = "mt-10 text-xl font-medium tracking-tight text-ink";

export default async function PrivacyPage() {
  const cms = await getLegalPage("privacy");

  // Once edited in Sanity Studio, the CMS version takes over completely.
  // Until then, the fully-linked default policy below is shown as-is.
  if (cms?.body?.length) {
    return (
      <section className="pt-16 pb-16 sm:pt-20 sm:pb-20">
        <Container>
          <div className="mx-auto max-w-2xl">
            <h1 className="text-4xl font-medium tracking-tight text-ink sm:text-5xl">
              {cms.heading || "Privacy Policy"}
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
            Privacy Policy
          </h1>
          <p className="mt-4 text-sm text-stone">
            Last updated: 19 August 2026
          </p>

          <p className={`${prose} mt-8`}>
            Elite Tech Delivery Limited (&quot;we&quot;, &quot;us&quot;,
            &quot;our&quot;) is committed to protecting your privacy. This
            policy explains what personal data we collect through this
            website, how we use it, and your rights in relation to it, in
            line with the UK General Data Protection Regulation (UK GDPR) and
            the Data Protection Act 2018.
          </p>

          <h2 className={h2}>Who we are</h2>
          <p className={`${prose} mt-3`}>
            Elite Tech Delivery Limited, a company registered in England
            &amp; Wales (company number: {siteConfig.companyNumber}).
            Registered office: {siteConfig.registeredOffice}. You can
            contact us at{" "}
            <a href={`mailto:${siteConfig.email}`} className="text-bronze-dark hover:underline">
              {siteConfig.email}
            </a>
            .
          </p>

          <h2 className={h2}>Information we collect</h2>
          <p className={`${prose} mt-3`}>
            We collect personal data you provide directly to us when you use
            the contact form on this website: your name, email address,
            company name (optional), phone number (optional), and the
            details of your enquiry.
          </p>
          <p className={`${prose} mt-3`}>
            If you accept analytics cookies via the cookie banner, we also
            collect anonymised usage data through Google Analytics — see
            &quot;Cookies&quot; below for details. Nothing is collected this
            way unless you actively accept.
          </p>
          <p className={`${prose} mt-3`}>
            Our hosting provider may automatically log limited technical
            information (such as IP address and browser type) for security
            and reliability purposes, as is standard for any website.
          </p>

          <h2 className={h2}>How we use your information</h2>
          <p className={`${prose} mt-3`}>
            We use the information you submit through our contact form
            solely to respond to your enquiry and to communicate with you
            about work you have asked us about. We do not use your data for
            marketing without your consent, and we never sell or rent your
            personal data to third parties.
          </p>

          <h2 className={h2}>Legal basis for processing</h2>
          <p className={`${prose} mt-3`}>
            We process enquiry data on the basis of our legitimate interest
            in responding to enquiries about our services, and — where an
            enquiry proceeds to a client relationship — on the basis of
            taking steps to enter into a contract with you.
          </p>

          <h2 className={h2}>How long we keep your data</h2>
          <p className={`${prose} mt-3`}>
            We retain enquiry data for as long as reasonably necessary to
            respond to you and, where relevant, for a reasonable period
            afterwards for record-keeping purposes. If an enquiry does not
            proceed to a client relationship, we delete the data within a
            reasonable period.
          </p>

          <h2 className={h2}>Sharing your information</h2>
          <p className={`${prose} mt-3`}>
            We may share your data with trusted service providers who help
            us operate this website and respond to enquiries — for example,
            our email and hosting providers — who process it only on our
            instructions. We do not share your data with any other third
            party for their own purposes.
          </p>

          <h2 className={h2}>Cookies</h2>
          <p className={`${prose} mt-3`}>
            When you first visit this website, we ask whether you&apos;re
            happy for us to use Google Analytics to understand how visitors
            use the site. No analytics cookies are set unless you accept —
            if you decline, or don&apos;t respond, none are used. You can
            change your decision at any time via &quot;Cookie
            preferences&quot; in the footer.
          </p>
          <p className={`${prose} mt-3`}>
            If you accept, Google Analytics sets the following cookies:
          </p>
          <ul className="mt-3 space-y-2">
            <li className={prose}>
              <span className="font-medium text-ink">_ga</span> — distinguishes
              unique visitors. Expires after 2 years.
            </li>
            <li className={prose}>
              <span className="font-medium text-ink">_ga_&lt;container-id&gt;</span> —
              persists session state. Expires after 2 years.
            </li>
          </ul>
          <p className={`${prose} mt-3`}>
            This data is processed by Google Ireland Limited. It is
            anonymised/aggregated and used only to understand site usage
            (for example, which pages are visited and roughly how many
            visitors we get) — we do not use it to individually identify
            you. See{" "}
            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noreferrer noopener"
              className="text-bronze-dark hover:underline"
            >
              Google&apos;s Privacy Policy
            </a>{" "}
            for how Google handles this data. We also set one small,
            strictly necessary item in your browser&apos;s local storage to
            remember your cookie choice itself — this is not a tracking
            cookie and doesn&apos;t require consent.
          </p>

          <h2 className={h2}>International transfers</h2>
          <p className={`${prose} mt-3`}>
            Where any of our service providers are based outside the UK (for
            example, in the United States), appropriate safeguards — such as
            Standard Contractual Clauses — are used to protect your data in
            line with UK GDPR requirements.
          </p>

          <h2 className={h2}>Your rights</h2>
          <p className={`${prose} mt-3`}>
            Under UK GDPR, you have the right to access the personal data we
            hold about you, request correction of inaccurate data, request
            deletion of your data, restrict or object to our processing of
            it, and request a copy of it in a portable format. To exercise
            any of these rights, contact us at{" "}
            <a href={`mailto:${siteConfig.email}`} className="text-bronze-dark hover:underline">
              {siteConfig.email}
            </a>
            . You also have the right to complain to the Information
            Commissioner&apos;s Office (ICO) at{" "}
            <a href="https://ico.org.uk" target="_blank" rel="noreferrer noopener" className="text-bronze-dark hover:underline">
              ico.org.uk
            </a>{" "}
            if you believe we have not handled your data properly.
          </p>

          <h2 className={h2}>Children</h2>
          <p className={`${prose} mt-3`}>
            This website is not directed at children, and we do not
            knowingly collect personal data from anyone under 16.
          </p>

          <h2 className={h2}>Changes to this policy</h2>
          <p className={`${prose} mt-3`}>
            We may update this policy from time to time. The date at the top
            of this page shows when it was last revised.
          </p>

          <h2 className={h2}>Contact us</h2>
          <p className={`${prose} mt-3`}>
            If you have any questions about this policy or how we handle
            your data, contact{" "}
            <a href={`mailto:${siteConfig.email}`} className="text-bronze-dark hover:underline">
              {siteConfig.email}
            </a>
            .
          </p>
        </div>
      </Container>
    </section>
  );
}
