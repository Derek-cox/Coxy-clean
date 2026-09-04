import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import SectionWave from "@/components/SectionWave";
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
  },
  {
    title: "Residential Cleaning",
    description: "Recurring or one-time home cleaning tailored to your household.",
    href: "/services",
    icon: HomeHeartIcon,
  },
  {
    title: "Commercial Cleaning",
    description: "Offices and small businesses across State College, cleaned on your schedule.",
    href: "/services",
    icon: BuildingIcon,
  },
  {
    title: "Move-Out Cleaning",
    description: "Deep, deposit-ready cleans for tenants, landlords, and students.",
    href: "/services",
    icon: SuitcaseIcon,
  },
];

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-x-hidden bg-slate-50">
        <div
          aria-hidden="true"
          className="hero-aurora absolute inset-0 opacity-[0.16]"
        />
        <div className="relative mx-auto grid max-w-6xl items-center gap-16 px-6 pb-24 pt-16 md:grid-cols-2 md:pb-32 md:pt-20">
          <Reveal>
            <span className="inline-flex items-center rounded-full bg-brand-100 px-4 py-1 text-sm font-medium text-brand-700">
              Serving State College, PA &amp; the surrounding area
            </span>
            <h1 className="mt-6 font-display text-6xl font-black leading-[1.02] tracking-tight text-slate-900 sm:text-7xl lg:text-[5rem]">
              A spotless
              <br />
              space, without
              <br />
              lifting a finger.
            </h1>
            <p className="mt-7 max-w-md text-lg text-slate-600 leading-relaxed">
              Coxy Clean brings reliable, detail-driven cleaning to homes,
              rentals, and businesses throughout State College. Book in
              minutes and get your time back.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="btn-shine rounded-full bg-brand-600 px-6 py-3 text-sm font-semibold text-white shadow-glow-brand transition-all duration-200 hover:-translate-y-0.5 hover:bg-brand-700 hover:shadow-glow-green active:translate-y-0"
              >
                Get a Free Quote
              </Link>
              <Link
                href="/services"
                className="rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition-all duration-200 hover:-translate-y-0.5 hover:border-accent-700 hover:text-accent-700 hover:shadow-glow-accent active:translate-y-0"
              >
                View Services
              </Link>
            </div>
            <div className="mt-10 flex items-center gap-6 text-sm text-slate-500">
              <div>
                <p className="font-display text-2xl font-bold text-slate-900">
                  Family-Owned
                </p>
                <p>Locally operated in State College</p>
              </div>
              <div className="h-10 w-px bg-slate-200" />
              <div>
                <p className="font-display text-2xl font-bold text-slate-900">
                  Fully Insured
                </p>
                <p>For your peace of mind</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={150} className="relative">
            <div className="relative mx-auto w-full max-w-xs md:mx-0 md:ml-auto md:max-w-[420px]">
              <div
                aria-hidden="true"
                className="absolute inset-0 -z-10 rounded-full bg-gradient-to-br from-brand-400 via-accent-300 to-brand-500 opacity-40 blur-3xl md:-inset-6"
              />
              <div className="relative aspect-[639/893] w-full -rotate-2">
                <Image
                  src="/mascot.png"
                  alt="Coxy Clean mascot illustration — an Italian-flag-themed cleaner holding a mop and bucket"
                  fill
                  sizes="(min-width: 768px) 420px, 320px"
                  quality={95}
                  className="object-contain object-bottom drop-shadow-[0_25px_35px_rgba(40,34,70,0.35)] motion-safe:animate-float"
                  priority
                />
              </div>
            </div>
            <div className="absolute -bottom-2 left-0 w-56 rounded-2xl border border-white/60 bg-white/70 p-5 shadow-glow-accent backdrop-blur-lg sm:-left-4">
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
        <Reveal className="relative text-center">
          <div
            aria-hidden="true"
            className="absolute left-1/2 top-1/2 -z-10 h-32 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-300 opacity-20 blur-3xl"
          />
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-700">
            Trust &amp; Reliability
          </p>
          <h2 className="mt-3 font-display text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
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
              <div className="group h-full rounded-2xl border border-slate-200 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-glow-brand">
                <item.icon className="h-9 w-9 text-brand-600 transition-transform duration-300 group-hover:scale-110" />
                <h3 className="mt-4 font-display text-lg font-bold text-slate-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600">{item.description}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <SectionWave fill="#1a162e" />
      </section>

      <section className="relative overflow-hidden bg-gradient-to-br from-brand-800 via-brand-700 to-brand-600 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-400">
                Our Services
              </p>
              <h2 className="mt-3 font-display text-4xl font-bold tracking-tight text-white sm:text-5xl">
                What we clean
              </h2>
              <p className="mt-4 max-w-xl text-white/70">
                From Airbnb turnovers to full commercial spaces, here&apos;s
                how we help around State College.
              </p>
            </div>
            <Link
              href="/services"
              className="text-sm font-semibold text-accent-400 transition-colors hover:text-accent-300"
            >
              See all services &amp; pricing &rarr;
            </Link>
          </Reveal>
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {services.map((service, i) => (
              <Reveal key={service.title} delay={i * 75} className="h-full">
                <Link
                  href={service.href}
                  className="group flex h-full flex-col rounded-2xl border border-white/15 bg-white/10 p-7 shadow-glow-accent backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-white/25 hover:bg-white/[0.14] hover:shadow-glow-green hover:backdrop-blur-lg"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/15 text-accent-300 transition-colors duration-300 group-hover:bg-white/25 group-hover:text-white">
                    <service.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 font-display text-xl font-bold text-white">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm text-white/70">
                    {service.description}
                  </p>
                  <span className="mt-auto inline-flex items-center gap-1 pt-4 text-sm font-semibold text-accent-300 transition-transform duration-300 group-hover:translate-x-1">
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
          <div className="relative flex flex-col items-center gap-6 overflow-hidden rounded-3xl bg-brand-600 px-8 py-14 text-center shadow-glow-brand sm:px-16">
            <div
              aria-hidden="true"
              className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-white/10 blur-3xl"
            />
            <div
              aria-hidden="true"
              className="absolute -bottom-16 -left-16 h-56 w-56 rounded-full bg-accent-400/20 blur-3xl"
            />
            <div className="relative">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-300">
                Get Started
              </p>
              <h2 className="mt-3 font-display text-4xl font-bold tracking-tight text-white sm:text-5xl">
                Ready for a cleaner space?
              </h2>
            </div>
            <p className="relative max-w-xl text-white/70">
              Get a free, no-obligation quote for your home, rental, or
              business in State College — usually within one business day.
            </p>
            <Link
              href="/contact"
              className="btn-shine relative rounded-full bg-white px-6 py-3 text-sm font-semibold text-brand-700 shadow-glow-accent transition-all duration-200 hover:-translate-y-0.5 hover:bg-brand-50 hover:shadow-glow-green active:translate-y-0"
            >
              Request Your Free Quote
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
