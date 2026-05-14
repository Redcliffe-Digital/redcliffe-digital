import {
  ShieldCheck,
  FileCheck2,
  Accessibility,
  Compass,
  Cloud,
} from "lucide-react";

const items = [
  { label: "Cyber Essentials", icon: ShieldCheck, kind: "Accredited" },
  { label: "ICO Registered", icon: FileCheck2, kind: "Accredited" },
  { label: "WCAG 2.1 AA", icon: Accessibility, kind: "Built to" },
  { label: "GDS Service Standard", icon: Compass, kind: "Built to" },
  { label: "NCSC Cloud Security Principles", icon: Cloud, kind: "Built to" },
];

export function TrustBand() {
  return (
    <div className="border-y border-brand-stone bg-white py-6">
      <div className="container-x">
        <p className="text-[10px] tracking-widest uppercase text-brand-slate font-semibold mb-4">
          Designed, built and accredited to UK public sector standards
        </p>
        <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-x-6 gap-y-4">
          {items.map(({ label, icon: Icon, kind }) => (
            <li
              key={label}
              className="flex items-start gap-2 text-brand-navy"
            >
              <Icon size={18} className="text-brand-red shrink-0 mt-0.5" aria-hidden="true" />
              <div className="leading-tight">
                <span className="block text-sm font-medium">{label}</span>
                <span className="text-[10px] uppercase tracking-widest text-brand-slate">
                  {kind}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
