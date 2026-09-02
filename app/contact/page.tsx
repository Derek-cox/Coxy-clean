import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us | Coxy Clean",
  description:
    "Get a free cleaning quote from Coxy Clean in State College, PA. We typically respond within one business day.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-20">
      <div className="grid gap-12 md:grid-cols-5">
        <div className="md:col-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-slate-900">
            Get in Touch
          </h1>
          <p className="mt-4 text-slate-600">
            Fill out the form and we&apos;ll send you a free quote — usually
            within one business day. Prefer to talk? Give us a call.
          </p>

          <div className="mt-8 space-y-6">
            <div>
              <h2 className="text-sm font-semibold text-slate-900">Phone</h2>
              <a href="tel:+18145550123" className="text-brand-600">
                (814) 555-0123
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
        </div>

        <div className="md:col-span-3">
          <div className="rounded-2xl border border-slate-200 p-8">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
