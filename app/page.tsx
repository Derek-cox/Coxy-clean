import Link from "next/link";

const valueProps = [
  {
    title: "Locally Owned & Trusted",
    description:
      "Based right here in State College, we know the area and treat every home like a neighbor's.",
  },
  {
    title: "Vetted & Insured Team",
    description:
      "Every cleaner is background-checked, trained, and fully insured for your peace of mind.",
  },
  {
    title: "Flexible Scheduling",
    description:
      "One-time, weekly, or Airbnb turnovers between guests — we work around your calendar.",
  },
  {
    title: "Satisfaction Guaranteed",
    description:
      "Not happy with a spot we missed? Tell us within 24 hours and we'll make it right, free.",
  },
];

const services = [
  {
    title: "Airbnb Turnover",
    description: "Fast, reliable turnovers between guests so your listing stays five-star ready.",
    href: "/services",
  },
  {
    title: "Residential Cleaning",
    description: "Recurring or one-time home cleaning tailored to your household.",
    href: "/services",
  },
  {
    title: "Commercial Cleaning",
    description: "Offices and small businesses across State College, cleaned on your schedule.",
    href: "/services",
  },
  {
    title: "Move-Out Cleaning",
    description: "Deep, deposit-ready cleans for tenants, landlords, and students.",
    href: "/services",
  },
];

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-slate-50">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 md:grid-cols-2 md:py-28">
          <div>
            <span className="inline-flex items-center rounded-full bg-brand-100 px-4 py-1 text-sm font-medium text-brand-700">
              Serving State College, PA & the surrounding area
            </span>
            <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              A spotless space, without lifting a finger.
            </h1>
            <p className="mt-6 text-lg text-slate-600">
              Coxy Clean brings reliable, detail-driven cleaning to homes,
              rentals, and businesses throughout State College. Book in
              minutes and get your time back.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="rounded-full bg-brand-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-700"
              >
                Get a Free Quote
              </Link>
              <Link
                href="/services"
                className="rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-brand-600 hover:text-brand-600"
              >
                View Services
              </Link>
            </div>
            <div className="mt-10 flex items-center gap-6 text-sm text-slate-500">
              <div>
                <p className="text-2xl font-bold text-slate-900">100%</p>
                <p>Satisfaction guaranteed</p>
              </div>
              <div className="h-10 w-px bg-slate-200" />
              <div>
                <p className="text-2xl font-bold text-slate-900">Insured</p>
                <p>&amp; background-checked team</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/5] w-full rounded-3xl bg-gradient-to-br from-brand-400 to-brand-700 shadow-xl" />
            <div className="absolute -bottom-6 -left-6 w-56 rounded-2xl bg-white p-5 shadow-lg">
              <p className="text-sm font-semibold text-slate-900">
                &ldquo;Coxy Clean turns our Airbnb around every single time,
                spotless.&rdquo;
              </p>
              <p className="mt-2 text-xs text-slate-500">
                — Local State College host
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">
            Why State College trusts Coxy Clean
          </h2>
          <p className="mt-4 text-slate-600">
            We treat every job — from a single studio to a full commercial
            space — with the same care and attention to detail.
          </p>
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {valueProps.map((item) => (
            <div key={item.title} className="rounded-2xl border border-slate-200 p-6">
              <h3 className="font-semibold text-slate-900">{item.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-slate-900">
                What we clean
              </h2>
              <p className="mt-4 max-w-xl text-slate-600">
                From Airbnb turnovers to full commercial spaces, here&apos;s
                how we help around State College.
              </p>
            </div>
            <Link
              href="/services"
              className="text-sm font-semibold text-brand-600 hover:text-brand-700"
            >
              See all services &amp; pricing &rarr;
            </Link>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 transition hover:shadow-md"
              >
                <h3 className="font-semibold text-slate-900">{service.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{service.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="flex flex-col items-center gap-6 rounded-3xl bg-brand-600 px-8 py-14 text-center sm:px-16">
          <h2 className="text-3xl font-bold tracking-tight text-white">
            Ready for a cleaner space?
          </h2>
          <p className="max-w-xl text-brand-50">
            Get a free, no-obligation quote for your home, rental, or
            business in State College — usually within one business day.
          </p>
          <Link
            href="/contact"
            className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-brand-700 shadow-sm transition hover:bg-brand-50"
          >
            Request Your Free Quote
          </Link>
        </div>
      </section>
    </>
  );
}
