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
    client: "Multinational cyber threat intelligence firm (anonymised)",
    sector: "Cyber Security & AI",
    title:
      "Retrieval-Augmented Generation pipeline for a multinational cyber threat intelligence firm",
    challenge:
      "A multinational cyber threat intelligence firm wanted to dramatically improve the speed, accuracy and scale at which emerging cyber threats were identified, triaged and reported to enterprise and government clients. Sensitive data and analyst trust meant cloud-hosted commercial LLM APIs were not acceptable; the AI components had to run on customer-controlled infrastructure with auditable provenance.",
    approach: [
      "Designed and built a Retrieval-Augmented Generation pipeline in Python and LangChain, with vector databases ingesting, embedding and querying vast volumes of threat intelligence — enabling natural-language interrogation of historic and live threat data.",
      "Developed automated classification and entity-extraction models to enrich raw threat feeds, deployed behind scalable FastAPI microservices on Docker and Kubernetes.",
      "Built automated reporting pipelines using LLM-driven summarisation to generate customer-facing PDF intelligence reports with structured formatting and visualisations.",
      "Engineered end-to-end CI/CD with pytest and Cypress, focused on data provenance, evaluation and responsible deployment.",
    ],
    outcome: [
      "Reduced analyst time-to-insight from hours to seconds on attribution and historic-data queries.",
      "Significantly reduced false-positive rates, freeing analysts to focus on the highest-priority incidents.",
      "Demonstrated end-to-end capability for self-hosted, domain-tuned LLMs in a regulated, customer-controlled environment.",
    ],
    technologies: [
      "Python",
      "LangChain",
      "Self-hosted LLM (RAG)",
      "Vector databases (Pinecone, Weaviate)",
      "FastAPI",
      "Docker & Kubernetes",
      "pytest / Cypress",
    ],
  },
  {
    slug: "financial-services-backend-and-ml",
    client: "Quantitative trading firm (anonymised)",
    sector: "Financial Services",
    title:
      "Market-making back-end and low-millisecond market data platform for a quantitative trading firm",
    challenge:
      "A quantitative trading firm needed to migrate a monolithic legacy market-making system to a modern, scalable architecture — with multi-exchange real-time market data, a robust historical data foundation, and the observability required for live trading at low-millisecond latencies.",
    approach: [
      "Led the migration of the market-making system from a monolithic C# architecture to a Python-based microservices design, deployed via Docker with RabbitMQ for asynchronous inter-service communication.",
      "Designed and built a high-throughput real-time market data ingestion system in Rust and Redis, processing live order book and trade data from multiple exchanges at low-millisecond end-to-end latencies.",
      "Designed a historical data pipeline combining real-time streaming, polling and archival — using TimescaleDB for efficient querying of terabytes of historical data and S3 with Parquet for scalable cold storage.",
      "Built monitoring and alerting on Prometheus and Grafana to track market anomalies, system health and trading-strategy performance in real time.",
    ],
    outcome: [
      "Replaced fragmented C# monolith with a unified Python microservice platform — new product development became feasible on the same foundation.",
      "Achieved low-millisecond end-to-end latency on multi-exchange market data ingest.",
      "Terabyte-scale historical store ready for back-testing, strategy research and compliance retrieval.",
    ],
    technologies: [
      "Python",
      "Rust",
      "Redis",
      "RabbitMQ",
      "TimescaleDB",
      "S3 / Parquet",
      "Prometheus & Grafana",
    ],
  },
];
