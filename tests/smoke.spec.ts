import { test, expect } from "@playwright/test";

/**
 * Smoke test: catches exactly the class of bug that manual click-through
 * QA misses — a page that returns 200 but has something silently broken
 * inside it (an image that fails to decode, a console error, a missing
 * heading). Run before trusting any deploy, local or production:
 *
 *   npm run test:smoke                          # against localhost:3000
 *   BASE_URL=https://elitetech-delivery.vercel.app npm run test:smoke
 */

const routes = [
  "/",
  "/services",
  "/about",
  "/insights",
  "/insights/what-makes-a-good-business-website-in-2026",
  "/insights/where-ai-can-genuinely-help-a-small-business",
  "/insights/why-digital-projects-struggle-and-how-better-delivery-helps",
  "/contact",
  "/privacy",
  "/terms",
];

// Noise that's expected and not a real failure.
const IGNORED_CONSOLE_PATTERNS = [/hmr/i, /websocket/i, /webpack-hmr/i];

for (const route of routes) {
  test(`${route} — loads clean, every image decodes, no console errors`, async ({ page }) => {
    const consoleErrors: string[] = [];
    page.on("console", (msg) => {
      if (msg.type() !== "error") return;
      const text = msg.text();
      if (IGNORED_CONSOLE_PATTERNS.some((p) => p.test(text))) return;
      consoleErrors.push(text);
    });

    const pageErrors: string[] = [];
    page.on("pageerror", (err) => pageErrors.push(err.message));

    const response = await page.goto(route, { waitUntil: "networkidle" });
    expect(response?.status(), `${route} should return 200`).toBe(200);

    // Every <img> on the page must have actually decoded — this is the
    // exact class of failure a plain HTTP status check misses (the page
    // loads fine, one image inside it silently doesn't).
    const images = page.locator("img");
    const count = await images.count();
    for (let i = 0; i < count; i++) {
      const img = images.nth(i);
      const naturalWidth = await img.evaluate((el: HTMLImageElement) => el.naturalWidth);
      const src = await img.getAttribute("src");
      expect(naturalWidth, `image did not load on ${route}: ${src}`).toBeGreaterThan(0);
    }

    expect(pageErrors, `uncaught JS errors on ${route}`).toEqual([]);
    expect(consoleErrors, `console errors on ${route}`).toEqual([]);
  });
}

test("unknown route returns a real 404, not a silent 200", async ({ page }) => {
  const response = await page.goto("/this-page-does-not-exist", { waitUntil: "networkidle" });
  expect(response?.status()).toBe(404);
});

// The scroll-reveal animation hides its content until JavaScript reveals it.
// If that script never runs, the content must not stay hidden — otherwise
// whole sections of the homepage are invisible to anyone with JavaScript
// blocked or broken, which is exactly how this regressed unnoticed before.
test("revealed content is still visible with JavaScript disabled", async ({ browser }) => {
  const context = await browser.newContext({ javaScriptEnabled: false });
  const page = await context.newPage();
  await page.goto("/");

  const opacities = await page.$$eval(".reveal", (els) =>
    els.map((el) => getComputedStyle(el).opacity)
  );
  const hidden = opacities.filter((o) => Number(o) < 0.9).length;

  await context.close();
  expect(
    hidden,
    `${hidden} of ${opacities.length} reveal elements are invisible without JavaScript`
  ).toBe(0);
});
