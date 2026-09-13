import Link from "next/link";
import type { Metadata } from "next";
import GalleryGrid from "@/components/GalleryGrid";
import Reveal from "@/components/Reveal";
import SectionDivider from "@/components/SectionDivider";
import { galleryItems } from "@/data/gallery";

export const metadata: Metadata = {
  title: "Our Work | CoxyClean",
  description:
    "Before-and-after photos from Airbnb turnovers, residential cleans, move-in/move-out deep cleans, and commercial jobs around State College, PA.",
};

export default function GalleryPage() {
  const hasPhotos = galleryItems.length > 0;

  return (
    <>
      <section className="relative overflow-hidden bg-brand-900 pb-28 pt-16 sm:pt-20">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-accent-400/10 blur-3xl"
        />
        <div className="relative mx-auto max-w-3xl px-6 text-center">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-300">
              Our Work
            </p>
            <h1 className="mt-3 font-display text-5xl font-black leading-[1.05] tracking-tight text-white sm:text-6xl">
              See the difference
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-white/60">
              {hasPhotos
                ? "Real jobs, shot on site. Drag any before/after slider to see the whole change."
                : "We're building this out with photos from real jobs — every image here will be our own work, never stock."}
            </p>
          </Reveal>
        </div>
        <SectionDivider variant="curve" fill="#f8fafc" />
      </section>

      <GalleryGrid />

      <section className="mx-auto max-w-6xl px-6 pb-24">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-brand-800 px-8 py-14 text-center shadow-glow-brand sm:px-16">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-accent-400/15 blur-3xl"
            />
            <h2 className="relative font-display text-3xl font-black tracking-tight text-white sm:text-4xl">
              Want your space on this page?
            </h2>
            <p className="relative mx-auto mt-4 max-w-lg text-white/60">
              Free quotes, usually within one business day.
            </p>
            <Link
              href="/contact"
              className="btn-shine relative mt-8 inline-flex rounded-full bg-accent-400 px-7 py-3.5 text-sm font-bold text-brand-900 shadow-glow-gold transition-all duration-200 hover:-translate-y-0.5 hover:bg-accent-300 active:translate-y-0"
            >
              Get a Free Quote
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
