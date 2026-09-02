import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services & Pricing | Coxy Clean",
  description:
    "Airbnb turnover, residential, commercial, and move-out cleaning in State College, PA. See our simple, transparent starting pricing.",
};

const services = [
  {
    name: "Airbnb Turnover Cleaning",
    price: "From $75",
    unit: "per turnover",
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
    price: "From $120",
    unit: "per visit",
    description:
      "One-time deep cleans or recurring weekly, biweekly, and monthly service for homes across State College.",
    includes: [
      "Kitchens, bathrooms, bedrooms & living areas",
      "Dusting, vacuuming & mopping",
      "Recurring plans with discounted rates",
      "Custom checklist for your home",
    ],
  },
  {
    name: "Commercial Cleaning",
    price: "Custom quote",
    unit: "based on square footage",
    description:
      "Scheduled cleaning for offices, retail spaces, and small businesses, before or after hours to fit your operations.",
    includes: [
      "Flexible daily, weekly, or monthly plans",
      "Common areas, restrooms & workspaces",
      "Trash & recycling handling",
      "Consistent, vetted cleaning team",
    ],
  },
  {
    name: "Move-Out / Move-In Cleaning",
    price: "From $200",
    unit: "per property",
    description:
      "Deep, deposit-ready cleaning for tenants, landlords, and students moving in or out of a property.",
    includes: [
      "Inside cabinets, closets & appliances",
      "Baseboards, windowsills & fixtures",
      "Deep bathroom & kitchen sanitizing",
      "Landlord walkthrough ready",
    ],
  },
];

export default function ServicesPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-20">
      <div className="max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight text-slate-900">
          Services &amp; Pricing
        </h1>
        <p className="mt-4 text-lg text-slate-600">
          Simple, transparent starting prices for cleaning across State
          College, PA. Every quote is customized to your space — reach out
          for an exact price.
        </p>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {services.map((service) => (
          <div
            key={service.name}
            className="flex flex-col rounded-2xl border border-slate-200 p-8"
          >
            <div className="flex items-baseline justify-between gap-4">
              <h2 className="text-xl font-semibold text-slate-900">
                {service.name}
              </h2>
            </div>
            <div className="mt-2 flex items-baseline gap-2">
              <span className="text-2xl font-bold text-brand-600">
                {service.price}
              </span>
              <span className="text-sm text-slate-500">{service.unit}</span>
            </div>
            <p className="mt-4 text-sm text-slate-600">{service.description}</p>
            <ul className="mt-6 space-y-2 text-sm text-slate-600">
              {service.includes.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <svg
                    className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand-600"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.7 5.3a1 1 0 010 1.4l-7.4 7.4a1 1 0 01-1.4 0L3.3 9.5a1 1 0 111.4-1.4l3.6 3.6 6.7-6.7a1 1 0 011.4 0z"
                      clipRule="evenodd"
                    />
                  </svg>
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

      <p className="mt-10 text-sm text-slate-500">
        Pricing above reflects typical starting rates for the State College
        area and varies by square footage, condition, and add-ons. Contact us
        for an exact quote — most requests get a response within one business
        day.
      </p>
    </div>
  );
}
