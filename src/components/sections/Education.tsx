import { education, languages, interests } from "@/data/cv";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";

export function Education() {
  return (
    <Section id="education" title="Formation">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        {education.map((edu) => (
          <Card key={edu.degree}>
            <p
              className="text-xs uppercase tracking-widest mb-1"
              style={{ color: "var(--text-muted)", fontFamily: "var(--font-mono)" }}
            >
              {edu.period}
            </p>
            <h3
              className="text-sm font-bold mb-1"
              style={{ color: "var(--text)", fontFamily: "var(--font-heading)" }}
            >
              {edu.degree}
            </h3>
            <p
              className="text-xs"
              style={{ color: "var(--accent)" }}
            >
              {edu.institution} — {edu.location}
            </p>
            {edu.details && (
              <ul className="mt-2 space-y-1">
                {edu.details.map((d) => (
                  <li
                    key={d}
                    className="text-xs"
                    style={{ color: "var(--text-muted)" }}
                  >
                    · {d}
                  </li>
                ))}
              </ul>
            )}
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Card>
          <h3
            className="text-sm font-semibold mb-3 uppercase tracking-widest"
            style={{ color: "var(--text-muted)", fontFamily: "var(--font-mono)" }}
          >
            Langues
          </h3>
          <ul className="space-y-2">
            {languages.map((lang) => (
              <li key={lang.name} className="flex justify-between text-sm">
                <span style={{ color: "var(--text)" }}>{lang.name}</span>
                <span style={{ color: "var(--text-muted)", fontFamily: "var(--font-mono)" }}>
                  {lang.level}
                </span>
              </li>
            ))}
          </ul>
        </Card>

        <Card>
          <h3
            className="text-sm font-semibold mb-3 uppercase tracking-widest"
            style={{ color: "var(--text-muted)", fontFamily: "var(--font-mono)" }}
          >
            Centres d&apos;intérêt
          </h3>
          <ul className="space-y-1">
            {interests.map((interest) => (
              <li
                key={interest}
                className="text-sm flex gap-2"
                style={{ color: "var(--text-muted)" }}
              >
                <span style={{ color: "var(--accent)" }}>›</span>
                {interest}
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </Section>
  );
}
