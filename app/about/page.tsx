import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Coxy Clean",
  description:
    "Coxy Clean is a locally owned cleaning company serving State College, PA. Learn why homeowners, hosts, and businesses choose us.",
};

const reasons = [
  {
    title: "Local & Reliable",
    description:
      "We're based in State College and know the community — from Downtown apartments to homes near Penn State. You can count on us to show up on time, every time.",
  },
  {
    title: "Trained, Insured Team",
    description:
      "Every member of our team is background-checked, trained on our cleaning standards, and fully insured, so you can welcome us into your space with confidence.",
  },
  {
    title: "Consistent Quality",
    description:
      "We follow detailed checklists for every job type, so your space gets the same thorough clean whether it's your first visit or your fiftieth.",
  },
  {
    title: "Eco-Conscious Products",
    description:
      "We use effective, low-toxicity cleaning products that are safe for kids, pets, and guests without sacrificing a deep clean.",
  },
  {
    title: "Easy to Work With",
    description:
      "Simple booking, clear pricing, and a team that communicates — no surprises, no hassle.",
  },
  {
    title: "Satisfaction Guaranteed",
    description:
      "If something isn't right, tell us within 24 hours and we'll come back to fix it at no extra cost.",
  },
];

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-20">
      <div className="max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight text-slate-900">
          About Coxy Clean
        </h1>
        <p className="mt-4 text-lg text-slate-600">
          Coxy Clean is a locally owned and operated cleaning company built
          around one simple idea: everyone in State College deserves a
          reliably clean space, delivered by a team you can trust.
        </p>
        <p className="mt-4 text-slate-600">
          We started Coxy Clean to bring hotel-level attention to detail to
          everyday homes, Airbnb rentals, and local businesses — without the
          high price tag or scheduling headaches. Today we&apos;re proud to serve
          homeowners, landlords, hosts, and businesses across State College
          and the surrounding area.
        </p>
      </div>

      <div className="mt-16">
        <h2 className="text-2xl font-bold tracking-tight text-slate-900">
          Why choose us
        </h2>
        <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason) => (
            <div key={reason.title}>
              <h3 className="font-semibold text-slate-900">{reason.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-16 flex flex-col items-center gap-6 rounded-3xl bg-slate-50 px-8 py-14 text-center">
        <h2 className="text-2xl font-bold tracking-tight text-slate-900">
          Let&apos;s get your space looking its best
        </h2>
        <p className="max-w-xl text-slate-600">
          Reach out today for a free quote — we typically respond within one
          business day.
        </p>
        <Link
          href="/contact"
          className="rounded-full bg-brand-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-700"
        >
          Get a Free Quote
        </Link>
      </div>
    </div>
  );
}
