import { useState } from "react";
import { Section } from "../components/ui/Section";
import { Card } from "../components/ui/Card";
import { Button } from "../components/ui/Button";
import { company } from "../data/company";
import { Mail, Phone, ExternalLink, MapPin, CheckCircle2 } from "lucide-react";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    organisation: "",
    framework: "",
    deadline: "",
    message: "",
    consent: false,
  });

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Hook this up to a backend / form service before launch.
    setSubmitted(true);
  };

  return (
    <>
      <Section tone="cream" spacing="loose">
        <div className="max-w-3xl">
          <span className="eyebrow">Contact</span>
          <h1 className="mt-4 text-5xl md:text-6xl font-semibold leading-tight">
            Brief us on your forthcoming opportunity.
          </h1>
          <p className="mt-6 text-lg text-brand-slate leading-relaxed">
            Whether you are scoping a discovery, a direct award, or bringing
            us in as a specialist sub-contractor to an existing prime, we will
            respond within one working day.
          </p>
        </div>
      </Section>

      <Section tone="white">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Card className="!p-8 md:!p-10">
              {submitted ? (
                <div role="status" aria-live="polite" className="text-center py-10">
                  <CheckCircle2
                    size={36}
                    className="text-brand-red mx-auto"
                    aria-hidden="true"
                  />
                  <h2 className="mt-4 text-2xl font-semibold">
                    Enquiry received
                  </h2>
                  <p className="mt-3 text-brand-slate max-w-md mx-auto">
                    Thank you. A member of the bid team will be in touch within
                    one UK working day.
                  </p>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="space-y-6" noValidate>
                  <h2 className="text-2xl font-semibold mb-6">
                    Send us a brief
                  </h2>
                  <div className="grid gap-5 md:grid-cols-2">
                    <Field
                      id="name"
                      label="Your name"
                      required
                      value={form.name}
                      onChange={(v) => setForm({ ...form, name: v })}
                      autoComplete="name"
                    />
                    <Field
                      id="email"
                      label="Work email"
                      type="email"
                      required
                      value={form.email}
                      onChange={(v) => setForm({ ...form, email: v })}
                      autoComplete="email"
                    />
                    <Field
                      id="organisation"
                      label="Department or organisation"
                      required
                      value={form.organisation}
                      onChange={(v) => setForm({ ...form, organisation: v })}
                      autoComplete="organization"
                    />
                    <Select
                      id="framework"
                      label="Engagement route"
                      value={form.framework}
                      onChange={(v) => setForm({ ...form, framework: v })}
                      options={[
                        "Not yet decided",
                        "Direct award",
                        "Sub-contract to prime",
                        "Consortium bid",
                        "Other",
                      ]}
                    />
                    <Field
                      id="deadline"
                      label="SQ / response deadline (if any)"
                      value={form.deadline}
                      onChange={(v) => setForm({ ...form, deadline: v })}
                      placeholder="e.g. 14 May 2026"
                    />
                  </div>
                  <Field
                    id="message"
                    label="What are you looking to achieve?"
                    required
                    multiline
                    value={form.message}
                    onChange={(v) => setForm({ ...form, message: v })}
                  />
                  <label className="flex items-start gap-3 text-sm text-brand-slate">
                    <input
                      type="checkbox"
                      required
                      checked={form.consent}
                      onChange={(e) =>
                        setForm({ ...form, consent: e.target.checked })
                      }
                      className="mt-1 accent-brand-red"
                    />
                    <span>
                      I am happy for Redcliffe Digital to use my contact
                      details to respond to this enquiry, in line with the
                      Privacy Notice.
                    </span>
                  </label>
                  <div>
                    <Button as="button" type="submit" variant="primary" withArrow>
                      Send brief
                    </Button>
                  </div>
                </form>
              )}
            </Card>
          </div>

          <aside className="lg:col-span-5 space-y-6">
            <ContactBlock
              icon={Mail}
              label="General enquiries"
              value={company.contact.email}
              href={`mailto:${company.contact.email}`}
            />
            <ContactBlock
              icon={Mail}
              label="Bid team"
              value={company.contact.bidsEmail}
              href={`mailto:${company.contact.bidsEmail}`}
            />
            <ContactBlock
              icon={Phone}
              label="Phone"
              value={company.contact.phone}
              href={`tel:${company.contact.phone.replace(/\s|\(|\)/g, "")}`}
            />
            <ContactBlock
              icon={ExternalLink}
              label="LinkedIn"
              value="@redcliffe-digital"
              href={company.contact.linkedin}
            />
            <div className="border border-brand-stone bg-brand-cream p-6">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-brand-red mt-1" aria-hidden="true" />
                <div>
                  <p className="eyebrow">Registered office</p>
                  <address className="not-italic mt-2 text-sm text-brand-ink leading-relaxed">
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
              <dl className="mt-6 pt-6 border-t border-brand-stone grid grid-cols-2 gap-4 text-sm">
                <div>
                  <dt className="text-[11px] uppercase tracking-widest text-brand-slate font-semibold">
                    Companies House
                  </dt>
                  <dd className="text-brand-navy font-medium">
                    {company.companiesHouseNumber}
                  </dd>
                </div>
                <div>
                  <dt className="text-[11px] uppercase tracking-widest text-brand-slate font-semibold">
                    VAT
                  </dt>
                  <dd className="text-brand-navy font-medium">
                    {company.vatNumber}
                  </dd>
                </div>
                <div>
                  <dt className="text-[11px] uppercase tracking-widest text-brand-slate font-semibold">
                    ICO
                  </dt>
                  <dd className="text-brand-navy font-medium">
                    {company.icoRegistration}
                  </dd>
                </div>
                <div>
                  <dt className="text-[11px] uppercase tracking-widest text-brand-slate font-semibold">
                    DUNS
                  </dt>
                  <dd className="text-brand-navy font-medium">
                    {company.dunsNumber}
                  </dd>
                </div>
              </dl>
            </div>
          </aside>
        </div>
      </Section>
    </>
  );
}

function Field({
  id,
  label,
  required,
  value,
  onChange,
  type = "text",
  multiline = false,
  placeholder,
  autoComplete,
}: {
  id: string;
  label: string;
  required?: boolean;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  multiline?: boolean;
  placeholder?: string;
  autoComplete?: string;
}) {
  const baseClass =
    "w-full bg-brand-cream border border-brand-stone px-4 py-3 text-sm text-brand-ink focus:border-brand-navy focus:outline-none transition-colors";
  return (
    <div>
      <label
        htmlFor={id}
        className="block text-xs uppercase tracking-widest text-brand-slate font-semibold mb-2"
      >
        {label} {required && <span className="text-brand-red">*</span>}
      </label>
      {multiline ? (
        <textarea
          id={id}
          name={id}
          required={required}
          rows={5}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className={baseClass}
        />
      ) : (
        <input
          id={id}
          name={id}
          type={type}
          required={required}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          autoComplete={autoComplete}
          className={baseClass}
        />
      )}
    </div>
  );
}

function Select({
  id,
  label,
  value,
  onChange,
  options,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: string[];
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="block text-xs uppercase tracking-widest text-brand-slate font-semibold mb-2"
      >
        {label}
      </label>
      <select
        id={id}
        name={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full bg-brand-cream border border-brand-stone px-4 py-3 text-sm text-brand-ink focus:border-brand-navy focus:outline-none"
      >
        <option value="">Select…</option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
}

function ContactBlock({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: typeof Mail;
  label: string;
  value: string;
  href: string;
}) {
  return (
    <a
      href={href}
      className="block border border-brand-stone bg-white p-5 hover:border-brand-navy transition-colors"
    >
      <div className="flex items-center gap-3">
        <Icon size={18} className="text-brand-red" aria-hidden="true" />
        <div>
          <p className="text-[11px] uppercase tracking-widest text-brand-slate font-semibold">
            {label}
          </p>
          <p className="text-brand-navy font-medium mt-0.5">{value}</p>
        </div>
      </div>
    </a>
  );
}
