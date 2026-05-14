export type Framework = {
  name: string;
  reference: string;
  buyer: string;
  description: string;
  lots: string[];
};

export const frameworks: Framework[] = [
  {
    name: "G-Cloud 14",
    reference: "RM1557.14",
    buyer: "Crown Commercial Service",
    description:
      "Cloud hosting, cloud software and cloud support services for UK public sector buyers via the Digital Marketplace.",
    lots: ["Cloud hosting", "Cloud software", "Cloud support"],
  },
  {
    name: "Digital Outcomes 6",
    reference: "RM1043.8",
    buyer: "Crown Commercial Service",
    description:
      "Multi-disciplinary teams to research, design and build digital services and outcomes for central and wider public sector.",
    lots: [
      "Digital outcomes",
      "Digital specialists",
      "User research participants",
      "User research studios",
    ],
  },
];
