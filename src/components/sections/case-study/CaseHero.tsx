import Container from "@/components/ui/Container";

interface CaseHeroProps {
  title: string;
  client?: string;
  year?: number;
  description?: string;
  tags?: string[];
}

export default function CaseHero({
  title,
  client,
  year,
  description,
  tags = [],
}: CaseHeroProps) {
  return (
    <section className="flex min-h-[70vh] items-end pb-16 pt-32">
      <Container>
        <div className="flex flex-wrap items-center gap-3 text-sm text-text-muted">
          {client && <span>{client}</span>}
          {client && year && <span>/</span>}
          {year && <span>{year}</span>}
        </div>
        <h1 className="mt-4 font-heading text-5xl font-bold tracking-tight md:text-7xl lg:text-8xl">
          {title}
        </h1>
        {description && (
          <p className="mt-6 max-w-2xl text-lg text-text-secondary">
            {description}
          </p>
        )}
        {tags.length > 0 && (
          <div className="mt-6 flex flex-wrap gap-3">
            {tags.map((tag) => (
              <span
                key={tag}
                className="border border-border px-3 py-1 text-xs uppercase tracking-wider text-text-muted"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </Container>
    </section>
  );
}
