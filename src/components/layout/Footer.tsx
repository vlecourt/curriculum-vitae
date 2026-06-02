import { profile } from "@/data/cv";

const CURRENT_YEAR = new Date().getFullYear();

export function Footer() {
  return (
    <footer
      className="border-t py-8 mt-16"
      style={{ borderColor: "var(--border)" }}
    >
      <div
        className="max-w-4xl mx-auto px-4 text-center text-sm"
        style={{ color: "var(--text-muted)", fontFamily: "var(--font-mono)" }}
      >
        <p>
          © {CURRENT_YEAR} {profile.name} — construit avec Next.js & TypeScript
        </p>
        <p className="mt-1 opacity-50 text-xs">
          {/* Tu as trouvé le footer. Essaie le Konami code sur la page. */}
          src disponible sur{" "}
          <a
            href={`https://github.com/${profile.github}`}
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:opacity-100 opacity-70"
            style={{ color: "var(--accent)" }}
          >
            github.com/{profile.github}
          </a>
        </p>
      </div>
    </footer>
  );
}
