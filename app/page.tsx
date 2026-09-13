import Image from "next/image";
import Link from "next/link";
import HowItWorks from "@/components/HowItWorks";
import Reveal from "@/components/Reveal";
import Reviews from "@/components/Reviews";
import SectionDivider from "@/components/SectionDivider";
import { GalleryPreview } from "@/components/GalleryGrid";
import { TRUST_LINE } from "@/data/gallery";
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
    description: "Locally operated, right here in State College.",
    icon: HomeHeartIcon,
  },
  {
    title: "Fully Insured",
    description: "Fully insured for your peace of mind.",
    icon: ShieldIcon,
  },
  {
    title: "Trustworthy & Honest",
    description: "Honest, reliable service, every time.",
    icon: HandshakeIcon,
  },
  {
    title: "Direct Line to the Owner",
    description: "Talk directly with the owner — no middlemen.",
    icon: ChatIcon,
  },
  {
    title: "Detail-Driven Process",
    description: "A thorough process for every job, every time.",
    icon: SparkleChecklistIcon,
  },
];

const services = [
  {
    title: "Airbnb Turnover",
    description: "Fast turnovers so your listing stays five-star ready.",
    href: "/services",
    icon: MopBucketIcon,
  },
  {
    title: "Residential Cleaning",
    description:
      "Recurring or one-time home cleaning tailored to your household.",
    href: "/services",
    icon: HomeHeartIcon,
  },
  {
    title: "Commercial Cleaning",
    description:
      "Offices and small businesses across State College, cleaned on your schedule.",
    href: "/services",
    icon: BuildingIcon,
  },
  {
    title: "Move-Out Cleaning",
    description:
      "Deep, deposit-ready cleans for tenants, landlords, and students.",
    href: "/services",
    icon: SuitcaseIcon,
  },
];

export default function HomePage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section className="relative overflow-x-hidden bg-slate-50">
        <div
          aria-hidden="true"
          className="hero-aurora absolute inset-0 opacity-[0.13]"
        />
        <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-6 pb-28 pt-14 md:grid-cols-2 md:gap-16 md:pb-36 md:pt-20">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white/80 px-4 py-1.5 text-sm font-medium text-brand-800 backdrop-blur-sm">
              <span
                aria-hidden="true"
                className="h-1.5 w-1.5 rounded-full bg-accent-500"
              />
              Serving State College, PA &amp; the surrounding area
            </span>

            <h1 className="mt-6 font-display text-[2.5rem] font-black leading-[1.06] tracking-tight text-brand-950 sm:text-6xl sm:leading-[1.02] lg:text-[4.5rem]">
              A spotless
              <br className="hidden sm:inline" /> space, without
              <br className="hidden sm:inline" /> lifting a{" "}
              <span className="relative inline-block">
                finger.
                <span
                  aria-hidden="true"
                  className="absolute -bottom-1 left-0 h-2.5 w-full rounded-full bg-accent-300/70 sm:h-3"
                />
              </span>
            </h1>

            <p className="mt-8 max-w-md text-lg leading-relaxed text-slate-600">
              Reliable, detail-driven cleaning for homes, rentals, and
              businesses in State College.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
              <Link
                href="/contact"
                className="btn-shine rounded-full bg-brand-800 px-7 py-3.5 text-center text-sm font-bold text-white shadow-glow-brand transition-all duration-200 hover:-translate-y-0.5 hover:bg-brand-900 hover:shadow-glow-gold active:translate-y-0"
              >
                Get a Free Quote
              </Link>
              <Link
                href="/gallery"
                className="rounded-full border border-brand-200 bg-white/70 px-7 py-3.5 text-center text-sm font-bold text-brand-800 backdrop-blur-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-accent-400 hover:bg-white hover:shadow-tile active:translate-y-0"
              >
                See Our Work
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-4 text-sm text-slate-500">
              <div>
                <p className="font-display text-2xl font-black text-brand-900">
                  Family-Owned
                </p>
                <p>Locally operated in State College</p>
              </div>
              <div className="hidden h-10 w-px bg-slate-300 sm:block" />
              <div>
                <p className="font-display text-2xl font-black text-brand-900">
                  Fully Insured
                </p>
                <p>For your peace of mind</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={150} className="relative">
            <div className="relative mx-auto w-full max-w-[280px] md:mx-0 md:ml-auto md:max-w-[420px]">
              <div
                aria-hidden="true"
                className="absolute inset-0 -z-10 rounded-full bg-gradient-to-br from-brand-400 via-accent-300 to-brand-600 opacity-35 blur-3xl md:-inset-6"
              />
              <div className="relative aspect-[639/893] w-full -rotate-2">
                <Image
                  src="/mascot.png"
                  alt="CoxyClean mascot illustration — a cleaner holding a mop and bucket"
                  fill
                  sizes="(min-width: 768px) 420px, 280px"
                  quality={90}
                  className="object-contain object-bottom drop-shadow-[0_25px_35px_rgba(20,30,56,0.28)] motion-safe:animate-float"
                  priority
                />
              </div>
            </div>

            {/* Trust card — facts only, no invented testimonial. */}
            <div className="mx-auto mt-6 w-full max-w-[17rem] rounded-2xl border border-white/70 bg-white/85 p-5 shadow-lift backdrop-blur-lg sm:absolute sm:-bottom-4 sm:-left-4 sm:mt-0 sm:w-64">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent-700">
                Why book us
              </p>
              <ul className="mt-3 space-y-2 text-sm font-medium text-brand-900">
                {["Fully insured", "Free, no-pressure quotes", "Owner-operated"].map(
                  (fact) => (
                    <li key={fact} className="flex items-center gap-2">
                      <svg
                        width="15"
                        height="15"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="flex-shrink-0 text-accent-500"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.7 5.3a1 1 0 010 1.4l-7.4 7.4a1 1 0 01-1.4 0L3.3 9.5a1 1 0 111.4-1.4l3.6 3.6 6.7-6.7a1 1 0 011.4 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {fact}
                    </li>
                  )
                )}
              </ul>
            </div>
          </Reveal>
        </div>

        <SectionDivider variant="wave" fill="#ffffff" />
      </section>

      {/* ── Why us ───────────────────────────────────────────────────── */}
      <section className="relative mx-auto max-w-6xl px-6 py-24">
        <Reveal className="relative text-center">
          <div
            aria-hidden="true"
            className="absolute left-1/2 top-1/2 -z-10 h-32 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-300 opacity-25 blur-3xl"
          />
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-700">
            Trust &amp; Reliability
          </p>
          <h2 className="mt-3 font-display text-4xl font-black tracking-tight text-brand-950 sm:text-5xl">
            Why State College trusts CoxyClean
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-slate-600">
            Every job gets the same care, studio to commercial.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {valueProps.map((item, i) => (
            <Reveal key={item.title} delay={i * 75} className="h-full">
              <div className="group h-full rounded-2xl border border-slate-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-accent-300 hover:shadow-lift">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-800 transition-all duration-300 group-hover:bg-accent-400 group-hover:text-brand-900">
                  <item.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-display text-lg font-bold text-brand-950">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {item.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── How it works ─────────────────────────────────────────────── */}
      <HowItWorks />

      {/* ── Services ─────────────────────────────────────────────────── */}
      <section className="relative pb-28 pt-24">
        <div className="mx-auto max-w-6xl px-6">
        <Reveal className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-700">
              Our Services
            </p>
            <h2 className="mt-3 font-display text-4xl font-black tracking-tight text-brand-950 sm:text-5xl">
              What we clean
            </h2>
            <p className="mt-4 max-w-xl text-lg text-slate-600">
              Airbnb turnovers to commercial spaces, covered.
            </p>
          </div>
          <Link
            href="/services"
            className="group inline-flex items-center gap-1.5 text-sm font-bold text-brand-800 transition-colors hover:text-accent-700"
          >
            See all services &amp; pricing
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              &rarr;
            </span>
          </Link>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {services.map((service, i) => (
            <Reveal key={service.title} delay={i * 75} className="h-full">
              <Link
                href={service.href}
                className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-300 hover:shadow-lift"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-900 text-accent-300 transition-all duration-300 group-hover:scale-105 group-hover:bg-accent-400 group-hover:text-brand-900">
                  <service.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-display text-xl font-bold text-brand-950">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {service.description}
                </p>
                <span className="mt-auto inline-flex items-center gap-1.5 pt-5 text-sm font-bold text-brand-800">
                  Learn more
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    &rarr;
                  </span>
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
        </div>

        <SectionDivider variant="tilt" fill="#f8fafc" />
      </section>

      {/* ── Our work preview ─────────────────────────────────────────── */}
      <section className="relative bg-slate-50 pb-32 pt-24">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-700">
              Our Work
            </p>
            <h2 className="mt-3 font-display text-4xl font-black tracking-tight text-brand-950 sm:text-5xl">
              Before and after
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-slate-600">
              {TRUST_LINE}
            </p>
          </Reveal>

          <Reveal delay={100} className="mt-14">
            <GalleryPreview />
          </Reveal>

          <Reveal delay={180} className="mt-12 text-center">
            <Link
              href="/gallery"
              className="btn-shine inline-flex rounded-full bg-brand-800 px-7 py-3.5 text-sm font-bold text-white shadow-glow-brand transition-all duration-200 hover:-translate-y-0.5 hover:bg-brand-900 hover:shadow-glow-gold active:translate-y-0"
            >
              View the Full Gallery
            </Link>
          </Reveal>
        </div>

        <SectionDivider variant="angle" fill="#ffffff" />
      </section>

      {/* ── Reviews ──────────────────────────────────────────────────── */}
      <Reviews />

      {/* ── Final CTA ────────────────────────────────────────────────── */}
      <section className="relative mx-auto max-w-6xl px-6 py-24">
        <Reveal>
          <div className="relative flex flex-col items-center gap-6 overflow-hidden rounded-3xl bg-brand-900 px-8 py-16 text-center shadow-glow-brand sm:px-16">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-accent-400/15 blur-3xl"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-16 -left-16 h-56 w-56 rounded-full bg-brand-400/20 blur-3xl"
            />
            <div className="relative">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-300">
                Get Started
              </p>
              <h2 className="mt-3 font-display text-4xl font-black tracking-tight text-white sm:text-5xl">
                Ready for a cleaner space?
              </h2>
            </div>
            <p className="relative max-w-xl text-lg text-white/60">
              Free quotes, usually within one business day.
            </p>
            <div className="relative flex flex-col gap-3 sm:flex-row sm:gap-4">
              <Link
                href="/contact"
                className="btn-shine rounded-full bg-accent-400 px-7 py-3.5 text-sm font-bold text-brand-900 shadow-glow-gold transition-all duration-200 hover:-translate-y-0.5 hover:bg-accent-300 active:translate-y-0"
              >
                Request Your Free Quote
              </Link>
              <a
                href="tel:+18142807074"
                className="rounded-full border border-white/25 px-7 py-3.5 text-sm font-bold text-white transition-all duration-200 hover:-translate-y-0.5 hover:border-white/50 hover:bg-white/5 active:translate-y-0"
              >
                Call (814) 280-7074
              </a>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
