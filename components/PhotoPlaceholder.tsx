/**
 * The gray "Photo coming soon" tile used wherever a real photo hasn't been
 * dropped into public/gallery yet. Deliberately not a stock photo.
 */
export default function PhotoPlaceholder({
  label = "Photo coming soon",
  className = "",
}: {
  label?: string;
  className?: string;
}) {
  return (
    <div
      className={`placeholder-hatch flex h-full w-full flex-col items-center justify-center gap-3 rounded-2xl border border-dashed border-slate-300 bg-slate-100 p-6 text-center ${className}`}
    >
      <svg
        width="30"
        height="30"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-slate-400"
        aria-hidden="true"
      >
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <circle cx="8.5" cy="10" r="1.5" />
        <path d="M21 16l-5-5-4.5 4.5" />
        <path d="M3 18l4-4 2.5 2.5" />
      </svg>
      <span className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">
        {label}
      </span>
    </div>
  );
}
