interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

export function Section({ id, title, children }: SectionProps) {
  return (
    <section id={id} className="py-16 px-4 max-w-4xl mx-auto">
      <h2
        className="text-2xl font-bold mb-8 pb-3 border-b"
        style={{
          color: "var(--accent)",
          borderColor: "var(--border)",
          fontFamily: "var(--font-heading)",
        }}
      >
        {title}
      </h2>
      {children}
    </section>
  );
}
