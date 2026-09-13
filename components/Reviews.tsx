import Link from "next/link";
import Reveal from "@/components/Reveal";
import { reviews, type Review } from "@/data/reviews";

function StarRating({ rating }: { rating: number }) {
  return (
    <div
      className="flex gap-0.5"
      role="img"
      aria-label={`${rating} out of 5 stars`}
    >
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          width="16"
          height="16"
          viewBox="0 0 20 20"
          className={i < rating ? "text-accent-600" : "text-slate-200"}
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M10 1.5l2.47 5.01 5.53.8-4 3.9.94 5.5L10 14.13l-4.94 2.6.94-5.5-4-3.9 5.53-.8z" />
        </svg>
      ))}
    </div>
  );
}

function ReviewCard({ review }: { review: Review }) {
  return (
    <article className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-7 shadow-tile transition-all duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-lift">
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="text-accent-200"
        aria-hidden="true"
      >
        <path d="M9.5 6C6.5 7.3 5 9.6 5 13v5h6v-6H8.4c.2-1.9 1.1-3.2 2.8-4zm9 0C15.5 7.3 14 9.6 14 13v5h6v-6h-2.6c.2-1.9 1.1-3.2 2.8-4z" />
      </svg>

      <StarRating rating={review.rating} />

      <blockquote className="mt-4 flex-1 text-slate-700 leading-relaxed">
        &ldquo;{review.quote}&rdquo;
      </blockquote>

      <footer className="mt-6 border-t border-slate-100 pt-5">
        <p className="font-display text-base font-bold text-brand-950">
          {review.name}
        </p>
        <div className="mt-2 flex flex-wrap items-center gap-2">
          <span className="rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700">
            {review.service}
          </span>
          {review.location && (
            <span className="text-xs text-slate-400">{review.location}</span>
          )}
        </div>
      </footer>
    </article>
  );
}

/**
 * Placeholder card shown until real reviews land in data/reviews.ts.
 * Shows the shape of a review without inventing a name, quote, or rating.
 */
function ReviewPlaceholder() {
  return (
    <div className="placeholder-hatch flex h-full flex-col rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-7">
      <div className="flex gap-0.5" aria-hidden="true">
        {Array.from({ length: 5 }).map((_, i) => (
          <svg
            key={i}
            width="16"
            height="16"
            viewBox="0 0 20 20"
            className="text-slate-300"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <path d="M10 1.5l2.47 5.01 5.53.8-4 3.9.94 5.5L10 14.13l-4.94 2.6.94-5.5-4-3.9 5.53-.8z" />
          </svg>
        ))}
      </div>
      <div className="mt-5 flex-1 space-y-2.5" aria-hidden="true">
        <div className="h-2.5 w-full rounded-full bg-slate-200" />
        <div className="h-2.5 w-11/12 rounded-full bg-slate-200" />
        <div className="h-2.5 w-3/5 rounded-full bg-slate-200" />
      </div>
      <div className="mt-6 border-t border-slate-200 pt-5" aria-hidden="true">
        <div className="h-3 w-24 rounded-full bg-slate-200" />
        <div className="mt-2.5 h-5 w-32 rounded-full bg-slate-200" />
      </div>
    </div>
  );
}

export default function Reviews() {
  const hasReviews = reviews.length > 0;

  return (
    <section id="reviews" className="relative bg-white py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-700">
            Customer Reviews
          </p>
          <h2 className="mt-3 font-display text-4xl font-black tracking-tight text-brand-950 sm:text-5xl">
            {hasReviews ? "What our clients say" : "Reviews coming soon"}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-slate-600">
            {hasReviews
              ? "In their words, not ours."
              : "We're a young company and we'd rather show you nothing than show you something we made up. Real reviews from real State College clients will land here as they come in."}
          </p>
        </Reveal>

        <div
          className={`mt-14 grid gap-6 ${
            reviews.length === 1
              ? "mx-auto max-w-xl"
              : reviews.length === 2
                ? "mx-auto max-w-4xl sm:grid-cols-2"
                : "sm:grid-cols-2 lg:grid-cols-3"
          }`}
        >
          {hasReviews
            ? reviews.map((review, i) => (
                <Reveal key={review.id} delay={i * 75} className="h-full">
                  <ReviewCard review={review} />
                </Reveal>
              ))
            : Array.from({ length: 3 }).map((_, i) => (
                <Reveal key={i} delay={i * 75} className="h-full">
                  <ReviewPlaceholder />
                </Reveal>
              ))}
        </div>

        {!hasReviews && (
          <Reveal delay={200}>
            <div className="mx-auto mt-12 max-w-xl rounded-2xl border border-brand-100 bg-white p-8 text-center shadow-tile">
              <p className="font-display text-xl font-bold text-brand-950">
                Worked with us already?
              </p>
              <p className="mt-2 text-sm text-slate-600">
                We&apos;d genuinely appreciate a few words about how it went.
              </p>
              <Link
                href="/contact"
                className="btn-shine mt-6 inline-flex rounded-full bg-brand-800 px-6 py-3 text-sm font-semibold text-white shadow-glow-brand transition-all duration-200 hover:-translate-y-0.5 hover:bg-brand-900 hover:shadow-glow-accent active:translate-y-0"
              >
                Leave a Review
              </Link>
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}
