import { Link } from "react-router-dom";
import {
  ArrowRight,
  ShieldCheck,
  Accessibility,
  Gauge,
  Users,
  Building2,
  CheckCircle2,
  Monitor,
  Server,
  Database,
  Cloud,
  Lock,
} from "lucide-react";
import { Section } from "../components/ui/Section";
import { Container } from "../components/ui/Container";
import { Button } from "../components/ui/Button";
import { Card } from "../components/ui/Card";
import { TrustBand } from "../components/ui/TrustBand";
import { NetworkPattern } from "../components/ui/NetworkPattern";
import { capabilities } from "../data/capabilities";
import { caseStudies } from "../data/caseStudies";

const lifecyclePhases = [
  {
    name: "Discovery",
    body: "User research, policy mapping and problem framing — built around the people who will use the service.",
  },
  {
    name: "Alpha",
    body: "Working prototypes that test the riskiest assumptions with real users before money is committed at scale.",
  },
  {
    name: "Beta",
    body: "Production-grade build with public testing, accessibility audits and live performance against KPIs.",
  },
  {
    name: "Live",
    body: "Operational service — supported, monitored, and continuously measured against the outcomes that matter.",
  },
  {
    name: "Iterate",
    body: "Continuous improvement based on user evidence and operational data, with graceful retirement when needed.",
  },
];

const stackLayers = [
  {
    icon: Monitor,
    name: "Interface",
    body: "Accessible, responsive front-ends on the GOV.UK Design System or bespoke. React, TypeScript, progressive enhancement.",
    tag: "Front-end",
  },
  {
    icon: Server,
    name: "Application",
    body: "APIs, business logic, decision engines and integrations. Java, Node, Python, Go and .NET in production.",
    tag: "Back-end",
  },
  {
    icon: Database,
    name: "Data",
    body: "Schema design, migrations, warehouses and lakehouses. PostgreSQL, MS SQL, Snowflake and BigQuery.",
    tag: "Database & data",
  },
  {
    icon: Cloud,
    name: "Platform",
    body: "Cloud, infrastructure-as-code, networking and CI/CD. AWS, Azure and GCP, with Terraform and Bicep.",
    tag: "Infrastructure",
  },
  {
    icon: Lock,
    name: "Security & operations",
    body: "Identity, observability, incident response and compliance evidence — engineered through every other layer.",
    tag: "Cross-cutting",
  },
];

export function Home() {
  const featured = capabilities.slice(0, 4);
  const featuredCases = caseStudies.slice(0, 2);

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-brand-cream">
        <div
          className="absolute inset-0 opacity-[0.35] [mask-image:radial-gradient(ellipse_at_top_right,black,transparent_70%)]"
          aria-hidden="true"
        >
          <div className="h-full w-full bg-grid-navy bg-[size:48px_48px]" />
        </div>
        <NetworkPattern
          className="absolute -right-24 top-12 w-[640px]"
          tone="cyan"
          opacity={0.4}
        />
        <Container className="relative py-20 md:py-32">
          <div className="grid gap-12 lg:grid-cols-12 items-center">
            <div className="lg:col-span-7">
              <span className="eyebrow">UK public sector software engineering</span>
              <h1 className="mt-4 text-5xl md:text-6xl lg:text-7xl leading-[1.05] font-semibold tracking-tight">
                Engineered services that public servants{" "}
                <span className="text-brand-red">trust</span> and citizens can
                rely on.
              </h1>
              <p className="mt-6 max-w-2xl text-lg text-brand-slate leading-relaxed">
                Redcliffe Digital is a UK software engineering firm focused on
                the public sector. We bring senior engineering experience from
                cyber security, applied AI and financial services — delivered
                against the GDS Service Standard and the assurance bar
                departments already audit to.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Button as="link" to="/capabilities" variant="primary" withArrow>
                  Explore our capabilities
                </Button>
                <Button as="link" to="/frameworks" variant="outline">
                  Ways to engage us
                </Button>
              </div>

              <dl className="mt-14 grid grid-cols-3 gap-6 max-w-xl">
                <Stat value="WCAG 2.1 AA" label="Accessibility default" />
                <Stat value="NCSC Aligned" label="Information security" />
                <Stat value="GDS Aligned" label="Service Standard" />
              </dl>
            </div>

            <div className="lg:col-span-5">
              <div className="relative">
                <div className="absolute -inset-3 bg-brand-red/10" aria-hidden="true" />
                <div className="relative bg-white border border-brand-stone p-8 shadow-soft">
                  <p className="eyebrow">Why departments choose us</p>
                  <ul className="mt-5 space-y-4">
                    {[
                      "Senior engineers — no junior bench warmers on critical work",
                      "Open standards, open source, no vendor lock-in",
                      "Applied AI and self-hosted LLM expertise for data-sovereign use cases",
                      "Discovery to live in weeks, not quarters",
                    ].map((line) => (
                      <li key={line} className="flex gap-3">
                        <CheckCircle2
                          size={20}
                          className="text-brand-red shrink-0 mt-0.5"
                          aria-hidden="true"
                        />
                        <span className="text-sm text-brand-ink leading-relaxed">
                          {line}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8 pt-6 border-t border-brand-stone">
                    <Link
                      to="/case-studies"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-brand-navy hover:text-brand-red"
                    >
                      See proven outcomes
                      <ArrowRight size={16} aria-hidden="true" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <TrustBand />

      {/* CAPABILITIES */}
      <Section tone="cream">
        <div className="grid gap-10 lg:grid-cols-12 mb-12">
          <div className="lg:col-span-5">
            <span className="eyebrow">Capabilities</span>
            <h2 className="mt-3 text-4xl md:text-5xl font-semibold leading-tight">
              Multi&#8209;disciplinary delivery, end to end.
            </h2>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <p className="text-lg text-brand-slate leading-relaxed">
              From discovery through to live service operation, our teams bring
              engineering, security, design and research together — with the
              rigour required for procurement panels and the pace required by
              ministers.
            </p>
            <Button as="link" to="/capabilities" variant="ghost" withArrow className="mt-6 -ml-5">
              All capabilities
            </Button>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {featured.map((cap) => {
            const Icon = cap.icon;
            return (
              <Card key={cap.slug}>
                <div className="w-11 h-11 bg-brand-red/10 text-brand-red flex items-center justify-center mb-5">
                  <Icon size={22} aria-hidden="true" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{cap.title}</h3>
                <p className="text-sm text-brand-slate leading-relaxed">
                  {cap.summary}
                </p>
              </Card>
            );
          })}
        </div>
      </Section>

      {/* END-TO-END DELIVERY */}
      <Section tone="white" spacing="loose">
        <div className="grid gap-12 lg:grid-cols-12 mb-16">
          <div className="lg:col-span-5">
            <span className="eyebrow">End-to-end delivery</span>
            <h2 className="mt-3 text-4xl md:text-5xl font-semibold leading-tight">
              One supplier. Full stack. End to end.
            </h2>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <p className="text-lg text-brand-slate leading-relaxed">
              From discovery research with citizens through to live service
              operation — and from accessible interface code through to
              database schema and cloud infrastructure — Redcliffe Digital is
              accountable for every layer of the product. Departments get one
              signed contract, one named owner, one team to call.
            </p>
          </div>
        </div>

        {/* Lifecycle bar */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <span className="eyebrow !text-brand-navy">Across the lifecycle</span>
            <span className="h-px flex-1 bg-brand-stone" aria-hidden="true" />
          </div>
          <ol className="grid gap-8 md:grid-cols-5 relative">
            <span
              className="hidden md:block absolute top-3 left-[10%] right-[10%] h-px bg-brand-stone"
              aria-hidden="true"
            />
            {lifecyclePhases.map((phase, i) => (
              <li key={phase.name} className="relative">
                <div className="flex items-center gap-3 mb-4">
                  <span
                    className="w-3 h-3 rounded-full bg-brand-red ring-4 ring-white relative z-10 shrink-0"
                    aria-hidden="true"
                  />
                  <span className="text-[10px] uppercase tracking-widest text-brand-slate font-semibold">
                    Phase {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="font-serif text-2xl font-semibold text-brand-navy">
                  {phase.name}
                </h3>
                <p className="mt-3 text-sm text-brand-slate leading-relaxed">
                  {phase.body}
                </p>
              </li>
            ))}
          </ol>
        </div>

        {/* Stack layers */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <span className="eyebrow !text-brand-navy">Through every layer of the stack</span>
            <span className="h-px flex-1 bg-brand-stone" aria-hidden="true" />
          </div>
          <ul className="space-y-3">
            {stackLayers.map((layer, i) => {
              const Icon = layer.icon;
              return (
                <li
                  key={layer.name}
                  className="flex items-center gap-5 md:gap-6 border border-brand-stone bg-brand-cream p-5 md:p-6 hover:border-brand-navy transition-colors"
                >
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-brand-navy text-brand-cream flex items-center justify-center shrink-0">
                    <Icon size={22} aria-hidden="true" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-baseline gap-3 flex-wrap">
                      <h3 className="text-lg md:text-xl font-semibold leading-tight">
                        {layer.name}
                      </h3>
                      <span className="text-[10px] uppercase tracking-widest text-brand-red font-semibold">
                        {layer.tag}
                      </span>
                    </div>
                    <p className="mt-1.5 text-sm text-brand-slate leading-relaxed">
                      {layer.body}
                    </p>
                  </div>
                  <div
                    className="hidden md:block font-serif text-3xl text-brand-navy/15 shrink-0 pr-2"
                    aria-hidden="true"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </Section>

      {/* HOW WE WORK / PILLARS */}
      <Section tone="cream">
        <div className="grid gap-8 md:grid-cols-3">
          <Pillar
            icon={ShieldCheck}
            title="Security by design"
            body="Threat modelling, secure SDLC and continuous compliance evidence — built into pipelines so assurance is never a last-minute scramble."
          />
          <Pillar
            icon={Accessibility}
            title="Accessibility by default"
            body="WCAG 2.1 AA targeted from week one of delivery. Inclusive research panels and assisted-digital pathways included as standard."
          />
          <Pillar
            icon={Gauge}
            title="Outcomes that hold"
            body="We measure what departments care about: case worker time saved, citizen satisfaction up, ITHC findings down, total cost of ownership reduced."
          />
        </div>
      </Section>

      {/* CASE STUDIES PREVIEW */}
      <Section tone="stone">
        <div className="grid gap-6 lg:grid-cols-12 items-end mb-10">
          <div className="lg:col-span-8">
            <span className="eyebrow">Selected work</span>
            <h2 className="mt-3 text-4xl md:text-5xl font-semibold leading-tight">
              Public sector by design — and bespoke private engagements too.
            </h2>
            <p className="mt-5 text-lg text-brand-slate leading-relaxed max-w-2xl">
              Our primary focus is the UK public sector. Where capability
              aligns, we also take selective bespoke engineering engagements
              for private clients — particularly in cyber security, applied
              AI and financial services, the sectors our delivery track
              record runs deepest.
            </p>
          </div>
          <div className="lg:col-span-4 lg:justify-self-end">
            <Button as="link" to="/case-studies" variant="outline" withArrow>
              All case studies
            </Button>
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {featuredCases.map((cs) => (
            <Link
              key={cs.slug}
              to="/case-studies"
              className="group block bg-white border border-brand-stone p-8 hover:border-brand-navy transition-colors"
            >
              <div className="flex items-center gap-3 text-xs uppercase tracking-widest text-brand-slate font-semibold mb-4">
                <Building2 size={14} aria-hidden="true" />
                {cs.sector}
              </div>
              <h3 className="text-2xl font-semibold mb-3 group-hover:text-brand-red transition-colors">
                {cs.title}
              </h3>
              <p className="text-sm text-brand-slate leading-relaxed">
                {cs.challenge}
              </p>
              <p className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-navy">
                Read case study
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </p>
            </Link>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section tone="navy" spacing="tight">
        <div className="grid gap-10 lg:grid-cols-12 items-center">
          <div className="lg:col-span-8">
            <span className="text-xs uppercase tracking-widest text-brand-cyan font-semibold">
              Procurement-ready
            </span>
            <h2 className="mt-3 text-3xl md:text-5xl font-semibold leading-tight text-brand-cream">
              Ready to brief us on a forthcoming opportunity?
            </h2>
            <p className="mt-4 max-w-2xl text-brand-cream/85 leading-relaxed">
              Send us the requirement, the framework and the SQ deadline. Our
              bid team will respond within one working day with a clarifying
              questions list and an indicative team shape.
            </p>
          </div>
          <div className="lg:col-span-4 flex flex-wrap gap-4 lg:justify-end">
            <Button as="link" to="/contact" variant="secondary" withArrow>
              Brief our bid team
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <dt className="text-xs uppercase tracking-widest text-brand-slate font-semibold">
        {label}
      </dt>
      <dd className="mt-1 font-serif text-xl text-brand-navy">{value}</dd>
    </div>
  );
}

function Pillar({
  icon: Icon,
  title,
  body,
}: {
  icon: typeof Users;
  title: string;
  body: string;
}) {
  return (
    <div>
      <div className="w-12 h-12 border border-brand-navy text-brand-navy flex items-center justify-center mb-5">
        <Icon size={22} aria-hidden="true" />
      </div>
      <h3 className="text-2xl font-semibold mb-3">{title}</h3>
      <p className="text-brand-slate leading-relaxed">{body}</p>
    </div>
  );
}
