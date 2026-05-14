import { LegalPage } from "./LegalPage";
import { company } from "../../data/company";

export function Privacy() {
  return (
    <LegalPage
      eyebrow="Governance"
      title="Privacy notice"
      lastReviewed="May 2026"
      intro="This notice explains how Redcliffe Digital Ltd collects, uses and protects personal data when you interact with us. We process personal data in accordance with the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018."
    >
      <h2>Who we are</h2>
      <p>
        {company.legalName} is the data controller for personal data we
        collect about visitors, prospective clients and contractors. Our
        registered office is {company.registeredOffice.line1},{" "}
        {company.registeredOffice.city} {company.registeredOffice.postcode}. We
        are registered with the Information Commissioner's Office under
        registration number {company.icoRegistration}.
      </p>

      <h2>What personal data we collect</h2>
      <ul>
        <li>
          Identity and contact data — name, role, organisation, work email
          address, phone number — when you contact us, request a proposal or
          subscribe to our updates.
        </li>
        <li>
          Technical data — IP address, browser type, device information and
          interaction data when you visit this website.
        </li>
        <li>
          Recruitment data — CVs, work history and right-to-work information
          when you apply to work with us.
        </li>
      </ul>

      <h2>How we use your personal data</h2>
      <p>
        We use personal data only for the purposes for which it was provided
        and where we have a lawful basis under Article 6 of the UK GDPR. The
        most common bases we rely on are:
      </p>
      <ul>
        <li>
          <strong>Legitimate interests</strong> — to respond to enquiries,
          prepare proposals, manage existing client relationships, and maintain
          the security of our services.
        </li>
        <li>
          <strong>Contract</strong> — to deliver services to public sector
          clients under contractual arrangements.
        </li>
        <li>
          <strong>Legal obligation</strong> — to comply with statutory and
          regulatory requirements, including tax, anti-money-laundering and
          health and safety duties.
        </li>
        <li>
          <strong>Consent</strong> — for optional marketing communications,
          where given. You may withdraw consent at any time.
        </li>
      </ul>

      <h2>How we share personal data</h2>
      <p>
        We share personal data only where necessary, with carefully selected
        processors and partners under written agreements. These include cloud
        infrastructure providers, professional advisers, and government bodies
        where required by law. We do not sell personal data.
      </p>

      <h2>International transfers</h2>
      <p>
        Where personal data is transferred outside the UK, we use the UK
        International Data Transfer Agreement, the Addendum to the EU Standard
        Contractual Clauses, or other lawful safeguards as published by the
        Information Commissioner's Office.
      </p>

      <h2>Data retention</h2>
      <p>
        Enquiry data is retained for up to 24 months from last contact. Client
        records are retained for the term of the contract plus seven years to
        meet statutory retention obligations. Recruitment data is held for up
        to 12 months after a recruitment cycle unless consent is given to keep
        it longer.
      </p>

      <h2>Your rights</h2>
      <p>
        Under UK GDPR you have the right to access, rectify, erase and
        restrict the processing of your personal data, and to object to
        processing or request data portability. To exercise any of these
        rights, please contact{" "}
        <a href={`mailto:${company.contact.email}`}>{company.contact.email}</a>.
        You also have the right to complain to the Information Commissioner's
        Office at{" "}
        <a href="https://ico.org.uk/" rel="noopener noreferrer" target="_blank">
          ico.org.uk
        </a>
        .
      </p>

      <h2>Security</h2>
      <p>
        We operate an information security programme informed by NCSC
        guidance and the principles of Cyber Essentials. Technical and
        organisational measures include encryption in transit and at rest,
        role-based access controls, documented joiner/mover/leaver processes,
        and ongoing security awareness training for all staff.
      </p>

      <h2>Changes to this notice</h2>
      <p>
        We review this notice at least annually. Material changes will be
        published here with an updated last-reviewed date.
      </p>
    </LegalPage>
  );
}
