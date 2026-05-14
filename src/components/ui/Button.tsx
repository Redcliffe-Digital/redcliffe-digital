import type { AnchorHTMLAttributes, ButtonHTMLAttributes, PropsWithChildren } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

type Variant = "primary" | "secondary" | "ghost" | "outline";

type CommonProps = {
  variant?: Variant;
  withArrow?: boolean;
  className?: string;
};

const base =
  "inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold tracking-wide transition-colors duration-200 rounded-none";

const variantMap: Record<Variant, string> = {
  primary:
    "bg-brand-navy text-brand-cream hover:bg-brand-navy-deep border border-brand-navy",
  secondary:
    "bg-brand-red text-brand-cream hover:bg-brand-red-deep border border-brand-red",
  ghost:
    "bg-transparent text-brand-navy hover:bg-brand-stone border border-transparent",
  outline:
    "bg-transparent text-brand-navy hover:bg-brand-navy hover:text-brand-cream border border-brand-navy",
};

type ButtonAsButton = PropsWithChildren<
  CommonProps & ButtonHTMLAttributes<HTMLButtonElement> & { as?: "button" }
>;

type ButtonAsAnchor = PropsWithChildren<
  CommonProps & AnchorHTMLAttributes<HTMLAnchorElement> & { as: "a"; href: string }
>;

type ButtonAsLink = PropsWithChildren<
  CommonProps & { as: "link"; to: string }
>;

type ButtonProps = ButtonAsButton | ButtonAsAnchor | ButtonAsLink;

export function Button(props: ButtonProps) {
  const { variant = "primary", withArrow = false, className = "", children } = props;
  const cls = `${base} ${variantMap[variant]} ${className}`;

  if (props.as === "a") {
    const { as: _as, variant: _v, withArrow: _w, className: _c, children: _ch, ...rest } = props;
    return (
      <a className={cls} {...rest}>
        {children}
        {withArrow && <ArrowUpRight size={16} aria-hidden="true" />}
      </a>
    );
  }

  if (props.as === "link") {
    return (
      <Link to={props.to} className={cls}>
        {children}
        {withArrow && <ArrowUpRight size={16} aria-hidden="true" />}
      </Link>
    );
  }

  const { as: _as, variant: _v, withArrow: _w, className: _c, children: _ch, ...rest } = props;
  return (
    <button className={cls} {...rest}>
      {children}
      {withArrow && <ArrowUpRight size={16} aria-hidden="true" />}
    </button>
  );
}
