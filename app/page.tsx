import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import SectionWave from "@/components/SectionWave";
import TricolorRibbon from "@/components/TricolorRibbon";
import {
  BuildingIcon,
  ChatIcon,
  HandshakeIcon,
  HomeHeartIcon,
  MopBucketIcon,
  ShieldIcon,
  SparkleChecklistIcon,
  SuitcaseIcon,
} from "@/components/icons";

const valueProps = [
  {
    title: "Family-Owned & Local",
    description:
      "Family-owned and locally operated right here in State College.",
    icon: HomeHeartIcon,
  },
  {
    title: "Fully Insured",
    description: "We're fully insured for your peace of mind.",
    icon: ShieldIcon,
  },
  {
    title: "Trustworthy & Honest",
    description: "Honest, trustworthy service you can count on, every visit.",
    icon: HandshakeIcon,
  },
  {
    title: "Direct Line to the Owner",
    description:
      "Talk directly with the owner — clear, direct communication, no middlemen.",
    icon: ChatIcon,
  },
  {
    title: "Detail-Driven Process",
    description:
      "A thorough, detail-driven cleaning process for every job, every time.",
    icon: SparkleChecklistIcon,
  },
];

const services = [
  {
    title: "Airbnb Turnover",
    description:
      "Fast, reliable turnovers between guests so your listing stays five-star ready.",
    href: "/services",
    icon: MopBucketIcon,
    big: true,
  },
  {
    title: "Residential Cleaning",
    description: "Recurring or one-time home cleaning tailored to your household.",
    href: "/services",
    icon: HomeHeartIcon,
    big: false,
  },
  {
    title: "Commercial Cleaning",
    description: "Offices and small businesses across State College, cleaned on your schedule.",
    href: "/services",
    icon: BuildingIcon,
    big: false,
  },
  {
    title: "Move-Out Cleaning",
    description: "Deep, deposit-ready cleans for tenants, landlords, and students.",
    href: "/services",
    icon: SuitcaseIcon,
    big: false,
  },
];

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-x-hidden bg-slate-50">
        <div className="mx-auto grid max-w-6xl items-center gap-16 px-6 pb-24 pt-16 md:grid-cols-2 md:pb-32 md:pt-20">
          <Reveal>
            <span className="inline-flex items-center rounded-full bg-brand-100 px-4 py-1 text-sm font-medium text-brand-700">
              Serving State College, PA &amp; the surrounding area
            </span>
            <h1 className="mt-6 font-display text-6xl font-semibold leading-[1.02] tracking-tight text-slate-900 sm:text-7xl lg:text-[5rem]">
              A spotless
              <br />
              space, without
              <br />
              lifting a finger.
            </h1>
            <p className="mt-7 max-w-md text-lg text-slate-600">
              Coxy Clean brings reliable, detail-driven cleaning to homes,
              rentals, and businesses throughout State College. Book in
              minutes and get your time back.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="rounded-full bg-brand-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-brand-700 hover:shadow-lg active:translate-y-0"
              >
                Get a Free Quote
              </Link>
              <Link
                href="/services"
                className="rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition-all duration-200 hover:-translate-y-0.5 hover:border-accent-600 hover:text-accent-600 hover:shadow-lg active:translate-y-0"
              >
                View Services
              </Link>
            </div>
            <div className="mt-10 flex items-center gap-6 text-sm text-slate-500">
              <div>
                <p className="font-display text-2xl font-semibold text-slate-900">
                  Family-Owned
                </p>
                <p>Locally operated in State College</p>
              </div>
              <div className="h-10 w-px bg-slate-200" />
              <div>
                <p className="font-display text-2xl font-semibold text-slate-900">
                  Fully Insured
                </p>
                <p>For your peace of mind</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={150} className="relative">
            <div className="relative mx-auto w-full max-w-sm md:mx-0 md:ml-auto md:w-[112%]">
              <div
                aria-hidden="true"
                className="absolute inset-6 -z-10 rotate-3 rounded-[2.5rem] bg-gradient-to-br from-brand-50 via-white to-accent-50 md:inset-10"
              />
              <div className="relative aspect-[639/893] w-full -rotate-2">
                <Image
                  src="/mascot.png"
                  alt="Coxy Clean mascot illustration — an Italian-flag-themed cleaner holding a mop and bucket"
                  fill
                  sizes="(min-width: 768px) 480px, 384px"
                  className="object-contain object-bottom drop-shadow-2xl motion-safe:animate-float"
                  priority
                />
              </div>
              <TricolorRibbon className="-right-6 top-2 sm:-right-10" />
            </div>
            <div className="absolute -bottom-2 left-0 w-56 rounded-2xl bg-white p-5 shadow-lg ring-1 ring-slate-100 sm:-left-4">
              <p className="text-sm font-semibold text-slate-900">
                &ldquo;Coxy Clean turns our Airbnb around every single time,
                spotless.&rdquo;
              </p>
              <p className="mt-2 text-xs text-slate-500">
                — Local State College host
              </p>
            </div>
          </Reveal>
        </div>

        <SectionWave fill="#ffffff" />
      </section>

      <section className="relative mx-auto max-w-6xl px-6 py-24">
        <Reveal className="text-center">
          <h2 className="font-display text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
            Why State College trusts Coxy Clean
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-slate-600">
            We treat every job — from a single studio to a full commercial
            space — with the same care and attention to detail.
          </p>
        </Reveal>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {valueProps.map((item, i) => (
            <Reveal key={item.title} delay={i * 75}>
              <div className="group h-full rounded-2xl border border-slate-200 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-lg">
                <item.icon className="h-9 w-9 text-brand-600 transition-transform duration-300 group-hover:scale-110" />
                <h3 className="mt-4 font-display text-lg font-semibold text-slate-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600">{item.description}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <SectionWave fill="#f8fafc" />
      </section>

      <section className="relative bg-slate-50 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="font-display text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
                What we clean
              </h2>
              <p className="mt-4 max-w-xl text-slate-600">
                From Airbnb turnovers to full commercial spaces, here&apos;s
                how we help around State College.
              </p>
            </div>
            <Link
              href="/services"
              className="text-sm font-semibold text-brand-600 transition-colors hover:text-brand-700"
            >
              See all services &amp; pricing &rarr;
            </Link>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {services.map((service, i) => (
              <Reveal
                key={service.title}
                delay={i * 75}
                className={service.big ? "md:col-span-2" : "md:col-span-1"}
              >
                <Link
                  href={service.href}
                  className={`group flex h-full flex-col justify-between rounded-2xl bg-white p-7 shadow-sm ring-1 ring-slate-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:ring-brand-200 ${
                    service.big ? "sm:flex-row sm:items-center sm:gap-8" : ""
                  }`}
                >
                  <div>
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600 transition-colors duration-300 group-hover:bg-brand-600 group-hover:text-white">
                      <service.icon className="h-6 w-6" />
                    </div>
                    <h3 className="mt-4 font-display text-xl font-semibold text-slate-900">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-sm text-slate-600">
                      {service.description}
                    </p>
                  </div>
                  <span
                    className={`mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-600 transition-transform duration-300 group-hover:translate-x-1 ${
                      service.big ? "sm:mt-0 sm:flex-shrink-0" : ""
                    }`}
                  >
                    Learn more &rarr;
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>

        <SectionWave fill="#ffffff" />
      </section>

      <section className="relative mx-auto max-w-6xl px-6 py-24">
        <Reveal>
          <div className="relative flex flex-col items-center gap-6 overflow-hidden rounded-3xl bg-accent-600 px-8 py-14 text-center sm:px-16">
            <div
              aria-hidden="true"
              className="absolute -right-10 -top-10 h-40 w-40 rotate-12 rounded-3xl bg-white/10"
            />
            <div
              aria-hidden="true"
              className="absolute -bottom-12 -left-12 h-40 w-40 -rotate-12 rounded-3xl bg-brand-500/20"
            />
            <h2 className="relative font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Ready for a cleaner space?
            </h2>
            <p className="relative max-w-xl text-accent-50">
              Get a free, no-obligation quote for your home, rental, or
              business in State College — usually within one business day.
            </p>
            <Link
              href="/contact"
              className="relative rounded-full bg-white px-6 py-3 text-sm font-semibold text-accent-700 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-accent-50 hover:shadow-lg active:translate-y-0"
            >
              Request Your Free Quote
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
