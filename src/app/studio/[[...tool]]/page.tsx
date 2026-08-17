import { isSanityConfigured } from "@/sanity/env";
import { StudioClient } from "@/components/StudioClient";

export const metadata = { title: "Studio" };

export default function StudioPage() {
  if (!isSanityConfigured) {
    return (
      <div style={{ fontFamily: "sans-serif", padding: "4rem", maxWidth: 560 }}>
        <h1>Studio not connected yet</h1>
        <p>
          Set <code>NEXT_PUBLIC_SANITY_PROJECT_ID</code> and{" "}
          <code>NEXT_PUBLIC_SANITY_DATASET</code> to enable the content studio.
        </p>
      </div>
    );
  }

  return <StudioClient />;
}
