import type { PropsWithChildren } from "react";
import { Section } from "../../components/ui/Section";

type LegalPageProps = PropsWithChildren<{
  title: string;
  eyebrow: string;
  lastReviewed: string;
  intro?: string;
}>;

export function LegalPage({
  title,
  eyebrow,
  lastReviewed,
  intro,
  children,
}: LegalPageProps) {
  return (
    <>
      <Section tone="cream" spacing="loose">
        <div className="max-w-3xl">
          <span className="eyebrow">{eyebrow}</span>
          <h1 className="mt-4 text-4xl md:text-5xl font-semibold leading-tight">
            {title}
          </h1>
          {intro && (
            <p className="mt-6 text-lg text-brand-slate leading-relaxed">
              {intro}
            </p>
          )}
          <p className="mt-6 text-sm text-brand-slate">
            Last reviewed: {lastReviewed}
          </p>
        </div>
      </Section>

      <Section tone="white">
        <div className="max-w-prose mx-auto prose-gov [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:mt-12 [&_h2]:mb-4 [&_h3]:text-lg [&_h3]:font-semibold [&_h3]:mt-8 [&_h3]:mb-3 [&_p]:mb-4 [&_ul]:mb-4 [&_ul]:pl-5 [&_ul]:list-disc [&_li]:mb-2 [&_a]:text-brand-navy [&_a]:underline [&_a]:decoration-brand-cyan [&_a]:underline-offset-4">
          {children}
        </div>
      </Section>
    </>
  );
}
