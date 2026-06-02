import { profile } from "@/data/cv";
import { Section } from "@/components/ui/Section";
import type { ContactLink, Profile } from "@/types/cv";

const CARD_CLASS =
  "min-w-0 overflow-hidden flex flex-col items-center p-4 rounded-lg border transition-transform active:scale-95 [@media(hover:hover)]:hover:scale-105";
const CARD_STYLE = { borderColor: "var(--border)", backgroundColor: "var(--bg-subtle)" };

function buildContactLinks(p: Profile): ContactLink[] {
  return [
    { label: "Email", value: p.email, href: `mailto:${p.email}` },
    { label: "Téléphone", value: p.phone, href: `tel:${p.phone.replace(/\s/g, "")}` },
    { label: "GitHub", value: `github.com/${p.github}`, href: `https://github.com/${p.github}` },
    { label: "Localisation", value: p.location },
  ];
}

function ContactCard({ label, value, href }: ContactLink) {
  const isExternal = href?.startsWith("http") ?? false;
  const inner = (
    <>
      <span
        className="text-xs uppercase tracking-widest mb-1 shrink-0"
        style={{ color: "var(--text-muted)", fontFamily: "var(--font-mono)" }}
      >
        {label}
      </span>
      <span
        className="text-sm font-medium w-full text-center break-words"
        style={{ color: "var(--accent)" }}
      >
        {value}
      </span>
    </>
  );

  return href ? (
    <a
      href={href}
      aria-label={value}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className={CARD_CLASS}
      style={CARD_STYLE}
    >
      {inner}
    </a>
  ) : (
    <div className={CARD_CLASS} style={CARD_STYLE}>
      {inner}
    </div>
  );
}

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
          {links.map((link) => (
            <ContactCard key={link.label} {...link} />
          ))}
        </div>
      </div>
    </Section>
  );
}
