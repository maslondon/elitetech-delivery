# Elite Tech Delivery — V1 Handover

## What this is

A V1 marketing website for Elite Tech Delivery Limited, built with Next.js 16
(App Router), TypeScript and Tailwind CSS v4. Six pages (Home, Services,
About, Insights + 3 articles, Contact) plus Privacy/Terms placeholders,
matching the brand brief: ink `#0B0B0C` / ivory `#F4F1EA` / bronze `#B08D57`
/ stone `#5F5E5A`, Inter typeface, no gradients or glassmorphism.

## Running it locally

Node.js wasn't installed on this machine, so it was set up via
[nvm](https://github.com/nvm-sh/nvm) (user-local, no sudo, easily removed).
If you're on a fresh machine:

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash
nvm install --lts
```

Then, from the project folder:

```bash
npm install
npm run dev
```

Visit `http://localhost:3000`. `npm run build` produces a production build;
`npm run lint` runs ESLint (both currently pass clean).

## Deployment

**Recommended: Vercel.** It's built by the Next.js team, the free tier
comfortably covers a site this size, and deployment is push-to-deploy from
git with zero server config. Alternative: Netlify, or any Node host that
supports Next.js's standard build output — just avoid static-export-only
hosts, since the contact form needs a server-side API route.

Steps:
1. Push this repo to GitHub (a local git repo with an initial commit has
   already been created — nothing has been pushed anywhere).
2. Import the repo in Vercel, connect the `elitetechdelivery.co.uk` domain
   in Vercel's domain settings, and update the domain's DNS as instructed.
3. No environment variables are required for V1 (see below).

## Environment variables

`NEXT_PUBLIC_GA_MEASUREMENT_ID` — optional. Set this to your GA4 Measurement
ID (looks like `G-XXXXXXXXXX`) to enable Google Analytics. Until it's set,
[GoogleAnalytics](src/components/GoogleAnalytics.tsx) renders nothing —
completely inert. Once set, GA still won't load until a visitor explicitly
accepts the cookie banner
([CookieConsent](src/components/CookieConsent.tsx)) — this is required
under UK PECR, since analytics cookies aren't "strictly necessary." Add it
to `.env.local` for local development (already git-ignored) and as an
environment variable in Vercel's project settings for production.

If you don't have a GA4 property yet: analytics.google.com → Admin → Create
Property → add a "Web" data stream for elitetechdelivery.co.uk → the
Measurement ID is shown on that data stream's page.

`NEXT_PUBLIC_SANITY_PROJECT_ID` and `NEXT_PUBLIC_SANITY_DATASET` — optional,
enable the Sanity CMS. See the "CMS — Sanity" section below for the full
setup. Already set in `.env.local` for local dev; still needs adding to
Vercel's environment variables for the live site.

Nothing else is required to build or run V1. The contact form works end-to-end
today — it validates input and logs the enquiry server-side
([src/app/api/contact/route.ts](src/app/api/contact/route.ts)) — but nothing
currently emails you when someone submits it.

**Before launch, wire up real email delivery.** Recommended: **Resend**
(resend.com) — simple API, generous free tier, well-suited to a Next.js API
route. Rough integration:

```bash
npm install resend
```

```ts
// in src/app/api/contact/route.ts, replace the console.info block with:
import { Resend } from "resend";
const resend = new Resend(process.env.RESEND_API_KEY);
await resend.emails.send({
  from: "Elite Tech Delivery <enquiries@elitetechdelivery.co.uk>",
  to: siteConfig.email,
  replyTo: email,
  subject: `New enquiry from ${name}`,
  text: `${message}\n\nCompany: ${company || "-"}\nPhone: ${phone || "-"}`,
});
```

Add `RESEND_API_KEY` as an environment variable in Vercel (or your host).
Alternatives if preferred: SendGrid, Postmark, or a plain SMTP transport via
Nodemailer.

## CMS — Sanity (built in, three steps from fully live)

Every page's copy (Home, Services, About, Insights, Contact, Footer, nav
labels, Privacy/Terms) is wired to **Sanity**, with a safe fallback: until
content actually exists in Sanity, every page silently uses the original
static copy in `src/lib/content/*` — nothing breaks if any of the steps
below haven't happened yet.

**To go fully live:**

1. **Allow this site's URLs in Sanity.** Visit `/studio` on both localhost
   and the live domain — it'll prompt to "Add CORS origin" for each. Needs
   to be done once while logged into the Sanity account that owns the
   project (Project ID `4bek2gcj`).
2. **Add the same two env vars to Vercel** (Settings → Environment
   Variables, same place as `NEXT_PUBLIC_GA_MEASUREMENT_ID`), then redeploy:
   - `NEXT_PUBLIC_SANITY_PROJECT_ID` = `4bek2gcj`
   - `NEXT_PUBLIC_SANITY_DATASET` = `production`
3. **Import today's existing copy as a starting point**, so Studio opens
   pre-populated instead of empty:
   ```bash
   npx sanity login   # one-time, opens a browser — same pattern as gh auth login
   npx sanity exec scripts/seed.ts --with-user-token
   ```
   Safe to re-run — it replaces the same fixed document IDs each time
   rather than duplicating anything.

After that, `/studio` is the editing interface — logged in with a real
Sanity account (email/Google/GitHub), not a shared password. Structural
changes (new pages, new nav items, layout) still go through code — see
`src/sanity/schemaTypes/` for exactly what's editable per page.

## Content that still needs replacing

Every placeholder is marked `[PLACEHOLDER — ...]` in the source so they're
easy to grep for (`grep -rn "PLACEHOLDER" src`):

- **About page** — founder name, professional photograph, and any named
  past organisations (only add these if accurate, and don't imply their
  endorsement).
- **Footer / site config**
  ([src/lib/site-config.ts](src/lib/site-config.ts)) — phone number (if you
  want one published), confirmed LinkedIn URL, Companies House registration
  number, registered office address.
- **Privacy Policy and Terms pages** — currently placeholder text only. See
  the legal section below.
- **Contact email** — currently `hello@elitetechdelivery.co.uk`; confirm
  this inbox exists and is monitored before launch, or change it in
  `site-config.ts`.

## Legal information still needed

- A real **Privacy Policy** covering the contact form's data collection, any
  analytics added later, retention, and UK GDPR rights. A solicitor or a
  template service (Rocket Lawyer, Seq Legal) can produce this quickly.
- **Terms & Conditions** for site use and, if relevant, service engagement
  terms.
- Companies House **registration number** and **registered office address**
  for the footer (legally required once trading as a limited company).
- Decide whether a cookie banner is needed — the site currently sets no
  cookies and uses no analytics, so none is required yet. Add one only if
  you add analytics/tracking later.

## SEO tasks remaining

- Confirm `siteConfig.url` in `site-config.ts` matches the final production
  domain (currently `https://www.elitetechdelivery.co.uk`) before launch.
- Submit the sitemap (`/sitemap.xml`, auto-generated) to Google Search
  Console and Bing Webmaster Tools once live.
- Add a real Open Graph image (currently the site relies on text metadata
  only — no `opengraph-image`). A simple branded 1200×630 image would
  improve link previews on social/Slack/etc.
- Consider adding `FAQPage` or `Article` structured data to the Insights
  articles once there's a larger library — not necessary for three launch
  articles.
- Run Lighthouse / PageSpeed Insights against the deployed site once it's
  live on real infrastructure (local dev numbers aren't representative).

## Launch checklist

- [ ] Replace all `[PLACEHOLDER]` content (see above)
- [ ] Wire up real email delivery on the contact form (Resend recommended)
- [ ] Write and publish real Privacy Policy and Terms pages
- [ ] Confirm company number, registered office, LinkedIn URL
- [ ] Point `elitetechdelivery.co.uk` DNS at the hosting provider
- [ ] Set `siteConfig.url` to the final domain
- [ ] Push to GitHub and connect to Vercel (or chosen host)
- [ ] Test the contact form on the live deployment, not just locally
- [ ] Run a full mobile/tablet/desktop pass on the live URL
- [ ] Submit sitemap to Google Search Console

## Suggested V2 improvements

- A Work / Case Studies section once there are real, nameable projects
  delivered under the Elite Tech Delivery brand (deliberately left out of
  V1 per the brief, to avoid thin or misleading placeholder case studies).
- A CMS for Insights if publishing becomes regular (see above).
- Real testimonials/client quotes once available — none exist yet, so none
  were fabricated.
- A branded Open Graph image and a proper favicon set (the current favicon
  is the Next.js default and should be replaced with an Elite Tech Delivery
  mark before launch).
- Newsletter signup on the Insights page, if content marketing becomes a
  priority.
- Light analytics (e.g. Plausible or Vercel Analytics) to see which service
  pages actually drive enquiries — add a cookie notice at the same time if
  the chosen tool needs one.

## A few decisions worth knowing about

- **One bento card is bronze, not ink-black.** The brief's colour table
  lists bronze as the "one bento card" treatment; a separate paragraph
  mentions an ink-black card as an example of inverted sections elsewhere.
  I went with bronze for the homepage bento grid (Web Applications &
  Digital Products) since it directly matches the explicit accent-colour
  instruction in the services-grid section, and verified ink-on-bronze text
  clears WCAG AA contrast (6.4:1).
- **Contrast-checked the exact hex values** as the brief asked: stone-on-
  ivory is ~5.8:1 (safe for body text), bronze-on-ivory is only ~2.7:1 (so
  bronze is used for underlines, buttons-with-ink-text, and the "DELIVERY"
  wordmark — never as body-sized text on ivory), and stone-on-ink is only
  ~3:1 (so footer/dark-section secondary text uses translucent ivory
  instead of stone).
- **Global smooth-scrolling was removed** during QA — it was found to
  conflict with automated scroll testing and, more importantly, silently
  overrides a user's OS-level "reduce motion" preference for every scroll
  action on the site, not just the deliberate fade-in effects (which
  already respect `prefers-reduced-motion` correctly).
