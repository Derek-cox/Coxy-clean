import Link from "next/link";
import Reveal from "@/components/Reveal";
import SectionDivider from "@/components/SectionDivider";
import {
  CalendarCheckIcon,
  SofaIcon,
  SprayBottleIcon,
} from "@/components/icons";

const steps = [
  {
    title: "Book",
    description:
      "Tell us about your space and when you need it done. We reply with a custom quote, usually within one business day.",
    icon: CalendarCheckIcon,
  },
  {
    title: "We Clean",
    description:
      "We show up on schedule with our own supplies and work through a checklist built for your space — no guesswork, no surprises.",
    icon: SprayBottleIcon,
  },
  {
    title: "You Relax",
    description:
      "Walk into a space that's actually finished. Something not right? Tell the owner directly and we'll make it right.",
    icon: SofaIcon,
  },
];

export default function HowItWorks() {
  return (
    <section className="relative overflow-hidden bg-brand-900 py-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 top-0 h-72 w-72 rounded-full bg-accent-400/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-brand-400/15 blur-3xl"
      />

      <div className="relative mx-auto max-w-6xl px-6">
        <Reveal className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-200">
            How It Works
          </p>
          <h2 className="mt-3 font-display text-4xl font-black tracking-tight text-white sm:text-5xl">
            Three steps. That&apos;s it.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-white/60">
            No accounts to make, no contracts to sign, no sales call.
          </p>
        </Reveal>

        <div className="relative mt-16">
          {/* Connector line between steps on desktop. */}
          <div
            aria-hidden="true"
            className="absolute inset-x-[16.66%] top-[38px] hidden h-px bg-gradient-to-r from-transparent via-white/20 to-transparent md:block"
          />

          <ol className="grid gap-8 md:grid-cols-3 md:gap-6">
          {steps.map((step, i) => (
            <li key={step.title} className="h-full">
              <Reveal delay={i * 120} className="h-full">
                <div className="group relative flex h-full flex-col items-center rounded-2xl border border-white/10 bg-white/[0.06] p-8 text-center backdrop-blur-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-accent-400/40 hover:bg-white/[0.1] hover:shadow-glow-accent">
                  <div className="relative flex h-[76px] w-[76px] items-center justify-center rounded-full border border-white/15 bg-brand-800 text-brand-100 transition-all duration-300 group-hover:scale-105 group-hover:border-brand-300/50 group-hover:text-white">
                    <step.icon className="h-9 w-9" />
                    <span className="absolute -right-1 -top-1 flex h-7 w-7 items-center justify-center rounded-full bg-accent-600 font-display text-xs font-black text-white">
                      {i + 1}
                    </span>
                  </div>

                  <h3 className="mt-6 font-display text-2xl font-bold text-white">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/60">
                    {step.description}
                  </p>
                </div>
              </Reveal>
            </li>
          ))}
          </ol>
        </div>

        <Reveal delay={240} className="mt-14 text-center">
          <Link
            href="/contact"
            className="btn-shine inline-flex rounded-full bg-accent-600 px-7 py-3.5 text-sm font-bold text-white shadow-glow-accent transition-all duration-200 hover:-translate-y-0.5 hover:bg-accent-700 active:translate-y-0"
          >
            Start with a Free Quote
          </Link>
        </Reveal>
      </div>

      <SectionDivider variant="wave" fill="#ffffff" />
    </section>
  );
}
