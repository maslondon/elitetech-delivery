import type { ContentBlock } from "@/lib/content/insights";

export function ArticleBody({ blocks }: { blocks: ContentBlock[] }) {
  return (
    <div className="space-y-6">
      {blocks.map((block, i) => {
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
