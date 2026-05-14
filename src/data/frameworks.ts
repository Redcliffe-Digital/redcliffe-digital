export type RouteStatus = "active" | "targeting";

export type Route = {
  slug: string;
  name: string;
  status: RouteStatus;
  summary: string;
  details: string[];
};

// Routes to market. "active" = how buyers can engage us today.
// "targeting" = frameworks we will apply to at the next available refresh.
// Once awarded, change status to "active" and add an evidence reference.
export const routes: Route[] = [
  {
    slug: "direct-award",
    name: "Direct award",
    status: "active",
    summary:
      "Bespoke written contracts agreed directly between Redcliffe Digital and the buying authority. The most flexible route for early-stage engagements and discoveries.",
    details: [
      "Suited to discoveries, prototyping and engagements under departmental delegated authority thresholds.",
      "Contract terms can mirror standard Crown Commercial Service clauses where the authority prefers.",
      "Fast to mobilise — no framework call-off process required.",
    ],
  },
  {
    slug: "sub-contracting",
    name: "Sub-contract or consortium",
    status: "active",
    summary:
      "Working as a specialist sub-contractor to a prime supplier on an existing framework, or as a partner in a consortium bid.",
    details: [
      "Particularly suited to deep specialist roles within wider programme teams.",
      "Operates under the prime supplier's framework contract.",
      "We can flow down our standard policies and assurance evidence on request.",
    ],
  },
  {
    slug: "g-cloud",
    name: "G-Cloud",
    status: "targeting",
    summary:
      "We will be applying at the next G-Cloud refresh. Once awarded, departments will be able to buy our cloud hosting, cloud software and cloud support services via the Digital Marketplace.",
    details: [
      "Crown Commercial Service framework operated by the Cabinet Office.",
      "Application window opens periodically; we will publish our service definitions and pricing here once awarded.",
      "Until then, the same scope can be engaged via direct award.",
    ],
  },
  {
    slug: "digital-outcomes",
    name: "Digital Outcomes",
    status: "targeting",
    summary:
      "We will be applying at the next Digital Outcomes refresh. Once awarded, departments will be able to buy multi-disciplinary teams and named specialists via the Digital Marketplace.",
    details: [
      "Crown Commercial Service framework for digital outcomes, specialists and user research.",
      "Application window opens periodically; we will list our lots and pricing once awarded.",
      "Until then, the same scope can be engaged via direct award or as a sub-contractor to an incumbent supplier.",
    ],
  },
];
