"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const PHONE = "+18142807074";
const PHONE_DISPLAY = "(814) 280-7074";

/**
 * Persistent booking CTA.
 *
 * Mobile gets a full-width bottom action bar with Call alongside Book —
 * most ad traffic is on a phone, and tap-to-call converts as well as the
 * form does. Desktop gets a quieter floating pill.
 */
export default function StickyBookBar() {
  const [visible, setVisible] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    function onScroll() {
      setVisible(window.scrollY > 320);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // The contact page is the destination — no need to nag there.
  if (pathname === "/contact") return null;

  return (
    <>
      {/* Mobile: bottom action bar */}
      <div
        className={`fixed inset-x-0 bottom-0 z-40 border-t border-brand-800/60 bg-brand-900/95 px-4 pb-[calc(0.75rem+env(safe-area-inset-bottom))] pt-3 backdrop-blur-md transition-transform duration-300 sm:hidden ${
          visible ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <div className="flex items-center gap-3">
          <a
            href={`tel:${PHONE}`}
            aria-label={`Call CoxyClean at ${PHONE_DISPLAY}`}
            className="flex h-12 w-[4.5rem] flex-shrink-0 items-center justify-center gap-1.5 rounded-full border border-white/20 text-white transition active:scale-95"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M6.5 3h3l1.5 4-2 1.5a12 12 0 005.5 5.5L16 12l4 1.5v3a2 2 0 01-2.2 2A16.5 16.5 0 014.5 5.2 2 2 0 016.5 3z" />
            </svg>
            <span className="text-sm font-semibold">Call</span>
          </a>
          <Link
            href="/contact"
            className="btn-shine flex h-12 flex-1 items-center justify-center rounded-full bg-accent-600 text-[15px] font-bold text-white shadow-glow-accent transition active:scale-[0.98]"
          >
            Book Now — Free Quote
          </Link>
        </div>
      </div>

      {/* Desktop: floating pill */}
      <Link
        href="/contact"
        aria-label="Book now — get a free quote"
        className={`btn-shine fixed bottom-6 right-6 z-40 hidden items-center gap-2.5 rounded-full bg-accent-600 px-6 py-3.5 text-sm font-bold text-white shadow-glow-accent transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent-700 active:translate-y-0 sm:flex ${
          visible
            ? "translate-y-0 opacity-100"
            : "pointer-events-none translate-y-4 opacity-0"
        }`}
      >
        <span
          className="h-2 w-2 flex-shrink-0 rounded-full bg-brand-800"
          aria-hidden="true"
        />
        Book Now
      </Link>
    </>
  );
}
