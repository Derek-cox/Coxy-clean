import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-6xl px-6 pt-12">
        <div className="flex flex-col items-center gap-6 border-b border-slate-200 pb-10 text-center sm:flex-row sm:text-left">
          <div className="relative flex-shrink-0">
            <div
              aria-hidden="true"
              className="absolute inset-4 -z-10 rounded-full bg-accent-300 opacity-25 blur-2xl"
            />
            <Image
              src="/logo-full.png"
              alt="Coxy Clean — My house is clean cuz it's Coxy Clean"
              width={1823}
              height={3060}
              className="h-44 w-auto sm:h-56 md:h-64"
            />
          </div>
          <p className="max-w-sm text-sm text-slate-500">
            Reliable, detail-oriented cleaning for State College, PA and the
            surrounding areas.
          </p>
        </div>
      </div>

      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-12 sm:grid-cols-3">
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
