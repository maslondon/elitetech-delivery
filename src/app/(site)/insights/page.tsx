import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { pageMetadata } from "@/lib/metadata";
import { getArticles, getInsightsPage } from "@/sanity/fetch";
import { serviceIcons } from "@/lib/service-icons";
import { documentIcon } from "@/lib/icons";

function articleIcon(slug: string) {
  if (slug.includes("website")) return serviceIcons.websites;
  if (slug.includes("ai")) return serviceIcons["ai-automation"];
  if (slug.includes("delivery")) return serviceIcons["technical-delivery"];
  return documentIcon;
}

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

export default async function InsightsPage() {
  const [page, articles] = await Promise.all([getInsightsPage(), getArticles()]);

  return (
    <section className="pt-12 pb-12 sm:pt-14 sm:pb-14">
      <Container>
        <div className="max-w-2xl">
          <Eyebrow>{page.eyebrow}</Eyebrow>
          <h1 className="mt-4 text-4xl font-medium tracking-tight text-ink text-balance sm:text-5xl">
            {page.heading}
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-stone">{page.intro}</p>
        </div>

        <div className="group mt-8 aspect-[16/7] w-full overflow-hidden rounded-2xl bg-ink/5 ring-1 ring-ink/10">
          <Image
            src="/images/insights-research.jpg"
            alt="An overhead view of someone researching with a laptop and open book"
            width={2000}
            height={875}
            className="h-full w-full object-cover grayscale transition-all duration-500 ease-out group-hover:grayscale-0"
            priority
          />
        </div>

        <div className="mt-9 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <Link
              key={article.slug}
              href={`/insights/${article.slug}`}
              className="group flex flex-col rounded-2xl bg-white/60 p-7 ring-1 ring-ink/10 transition-all duration-300 hover:-translate-y-0.5 hover:ring-bronze/50 hover:shadow-[0_12px_32px_-16px_rgba(11,11,12,0.25)]"
            >
              <div
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-bronze/15 text-bronze-dark"
                aria-hidden="true"
              >
                {articleIcon(article.slug)}
              </div>
              <p className="mt-4 text-xs font-medium uppercase tracking-[0.15em] text-stone">
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
