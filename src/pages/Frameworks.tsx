import { Section } from "../components/ui/Section";
import { Card } from "../components/ui/Card";
import { Button } from "../components/ui/Button";
import { routes } from "../data/frameworks";
import { ArrowRight, CheckCircle2, Clock } from "lucide-react";

const buyingProcess = [
  {
    step: "01",
    title: "Introduction",
    body: "Send us the requirement, the framework (if known) and the timeline. We respond within one UK working day with clarifying questions and an indicative team shape.",
  },
  {
    step: "02",
    title: "Proposal",
    body: "We produce a written proposal — scope, named people, milestones, pricing — referencing the assurance evidence relevant to your authority.",
  },
  {
    step: "03",
    title: "Contract",
    body: "Bespoke contract direct with the authority, or call-off under a prime supplier's framework. We can mirror standard Crown Commercial Service clauses where preferred.",
  },
  {
    step: "04",
    title: "Mobilise",
    body: "The founder is on the engagement from day one. Where additional specialism is needed, we draw on a trusted associate network with verifiable delivery track records.",
  },
];

export function Frameworks() {
  return (
    <>
      <Section tone="cream" spacing="loose">
        <div className="max-w-3xl">
          <span className="eyebrow">Routes to market</span>
          <h1 className="mt-4 text-5xl md:text-6xl font-semibold leading-tight">
            How to engage Redcliffe Digital.
          </h1>
          <p className="mt-6 text-lg text-brand-slate leading-relaxed">
            Redcliffe Digital is a recently incorporated firm. We currently
            engage with authorities under direct contract, and as a specialist
            sub-contractor to prime suppliers on existing frameworks. We are
            actively preparing applications for the next G-Cloud and Digital
            Outcomes refreshes.
          </p>
        </div>
      </Section>

      <Section tone="white">
        <div className="grid gap-6 md:grid-cols-2">
          {routes.map((r) => (
            <Card key={r.slug} className="!p-10" id={r.slug}>
              <div className="flex items-center gap-3 mb-4">
                {r.status === "active" ? (
                  <CheckCircle2
                    size={18}
                    className="text-brand-red"
                    aria-hidden="true"
                  />
                ) : (
                  <Clock
                    size={18}
                    className="text-brand-slate"
                    aria-hidden="true"
                  />
                )}
                <p
                  className={`eyebrow !${
                    r.status === "active" ? "text-brand-red" : "text-brand-slate"
                  }`}
                >
                  {r.status === "active" ? "Available now" : "Targeting next refresh"}
                </p>
              </div>
              <h2 className="text-3xl font-semibold mb-4">{r.name}</h2>
              <p className="text-brand-slate leading-relaxed">{r.summary}</p>
              <div className="mt-6 pt-6 border-t border-brand-stone">
                <ul className="space-y-2">
                  {r.details.map((d) => (
                    <li
                      key={d}
                      className="flex gap-2 text-sm text-brand-ink leading-relaxed"
                    >
                      <span
                        className="w-1.5 h-1.5 bg-brand-red mt-2 shrink-0"
                        aria-hidden="true"
                      />
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      <Section tone="cream">
        <span className="eyebrow">Engagement process</span>
        <h2 className="mt-3 text-4xl md:text-5xl font-semibold leading-tight max-w-3xl">
          From first conversation to mobilised team.
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
              Need our company information pack for due diligence?
            </h2>
            <p className="mt-4 max-w-2xl text-brand-cream/85">
              We can send a procurement information pack — policies, assurance
              statements, insurance certificates and a capability statement — by
              return.
            </p>
          </div>
          <div className="lg:col-span-4 lg:justify-self-end">
            <Button as="link" to="/contact" variant="secondary">
              Request the pack <ArrowRight size={16} aria-hidden="true" />
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
