import type { LucideIcon } from "lucide-react";
import {
  Code2,
  Cloud,
  ShieldCheck,
  BrainCircuit,
  Compass,
  Layers,
} from "lucide-react";

export type Capability = {
  slug: string;
  title: string;
  summary: string;
  icon: LucideIcon;
  highlights: string[];
};

export const capabilities: Capability[] = [
  {
    slug: "software-engineering",
    title: "Custom software engineering",
    summary:
      "Bespoke digital services delivered against the GDS Service Standard, with continuous user research, automated testing and observability built in from day one.",
    icon: Code2,
    highlights: [
      "Discovery, alpha, beta and live delivery",
      "Multidisciplinary teams aligned to GOV.UK ways of working",
      "Open standards, open source by default",
      "WCAG 2.1 AA accessibility designed in, not bolted on",
    ],
  },
  {
    slug: "cloud-and-platforms",
    title: "Cloud platforms & DevOps",
    summary:
      "Production-grade platforms on AWS, Microsoft Azure and Google Cloud, engineered for cost transparency, resilience and policy-as-code governance.",
    icon: Cloud,
    highlights: [
      "Landing zones aligned to NCSC Cloud Security Principles",
      "Infrastructure as code (Terraform, Bicep)",
      "CI/CD with progressive delivery and automated rollback",
      "FinOps reporting against departmental cost envelopes",
    ],
  },
  {
    slug: "cyber-security",
    title: "Cyber security & assurance",
    summary:
      "Security engineering and assurance work that helps services pass IT Health Checks, ITHC remediation and operate confidently in classified environments.",
    icon: ShieldCheck,
    highlights: [
      "Threat modelling and secure-by-design architecture review",
      "Penetration testing readiness and ITHC remediation",
      "Identity, access and zero-trust patterns",
      "Alignment with NCSC guidance and the Cyber Assessment Framework",
    ],
  },
  {
    slug: "data-and-ai",
    title: "Data, analytics & AI",
    summary:
      "Trustworthy data platforms and applied AI — built with the Algorithmic Transparency Recording Standard and the Generative AI Framework for HMG in mind.",
    icon: BrainCircuit,
    highlights: [
      "Modern data warehouses and lakehouses",
      "Responsible AI and model evaluation pipelines",
      "Privacy-preserving analytics and anonymisation",
      "Decision support tools for case-working teams",
    ],
  },
  {
    slug: "service-design",
    title: "Service design & user research",
    summary:
      "User-centred design that puts citizens, case workers and policy outcomes first — with research panels, prototypes and assisted-digital pathways.",
    icon: Compass,
    highlights: [
      "Discovery research and service mapping",
      "Inclusive design and assisted digital",
      "Prototype testing with representative users",
      "Service blueprints and policy-to-product translation",
    ],
  },
  {
    slug: "legacy-modernisation",
    title: "Legacy modernisation",
    summary:
      "Pragmatic strangler-fig modernisation of mainframe and on-premise estates — reducing technical debt without disrupting frontline services.",
    icon: Layers,
    highlights: [
      "Domain-driven decomposition of monoliths",
      "Replatforming with measurable risk reduction",
      "Data migration with reconciliation and dual-running",
      "Knowledge transfer and in-house capability uplift",
    ],
  },
];
