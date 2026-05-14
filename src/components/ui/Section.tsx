import type { PropsWithChildren } from "react";
import { Container } from "./Container";

type SectionProps = PropsWithChildren<{
  id?: string;
  tone?: "cream" | "white" | "navy" | "stone";
  spacing?: "tight" | "regular" | "loose";
  className?: string;
}>;

const toneMap: Record<NonNullable<SectionProps["tone"]>, string> = {
  cream: "bg-brand-cream",
  white: "bg-white",
  navy: "bg-brand-navy text-brand-cream",
  stone: "bg-brand-stone",
};

const spacingMap: Record<NonNullable<SectionProps["spacing"]>, string> = {
  tight: "py-12 md:py-16",
  regular: "py-16 md:py-24",
  loose: "py-24 md:py-32",
};

export function Section({
  children,
  id,
  tone = "cream",
  spacing = "regular",
  className = "",
}: SectionProps) {
  return (
    <section
      id={id}
      className={`${toneMap[tone]} ${spacingMap[spacing]} ${className}`}
    >
      <Container>{children}</Container>
    </section>
  );
}
