import { buildContactLinks, profile } from "@/data/cv";
import { Section } from "@/components/ui/Section";

export function Contact() {
  const links = buildContactLinks(profile);

  return (
    <Section id="contact" title="Contact">
      <div
        className="rounded-lg border p-6 md:p-8 text-center"
        style={{ backgroundColor: "var(--bg-card)", borderColor: "var(--border)" }}
      >
        <p
          className="text-base md:text-lg mb-6 md:mb-8"
          style={{ color: "var(--text-muted)" }}
        >
          Disponible pour discuter de vos projets et opportunités.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-lg mx-auto">
          {links.map(({ label, value, href }) => {
            const isExternal = href.startsWith("http");
            return (
              <a
                key={label}
                href={href}
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noopener noreferrer" : undefined}
                className="min-w-0 overflow-hidden flex flex-col items-center p-4 rounded-lg border transition-all hover:scale-105"
                style={{
                  borderColor: "var(--border)",
                  backgroundColor: "var(--bg-subtle)",
                }}
              >
                <span
                  className="text-xs uppercase tracking-widest mb-1 shrink-0"
                  style={{ color: "var(--text-muted)", fontFamily: "var(--font-mono)" }}
                >
                  {label}
                </span>
                <span
                  className="text-sm font-medium w-full text-center break-all"
                  style={{ color: "var(--accent)" }}
                >
                  {value}
                </span>
              </a>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
