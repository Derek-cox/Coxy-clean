export default function TricolorRibbon({
  className,
}: {
  className: string;
}) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute z-10 w-48 rotate-45 ${className}`}
    >
      <div className="flex h-6 shadow-md ring-1 ring-black/5">
        <div className="flex-1 bg-brand-600" />
        <div className="flex-1 bg-white" />
        <div className="flex-1 bg-accent-600" />
      </div>
    </div>
  );
}
