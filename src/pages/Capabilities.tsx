import { Section } from "../components/ui/Section";
import { Button } from "../components/ui/Button";
import { capabilities } from "../data/capabilities";
import { CheckCircle2 } from "lucide-react";

export function Capabilities() {
  return (
    <>
      <Section tone="cream" spacing="loose">
        <div className="max-w-3xl">
          <span className="eyebrow">Capabilities</span>
          <h1 className="mt-4 text-5xl md:text-6xl font-semibold leading-tight">
            Everything you need to take a public service from policy to live.
          </h1>
          <p className="mt-6 text-lg text-brand-slate leading-relaxed">
            We are organised around the disciplines departmental teams actually
            use day to day. Engagements can be a single specialist or a full
            multi-disciplinary team, under direct contract or as a specialist
            sub-contractor to an existing prime supplier.
          </p>
        </div>
      </Section>

      <Section tone="white">
        <div className="space-y-16">
          {capabilities.map((cap, idx) => {
            const Icon = cap.icon;
            const reverse = idx % 2 === 1;
            return (
              <article
                key={cap.slug}
                id={cap.slug}
                className={`grid gap-10 lg:grid-cols-12 items-start ${
                  reverse ? "lg:[&>div:first-child]:order-2" : ""
                }`}
              >
                <div className="lg:col-span-5">
                  <div className="border border-brand-stone bg-brand-cream p-8">
                    <Icon size={28} className="text-brand-red" aria-hidden="true" />
                    <p className="eyebrow mt-5">Capability {String(idx + 1).padStart(2, "0")}</p>
                    <h2 className="mt-2 text-3xl font-semibold leading-tight">
                      {cap.title}
                    </h2>
                  </div>
                </div>
                <div className="lg:col-span-7">
                  <p className="text-lg text-brand-slate leading-relaxed">
                    {cap.summary}
                  </p>
                  <ul className="mt-6 grid sm:grid-cols-2 gap-3">
                    {cap.highlights.map((h) => (
                      <li key={h} className="flex gap-3 text-sm text-brand-ink">
                        <CheckCircle2
                          size={18}
                          className="text-brand-red shrink-0 mt-0.5"
                          aria-hidden="true"
                        />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            );
          })}
        </div>
      </Section>

      <Section tone="navy" spacing="tight">
        <div className="grid gap-8 lg:grid-cols-12 items-center">
          <div className="lg:col-span-8">
            <h2 className="text-4xl md:text-5xl font-semibold leading-tight text-brand-cream">
              Have a requirement coming up?
            </h2>
            <p className="mt-4 max-w-2xl text-brand-cream/85">
              Send us the role or outcome, the framework, and the start date.
              We will come back with a clarifying questions list and an
              indicative team shape.
            </p>
          </div>
          <div className="lg:col-span-4 lg:justify-self-end">
            <Button as="link" to="/contact" variant="secondary" withArrow>
              Brief our team
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
