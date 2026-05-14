import { LegalPage } from "./LegalPage";
import { company } from "../../data/company";

export function Terms() {
  return (
    <LegalPage
      eyebrow="Governance"
      title="Terms of use"
      lastReviewed="May 2026"
      intro="These terms govern your use of redcliffedigital.co.uk. Engagements with our clients are governed by separate written contracts under the relevant Crown Commercial Service framework or bespoke agreement."
    >
      <h2>Use of this website</h2>
      <p>
        You may use this website to read, download and print content for
        lawful, non-commercial purposes, including for the purpose of
        evaluating Redcliffe Digital as a supplier. You may not use this
        website in any way that breaches applicable law, infringes the rights
        of another person, or is fraudulent or harmful.
      </p>

      <h2>Intellectual property</h2>
      <p>
        Unless otherwise stated, the copyright and other intellectual property
        rights in the content on this website are owned by{" "}
        {company.legalName} or licensed to us. Logos and trade marks shown on
        case study pages remain the property of their respective owners and
        are reproduced with permission for the purpose of describing past
        engagements.
      </p>

      <h2>No warranty</h2>
      <p>
        The information on this website is provided in good faith and for
        general information. While we take care to ensure it is accurate, we
        make no warranties about completeness, reliability or accuracy.
        Reliance on any information is strictly at your own risk and does not
        constitute professional advice.
      </p>

      <h2>External links</h2>
      <p>
        This website may contain links to external websites operated by third
        parties. We do not control the content of those websites and accept
        no responsibility for material on them.
      </p>

      <h2>Liability</h2>
      <p>
        Nothing in these terms excludes or limits our liability for death or
        personal injury caused by negligence, fraud, or any other liability
        that cannot lawfully be excluded.
      </p>

      <h2>Governing law</h2>
      <p>
        These terms are governed by the laws of England and Wales, and any
        dispute arising from them is subject to the exclusive jurisdiction of
        the courts of England and Wales.
      </p>
    </LegalPage>
  );
}
