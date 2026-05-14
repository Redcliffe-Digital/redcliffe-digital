import { Section } from "../components/ui/Section";
import { Button } from "../components/ui/Button";

export function NotFound() {
  return (
    <Section tone="cream" spacing="loose">
      <div className="max-w-2xl">
        <span className="eyebrow">404</span>
        <h1 className="mt-4 text-5xl md:text-6xl font-semibold leading-tight">
          Page not found.
        </h1>
        <p className="mt-6 text-lg text-brand-slate leading-relaxed">
          The page you were looking for has moved or never existed. Try the
          navigation, or get in touch and we will point you to the right place.
        </p>
        <div className="mt-10 flex gap-4">
          <Button as="link" to="/" variant="primary" withArrow>
            Back to home
          </Button>
          <Button as="link" to="/contact" variant="outline">
            Contact us
          </Button>
        </div>
      </div>
    </Section>
  );
}
