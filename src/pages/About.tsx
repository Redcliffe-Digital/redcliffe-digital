import { Section } from "../components/ui/Section";
import { Container } from "../components/ui/Container";
import { Card } from "../components/ui/Card";
import { Button } from "../components/ui/Button";
import { company } from "../data/company";
import {
  Compass,
  HandHeart,
  Microscope,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const values = [
  {
    icon: HandHeart,
    title: "Public service first",
    body: "We build for the citizens, clinicians and case workers who actually use the service — not for procurement decks.",
  },
  {
    icon: Microscope,
    title: "Evidence over opinion",
    body: "Every architectural and design decision can be traced to a piece of user research, a metric, or a stated risk.",
  },
  {
    icon: ShieldCheck,
    title: "Secure by default",
    body: "Security and accessibility are not phases. They are properties of every commit, story and release.",
  },
  {
    icon: Sparkles,
    title: "Capability uplift",
    body: "Wherever possible we pair with departmental teams so internal capability rises with every engagement.",
  },
];

const director = {
  name: "Joseph Millington",
  role: "Founder & Director",
  bio: "Software engineer with delivery experience across cyber security, applied AI and financial services. Sole director and 100% shareholder of Redcliffe Digital Ltd. Accountable for every engagement.",
  expertise: [
    "Cyber security & applied AI",
    "Self-hosted LLMs and ML infrastructure",
    "Financial services back-end engineering",
  ],
};

export function About() {
  return (
    <>
      <Section tone="cream" spacing="loose">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <span className="eyebrow">About Redcliffe Digital</span>
            <h1 className="mt-4 text-5xl md:text-6xl font-semibold leading-tight">
              A digital engineering company built for the public sector.
            </h1>
            <p className="mt-6 text-lg text-brand-slate leading-relaxed">
              Redcliffe Digital was founded to bring engineering rigour from
              cyber security, applied AI and financial services to the UK
              public sector. We are a recently incorporated firm built around
              a senior team with strong commercial delivery track records —
              now focused entirely on the public sector.
            </p>
          </div>
          <div className="lg:col-span-5">
            <div className="bg-white border border-brand-stone p-8">
              <p className="eyebrow">Company facts</p>
              <dl className="mt-5 grid grid-cols-2 gap-5 text-sm">
                <Fact label="Legal name" value={company.legalName} />
                <Fact label="Companies House" value={company.companiesHouseNumber} />
                <Fact label="Incorporated" value={company.incorporationDate} />
                <Fact label="ICO" value={company.icoRegistration} />
                {company.vatNumber ? (
                  <Fact label="VAT" value={company.vatNumber} />
                ) : null}
                {company.dunsNumber ? (
                  <Fact label="DUNS" value={company.dunsNumber} />
                ) : null}
              </dl>
            </div>
          </div>
        </div>
      </Section>

      <Section tone="white">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Compass size={28} className="text-brand-red" aria-hidden="true" />
            <h2 className="mt-4 text-3xl font-semibold">Our mission</h2>
          </div>
          <div className="lg:col-span-8">
            <p className="text-lg text-brand-slate leading-relaxed">
              To make government services that people can actually rely on —
              services that load in three seconds, work on a five-year-old phone
              with a screen reader, and stand up to scrutiny from internal audit,
              the National Audit Office and the public alike.
            </p>
            <p className="mt-4 text-lg text-brand-slate leading-relaxed">
              We measure success by outcomes that the department can defend at
              Public Accounts Committee — not by hours billed.
            </p>
          </div>
        </div>
      </Section>

      <Section tone="cream">
        <span className="eyebrow">How we work</span>
        <h2 className="mt-3 text-4xl md:text-5xl font-semibold leading-tight max-w-3xl">
          Four principles that shape every engagement.
        </h2>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {values.map((v) => {
            const Icon = v.icon;
            return (
              <Card key={v.title}>
                <Icon size={24} className="text-brand-red mb-5" aria-hidden="true" />
                <h3 className="text-xl font-semibold mb-3">{v.title}</h3>
                <p className="text-brand-slate leading-relaxed">{v.body}</p>
              </Card>
            );
          })}
        </div>
      </Section>

      <Section tone="white">
        <div className="grid gap-10 lg:grid-cols-12 mb-10">
          <div className="lg:col-span-6">
            <span className="eyebrow">Leadership</span>
            <h2 className="mt-3 text-4xl md:text-5xl font-semibold leading-tight">
              Founder-led, by design.
            </h2>
          </div>
          <div className="lg:col-span-6">
            <p className="text-lg text-brand-slate leading-relaxed">
              We are a tightly-held founder-led firm. The person who answers
              your bid clarifications is the person on the call when the
              service goes live. No partner pyramid; no junior bench warmers
              on critical work.
            </p>
          </div>
        </div>
        <div className="grid gap-10 lg:grid-cols-12 items-start">
          <div className="lg:col-span-5">
            <div className="aspect-[4/5] bg-brand-navy relative overflow-hidden">
              <div
                className="absolute inset-0 bg-grid-navy bg-[size:32px_32px] opacity-30"
                aria-hidden="true"
              />
              <div className="absolute inset-0 flex items-end p-6">
                <span className="text-xs uppercase tracking-widest text-brand-cyan font-semibold">
                  Replace with director portrait
                </span>
              </div>
            </div>
          </div>
          <div className="lg:col-span-7">
            <p className="eyebrow">{director.role}</p>
            <h3 className="mt-2 text-3xl md:text-4xl font-semibold leading-tight">
              {director.name}
            </h3>
            <p className="mt-6 text-lg text-brand-slate leading-relaxed">
              {director.bio}
            </p>
            <div className="mt-8 pt-6 border-t border-brand-stone">
              <p className="eyebrow">Areas of focus</p>
              <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                {director.expertise.map((item) => (
                  <li
                    key={item}
                    className="text-sm text-brand-ink flex items-center gap-2 before:content-[''] before:w-1.5 before:h-1.5 before:bg-brand-red before:rounded-full"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Section>

      <Section tone="cream">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <span className="eyebrow">How we resource engagements</span>
            <h2 className="mt-3 text-4xl font-semibold leading-tight">
              Core team plus a trusted associate network.
            </h2>
          </div>
          <div className="lg:col-span-7">
            <p className="text-lg text-brand-slate leading-relaxed">
              Every engagement is led directly by the founder. Where
              additional specialism is needed — a particular cloud architect,
              a Welsh language content designer, a CHECK-certified penetration
              tester — we draw on a vetted network of associates with
              verifiable delivery track records.
            </p>
            <p className="mt-4 text-lg text-brand-slate leading-relaxed">
              Associates are contracted under our standard terms, security
              cleared where required, and accountable to the founder.
              Departments get the senior person they evaluated at SQ stage,
              with the breadth of skills a multi-disciplinary delivery
              actually needs.
            </p>
          </div>
        </div>
      </Section>

      <Section tone="navy">
        <Container className="!px-0">
          <div className="grid gap-10 lg:grid-cols-12 items-end">
            <div className="lg:col-span-8">
              <span className="text-xs uppercase tracking-widest text-brand-cyan font-semibold">
                Working with us
              </span>
              <h2 className="mt-3 text-4xl md:text-5xl font-semibold text-brand-cream leading-tight">
                Already through procurement, or about to start?
              </h2>
            </div>
            <div className="lg:col-span-4 lg:text-right">
              <Button as="link" to="/contact" variant="secondary" withArrow>
                Speak to the team
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}

function Fact({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-[11px] uppercase tracking-widest text-brand-slate font-semibold">
        {label}
      </dt>
      <dd className="mt-1 text-brand-navy font-medium">{value}</dd>
    </div>
  );
}
