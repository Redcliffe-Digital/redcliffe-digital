import type { PropsWithChildren } from "react";

type CardProps = PropsWithChildren<{
  className?: string;
  tone?: "white" | "navy";
  id?: string;
}>;

const toneMap = {
  white: "bg-white text-brand-ink border-brand-stone",
  navy: "bg-brand-navy text-brand-cream border-brand-navy",
};

export function Card({ children, className = "", tone = "white", id }: CardProps) {
  return (
    <div
      id={id}
      className={`relative border ${toneMap[tone]} p-7 md:p-8 transition-all duration-200 hover:shadow-soft ${className}`}
    >
      {children}
    </div>
  );
}
