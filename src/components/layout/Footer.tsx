import { Link } from "react-router-dom";
import { Mail, Phone, ExternalLink } from "lucide-react";
import { Logo } from "../ui/Logo";
import { company } from "../../data/company";

const columns = [
  {
    heading: "Company",
    links: [
      { to: "/about", label: "About" },
      { to: "/capabilities", label: "Capabilities" },
      { to: "/case-studies", label: "Case studies" },
      { to: "/insights", label: "Insights" },
      { to: "/contact", label: "Contact" },
    ],
  },
  {
    heading: "Procurement",
    links: [
      { to: "/frameworks", label: "Routes to market" },
      { to: "/frameworks#direct-award", label: "Direct award" },
      { to: "/frameworks#sub-contracting", label: "Sub-contract / consortium" },
      { to: "/contact", label: "Bid team contact" },
    ],
  },
  {
    heading: "Governance",
    links: [
      { to: "/accessibility", label: "Accessibility statement" },
      { to: "/privacy", label: "Privacy notice" },
      { to: "/cookies", label: "Cookie policy" },
      { to: "/modern-slavery", label: "Modern slavery statement" },
      { to: "/terms", label: "Terms of use" },
    ],
  },
];

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-brand-navy text-brand-cream">
      <div className="container-x py-16">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Logo variant="light" />
            <p className="mt-6 text-sm text-brand-cream/80 max-w-sm leading-relaxed">
              {company.strapline} A UK-incorporated digital engineering company
              built to deliver outcomes for the public sector.
            </p>
            <div className="mt-8 space-y-3 text-sm">
              <a
                href={`mailto:${company.contact.email}`}
                className="flex items-center gap-2 text-brand-cream hover:text-brand-cyan"
              >
                <Mail size={16} aria-hidden="true" />
                {company.contact.email}
              </a>
              <a
                href={`tel:${company.contact.phone.replace(/\s|\(|\)/g, "")}`}
                className="flex items-center gap-2 text-brand-cream hover:text-brand-cyan"
              >
                <Phone size={16} aria-hidden="true" />
                {company.contact.phone}
              </a>
              <a
                href={company.contact.linkedin}
                rel="noopener noreferrer"
                target="_blank"
                className="flex items-center gap-2 text-brand-cream hover:text-brand-cyan"
              >
                <ExternalLink size={16} aria-hidden="true" />
                LinkedIn
              </a>
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.heading} className="lg:col-span-2">
              <h3 className="text-xs uppercase tracking-widest text-brand-cyan font-semibold mb-4 font-sans">
                {col.heading}
              </h3>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link.to + link.label}>
                    <Link
                      to={link.to}
                      className="text-sm text-brand-cream/85 hover:text-brand-cream"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="lg:col-span-2">
            <h3 className="text-xs uppercase tracking-widest text-brand-cyan font-semibold mb-4 font-sans">
              Registered office
            </h3>
            <address className="not-italic text-sm text-brand-cream/85 leading-relaxed">
              {company.legalName}
              <br />
              {company.registeredOffice.line1}
              <br />
              {company.registeredOffice.line2}
              <br />
              {company.registeredOffice.city}{" "}
              {company.registeredOffice.postcode}
              <br />
              {company.registeredOffice.country}
            </address>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x py-6 flex flex-col md:flex-row md:items-center md:justify-between gap-3 text-xs text-brand-cream/70">
          <p>
            &copy; {year} {company.legalName}. Registered in England &amp;
            Wales, company number {company.companiesHouseNumber}. VAT{" "}
            {company.vatNumber}. ICO {company.icoRegistration}.
          </p>
          <p>Built to UK government accessibility and security standards.</p>
        </div>
      </div>
    </footer>
  );
}
