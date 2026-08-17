import { PortableText, type PortableTextComponents } from "@portabletext/react";

const components: PortableTextComponents = {
  block: {
    h2: ({ children }) => (
      <h2 className="mt-10 text-xl font-medium tracking-tight text-ink">{children}</h2>
    ),
    normal: ({ children }) => (
      <p className="mt-3 text-[17px] leading-[1.7] text-ink/80">{children}</p>
    ),
  },
};

export function PortableBody({ value }: { value: Array<Record<string, unknown>> }) {
  return <PortableText value={value as never} components={components} />;
}
