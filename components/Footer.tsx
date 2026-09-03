import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-12 sm:grid-cols-2 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-600 text-sm font-bold text-white">
              C
            </span>
            <span className="font-display text-lg font-semibold text-slate-900">Coxy Clean</span>
          </div>
          <p className="mt-3 text-sm text-slate-500">
            Reliable, detail-oriented cleaning for State College, PA and the
            surrounding areas.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-slate-900">Company</h3>
          <ul className="mt-3 space-y-2 text-sm text-slate-500">
            <li><Link href="/" className="hover:text-brand-600">Home</Link></li>
            <li><Link href="/services" className="hover:text-brand-600">Services</Link></li>
            <li><Link href="/about" className="hover:text-brand-600">About</Link></li>
            <li><Link href="/hiring" className="hover:text-brand-600">We&apos;re Hiring</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-slate-900">Contact</h3>
          <ul className="mt-3 space-y-2 text-sm text-slate-500">
            <li>State College, PA</li>
            <li>
              <a href="tel:+18142807074" className="hover:text-brand-600">
                (814) 280-7074
              </a>
            </li>
            <li>
              <a href="mailto:hello@coxyclean.com" className="hover:text-brand-600">
                hello@coxyclean.com
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-slate-900">Hours</h3>
          <ul className="mt-3 space-y-2 text-sm text-slate-500">
            <li>Mon &ndash; Fri: 8am &ndash; 6pm</li>
            <li>Saturday: 9am &ndash; 3pm</li>
            <li>Sunday: Closed</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-slate-200 py-6 text-center text-xs text-slate-400">
        &copy; {new Date().getFullYear()} Coxy Clean. All rights reserved.
      </div>
    </footer>
  );
}
