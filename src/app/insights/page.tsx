import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { articles } from "@/lib/content/insights";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Insights",
  description:
    "Practical, plain-English articles on websites, AI and technology delivery for small and medium-sized businesses.",
  path: "/insights",
});

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function InsightsPage() {
  return (
    <section className="pt-16 pb-24 sm:pt-24 sm:pb-28">
      <Container>
        <div className="max-w-2xl">
          <Eyebrow>Insights</Eyebrow>
          <h1 className="mt-4 text-4xl font-medium tracking-tight text-ink text-balance sm:text-5xl">
            Practical thinking on websites, AI and delivery
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-stone">
            Useful articles, written plainly, for people who&apos;d rather get on
            with running their business than decode jargon.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <Link
              key={article.slug}
              href={`/insights/${article.slug}`}
              className="group flex flex-col rounded-2xl bg-white/60 p-7 ring-1 ring-ink/10 transition-all duration-300 hover:-translate-y-0.5 hover:ring-bronze/50 hover:shadow-[0_12px_32px_-16px_rgba(11,11,12,0.25)]"
            >
              <p className="text-xs font-medium uppercase tracking-[0.15em] text-stone">
                {formatDate(article.date)} · {article.readingTime}
              </p>
              <h2 className="mt-4 text-xl font-medium tracking-tight text-ink text-balance">
                {article.title}
              </h2>
              <p className="mt-3 flex-1 text-[15px] leading-relaxed text-stone">
                {article.excerpt}
              </p>
              <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-bronze-dark">
                Read article
                <svg
                  className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1"
                  viewBox="0 0 16 16"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M3.5 8h9M8.5 3.5 13 8l-4.5 4.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
