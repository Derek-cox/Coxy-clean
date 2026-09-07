import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Contact Us | CoxyClean",
  description:
    "Get a free cleaning quote from CoxyClean in State College, PA. We typically respond within one business day.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-20">
      <div className="grid gap-12 md:grid-cols-5">
        <Reveal className="md:col-span-2">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-700">
            Contact
          </p>
          <h1 className="mt-3 font-display text-5xl font-bold tracking-tight text-slate-900 sm:text-6xl">
            Get in Touch
          </h1>
          <p className="mt-5 text-slate-600 leading-relaxed">
            Free quote, usually within one business day — or give us a call.
          </p>

          <div className="mt-8 space-y-6">
            <div>
              <h2 className="text-sm font-semibold text-slate-900">Phone</h2>
              <a href="tel:+18142807074" className="text-brand-600">
                (814) 280-7074
              </a>
            </div>
            <div>
              <h2 className="text-sm font-semibold text-slate-900">Email</h2>
              <a href="mailto:hello@coxyclean.com" className="text-brand-600">
                hello@coxyclean.com
              </a>
            </div>
            <div>
              <h2 className="text-sm font-semibold text-slate-900">
                Service Area
              </h2>
              <p className="text-slate-600">
                State College, PA and the surrounding area, including
                Boalsburg, Bellefonte, and Pine Grove Mills.
              </p>
            </div>
            <div>
              <h2 className="text-sm font-semibold text-slate-900">Hours</h2>
              <p className="text-slate-600">
                Mon &ndash; Fri: 8am &ndash; 6pm
                <br />
                Saturday: 9am &ndash; 3pm
                <br />
                Sunday: Closed
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={100} className="md:col-span-3">
          <div className="rounded-2xl border border-slate-200 p-8">
            <ContactForm />
          </div>
        </Reveal>
      </div>
    </div>
  );
}
