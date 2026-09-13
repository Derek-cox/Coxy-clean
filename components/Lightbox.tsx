"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef } from "react";
import BeforeAfter from "@/components/BeforeAfter";
import { isBeforeAfter, type GalleryItem } from "@/data/gallery";

export default function Lightbox({
  items,
  index,
  onClose,
  onIndexChange,
}: {
  items: GalleryItem[];
  index: number;
  onClose: () => void;
  onIndexChange: (next: number) => void;
}) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const item = items[index];
  const count = items.length;

  const goPrev = useCallback(
    () => onIndexChange((index - 1 + count) % count),
    [index, count, onIndexChange]
  );
  const goNext = useCallback(
    () => onIndexChange((index + 1) % count),
    [index, count, onIndexChange]
  );

  // Keyboard: Esc closes, arrows navigate.
  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowLeft") goPrev();
      if (event.key === "ArrowRight") goNext();
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [onClose, goPrev, goNext]);

  // Lock background scroll while open and move focus into the dialog.
  useEffect(() => {
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      document.body.style.overflow = previous;
    };
  }, []);

  if (!item) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`${item.caption} — photo ${index + 1} of ${count}`}
      className="fixed inset-0 z-[100] flex flex-col bg-brand-950/95 backdrop-blur-sm"
      onClick={onClose}
    >
      {/* Top bar */}
      <div className="flex flex-shrink-0 items-center justify-between gap-4 px-4 py-4 sm:px-6">
        <p className="text-sm font-medium text-white/70">
          {index + 1} / {count}
        </p>
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          aria-label="Close gallery"
          className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-300"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            aria-hidden="true"
          >
            <path d="M6 6l12 12M18 6L6 18" />
          </svg>
        </button>
      </div>

      {/* Stage */}
      <div
        className="flex min-h-0 flex-1 items-center justify-center px-3 sm:px-6"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="relative flex h-full w-full max-w-5xl items-center justify-center">
          {count > 1 && (
            <button
              type="button"
              onClick={goPrev}
              aria-label="Previous photo"
              className="absolute left-0 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-300 sm:-left-4 sm:h-12 sm:w-12"
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M15 5l-7 7 7 7" />
              </svg>
            </button>
          )}

          <div className="relative max-h-full w-full">
            <div className="relative mx-auto aspect-[4/3] max-h-[68vh] w-full max-w-3xl overflow-hidden rounded-2xl bg-brand-900">
              {isBeforeAfter(item) ? (
                <BeforeAfter
                  before={item.before}
                  after={item.after}
                  title={item.caption}
                  sizes="(min-width: 768px) 768px, 100vw"
                  priority
                />
              ) : (
                item.src && (
                  <Image
                    src={item.src}
                    alt={item.caption}
                    fill
                    sizes="(min-width: 768px) 768px, 100vw"
                    priority
                    className="object-contain"
                  />
                )
              )}
            </div>
          </div>

          {count > 1 && (
            <button
              type="button"
              onClick={goNext}
              aria-label="Next photo"
              className="absolute right-0 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-300 sm:-right-4 sm:h-12 sm:w-12"
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M9 5l7 7-7 7" />
              </svg>
            </button>
          )}
        </div>
      </div>

      {/* Caption */}
      <div
        className="flex-shrink-0 px-6 py-5 text-center"
        onClick={(event) => event.stopPropagation()}
      >
        <p className="font-display text-lg font-bold text-white">
          {item.caption}
        </p>
        {isBeforeAfter(item) && (
          <p className="mt-1 text-xs text-white/50">
            Drag the handle to compare before and after
          </p>
        )}
      </div>
    </div>
  );
}
