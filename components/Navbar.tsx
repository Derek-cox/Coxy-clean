"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Our Work" },
  { href: "/about", label: "About" },
  { href: "/hiring", label: "We're Hiring" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Close the mobile menu whenever the route changes.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 8);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 bg-white/90 backdrop-blur transition-shadow duration-300 ${
        scrolled ? "shadow-[0_1px_16px_-6px_rgba(3,43,24,0.25)]" : ""
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between border-b border-slate-200/80 px-6 py-4">
        <Link href="/" className="group flex items-center gap-2.5">
          <span
            aria-hidden="true"
            className="h-6 w-1.5 rounded-full bg-accent-600 transition-all duration-300 group-hover:h-7"
          />
          <span className="font-display text-xl font-black tracking-tight text-brand-900">
            CoxyClean
          </span>
        </Link>

        <div className="hidden items-center gap-7 md:flex">
          {links.map((link) => {
            const active =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={`relative text-sm font-medium transition-colors after:absolute after:-bottom-1.5 after:left-0 after:h-0.5 after:rounded-full after:bg-accent-600 after:transition-all after:duration-300 ${
                  active
                    ? "text-brand-900 after:w-full"
                    : "text-slate-600 after:w-0 hover:text-brand-800 hover:after:w-full"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            href="/contact"
            className="btn-shine rounded-full bg-brand-800 px-5 py-2.5 text-sm font-semibold text-white shadow-glow-brand transition-all duration-200 hover:-translate-y-0.5 hover:bg-brand-900 hover:shadow-glow-accent active:translate-y-0"
          >
            Get a Free Quote
          </Link>
        </div>

        <button
          className="flex h-11 w-11 items-center justify-center rounded-lg text-brand-900 transition-colors hover:bg-slate-100 md:hidden"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </nav>

      {open && (
        <div className="border-b border-slate-200 bg-white px-6 pb-5 shadow-lg md:hidden">
          <div className="flex flex-col pt-2">
            {links.map((link) => {
              const active =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={`border-b border-slate-100 py-3.5 text-[15px] font-medium transition-colors ${
                    active ? "text-brand-900" : "text-slate-600"
                  }`}
                >
                  {active && (
                    <span
                      aria-hidden="true"
                      className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-accent-600 align-middle"
                    />
                  )}
                  {link.label}
                </Link>
              );
            })}
            <Link
              href="/contact"
              className="mt-5 rounded-full bg-brand-800 px-5 py-3 text-center text-sm font-semibold text-white"
            >
              Get a Free Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
