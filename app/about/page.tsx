import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import {
  ChatIcon,
  HandshakeIcon,
  HomeHeartIcon,
  ShieldIcon,
  SparkleChecklistIcon,
} from "@/components/icons";

export const metadata: Metadata = {
  title: "About Us | Coxy Clean",
  description:
    "Coxy Clean is a family-owned cleaning company serving State College, PA. Learn why homeowners, hosts, and businesses choose us.",
};

const reasons = [
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

export default function AboutPage() {
  return (
    <div className="overflow-x-hidden">
      <div className="mx-auto max-w-6xl px-6 pb-8 pt-16 sm:pt-20">
        <div className="grid items-center gap-16 md:grid-cols-2">
          <Reveal>
            <h1 className="font-display text-5xl font-semibold leading-[1.05] tracking-tight text-slate-900 sm:text-6xl">
              About Coxy Clean
            </h1>
            <p className="mt-6 text-lg text-slate-600">
              Coxy Clean is a family-owned and locally operated cleaning
              company built around one simple idea: everyone in State
              College deserves a reliably clean space, delivered by a team
              you can trust.
            </p>
            <p className="mt-4 text-slate-600">
              We started Coxy Clean to bring hotel-level attention to detail
              to everyday homes, Airbnb rentals, and local businesses —
              without the high price tag or scheduling headaches. Today
              we&apos;re proud to serve homeowners, landlords, hosts, and
              businesses across State College and the surrounding area.
            </p>
          </Reveal>

          <Reveal delay={150} className="relative">
            <div className="relative mx-auto w-full max-w-[260px] md:mx-0 md:mr-auto md:max-w-[340px]">
              <div
                aria-hidden="true"
                className="absolute inset-6 -z-10 -rotate-2 rounded-[2.5rem] bg-gradient-to-br from-accent-50 via-white to-brand-50 md:inset-10"
              />
              <div className="relative aspect-[1823/3060] w-full">
                <Image
                  src="/logo-full.png"
                  alt="Coxy Clean logo — My house is clean cuz it's Coxy Clean"
                  fill
                  sizes="(min-width: 768px) 380px, 320px"
                  className="object-contain drop-shadow-2xl"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-6 py-16">
        <Reveal>
          <h2 className="font-display text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Why choose us
          </h2>
        </Reveal>
        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason, i) => (
            <Reveal key={reason.title} delay={i * 75}>
              <div className="group">
                <reason.icon className="h-8 w-8 text-brand-600 transition-transform duration-300 group-hover:scale-110" />
                <h3 className="mt-3 font-display text-lg font-semibold text-slate-900">
                  {reason.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600">{reason.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-6 pb-24">
        <Reveal>
          <div className="flex flex-col items-center gap-6 rounded-3xl bg-slate-50 px-8 py-14 text-center">
            <h2 className="font-display text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              Let&apos;s get your space looking its best
            </h2>
            <p className="max-w-xl text-slate-600">
              Reach out today for a free quote — we typically respond within
              one business day.
            </p>
            <Link
              href="/contact"
              className="rounded-full bg-brand-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-brand-700 hover:shadow-lg active:translate-y-0"
            >
              Get a Free Quote
            </Link>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
