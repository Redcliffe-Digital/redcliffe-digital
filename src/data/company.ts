// Single source of truth for company facts.
// Verified against Companies House on 14 May 2026 (company number 17197703).

export const company = {
  legalName: "Redcliffe Digital Ltd",
  tradingName: "Redcliffe Digital",
  strapline: "Secure, accessible software for the UK public sector.",
  companiesHouseNumber: "17197703",
  // Set once registered. Most early-stage SMEs are below the £90k VAT
  // threshold and not registered — leave blank if so.
  vatNumber: "" as string,
  // Update with the ICO registration reference (typically "ZAxxxxxx").
  icoRegistration: "[Pending registration]",
  // Optional. Required only for US gov/SAM.gov or some prime supplier
  // onboarding — leave blank for UK-only buyers.
  dunsNumber: "" as string,
  // SIC codes registered at incorporation.
  sicCodes: [
    { code: "62012", description: "Business and domestic software development" },
    { code: "62020", description: "Information technology consultancy activities" },
  ],
  yearFounded: 2026,
  incorporationDate: "5 May 2026",
  registeredOffice: {
    line1: "Flat 14, Hanover Court",
    line2: "Hanover Street",
    city: "Newcastle",
    postcode: "ST5 1HE",
    country: "United Kingdom",
  },
  contact: {
    email: "admin@redcliffedigital.co.uk",
    bidsEmail: "admin@redcliffedigital.co.uk",
    // Set once a business line is provisioned.
    phone: "" as string,
    // Add the company LinkedIn URL once the page is set up. Empty string =
    // LinkedIn link is hidden everywhere on the site.
    linkedin: "" as string,
  },
  accreditations: ["ICO Registered"],
  // Frameworks we currently hold. Add entries (e.g. "G-Cloud 14") only after
  // award and confirmation of supplier status on the Digital Marketplace.
  frameworks: [] as readonly string[],
  // Frameworks we're targeting at the next refresh.
  frameworksTargeted: ["G-Cloud", "Digital Outcomes"],
} as const;
