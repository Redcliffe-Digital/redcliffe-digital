import { LegalPage } from "./LegalPage";

export function ModernSlavery() {
  return (
    <LegalPage
      eyebrow="Governance"
      title="Modern slavery and human trafficking statement"
      lastReviewed="May 2026"
      intro="This statement is published in line with section 54 of the Modern Slavery Act 2015 and sets out the steps Redcliffe Digital Ltd has taken to ensure that slavery and human trafficking are not taking place in any part of our business or supply chains."
    >
      <h2>About our business</h2>
      <p>
        Redcliffe Digital Ltd is a UK-incorporated digital engineering company
        delivering software, cloud and design services to public sector
        clients. We employ permanent staff and engage approved associates and
        contractors under direct written contracts.
      </p>

      <h2>Our supply chain</h2>
      <p>
        Our supply chain consists primarily of: cloud hosting providers,
        software-as-a-service tooling, professional services advisers, and a
        small bench of approved associate consultants. The risk of modern
        slavery in this supply chain is assessed as low.
      </p>

      <h2>Our policies</h2>
      <ul>
        <li>
          Anti-slavery and human trafficking policy, owned by the Board and
          reviewed annually.
        </li>
        <li>
          Whistleblowing policy that supports staff and contractors to raise
          concerns confidentially.
        </li>
        <li>
          Recruitment and right-to-work policy that requires verified
          documentation for every engagement.
        </li>
        <li>
          Supplier code of conduct, signed by all suppliers entering into a
          contract with us.
        </li>
      </ul>

      <h2>Due diligence</h2>
      <p>
        We carry out risk-based due diligence on suppliers before contracting,
        with enhanced checks where activity is sourced internationally. Where
        risks are identified, we work with the supplier on a remediation plan
        or terminate the relationship.
      </p>

      <h2>Training</h2>
      <p>
        All employees receive modern slavery and human rights awareness
        training as part of induction. Staff in procurement and people
        operations roles receive enhanced training annually.
      </p>

      <h2>Approval</h2>
      <p>
        This statement was approved by the Board of Redcliffe Digital Ltd.
      </p>
    </LegalPage>
  );
}
