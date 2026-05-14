export type Insight = {
  slug: string;
  title: string;
  category: string;
  summary: string;
  date: string;
  readingTime: string;
};

export const insights: Insight[] = [
  {
    slug: "cloud-native-by-default-procurement",
    title:
      "What 'cloud-native by default' actually means at procurement time",
    category: "Procurement",
    summary:
      "The phrase appears in countless invitations to tender, but turning it into evaluable criteria — and a contract that holds — takes more work than it sounds.",
    date: "2026-04-22",
    readingTime: "6 min read",
  },
  {
    slug: "wcag-2-1-aa-beyond-the-checklist",
    title: "Designing for WCAG 2.1 AA: beyond the checklist",
    category: "Accessibility",
    summary:
      "Conformance is a floor, not a ceiling. Here is how we structure design and engineering to make accessible services the default, not the audit.",
    date: "2026-03-14",
    readingTime: "8 min read",
  },
  {
    slug: "modernising-legacy-government-systems",
    title:
      "Modernising legacy government systems without a big-bang rewrite",
    category: "Engineering",
    summary:
      "Strangler-fig patterns work in theory and on small estates. We share what changes when the legacy is a 1990s mainframe handling tens of thousands of users a day.",
    date: "2026-02-08",
    readingTime: "10 min read",
  },
  {
    slug: "ai-in-government-guardrails",
    title: "AI in government: principles, guardrails and procurement realities",
    category: "AI & Data",
    summary:
      "Drawing on the Generative AI Framework for HMG and the Algorithmic Transparency Recording Standard to design services that are useful, auditable and safe.",
    date: "2026-01-19",
    readingTime: "7 min read",
  },
  {
    slug: "running-discovery-the-right-way",
    title: "How to run a discovery the assessment panel will actually buy",
    category: "Service Design",
    summary:
      "Most discovery phases end with a deck nobody reads. Here is how we structure week-by-week to leave a department with confidence — and evidence.",
    date: "2025-12-02",
    readingTime: "5 min read",
  },
];
