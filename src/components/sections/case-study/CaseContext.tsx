import Container from "@/components/ui/Container";

interface CaseContextProps {
  role?: string;
  duration?: string;
  tools?: string[];
}

export default function CaseContext({ role, duration, tools = [] }: CaseContextProps) {
  const details = [
    { label: "Role", value: role },
    { label: "Duration", value: duration },
    { label: "Tools", value: tools.length > 0 ? tools.join(", ") : undefined },
  ].filter((d) => d.value);

  if (details.length === 0) return null;

  return (
    <section className="border-t border-border py-16">
      <Container>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          {details.map((detail) => (
            <div key={detail.label}>
              <span className="text-sm uppercase tracking-wider text-text-muted">
                {detail.label}
              </span>
              <p className="mt-2 text-text-primary">{detail.value}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
