type SectionTitleProps = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export default function SectionTitle({ eyebrow, title, description }: SectionTitleProps) {
  return (
    <div className="space-y-3">
      {eyebrow ? (
        <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
          {eyebrow}
        </span>
      ) : null}
      <div className="space-y-2">
        <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">{title}</h2>
        {description ? <p className="text-sm text-slate-600 dark:text-slate-300">{description}</p> : null}
      </div>
    </div>
  );
}
