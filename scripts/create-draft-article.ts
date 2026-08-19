/**
 * Creates (or updates) one Insights article as an unpublished Sanity draft,
 * from scripts/draft-article.json. It never touches the live site — drafts
 * only become visible once someone opens Sanity Studio and hits Publish.
 *
 * Workflow:
 *   1. Fill in scripts/draft-article.json — title, excerpt, date (YYYY-MM-DD),
 *      readingTime (e.g. "6 min read"), and body as an array of strings.
 *      A body string starting with "## " becomes a subheading; anything
 *      else becomes a paragraph.
 *   2. Run: npx sanity exec scripts/create-draft-article.ts --with-user-token
 *   3. Open /studio, find the article under "Insights Article", review and
 *      edit as needed, then click Publish when it's ready to go live.
 *
 * Safe to re-run: it writes to a fixed draft ID derived from the title, so
 * re-running after editing the JSON updates the same draft instead of
 * creating a duplicate.
 */
import fs from "node:fs";
import path from "node:path";
import { getCliClient } from "sanity/cli";

const client = getCliClient({ apiVersion: "2026-01-01" });

type DraftInput = {
  title: string;
  excerpt: string;
  date: string;
  readingTime: string;
  body: string[];
};

function slugify(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function toBlocks(paragraphs: string[]) {
  return paragraphs.map((text) => {
    const isHeading = text.startsWith("## ");
    return {
      _type: "block",
      style: isHeading ? "h2" : "normal",
      children: [{ _type: "span", text: isHeading ? text.slice(3) : text }],
    };
  });
}

async function run() {
  const jsonPath = path.join(process.cwd(), "scripts/draft-article.json");
  const input = JSON.parse(fs.readFileSync(jsonPath, "utf8")) as DraftInput;

  if (!input.title || !input.excerpt || !input.date || !input.body?.length) {
    console.error(
      "scripts/draft-article.json is missing required fields (title, excerpt, date, body). Nothing was written."
    );
    process.exit(1);
  }

  const slug = slugify(input.title);
  const draftId = `drafts.article-${slug}`;

  await client.createOrReplace({
    _id: draftId,
    _type: "article",
    title: input.title,
    slug: { _type: "slug", current: slug },
    excerpt: input.excerpt,
    date: input.date,
    readingTime: input.readingTime || "",
    body: toBlocks(input.body),
  });

  console.log(`Draft saved: "${input.title}"`);
  console.log(`Review and publish it in Studio: /studio/structure/article;${draftId}`);
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
