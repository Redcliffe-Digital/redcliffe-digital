import { Section } from "../components/ui/Section";
import { Card } from "../components/ui/Card";
import { Button } from "../components/ui/Button";
import { frameworks } from "../data/frameworks";
import { ArrowRight, BadgeCheck } from "lucide-react";

const buyingProcess = [
  {
    step: "01",
    title: "Search the Digital Marketplace",
    body: "Find Redcliffe Digital under G-Cloud 14 or Digital Outcomes 6. Filter by lot, region or specialism.",
  },
  {
    step: "02",
    title: "Shortlist & request information",
    body: "Issue clarifications through the Marketplace. We respond within one working day with pricing, redacted case studies and named CVs.",
  },
  {
    step: "03",
    title: "Award & call-off",
    body: "Sign the call-off contract under the framework. Service Level Agreements, Key Performance Indicators and exit provisions all framework-standard.",
  },
  {
    step: "04",
    title: "Mobilise without a long ramp-up",
    body: "The founder is on the engagement from day one. Where additional specialism is needed, we draw on a trusted associate network with verifiable delivery track records.",
  },
];

export function Frameworks() {
  return (
    <>
      <Section tone="cream" spacing="loose">
        <div className="max-w-3xl">
          <span className="eyebrow">Frameworks &amp; routes to market</span>
          <h1 className="mt-4 text-5xl md:text-6xl font-semibold leading-tight">
            Buy from us the way your department prefers.
          </h1>
          <p className="mt-6 text-lg text-brand-slate leading-relaxed">
            We hold the major Crown Commercial Service agreements relevant to
            digital delivery, plus direct routes for departments that prefer
            bespoke procurement. Every engagement is wrapped in the standard
            Crown Commercial Service terms and conditions.
          </p>
        </div>
      </Section>

      <Section tone="white">
        <div className="grid gap-6 md:grid-cols-2">
          {frameworks.map((fw) => {
            const id = fw.name.toLowerCase().replace(/[^a-z0-9]+/g, "-");
            return (
              <Card key={fw.name} className="!p-10" id={id}>
                <div className="flex items-start gap-3 mb-4">
                  <BadgeCheck
                    size={20}
                    className="text-brand-red mt-1"
                    aria-hidden="true"
                  />
                  <p className="eyebrow !text-brand-navy">{fw.buyer}</p>
                </div>
                <h2 className="text-3xl font-semibold mb-2">
                  {fw.name}
                </h2>
                <p className="text-sm font-mono text-brand-slate mb-5">
                  {fw.reference}
                </p>
                <p className="text-brand-slate leading-relaxed">
                  {fw.description}
                </p>
                <div className="mt-6 pt-6 border-t border-brand-stone">
                  <p className="eyebrow">Lots covered</p>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {fw.lots.map((lot) => (
                      <li
                        key={lot}
                        className="text-xs px-3 py-1.5 bg-brand-stone text-brand-navy"
                      >
                        {lot}
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            );
          })}
        </div>
      </Section>

      <Section tone="cream">
        <span className="eyebrow">How to buy from us</span>
        <h2 className="mt-3 text-4xl md:text-5xl font-semibold leading-tight max-w-3xl">
          A four-step path through framework procurement.
        </h2>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {buyingProcess.map((p) => (
            <div
              key={p.step}
              className="border border-brand-stone bg-white p-7 relative"
            >
              <span className="font-serif text-5xl text-brand-red/20 absolute top-4 right-5">
                {p.step}
              </span>
              <p className="text-xs uppercase tracking-widest text-brand-red font-semibold relative">
                Step {p.step}
              </p>
              <h3 className="mt-3 text-xl font-semibold leading-tight">
                {p.title}
              </h3>
              <p className="mt-3 text-sm text-brand-slate leading-relaxed">
                {p.body}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="navy" spacing="tight">
        <div className="grid gap-8 lg:grid-cols-12 items-center">
          <div className="lg:col-span-8">
            <h2 className="text-3xl md:text-5xl font-semibold leading-tight text-brand-cream">
              Need our service definitions or pricing schedules?
            </h2>
            <p className="mt-4 max-w-2xl text-brand-cream/85">
              We can send framework-standard service definition documents,
              pricing matrices and case study packs by return.
            </p>
          </div>
          <div className="lg:col-span-4 lg:justify-self-end">
            <Button as="link" to="/contact" variant="secondary">
              Request documents <ArrowRight size={16} aria-hidden="true" />
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
