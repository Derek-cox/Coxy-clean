# Coxy Clean

Marketing site for Coxy Clean, a cleaning business in State College, PA. Built with Next.js (App Router), TypeScript, and Tailwind CSS.

## Pages

- `/` — Home: hero, value props, services preview, CTA
- `/services` — Services & starting pricing (Airbnb turnover, residential, commercial, move-out)
- `/about` — About / why choose us
- `/contact` — Contact form
- `/hiring` — We're hiring page with an application form

## Getting started locally

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

## Before you launch

The contact and application forms post to [Formspree](https://formspree.io) (a free service for handling form submissions on static/serverless sites — no backend needed). You need to point them at your own form:

1. Create a free account at [formspree.io](https://formspree.io).
2. Create two forms: one for general contact, one for job applications.
3. Copy each form's endpoint (`https://formspree.io/f/xxxxxxxx`).
4. Paste them into:
   - `components/ContactForm.tsx` (`FORM_ENDPOINT`)
   - `components/ApplicationForm.tsx` (`FORM_ENDPOINT`)

Also update the placeholder phone number, email addresses, and hours in:

- `components/Navbar.tsx`
- `components/Footer.tsx`
- `app/contact/page.tsx`
- `app/hiring/page.tsx`

## Deploying to Vercel

This is a standard Next.js app, so Vercel will detect and build it automatically — no extra config needed.

**Option A — Vercel CLI**

```bash
npm install -g vercel
vercel
```

Follow the prompts to link/create a project, then run `vercel --prod` to deploy to production.

**Option B — GitHub + Vercel dashboard**

1. Push this project to a GitHub repository.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repository.
3. Vercel auto-detects the Next.js framework, build command (`next build`), and output — just click **Deploy**.
4. Add a custom domain under Project Settings → Domains once it's live.

## Tech stack

- [Next.js 14](https://nextjs.org) (App Router)
- [TypeScript](https://www.typescriptlang.org)
- [Tailwind CSS](https://tailwindcss.com)
