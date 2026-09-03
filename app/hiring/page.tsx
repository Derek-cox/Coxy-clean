import type { Metadata } from "next";
import ApplicationForm from "@/components/ApplicationForm";

export const metadata: Metadata = {
  title: "We're Hiring | Coxy Clean",
  description:
    "Coxy Clean is hiring reliable, detail-oriented cleaners in State College, PA. Flexible hours, competitive pay. Apply today.",
};

const perks = [
  {
    title: "Flexible Scheduling",
    description: "Full-time, part-time, and weekend shifts available.",
  },
  {
    title: "Competitive Pay",
    description: "Paid weekly, plus tips from happy clients.",
  },
  {
    title: "Local Routes",
    description: "Jobs across State College — no long commutes.",
  },
  {
    title: "Supportive Team",
    description: "Training provided, supplies included, real support.",
  },
];

export default function HiringPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-20">
      <div className="max-w-2xl">
        <span className="inline-flex items-center rounded-full bg-accent-100 px-4 py-1 text-sm font-medium text-accent-700">
          We&apos;re Hiring
        </span>
        <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-900">
          Join the Coxy Clean team
        </h1>
        <p className="mt-4 text-lg text-slate-600">
          We&apos;re looking for reliable, detail-oriented people to join our
          growing cleaning team in State College. No experience required —
          just a strong work ethic and attention to detail.
        </p>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {perks.map((perk) => (
          <div key={perk.title} className="rounded-2xl border border-slate-200 p-6">
            <h3 className="font-semibold text-slate-900">{perk.title}</h3>
            <p className="mt-2 text-sm text-slate-600">{perk.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-16 grid gap-12 md:grid-cols-5">
        <div className="md:col-span-2">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">
            Apply now
          </h2>
          <p className="mt-4 text-slate-600">
            Fill out the quick application below and we&apos;ll be in touch
            about next steps. You can also email your resume directly.
          </p>
          <div className="mt-6">
            <h3 className="text-sm font-semibold text-slate-900">Email</h3>
            <a href="mailto:careers@coxyclean.com" className="text-brand-600">
              careers@coxyclean.com
            </a>
          </div>
        </div>

        <div className="md:col-span-3">
          <div className="rounded-2xl border border-slate-200 p-8">
            <ApplicationForm />
          </div>
        </div>
      </div>
    </div>
  );
}
