import Link from "next/link";
import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import {
  BuildingIcon,
  HomeHeartIcon,
  MopBucketIcon,
  SparkleChecklistIcon,
} from "@/components/icons";

export const metadata: Metadata = {
  title: "Services & Pricing | Coxy Clean",
  description:
    "Airbnb turnover, residential, commercial, and move-in/move-out cleaning in State College, PA. Custom quotes based on your space.",
};

const services = [
  {
    name: "Airbnb Turnover Cleaning",
    icon: MopBucketIcon,
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
    icon: HomeHeartIcon,
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
    icon: BuildingIcon,
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
      <Reveal className="relative max-w-2xl">
        <div
          aria-hidden="true"
          className="absolute -left-10 -top-10 -z-10 h-40 w-40 rounded-full bg-accent-300 opacity-20 blur-3xl"
        />
        <h1 className="font-display text-5xl font-semibold tracking-tight text-slate-900 sm:text-6xl">
          Services &amp; Pricing
        </h1>
        <p className="mt-5 text-lg text-slate-600">
          Every space is different, so every quote is custom. Reach out and
          we&apos;ll put together a price based on your space and what you
          need done.
        </p>
      </Reveal>

      <div className="relative mt-14 overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-brand-800 via-brand-700 to-brand-600 p-6 shadow-glow-brand sm:p-10 md:p-14">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-accent-400/10 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-16 -left-16 h-56 w-56 rounded-full bg-white/5 blur-3xl"
        />

        <div className="relative grid gap-6 md:grid-cols-3">
          {services.map((service, i) => (
            <Reveal key={service.name} delay={i * 75}>
              <div className="group flex h-full flex-col rounded-2xl border border-white/15 bg-white/10 p-8 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-white/25 hover:bg-white/[0.14] hover:shadow-glow-green hover:backdrop-blur-lg">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/15 text-accent-300 transition-colors duration-300 group-hover:bg-white/25 group-hover:text-white">
                  <service.icon className="h-6 w-6" />
                </div>
                <h2 className="mt-4 font-display text-xl font-semibold text-white">
                  {service.name}
                </h2>
                <p className="mt-2 text-sm font-semibold text-accent-300">
                  Custom quote based on your space
                </p>
                <p className="mt-4 text-sm text-white/70">{service.description}</p>
                <ul className="mt-6 space-y-2 text-sm text-white/70">
                  {service.includes.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <CheckIcon className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent-300" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className="btn-shine mt-8 inline-flex w-fit items-center rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-brand-700 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-brand-50 hover:shadow-glow-accent active:translate-y-0"
                >
                  Get a Quote
                </Link>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={150} className="relative mt-10">
          <div className="rounded-3xl border border-white/15 bg-white/10 p-8 backdrop-blur-md sm:p-10">
            <div className="flex flex-wrap items-start justify-between gap-6">
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/15 text-accent-300">
                  <SparkleChecklistIcon className="h-6 w-6" />
                </div>
                <h2 className="mt-4 font-display text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                  Move-In / Move-Out / First-Time Deep Clean
                </h2>
                <p className="mt-3 max-w-2xl text-white/70">
                  A thorough, top-to-bottom deep clean for tenants, landlords,
                  students, and homeowners moving in or out of a property —
                  or anyone booking us for the first time.
                </p>
              </div>
              <div className="rounded-2xl bg-white/95 px-6 py-4 shadow-lg">
                <p className="font-display text-lg font-semibold text-brand-700">
                  Estimated $0.15&ndash;$0.30 per sq ft
                </p>
                <p className="mt-1 text-xs text-slate-500">
                  Final quote depends on condition and scope
                </p>
              </div>
            </div>

            <div className="mt-8 grid gap-8 sm:grid-cols-2">
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wide text-white/90">
                  Included
                </h3>
                <ul className="mt-4 space-y-2 text-sm text-white/70">
                  {moveCleanIncluded.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <CheckIcon className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent-300" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wide text-white/90">
                  Available as Add-Ons (extra charge)
                </h3>
                <ul className="mt-4 space-y-2 text-sm text-white/70">
                  {moveCleanAddOns.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <PlusIcon className="mt-0.5 h-4 w-4 flex-shrink-0 text-white/50" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <Link
              href="/contact"
              className="btn-shine mt-8 inline-flex w-fit items-center rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-brand-700 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-brand-50 hover:shadow-glow-accent active:translate-y-0"
            >
              Get a Quote
            </Link>
          </div>
        </Reveal>
      </div>

      <p className="mt-10 text-sm text-slate-500">
        All pricing is customized to your space and needs. Contact us for an
        exact quote — most requests get a response within one business day.
      </p>
    </div>
  );
}
