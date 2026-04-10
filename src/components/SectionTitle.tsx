const SectionTitle = ({
  subtitle,
  title,
  description,
  light = false,
}: {
  subtitle: string;
  title: string;
  description?: string;
  light?: boolean;
}) => (
  <div className="text-center max-w-3xl mx-auto mb-16">
    <p className={`text-sm tracking-[0.3em] uppercase mb-4 font-medium ${light ? "text-accent" : "text-accent"}`}>
      {subtitle}
    </p>
    <h2 className={`font-display text-4xl md:text-5xl font-bold mb-6 ${light ? "text-dark-surface-foreground" : "text-foreground"}`}>
      {title}
    </h2>
    {description && (
      <p className={`font-body text-lg font-light leading-relaxed ${light ? "text-dark-surface-foreground/70" : "text-muted-foreground"}`}>
        {description}
      </p>
    )}
    <div className="w-20 h-[2px] bg-accent mx-auto mt-8" />
  </div>
);

export default SectionTitle;
