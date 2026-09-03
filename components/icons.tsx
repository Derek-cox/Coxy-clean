type IconProps = { className?: string };

const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function SprayBottleIcon({ className }: IconProps) {
  return (
    <svg className={className} {...base}>
      <path d="M9 3h3v2H9z" />
      <path d="M10.5 5v2.5" />
      <path d="M8 7.5h6l1 1.5-1 1.5H8l-1-1.5z" />
      <path d="M9.5 10.5 8 21h6l-1.5-10.5" />
      <path d="M15 8.5h3.5" />
      <path d="M16.5 6.5l1.5 1-1.5 1" />
    </svg>
  );
}

export function MopBucketIcon({ className }: IconProps) {
  return (
    <svg className={className} {...base}>
      <path d="M5 11h12l-1 8a2 2 0 01-2 2H8a2 2 0 01-2-2z" />
      <path d="M4 11h14" />
      <path d="M9 11a2 2 0 014 0" />
      <path d="M17 6l2-3" />
      <path d="M17 6c1.5 0 2.7 1 3 2.5" />
      <path d="M17 3v8" />
    </svg>
  );
}

export function BuildingIcon({ className }: IconProps) {
  return (
    <svg className={className} {...base}>
      <rect x="4" y="3" width="10" height="18" rx="1" />
      <path d="M14 8h6v13h-6" />
      <path d="M7 7h1M10 7h1M7 11h1M10 11h1M7 15h1M10 15h1" />
      <path d="M17 12h1M17 16h1" />
    </svg>
  );
}

export function SuitcaseIcon({ className }: IconProps) {
  return (
    <svg className={className} {...base}>
      <rect x="3" y="8" width="18" height="12" rx="2" />
      <path d="M9 8V6a2 2 0 012-2h2a2 2 0 012 2v2" />
      <path d="M3 13h18" />
      <path d="M11 13v2" />
    </svg>
  );
}

export function ShieldIcon({ className }: IconProps) {
  return (
    <svg className={className} {...base}>
      <path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  );
}

export function HomeHeartIcon({ className }: IconProps) {
  return (
    <svg className={className} {...base}>
      <path d="M4 11l8-7 8 7" />
      <path d="M6 10v9a1 1 0 001 1h10a1 1 0 001-1v-9" />
      <path d="M10 15c0-1.1.9-2 2-2 .6 0 1.1.3 1.5.7.4-.4.9-.7 1.5-.7 1.1 0 2 .9 2 2 0 1.6-3.5 3.3-3.5 3.3S10 16.6 10 15z" />
    </svg>
  );
}

export function ChatIcon({ className }: IconProps) {
  return (
    <svg className={className} {...base}>
      <path d="M4 5h16v11H9l-4 3v-3H4z" />
      <path d="M8 9h8M8 12h5" />
    </svg>
  );
}

export function ClockIcon({ className }: IconProps) {
  return (
    <svg className={className} {...base}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 2" />
    </svg>
  );
}

export function CoinIcon({ className }: IconProps) {
  return (
    <svg className={className} {...base}>
      <ellipse cx="12" cy="7" rx="7" ry="3" />
      <path d="M5 7v10c0 1.66 3.13 3 7 3s7-1.34 7-3V7" />
      <path d="M5 12c0 1.66 3.13 3 7 3s7-1.34 7-3" />
    </svg>
  );
}

export function MapPinIcon({ className }: IconProps) {
  return (
    <svg className={className} {...base}>
      <path d="M12 21s7-6.1 7-11.5A7 7 0 105 9.5C5 14.9 12 21 12 21z" />
      <circle cx="12" cy="9.5" r="2.3" />
    </svg>
  );
}

export function HandshakeIcon({ className }: IconProps) {
  return (
    <svg className={className} {...base}>
      <path d="M2 12l4-3 3 2 3-2 3 2" />
      <path d="M9 11l2.5 2.5a1.4 1.4 0 002-2L10 8" />
      <path d="M12 11l1.5 1.5a1.4 1.4 0 002-2L13 8" />
      <path d="M6 9L3 12l3 4 3-2" />
      <path d="M18 9l3 3-3 4-3-2" />
      <path d="M14.5 9.5L13 8l-2.5-1.5-2 1" />
    </svg>
  );
}

export function SparkleChecklistIcon({ className }: IconProps) {
  return (
    <svg className={className} {...base}>
      <rect x="4" y="4" width="12" height="16" rx="1.5" />
      <path d="M7.5 9l1 1 2-2M7.5 14l1 1 2-2" />
      <path d="M12.5 8.5h1.5M12.5 13.5h1.5" />
      <path d="M18 4l.8 1.8L20.5 6.5l-1.7.7L18 9l-.8-1.8-1.7-.7 1.7-.7z" />
    </svg>
  );
}
