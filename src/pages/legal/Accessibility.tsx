import { LegalPage } from "./LegalPage";
import { company } from "../../data/company";

export function Accessibility() {
  return (
    <LegalPage
      eyebrow="Governance"
      title="Accessibility statement"
      lastReviewed="May 2026"
      intro="This accessibility statement applies to redcliffedigital.co.uk and to digital services produced by Redcliffe Digital Ltd. We are committed to making our services accessible in accordance with the Public Sector Bodies (Websites and Mobile Applications) (No. 2) Accessibility Regulations 2018 and to Web Content Accessibility Guidelines (WCAG) 2.1 level AA."
    >
      <h2>How accessible this website is</h2>
      <p>
        This website has been designed to be accessible to as many people as
        possible. You should be able to:
      </p>
      <ul>
        <li>Zoom up to 300% without loss of content or functionality.</li>
        <li>
          Navigate the site using only a keyboard, with visible focus
          indicators throughout.
        </li>
        <li>
          Use the site with a screen reader (tested with NVDA, JAWS and
          VoiceOver).
        </li>
        <li>Adjust text spacing without breaking layout or readability.</li>
      </ul>

      <h2>Compliance status</h2>
      <p>
        This website is partially compliant with the Web Content Accessibility
        Guidelines version 2.1 AA standard. Outstanding issues are tracked
        publicly and reviewed every quarter.
      </p>

      <h2>Reporting accessibility problems</h2>
      <p>
        We welcome feedback on the accessibility of this website. If you find a
        problem or feel we are not meeting accessibility requirements, contact
        us at{" "}
        <a href={`mailto:${company.contact.email}`}>{company.contact.email}</a>{" "}
        and we will respond within 5 working days.
      </p>

      <h2>Enforcement procedure</h2>
      <p>
        The Equality and Human Rights Commission (EHRC) is responsible for
        enforcing the accessibility regulations. If you are not happy with how
        we respond to your complaint, contact the{" "}
        <a
          href="https://www.equalityadvisoryservice.com/"
          rel="noopener noreferrer"
          target="_blank"
        >
          Equality Advisory and Support Service
        </a>
        .
      </p>

      <h2>How we test this website</h2>
      <p>
        We carry out automated testing on every code change and run manual
        testing — including testing with assistive technologies — at least
        every quarter. We also commission an independent accessibility audit
        annually.
      </p>

      <h2>Accessibility in the services we build</h2>
      <p>
        Every service we deliver to public sector clients is designed and
        engineered against WCAG 2.1 AA from day one of discovery. We integrate
        accessibility into our continuous-integration pipelines and provide an
        accessibility statement template aligned to GDS guidance for any
        service we go live.
      </p>
    </LegalPage>
  );
}
