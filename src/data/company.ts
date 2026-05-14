// Single source of truth for company facts.
// Replace placeholder values with the registered details before going live.

export const company = {
  legalName: "Redcliffe Digital Ltd",
  tradingName: "Redcliffe Digital",
  strapline: "Secure, accessible software for the UK public sector.",
  companiesHouseNumber: "00000000",
  vatNumber: "GB 000 0000 00",
  icoRegistration: "ZA000000",
  dunsNumber: "000000000",
  yearFounded: 2025,
  registeredOffice: {
    line1: "Registered office address",
    line2: "Line 2",
    city: "Bristol",
    postcode: "BS1 0AA",
    country: "United Kingdom",
  },
  contact: {
    email: "hello@redcliffedigital.co.uk",
    bidsEmail: "bids@redcliffedigital.co.uk",
    phone: "+44 (0)117 000 0000",
    linkedin: "https://www.linkedin.com/company/redcliffe-digital",
  },
  accreditations: ["ICO Registered"],
  // Frameworks we currently hold. Add entries (e.g. "G-Cloud 14") only after
  // award and confirmation of supplier status on the Digital Marketplace.
  frameworks: [] as readonly string[],
  // Frameworks we're targeting at the next refresh.
  frameworksTargeted: ["G-Cloud", "Digital Outcomes"],
} as const;
