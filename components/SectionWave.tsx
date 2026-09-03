export default function SectionWave({
  fill,
  className = "",
}: {
  fill: string;
  className?: string;
}) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-x-0 bottom-0 h-12 overflow-hidden sm:h-20 ${className}`}
    >
      <svg
        className="absolute bottom-0 h-full w-full"
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
      >
        <path
          d="M0,64 C240,112 480,8 720,40 C960,72 1200,114 1440,58 L1440,120 L0,120 Z"
          fill={fill}
        />
      </svg>
    </div>
  );
}
