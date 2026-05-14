import { Section } from "../components/ui/Section";
import { insights } from "../data/insights";
import { Calendar, Clock, ArrowRight } from "lucide-react";

export function Insights() {
  return (
    <>
      <Section tone="cream" spacing="loose">
        <div className="max-w-3xl">
          <span className="eyebrow">Insights</span>
          <h1 className="mt-4 text-5xl md:text-6xl font-semibold leading-tight">
            Thinking on public sector technology, procurement and delivery.
          </h1>
          <p className="mt-6 text-lg text-brand-slate leading-relaxed">
            Practical perspectives from the front line of government delivery —
            from accessibility engineering to AI guardrails to writing a
            service-standard-ready discovery report.
          </p>
        </div>
      </Section>

      <Section tone="white">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {insights.map((post) => {
            const date = new Date(post.date).toLocaleDateString("en-GB", {
              day: "numeric",
              month: "long",
              year: "numeric",
            });
            return (
              <article
                key={post.slug}
                className="group flex flex-col bg-brand-cream border border-brand-stone hover:border-brand-navy transition-colors"
              >
                <div className="aspect-[16/10] bg-brand-navy relative overflow-hidden">
                  <div
                    className="absolute inset-0 bg-grid-navy bg-[size:24px_24px] opacity-30"
                    aria-hidden="true"
                  />
                  <div className="absolute inset-0 flex items-end p-6">
                    <span className="text-xs uppercase tracking-widest text-brand-cyan font-semibold">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="flex-1 p-7 flex flex-col">
                  <h2 className="text-xl font-semibold leading-tight group-hover:text-brand-red transition-colors">
                    {post.title}
                  </h2>
                  <p className="mt-3 text-sm text-brand-slate leading-relaxed flex-1">
                    {post.summary}
                  </p>
                  <div className="mt-6 flex items-center justify-between text-xs text-brand-slate">
                    <span className="flex items-center gap-1.5">
                      <Calendar size={13} aria-hidden="true" />
                      {date}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock size={13} aria-hidden="true" />
                      {post.readingTime}
                    </span>
                  </div>
                  <p className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand-navy">
                    Read article
                    <ArrowRight
                      size={14}
                      className="transition-transform group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </Section>
    </>
  );
}
