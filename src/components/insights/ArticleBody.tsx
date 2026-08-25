import { PortableText, type PortableTextComponents } from "@portabletext/react";
import type { ContentBlock } from "@/lib/content/insights";

const portableComponents: PortableTextComponents = {
  block: {
    h2: ({ children }) => (
      <h2 className="pt-4 text-2xl font-medium tracking-tight text-ink">{children}</h2>
    ),
    normal: ({ children }) => <p className="text-[17px] leading-[1.7] text-ink/80">{children}</p>,
  },
  list: {
    bullet: ({ children }) => <ul className="space-y-2.5">{children}</ul>,
  },
  listItem: {
    bullet: ({ children }) => (
      <li className="flex gap-2.5 text-[17px] leading-relaxed text-ink/80">
        <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-bronze" aria-hidden="true" />
        <span>{children}</span>
      </li>
    ),
  },
};

/** Accepts either the static-content ContentBlock[] shape or Sanity's
 * Portable Text block array — renders whichever it's given. */
export function ArticleBody({ blocks }: { blocks: ContentBlock[] | Array<Record<string, unknown>> }) {
  if (blocks.length > 0 && "_type" in blocks[0]) {
    return (
      <div className="space-y-6">
        <PortableText value={blocks as never} components={portableComponents} />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {(blocks as ContentBlock[]).map((block, i) => {
        if (block.type === "h2") {
          return (
            <h2 key={i} className="pt-4 text-2xl font-medium tracking-tight text-ink">
              {block.text}
            </h2>
          );
        }
        if (block.type === "ul") {
          return (
            <ul key={i} className="space-y-2.5">
              {block.items.map((item) => (
                <li key={item} className="flex gap-2.5 text-[17px] leading-relaxed text-ink/80">
                  <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-bronze" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          );
        }
        return (
          <p key={i} className="text-[17px] leading-[1.7] text-ink/80">
            {block.text}
          </p>
        );
      })}
    </div>
  );
}
