type ImageFeatureProps = {
  src: string;
  alt: string;
  eyebrow?: string;
  heading?: string;
  height?: "md" | "lg";
};

const heightMap = {
  md: "h-72 md:h-96",
  lg: "h-[26rem] md:h-[34rem]",
};

export function ImageFeature({
  src,
  alt,
  eyebrow,
  heading,
  height = "md",
}: ImageFeatureProps) {
  const hasOverlay = !!(eyebrow || heading);
  return (
    <section
      className={`relative ${heightMap[height]} overflow-hidden bg-brand-navy-deep`}
    >
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover"
      />
      {hasOverlay && (
        <>
          <div
            className="absolute inset-0 bg-gradient-to-t from-brand-navy-deep/90 via-brand-navy/35 to-transparent"
            aria-hidden="true"
          />
          <div className="relative h-full container-x flex items-end pb-12 md:pb-16">
            <div className="max-w-2xl">
              {eyebrow && (
                <span className="text-xs uppercase tracking-widest text-brand-cyan font-semibold">
                  {eyebrow}
                </span>
              )}
              {heading && (
                <p className="mt-3 font-serif text-3xl md:text-5xl text-brand-cream leading-tight">
                  {heading}
                </p>
              )}
            </div>
          </div>
        </>
      )}
    </section>
  );
}
