import type { Metadata } from "next";
import ApplicationForm from "@/components/ApplicationForm";
import Reveal from "@/components/Reveal";
import { ClockIcon, CoinIcon, HandshakeIcon, MapPinIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "We're Hiring | CoxyClean",
  description:
    "CoxyClean is hiring reliable, detail-oriented cleaners in State College, PA. Flexible hours, competitive pay. Apply today.",
};

const perks = [
  {
    title: "Flexible Scheduling",
    description: "Full-time, part-time, and weekend shifts available.",
    icon: ClockIcon,
  },
  {
    title: "Competitive Pay",
    description: "Paid weekly, plus tips from happy clients.",
    icon: CoinIcon,
  },
  {
    title: "Local Routes",
    description: "Jobs across State College — no long commutes.",
    icon: MapPinIcon,
  },
  {
    title: "Supportive Team",
    description: "Training provided, supplies included, real support.",
    icon: HandshakeIcon,
  },
];

export default function HiringPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-20">
      <Reveal className="max-w-2xl">
        <span className="inline-flex items-center rounded-full bg-accent-100 px-4 py-1 text-sm font-medium text-accent-700">
          We&apos;re Hiring
        </span>
        <h1 className="mt-6 font-display text-5xl font-bold tracking-tight text-slate-900 sm:text-6xl">
          Join the CoxyClean team
        </h1>
        <p className="mt-5 text-lg text-slate-600 leading-relaxed">
          Reliable, detail-oriented people wanted. No experience required.
        </p>
      </Reveal>

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {perks.map((perk, i) => (
          <Reveal key={perk.title} delay={i * 75}>
            <div className="group h-full rounded-2xl border border-slate-200 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent-200 hover:shadow-lg">
              <perk.icon className="h-8 w-8 text-accent-700 transition-transform duration-300 group-hover:scale-110" />
              <h3 className="mt-4 font-display text-lg font-bold text-slate-900">
                {perk.title}
              </h3>
              <p className="mt-2 text-sm text-slate-600">{perk.description}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <div className="mt-16 grid gap-12 md:grid-cols-5">
        <Reveal className="md:col-span-2">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-700">
            Join The Team
          </p>
          <h2 className="mt-3 font-display text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            Apply now
          </h2>
          <p className="mt-4 text-slate-600 leading-relaxed">
            Apply below, or email your resume directly.
          </p>
          <div className="mt-6">
            <h3 className="text-sm font-semibold text-slate-900">Email</h3>
            <a href="mailto:careers@coxyclean.com" className="text-brand-600">
              careers@coxyclean.com
            </a>
          </div>
        </Reveal>

        <Reveal delay={100} className="md:col-span-3">
          <div className="rounded-2xl border border-slate-200 p-8">
            <ApplicationForm />
          </div>
        </Reveal>
      </div>
    </div>
  );
}
