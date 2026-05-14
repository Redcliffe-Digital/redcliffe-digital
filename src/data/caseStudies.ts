export type CaseStudy = {
  slug: string;
  client: string;
  sector: string;
  title: string;
  challenge: string;
  approach: string[];
  outcome: string[];
  technologies: string[];
};

// Real engagements from the team's prior delivery work, anonymised where
// confidentiality applies. Lead with the cyber/AI study — strong signal for
// UK government procurement (NCSC, Generative AI Framework for HMG).
export const caseStudies: CaseStudy[] = [
  {
    slug: "cyber-threat-intelligence-platform",
    client: "Cyber security vendor (anonymised)",
    sector: "Cyber Security & AI",
    title:
      "A flagship threat-intelligence platform with self-hosted, domain-tuned AI",
    challenge:
      "A cyber security vendor wanted to launch a differentiating product capability — a system that surfaced the relationships between threat actors, their infrastructure and the organisations they targeted, with AI-driven enrichment to reduce analyst time-to-insight. Sensitive data meant cloud-hosted commercial LLM APIs were not acceptable; the AI components had to run on customer-controlled infrastructure.",
    approach: [
      "Designed and built a brand-new product from scratch — back end, data pipeline, AI/ML stack and operator interface.",
      "Hosted and fine-tuned an in-house large language model on domain-specific corpora, with retrieval-augmented generation for analyst queries.",
      "Modelled actor-to-target relationships as a graph, ingesting attack telemetry, open-source intelligence and proprietary feeds.",
      "Engineered for data sovereignty throughout — no data leaving the customer's controlled environment.",
    ],
    outcome: [
      "Launched as the customer's flagship commercial product.",
      "Reduced analyst time-to-insight on attribution questions.",
      "Demonstrated end-to-end capability for self-hosted, domain-tuned LLMs in a regulated context.",
    ],
    technologies: [
      "Python",
      "Self-hosted LLM",
      "Retrieval-augmented generation",
      "Graph database",
      "Vector database",
      "Kubernetes",
    ],
  },
  {
    slug: "financial-services-backend-and-ml",
    client: "Financial services firm (anonymised)",
    sector: "Financial Services",
    title:
      "Back-end infrastructure, exchange connectivity and ML capability for a trading firm",
    challenge:
      "A financial services firm needed a reliable, performant back-end that unified data, connected to multiple trading venues and provided a foundation for in-house machine learning. Existing systems were siloed and limited the firm's ability to develop new products and capabilities on a common base.",
    approach: [
      "Designed and built the database layer — schema, indexing and data lifecycle for trading and reference data.",
      "Implemented exchange connectivity, with normalised market data and resilient order flow.",
      "Engineered observability, capacity planning and recovery patterns from day one of delivery.",
      "Built out the firm's machine-learning capability — feature pipelines, training, deployment and monitoring — moving from ad-hoc experiments to production decisioning.",
    ],
    outcome: [
      "Replaced fragmented systems with a single back-end foundation.",
      "Enabled new product development on the same platform without re-plumbing.",
      "Established repeatable ML lifecycle from idea to production.",
    ],
    technologies: [
      "Python",
      "PostgreSQL",
      "Time-series storage",
      "Exchange APIs",
      "ML training & serving",
    ],
  },
  {
    slug: "mod-secure-engineering",
    client: "Ministry of Defence (anonymised)",
    sector: "Defence — prior engagement",
    title: "Secure engineering for a Ministry of Defence customer",
    challenge:
      "Prior engagement supporting a Ministry of Defence customer with secure software engineering work delivered against defence accreditation standards. Programme details remain under permanent confidentiality; we can verify sector, scope, duration and technologies, and provide referees where the customer has approved that route.",
    approach: [
      "Engineering against defence-grade security and assurance standards.",
      "Working in a cleared environment with formal change control.",
      "Cross-disciplinary collaboration with customer subject-matter experts.",
      "Documentation standards aligned to accreditation requirements.",
    ],
    outcome: [
      "Delivered to the customer's accreditation timeline.",
      "Established working patterns now repeated in our public sector approach.",
      "Demonstrable evidence of cleared engineering experience.",
    ],
    technologies: ["Defence-cleared environment", "Secure SDLC"],
  },
];
