type Variant = "wave" | "angle" | "curve" | "tilt";

const PATHS: Record<Variant, string> = {
  // Gentle double-crest wave.
  wave: "M0,64 C240,112 480,8 720,40 C960,72 1200,114 1440,58 L1440,120 L0,120 Z",
  // Single clean diagonal.
  angle: "M0,120 L1440,32 L1440,120 Z",
  // Wide, shallow arc — reads as a "swoosh" under hero sections.
  curve: "M0,120 C360,20 1080,20 1440,120 Z",
  // Subtle asymmetric slant, softer than `angle`.
  tilt: "M0,96 C480,128 960,48 1440,80 L1440,120 L0,120 Z",
};

/**
 * Shaped transition between two stacked sections. Render inside a
 * `relative` section; `fill` should be the background color of the section
 * that comes NEXT so the shape appears to belong to it.
 */
export default function SectionDivider({
  fill,
  variant = "wave",
  className = "",
}: {
  fill: string;
  variant?: Variant;
  className?: string;
}) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-x-0 bottom-0 h-10 overflow-hidden sm:h-16 md:h-20 ${className}`}
    >
      <svg
        className="absolute bottom-0 h-full w-full"
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
      >
        <path d={PATHS[variant]} fill={fill} />
      </svg>
    </div>
  );
}
