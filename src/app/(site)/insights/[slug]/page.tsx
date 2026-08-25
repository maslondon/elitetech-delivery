import { notFound } from "next/navigation";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { ArticleBody } from "@/components/insights/ArticleBody";
import { ShareButtons } from "@/components/insights/ShareButtons";
import { pageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site-config";
import { getArticles, getArticleBySlug } from "@/sanity/fetch";

export async function generateStaticParams() {
  const articles = await getArticles();
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);
  if (!article) return {};

  return pageMetadata({
    title: article.title,
    description: article.excerpt,
    path: `/insights/${article.slug}`,
  });
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const [article, allArticles] = await Promise.all([getArticleBySlug(slug), getArticles()]);
  if (!article) notFound();

  const otherArticles = allArticles.filter((a) => a.slug !== article.slug).slice(0, 2);

  return (
    <article className="pt-16 pb-16 sm:pt-20 sm:pb-20">
      <Container>
        <div className="mx-auto max-w-2xl">
          <Link href="/insights" className="text-sm font-medium text-accent-dark hover:underline">
            ← All insights
          </Link>

          <p className="mt-6 text-xs font-medium uppercase tracking-[0.15em] text-stone">
            {formatDate(article.date)} · {article.readingTime}
          </p>
          <h1 className="mt-4 text-3xl font-medium tracking-tight text-ink text-balance sm:text-4xl">
            {article.title}
          </h1>

          <div className="mt-10">
            <ArticleBody blocks={article.body} />
          </div>

          <div className="mt-12 border-t border-ink/10 pt-8">
            <ShareButtons url={`${siteConfig.url}/insights/${article.slug}`} title={article.title} />
          </div>

          <div className="mt-10 rounded-2xl bg-white/60 p-8 ring-1 ring-ink/10 sm:p-10">
            <h2 className="text-xl font-medium tracking-tight text-ink">
              Have a project this connects to?
            </h2>
            <p className="mt-2 text-stone">
              A quick conversation costs nothing — tell us what you&apos;re trying to achieve.
            </p>
            <Button href="/contact" variant="primary" className="mt-6">
              Book a consultation
            </Button>
          </div>
        </div>

        {otherArticles.length > 0 && (
          <div className="mx-auto mt-20 max-w-2xl border-t border-ink/10 pt-12">
            <p className="text-sm font-medium uppercase tracking-[0.15em] text-stone">
              More insights
            </p>
            <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
              {otherArticles.map((a) => (
                <Link
                  key={a.slug}
                  href={`/insights/${a.slug}`}
                  className="group rounded-xl p-1 text-ink hover:text-accent-dark"
                >
                  <h3 className="font-medium text-balance">{a.title}</h3>
                  <p className="mt-1.5 text-sm text-stone">{a.excerpt}</p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </Container>
    </article>
  );
}
