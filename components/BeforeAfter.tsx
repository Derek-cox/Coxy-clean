"use client";

import Image from "next/image";
import { useId, useState } from "react";

/**
 * Drag-to-compare before/after slider.
 *
 * The drag handle is a real <input type="range"> laid over the images at
 * zero opacity, which gets us pointer, touch, and keyboard support for free
 * and keeps the control announceable to screen readers.
 */
export default function BeforeAfter({
  before,
  after,
  title,
  sizes,
  priority = false,
  rounded = "rounded-2xl",
}: {
  before: string;
  after: string;
  title: string;
  sizes: string;
  priority?: boolean;
  rounded?: string;
}) {
  const [position, setPosition] = useState(50);
  const id = useId();

  return (
    <div
      className={`group/compare relative h-full w-full select-none overflow-hidden bg-slate-200 ${rounded}`}
    >
      {/* After: the full-bleed base layer. */}
      <Image
        src={after}
        alt={`${title} — after cleaning`}
        fill
        sizes={sizes}
        priority={priority}
        className="object-cover"
        draggable={false}
      />

      {/* Before: clipped from the right edge as the handle moves. */}
      <div
        className="absolute inset-0"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      >
        <Image
          src={before}
          alt={`${title} — before cleaning`}
          fill
          sizes={sizes}
          priority={priority}
          className="object-cover"
          draggable={false}
        />
      </div>

      {/* Corner labels. */}
      <span className="pointer-events-none absolute left-3 top-3 rounded-full bg-brand-900/80 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-white backdrop-blur-sm">
        Before
      </span>
      <span className="pointer-events-none absolute right-3 top-3 rounded-full bg-accent-400/95 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-brand-900 backdrop-blur-sm">
        After
      </span>

      {/* Divider line + grab handle. */}
      <div
        className="pointer-events-none absolute inset-y-0 w-0.5 bg-white shadow-[0_0_10px_rgba(0,0,0,0.35)]"
        style={{ left: `${position}%` }}
      >
        <span className="absolute top-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-white bg-white/95 text-brand-800 shadow-lg transition-transform duration-200 group-hover/compare:scale-110">
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M9 6l-4 6 4 6M15 6l4 6-4 6" />
          </svg>
        </span>
      </div>

      <label htmlFor={id} className="sr-only">
        {`Compare before and after: ${title}`}
      </label>
      <input
        id={id}
        type="range"
        min={0}
        max={100}
        step={1}
        value={position}
        onChange={(event) => setPosition(Number(event.target.value))}
        aria-label={`Compare before and after: ${title}`}
        className="compare-range absolute inset-0 h-full w-full opacity-0"
      />
    </div>
  );
}
