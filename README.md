# CoxyClean

Marketing site for CoxyClean, a cleaning business in State College, PA. Built with Next.js (App Router), TypeScript, and Tailwind CSS.

## Pages

- `/` — Home: hero, value props, How It Works, services, work preview, reviews, CTA
- `/services` — Services & starting pricing (Airbnb turnover, residential, commercial, move-out)
- `/gallery` — Our Work: category tabs, before/after sliders, lightbox
- `/about` — About / why choose us
- `/contact` — Contact form
- `/hiring` — We're hiring page with an application form

## Adding your own content

Two files hold all the content you'll edit regularly. You should not need to
touch any component code.

### Photos — `data/gallery.ts`

1. Drop image files into `public/gallery/` (see the README in that folder).
2. Add one entry per photo to the `galleryItems` array. Commented-out
   examples are in the file.

Before/after pairs get a drag-to-compare slider; single photos get a plain
tile. Both open in the lightbox. Any category with no photos automatically
shows "Photo coming soon" placeholders — no stock imagery anywhere.

### Reviews — `data/reviews.ts`

Add entries to the `reviews` array. Each review shows a first name + last
initial, a star rating, the quote, and a service tag. The section looks
right with as few as three; until you add any, it shows a "Reviews coming
soon" state rather than invented testimonials.

### Colors — `tailwind.config.ts`

The site follows the logo's Italian flag palette. Two token scales carry
it: `brand` is the green (#008C45 at `brand-600`) and takes the primary
role — buttons, links, icon accents, dark sections, heading ink. `accent`
is the red (#CD212A at `accent-600`) and is deliberately used in small
doses — eyebrow kickers, badges, stars, and the CTA on green panels.
White is the third flag color and does the work of the neutral ground.

Red is kept sparse on purpose: green and red in equal amounts reads as
Christmas, so large fields stay green or white and red supplies the
punctuation. Changing the palette means editing `tailwind.config.ts` and
nothing else.

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
