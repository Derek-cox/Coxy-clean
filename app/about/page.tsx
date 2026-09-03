import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

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
  },
  {
    title: "Fully Insured",
    description: "We're fully insured for your peace of mind.",
  },
  {
    title: "Trustworthy & Honest",
    description: "Honest, trustworthy service you can count on, every visit.",
  },
  {
    title: "Direct Line to the Owner",
    description:
      "Talk directly with the owner — clear, direct communication, no middlemen.",
  },
  {
    title: "Detail-Driven Process",
    description:
      "A thorough, detail-driven cleaning process for every job, every time.",
  },
];

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-20">
      <div className="grid items-center gap-12 md:grid-cols-2">
        <div>
          <h1 className="text-4xl font-bold tracking-tight text-slate-900">
            About Coxy Clean
          </h1>
          <p className="mt-4 text-lg text-slate-600">
            Coxy Clean is a family-owned and locally operated cleaning
            company built around one simple idea: everyone in State College
            deserves a reliably clean space, delivered by a team you can
            trust.
          </p>
          <p className="mt-4 text-slate-600">
            We started Coxy Clean to bring hotel-level attention to detail to
            everyday homes, Airbnb rentals, and local businesses — without
            the high price tag or scheduling headaches. Today we&apos;re
            proud to serve homeowners, landlords, hosts, and businesses
            across State College and the surrounding area.
          </p>
        </div>

        <div className="relative mx-auto aspect-square w-full max-w-sm overflow-hidden rounded-3xl bg-white shadow-xl ring-1 ring-slate-200 md:max-w-none">
          <Image
            src="/mascot.jpg"
            alt="Coxy Clean mascot illustration — an Italian-flag-themed cleaner holding a mop and bucket"
            fill
            sizes="(min-width: 768px) 480px, 384px"
            className="object-contain p-6"
          />
        </div>
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
