export const apiVersion = "2026-01-01";
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;

/** False until a real project ID is configured — every fetch helper falls
 * back to the existing static content while this is false, so the site
 * behaves exactly as it does today until Sanity is actually connected. */
export const isSanityConfigured = Boolean(projectId);
