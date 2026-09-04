"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function FloatingBookButton() {
  const [visible, setVisible] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    function onScroll() {
      setVisible(window.scrollY > 480);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (pathname === "/contact") return null;

  return (
    <Link
      href="/contact"
      aria-label="Book Now — go to contact page"
      className={`btn-shine fixed bottom-6 right-6 z-40 flex items-center gap-2 rounded-full bg-brand-600 px-5 py-3.5 text-sm font-semibold text-white shadow-glow-brand transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-700 hover:shadow-glow-red active:translate-y-0 sm:px-6 ${
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      <span
        className="h-2 w-2 flex-shrink-0 rounded-full bg-accent-400"
        aria-hidden="true"
      />
      Book Now
    </Link>
  );
}
