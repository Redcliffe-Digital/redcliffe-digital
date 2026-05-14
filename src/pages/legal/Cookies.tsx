import { LegalPage } from "./LegalPage";

export function Cookies() {
  return (
    <LegalPage
      eyebrow="Governance"
      title="Cookie policy"
      lastReviewed="May 2026"
      intro="This site is designed to use as few cookies as possible while still being useful. We comply with the Privacy and Electronic Communications Regulations (PECR) and the UK GDPR."
    >
      <h2>Strictly necessary cookies</h2>
      <p>
        We set a small number of strictly necessary cookies to remember your
        cookie preferences and to provide essential functionality such as
        keeping forms working. These cookies do not require consent under
        PECR.
      </p>

      <h2>Analytics cookies</h2>
      <p>
        We may use privacy-respecting analytics to help us understand how
        visitors use the site. These cookies are only set with your explicit
        consent and can be withdrawn at any time using the cookie preferences
        link in the footer.
      </p>

      <h2>How to control cookies</h2>
      <p>
        You can manage cookies through your browser settings. Disabling
        non-essential cookies will not affect your access to any of the
        information published on this site.
      </p>

      <h2>Updates</h2>
      <p>
        Where we add new analytics or functionality cookies, we will update
        this page and ask for your consent again where required.
      </p>
    </LegalPage>
  );
}
