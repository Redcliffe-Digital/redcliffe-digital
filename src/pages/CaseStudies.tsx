import { Section } from "../components/ui/Section";
import { Button } from "../components/ui/Button";
import { caseStudies } from "../data/caseStudies";
import { Building2, CheckCircle2, ArrowRight } from "lucide-react";

export function CaseStudies() {
  return (
    <>
      <Section tone="cream" spacing="loose">
        <div className="max-w-3xl">
          <span className="eyebrow">Case studies</span>
          <h1 className="mt-4 text-5xl md:text-6xl font-semibold leading-tight">
            Engineering experience, brought to UK government.
          </h1>
          <p className="mt-6 text-lg text-brand-slate leading-relaxed">
            Redcliffe Digital is a recently incorporated firm. Our team's
            delivery experience to date is predominantly in the commercial
            sector, with one prior engagement supporting a Ministry of
            Defence customer. We are now focused entirely on UK public
            sector work, and bringing the engineering, security and
            assurance disciplines we have honed in regulated commercial
            environments to the services government needs to deliver.
          </p>
          <p className="mt-4 text-lg text-brand-slate leading-relaxed">
            Client names, technologies and figures are anonymised where
            confidentiality requires. Some engagements were delivered under
            permanent contractual confidentiality and the client cannot be
            disclosed in any setting; for these, we can provide independent
            verification of sector, scope, duration and technologies, and
            named referees where the client has approved that route.
          </p>
        </div>
      </Section>

      <Section tone="white" spacing="regular">
        <div className="space-y-16">
          {caseStudies.map((cs, idx) => (
            <article
              key={cs.slug}
              id={cs.slug}
              className="border border-brand-stone bg-brand-cream p-8 md:p-12"
            >
              <div className="grid gap-8 lg:grid-cols-12">
                <div className="lg:col-span-4">
                  <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-brand-red font-semibold mb-3">
                    <Building2 size={14} aria-hidden="true" />
                    {cs.sector}
                  </div>
                  <p className="font-serif text-3xl text-brand-navy leading-tight font-semibold">
                    {String(idx + 1).padStart(2, "0")}
                  </p>
                  <p className="mt-1 text-sm text-brand-slate font-medium">
                    {cs.client}
                  </p>
                </div>
                <div className="lg:col-span-8">
                  <h2 className="text-3xl md:text-4xl font-semibold leading-tight">
                    {cs.title}
                  </h2>
                  <div className="mt-6 grid gap-8 md:grid-cols-2">
                    <div>
                      <p className="eyebrow">The challenge</p>
                      <p className="mt-2 text-sm text-brand-slate leading-relaxed">
                        {cs.challenge}
                      </p>
                    </div>
                    <div>
                      <p className="eyebrow">Our approach</p>
                      <ul className="mt-2 space-y-2">
                        {cs.approach.map((a) => (
                          <li
                            key={a}
                            className="flex gap-2 text-sm text-brand-ink"
                          >
                            <CheckCircle2
                              size={16}
                              className="text-brand-red shrink-0 mt-0.5"
                              aria-hidden="true"
                            />
                            <span>{a}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="mt-8 pt-6 border-t border-brand-stone">
                    <p className="eyebrow">Outcomes</p>
                    <ul className="mt-3 grid gap-2 sm:grid-cols-3">
                      {cs.outcome.map((o) => (
                        <li
                          key={o}
                          className="bg-white border border-brand-stone p-4 text-sm text-brand-ink leading-relaxed"
                        >
                          {o}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {cs.technologies.map((t) => (
                      <span
                        key={t}
                        className="text-xs px-3 py-1.5 bg-brand-navy text-brand-cream"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section tone="navy" spacing="tight">
        <div className="grid gap-8 lg:grid-cols-12 items-center">
          <div className="lg:col-span-8">
            <h2 className="text-3xl md:text-5xl font-semibold leading-tight text-brand-cream">
              Want a full reference pack for a forthcoming bid?
            </h2>
            <p className="mt-4 max-w-2xl text-brand-cream/85">
              We will share unredacted case studies, named client referees and
              evidence appendices once an NDA is in place.
            </p>
          </div>
          <div className="lg:col-span-4 lg:justify-self-end">
            <Button as="link" to="/contact" variant="secondary">
              Request reference pack
              <ArrowRight size={16} aria-hidden="true" />
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
