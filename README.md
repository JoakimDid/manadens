# HireWise AI — Landing Page (Next.js + Tailwind)

A modern, accessible landing page for an AI-driven recruiting tool. It includes:
- Hero, features, logo cloud
- Pricing tiers
- Testimonials
- FAQ
- Call-to-action with lead form
- SEO (Open Graph, Twitter, JSON-LD Product & FAQ)
- API route posting leads to an optional webhook (Slack/Discord/your backend)

## 1) Quickstart (Local)

```bash
pnpm i  # or: npm install
pnpm dev  # or: npm run dev
```

Open http://localhost:3000

## 2) Configure your brand/content

Edit `lib/site.ts` to change your:
- `name`, `tagline`, `domain`, `contactEmail`
- `tiers` (pricing copy & features)
- `faqs`
- `logos` (the text-only logos in the logo cloud)

> Tip: search-replace "HireWise AI" to your product name.

## 3) Deploy to Vercel

**Option A: GitHub + Vercel Dashboard**
1. Create a new GitHub repo and push this project.
2. In Vercel, **New Project → Import Git Repository**.
3. Framework preset: **Next.js**. Build/Output settings: keep defaults.
4. (Optional) Set environment variable `LEAD_WEBHOOK_URL` (see below).
5. Deploy.

**Option B: Vercel CLI**
```bash
npm i -g vercel
vercel
vercel --prod
```

## 4) Connect your domain

In Vercel: **Settings → Domains → Add** your domain (e.g., `yourdomain.com`).
- If the domain is with Vercel DNS, click "Add".
- If domain is elsewhere, add the provided **A**/**CNAME** records at your registrar.

Update `lib/site.ts` with your real domain (no protocol) so OG/meta URLs are correct.

## 5) Lead form → webhook (Slack/Discord/Backend)

This template posts form data to `/api/lead` (Edge Runtime). If you set a `LEAD_WEBHOOK_URL` env var, the API will forward JSON to that URL.

- **Slack**: create an **Incoming Webhook** URL and set it as `LEAD_WEBHOOK_URL`.
- **Discord**: use a channel webhook URL.
- **Custom backend**: point to your endpoint that accepts JSON `POST`.

No webhook? The form will still succeed locally and in prod (it just won’t forward).

## 6) Optional integrations

- **Analytics**: add Vercel Analytics or your provider of choice.
- **Email**: swap the webhook for a transactional email (e.g., Resend) in `app/api/lead/route.ts`.
- **Payments**: wire Stripe price IDs to tiers if you want checkout.

## 7) File structure

```
app/
  api/lead/route.ts     # Edge API to forward leads
  layout.tsx            # App layout + metadata
  page.tsx              # Landing page
  globals.css           # Tailwind + app styles
  sitemap.ts            # SEO sitemap
  robots.txt/route.ts   # Robots + sitemap pointer
components/
  *.tsx                 # UI sections
lib/
  site.ts               # Brand copy + pricing + FAQs
public/
  logo.svg, favicon.svg, og.png
```

## 8) Accessibility & performance

- Semantic HTML, labeled inputs, focus styles
- Mobile-first responsive Tailwind
- No external images required; ships with placeholder assets
- JSON-LD for Product & FAQ to help rich results

## 9) Customization ideas

- Replace the logo and OG image in `/public`
- Tweak colors in `tailwind.config.ts` (`brand` scale)
- Add a blog (`app/blog`) or docs as you grow
- Add auth and a dashboard when ready

---

**License**: MIT — use freely.
