"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import BeforeAfter from "@/components/BeforeAfter";
import Lightbox from "@/components/Lightbox";
import PhotoPlaceholder from "@/components/PhotoPlaceholder";
import Reveal from "@/components/Reveal";
import {
  PLACEHOLDER_TILES,
  featuredPairs,
  filterItems,
  galleryFilters,
  galleryItems,
  isBeforeAfter,
  TRUST_LINE,
  type FilterId,
} from "@/data/gallery";

const GRID_SIZES = "(min-width: 1024px) 31vw, (min-width: 640px) 46vw, 92vw";
const FEATURED_SIZES = "(min-width: 768px) 620px, 92vw";

/** The large drag-to-compare band at the top of the gallery. */
function FeaturedPairs() {
  if (featuredPairs.length === 0) return null;

  return (
    <section className="border-y border-slate-200 bg-slate-50 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-700">
            Before &amp; After
          </p>
          <h2 className="mt-3 font-display text-3xl font-black tracking-tight text-brand-950 sm:text-4xl">
            Drag to see the difference
          </h2>
        </Reveal>

        <div
          className={`mt-10 grid gap-10 ${
            featuredPairs.length === 1
              ? "mx-auto max-w-[620px]"
              : featuredPairs.length === 2
                ? "md:grid-cols-2"
                : "md:grid-cols-2 lg:grid-cols-3"
          }`}
        >
          {featuredPairs.map((item, i) => (
            <Reveal key={item.id} delay={i * 100}>
              <figure>
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl shadow-lift">
                  {isBeforeAfter(item) && (
                    <BeforeAfter
                      before={item.before}
                      after={item.after}
                      title={item.caption}
                      sizes={FEATURED_SIZES}
                      priority={i === 0}
                    />
                  )}
                </div>
                <figcaption className="mt-4 text-center">
                  <p className="font-display text-lg font-bold text-brand-950">
                    {item.caption}
                  </p>
                  <p className="mt-1 text-xs text-slate-500">
                    Drag the handle to compare
                  </p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function GalleryGrid() {
  const [active, setActive] = useState<FilterId>("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const visible = useMemo(() => filterItems(active), [active]);
  const noPhotosAtAll = galleryItems.length === 0;

  return (
    <>
      <FeaturedPairs />

      <section className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
        <Reveal className="text-center">
          <p className="text-sm text-slate-500">{TRUST_LINE}</p>
        </Reveal>

        {/* Filter pills — a scrollable rail on mobile so labels never wrap. */}
        <Reveal delay={60}>
          <div
            role="tablist"
            aria-label="Filter photos by service"
            className="no-scrollbar -mx-6 mt-8 flex gap-2 overflow-x-auto px-6 pb-1 sm:mx-0 sm:flex-wrap sm:justify-center sm:px-0"
          >
            {galleryFilters.map((filter) => {
              const count = filterItems(filter.id).length;
              const selected = filter.id === active;
              return (
                <button
                  key={filter.id}
                  type="button"
                  role="tab"
                  aria-selected={selected}
                  onClick={() => {
                    setActive(filter.id);
                    setLightboxIndex(null);
                  }}
                  className={`flex-shrink-0 rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 ${
                    selected
                      ? "bg-brand-800 text-white shadow-glow-brand"
                      : "border border-slate-200 bg-white text-slate-600 hover:-translate-y-0.5 hover:border-brand-300 hover:text-brand-700 hover:shadow-tile"
                  }`}
                >
                  {filter.label}
                  {count > 0 && (
                    <span
                      className={`ml-2 text-xs font-medium ${
                        selected ? "text-brand-200" : "text-slate-400"
                      }`}
                    >
                      {count}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* Grid */}
        {visible.length > 0 ? (
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {visible.map((item, i) => (
              <Reveal key={item.id} delay={Math.min(i, 5) * 60}>
                <figure className="group">
                  <button
                    type="button"
                    onClick={() => setLightboxIndex(i)}
                    aria-label={`Open full size: ${item.caption}`}
                    className="relative block aspect-[3/4] w-full overflow-hidden rounded-2xl bg-slate-200 shadow-tile transition-all duration-300 hover:-translate-y-1 hover:shadow-lift focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2"
                  >
                    {isBeforeAfter(item) ? (
                      <>
                        <Image
                          src={item.after}
                          alt={item.caption}
                          fill
                          sizes={GRID_SIZES}
                          className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                        />
                        <span
                          className="absolute inset-0 block transition-[clip-path] duration-500 ease-out [clip-path:inset(0_50%_0_0)] group-hover:[clip-path:inset(0_92%_0_0)]"
                          aria-hidden="true"
                        >
                          <Image
                            src={item.before}
                            alt=""
                            fill
                            sizes={GRID_SIZES}
                            className="object-cover"
                          />
                        </span>
                        <span className="absolute left-3 top-3 rounded-full bg-brand-900/85 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-white">
                          Before / After
                        </span>
                      </>
                    ) : (
                      item.src && (
                        <Image
                          src={item.src}
                          alt={item.caption}
                          fill
                          sizes={GRID_SIZES}
                          className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                        />
                      )
                    )}

                    <span className="pointer-events-none absolute inset-x-0 bottom-0 flex items-end bg-gradient-to-t from-brand-950/75 to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <span className="text-sm font-semibold text-white">
                        View full size
                      </span>
                    </span>
                  </button>
                  <figcaption className="mt-3 text-sm font-medium text-slate-600">
                    {item.caption}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        ) : noPhotosAtAll ? (
          // Nothing has been added to data/gallery.ts yet.
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: PLACEHOLDER_TILES }).map((_, i) => (
              <div key={i} className="aspect-[3/4]">
                <PhotoPlaceholder />
              </div>
            ))}
          </div>
        ) : (
          // Photos exist, just none filed under this service yet.
          <div className="mx-auto mt-10 max-w-md rounded-2xl border border-dashed border-slate-300 bg-slate-50 px-8 py-12 text-center">
            <p className="font-display text-lg font-bold text-brand-950">
              Photos coming soon
            </p>
            <p className="mt-2 text-sm text-slate-500">
              We haven&apos;t posted photos from this service yet. Browse the
              rest of our work, or ask us about your space.
            </p>
            <button
              type="button"
              onClick={() => setActive("all")}
              className="mt-6 rounded-full border border-brand-200 bg-white px-5 py-2.5 text-sm font-semibold text-brand-800 transition-all duration-200 hover:-translate-y-0.5 hover:border-accent-400 hover:shadow-tile"
            >
              See all photos
            </button>
          </div>
        )}

        {lightboxIndex !== null && visible.length > 0 && (
          <Lightbox
            items={visible}
            index={lightboxIndex}
            onClose={() => setLightboxIndex(null)}
            onIndexChange={setLightboxIndex}
          />
        )}
      </section>
    </>
  );
}

/** Compact teaser used on the home page. */
export function GalleryPreview() {
  // Lead with a before/after pair when there is one, then fill with stills.
  const featured = [
    ...featuredPairs,
    ...galleryItems.filter((item) => !item.featured),
  ].slice(0, 3);

  if (featured.length === 0) {
    return (
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 3 }).map((_, i) => (
          <div key={i} className="aspect-[3/4]">
            <PhotoPlaceholder />
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {featured.map((item) => (
        <figure key={item.id}>
          <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl bg-slate-200 shadow-tile">
            {isBeforeAfter(item) ? (
              <BeforeAfter
                before={item.before}
                after={item.after}
                title={item.caption}
                sizes={GRID_SIZES}
              />
            ) : (
              item.src && (
                <Image
                  src={item.src}
                  alt={item.caption}
                  fill
                  sizes={GRID_SIZES}
                  className="object-cover"
                />
              )
            )}
          </div>
          <figcaption className="mt-3 text-sm font-medium text-slate-600">
            {item.caption}
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
