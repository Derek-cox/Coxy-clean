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
  title: "About Us | CoxyClean",
  description:
    "CoxyClean is a family-owned cleaning company serving State College, PA. Learn why homeowners, hosts, and businesses choose us.",
};

const reasons = [
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

export default function AboutPage() {
  return (
    <div className="overflow-x-hidden">
      <div className="mx-auto max-w-6xl px-6 pb-8 pt-16 sm:pt-20">
        <div className="grid items-center gap-16 md:grid-cols-2">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-700">
              About Us
            </p>
            <h1 className="mt-3 font-display text-5xl font-black leading-[1.05] tracking-tight text-brand-950 sm:text-6xl">
              About CoxyClean
            </h1>
            <p className="mt-6 text-lg text-slate-600 leading-relaxed">
              Family-owned and locally operated, bringing hotel-level
              attention to detail to homes, Airbnb rentals, and local
              businesses across State College — no high price tag, no
              scheduling headaches.
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
                  alt="CoxyClean logo — My house is clean cuz it's CoxyClean"
                  fill
                  sizes="(min-width: 768px) 380px, 320px"
                  quality={95}
                  className="object-contain drop-shadow-[0_25px_35px_rgba(3,43,24,0.3)]"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-6 py-16">
        <Reveal className="relative">
          <div
            aria-hidden="true"
            className="absolute -left-6 -top-6 -z-10 h-28 w-28 rounded-full bg-brand-300 opacity-20 blur-3xl"
          />
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-700">
            The CoxyClean Difference
          </p>
          <h2 className="mt-3 font-display text-3xl font-black tracking-tight text-brand-950 sm:text-4xl">
            Why choose us
          </h2>
        </Reveal>
        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason, i) => (
            <Reveal key={reason.title} delay={i * 75}>
              <div className="group">
                <reason.icon className="h-8 w-8 text-brand-800 transition-transform duration-300 group-hover:scale-110" />
                <h3 className="mt-3 font-display text-lg font-bold text-brand-950">
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
            <h2 className="font-display text-3xl font-black tracking-tight text-brand-950 sm:text-4xl">
              Let&apos;s get your space looking its best
            </h2>
            <p className="max-w-xl text-slate-600">
              Free quotes, usually within one business day.
            </p>
            <Link
              href="/contact"
              className="btn-shine rounded-full bg-brand-800 px-6 py-3 text-sm font-bold text-white shadow-glow-brand transition-all duration-200 hover:-translate-y-0.5 hover:bg-brand-900 hover:shadow-glow-accent active:translate-y-0"
            >
              Get a Free Quote
            </Link>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
