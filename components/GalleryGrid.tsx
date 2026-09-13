"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import BeforeAfter from "@/components/BeforeAfter";
import Lightbox from "@/components/Lightbox";
import PhotoPlaceholder from "@/components/PhotoPlaceholder";
import {
  PLACEHOLDER_TILES,
  galleryCategories,
  galleryItems,
  isBeforeAfter,
  type GalleryCategoryId,
} from "@/data/gallery";

const GRID_SIZES = "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw";

export default function GalleryGrid() {
  const [active, setActive] = useState<GalleryCategoryId>(
    galleryCategories[0].id
  );
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const visible = useMemo(
    () => galleryItems.filter((item) => item.category === active),
    [active]
  );

  const activeCategory =
    galleryCategories.find((category) => category.id === active) ??
    galleryCategories[0];

  return (
    <div>
      {/* Category tabs — a scrollable rail on mobile so labels never wrap. */}
      <div
        role="tablist"
        aria-label="Photo categories"
        className="no-scrollbar -mx-6 flex gap-2 overflow-x-auto px-6 pb-1 sm:mx-0 sm:flex-wrap sm:justify-center sm:px-0"
      >
        {galleryCategories.map((category) => {
          const count = galleryItems.filter(
            (item) => item.category === category.id
          ).length;
          const selected = category.id === active;
          return (
            <button
              key={category.id}
              type="button"
              role="tab"
              aria-selected={selected}
              onClick={() => {
                setActive(category.id);
                setLightboxIndex(null);
              }}
              className={`flex-shrink-0 rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 ${
                selected
                  ? "bg-brand-800 text-white shadow-glow-brand"
                  : "border border-slate-200 bg-white text-slate-600 hover:-translate-y-0.5 hover:border-brand-300 hover:text-brand-700 hover:shadow-tile"
              }`}
            >
              {category.label}
              {count > 0 && (
                <span
                  className={`ml-2 text-xs font-medium ${
                    selected ? "text-accent-300" : "text-slate-400"
                  }`}
                >
                  {count}
                </span>
              )}
            </button>
          );
        })}
      </div>

      <p className="mt-6 text-center text-sm text-slate-500">
        {activeCategory.blurb}
      </p>

      {/* Grid */}
      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {visible.length === 0
          ? Array.from({ length: PLACEHOLDER_TILES }).map((_, i) => (
              <div key={i} className="aspect-[4/3]">
                <PhotoPlaceholder />
              </div>
            ))
          : visible.map((item, i) => (
              <figure key={item.id} className="group">
                <button
                  type="button"
                  onClick={() => setLightboxIndex(i)}
                  aria-label={`Open ${item.title} in full size`}
                  className="relative block aspect-[4/3] w-full overflow-hidden rounded-2xl bg-slate-200 shadow-tile transition-all duration-300 hover:-translate-y-1 hover:shadow-lift focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2"
                >
                  {isBeforeAfter(item) ? (
                    // Non-interactive preview of the pair; the real slider
                    // lives in the lightbox so a tap on the grid opens it.
                    <>
                      <Image
                        src={item.after}
                        alt={`${item.title} — after cleaning`}
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
                      <span className="absolute left-3 top-3 rounded-full bg-brand-900/80 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-white">
                        Before / After
                      </span>
                    </>
                  ) : (
                    item.src && (
                      <Image
                        src={item.src}
                        alt={item.title}
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
                  {item.title}
                </figcaption>
              </figure>
            ))}
      </div>

      {visible.length === 0 && (
        <p className="mt-8 text-center text-sm text-slate-400">
          We&apos;re putting together photos from recent{" "}
          {activeCategory.label.toLowerCase()} jobs. Check back soon.
        </p>
      )}

      {lightboxIndex !== null && visible.length > 0 && (
        <Lightbox
          items={visible}
          index={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onIndexChange={setLightboxIndex}
        />
      )}
    </div>
  );
}

/** Small, non-interactive gallery teaser used on the home page. */
export function GalleryPreview() {
  const featured = galleryItems.slice(0, 3);

  if (featured.length === 0) {
    return (
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 3 }).map((_, i) => (
          <div key={i} className="aspect-[4/3]">
            <PhotoPlaceholder />
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {featured.map((item) => (
        <div
          key={item.id}
          className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-slate-200 shadow-tile transition-all duration-300 hover:-translate-y-1 hover:shadow-lift"
        >
          {isBeforeAfter(item) ? (
            <BeforeAfter
              before={item.before}
              after={item.after}
              title={item.title}
              sizes={GRID_SIZES}
            />
          ) : (
            item.src && (
              <Image
                src={item.src}
                alt={item.title}
                fill
                sizes={GRID_SIZES}
                className="object-cover"
              />
            )
          )}
        </div>
      ))}
    </div>
  );
}
