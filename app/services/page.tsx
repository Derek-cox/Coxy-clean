import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services & Pricing | Coxy Clean",
  description:
    "Airbnb turnover, residential, commercial, and move-in/move-out cleaning in State College, PA. Custom quotes based on your space.",
};

const services = [
  {
    name: "Airbnb Turnover Cleaning",
    description:
      "Fast, reliable cleans between guest stays so your listing is spotless and photo-ready for the next check-in.",
    includes: [
      "Full clean of all rooms & bathrooms",
      "Fresh linens & towel restaging",
      "Restocking checklist (supplies, toiletries)",
      "Trash removal & quick-turn scheduling",
    ],
  },
  {
    name: "Residential Cleaning",
    description:
      "One-time deep cleans or recurring weekly, biweekly, and monthly service for homes across State College.",
    includes: [
      "Kitchens, bathrooms, bedrooms & living areas",
      "Dusting, vacuuming & mopping",
      "Recurring plans available",
      "Custom checklist for your home",
    ],
  },
  {
    name: "Commercial Cleaning",
    description:
      "Scheduled cleaning for offices, retail spaces, and small businesses, before or after hours to fit your operations.",
    includes: [
      "Flexible daily, weekly, or monthly plans",
      "Common areas, restrooms & workspaces",
      "Trash & recycling handling",
      "Reliable, consistent cleaning team",
    ],
  },
];

const moveCleanIncluded = [
  "Baseboards, ceilings, and blinds dusted",
  "Light fixtures and ceiling fans cleaned",
  "Full bathroom cleaning",
  "Kitchen counters, inside/outside cabinets, outside of appliances",
  "Under appliances (if movable)",
  "Carpets vacuumed",
  "Hard surface floors vacuumed and mopped",
  "Window sills, frames, switch plates, doors and door frames wiped",
];

const moveCleanAddOns = [
  "Inside of appliances",
  "Windows",
  "Unfinished area sweep",
  "Garage floor sweep and dust",
];

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="currentColor">
      <path
        fillRule="evenodd"
        d="M16.7 5.3a1 1 0 010 1.4l-7.4 7.4a1 1 0 01-1.4 0L3.3 9.5a1 1 0 111.4-1.4l3.6 3.6 6.7-6.7a1 1 0 011.4 0z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function PlusIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="currentColor">
      <path d="M10 4a1 1 0 011 1v4h4a1 1 0 110 2h-4v4a1 1 0 11-2 0v-4H5a1 1 0 110-2h4V5a1 1 0 011-1z" />
    </svg>
  );
}

export default function ServicesPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-20">
      <div className="max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight text-slate-900">
          Services &amp; Pricing
        </h1>
        <p className="mt-4 text-lg text-slate-600">
          Every space is different, so every quote is custom. Reach out and
          we&apos;ll put together a price based on your space and what you
          need done.
        </p>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {services.map((service) => (
          <div
            key={service.name}
            className="flex flex-col rounded-2xl border border-slate-200 p-8"
          >
            <h2 className="text-xl font-semibold text-slate-900">
              {service.name}
            </h2>
            <p className="mt-3 text-sm font-semibold text-brand-600">
              Custom quote based on your space
            </p>
            <p className="mt-4 text-sm text-slate-600">{service.description}</p>
            <ul className="mt-6 space-y-2 text-sm text-slate-600">
              {service.includes.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <CheckIcon className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand-600" />
                  {item}
                </li>
              ))}
            </ul>
            <Link
              href="/contact"
              className="mt-8 inline-flex w-fit items-center rounded-full bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-700"
            >
              Get a Quote
            </Link>
          </div>
        ))}
      </div>

      <div className="mt-16 rounded-3xl border border-slate-200 bg-slate-50 p-8 sm:p-10">
        <div className="flex flex-wrap items-start justify-between gap-6">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-slate-900">
              Move-In / Move-Out / First-Time Deep Clean
            </h2>
            <p className="mt-3 max-w-2xl text-slate-600">
              A thorough, top-to-bottom deep clean for tenants, landlords,
              students, and homeowners moving in or out of a property — or
              anyone booking us for the first time.
            </p>
          </div>
          <div className="rounded-2xl bg-white px-6 py-4 shadow-sm ring-1 ring-slate-200">
            <p className="text-lg font-bold text-brand-600">
              Estimated $0.15&ndash;$0.30 per sq ft
            </p>
            <p className="mt-1 text-xs text-slate-500">
              Final quote depends on condition and scope
            </p>
          </div>
        </div>

        <div className="mt-8 grid gap-8 sm:grid-cols-2">
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-900">
              Included
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-slate-600">
              {moveCleanIncluded.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <CheckIcon className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand-600" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-900">
              Available as Add-Ons (extra charge)
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-slate-600">
              {moveCleanAddOns.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <PlusIcon className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent-600" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Link
          href="/contact"
          className="mt-8 inline-flex w-fit items-center rounded-full bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-700"
        >
          Get a Quote
        </Link>
      </div>

      <p className="mt-10 text-sm text-slate-500">
        All pricing is customized to your space and needs. Contact us for an
        exact quote — most requests get a response within one business day.
      </p>
    </div>
  );
}
