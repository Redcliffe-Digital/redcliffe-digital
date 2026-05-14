type LogoProps = {
  variant?: "dark" | "light";
  size?: "sm" | "md";
};

export function Logo({ variant = "dark", size = "md" }: LogoProps) {
  const wordmarkColor = variant === "dark" ? "text-brand-navy" : "text-brand-cream";
  const subColor = variant === "dark" ? "text-brand-red" : "text-brand-cyan";
  const sizing =
    size === "sm"
      ? { word: "text-xl", sub: "text-[10px]" }
      : { word: "text-2xl", sub: "text-[11px]" };

  return (
    <div className="flex items-center gap-3" aria-label="Redcliffe Digital">
      <Mark variant={variant} />
      <div className="flex flex-col leading-none">
        <span
          className={`${sizing.word} ${wordmarkColor} font-serif font-semibold tracking-tight`}
        >
          Redcliffe
        </span>
        <span
          className={`${sizing.sub} ${subColor} font-sans font-semibold tracking-widest uppercase mt-0.5`}
        >
          Digital
        </span>
      </div>
    </div>
  );
}

function Mark({ variant }: { variant: "dark" | "light" }) {
  const cliff = variant === "dark" ? "#A8201A" : "#A8201A";
  const net = variant === "dark" ? "#0A2342" : "#F8F7F4";
  const node = "#2EC4B6";
  return (
    <svg
      width="36"
      height="36"
      viewBox="0 0 40 40"
      role="img"
      aria-hidden="true"
      className="shrink-0"
    >
      <path
        d="M10 22 L14 12 L18 18 L22 8 L26 14 L30 10 L30 24 L10 24 Z"
        fill={cliff}
      />
      <g stroke={net} strokeWidth="0.8" fill="none" opacity="0.85">
        <path d="M6 26 L14 22 L22 28 L30 24 L34 30" />
        <path d="M10 30 L18 26 L26 32" />
        <path d="M14 22 L18 26 L22 28" />
      </g>
      <g fill={node}>
        <circle cx="6" cy="26" r="1.4" />
        <circle cx="14" cy="22" r="1.4" />
        <circle cx="22" cy="28" r="1.4" />
        <circle cx="30" cy="24" r="1.4" />
        <circle cx="34" cy="30" r="1.4" />
        <circle cx="10" cy="30" r="1.4" />
        <circle cx="18" cy="26" r="1.4" />
        <circle cx="26" cy="32" r="1.4" />
      </g>
    </svg>
  );
}
