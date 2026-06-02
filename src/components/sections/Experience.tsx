import { experiences } from "@/data/cv";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";

export function Experience() {
  return (
    <Section id="experience" title="Expérience">
      <div className="flex flex-col gap-6">
        {experiences.map((exp) => (
          <Card key={exp.company}>
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
              <div>
                <h3
                  className="text-xl font-bold"
                  style={{ color: "var(--text)", fontFamily: "var(--font-heading)" }}
                >
                  {exp.company}
                </h3>
                <span
                  className="text-sm"
                  style={{ color: "var(--accent)", fontFamily: "var(--font-mono)" }}
                >
                  {exp.type}
                </span>
              </div>
              <span
                className="text-sm whitespace-nowrap"
                style={{ color: "var(--text-muted)", fontFamily: "var(--font-mono)" }}
              >
                {exp.period}
              </span>
            </div>

            <ul className="space-y-2 mb-4">
              {exp.highlights.map((h) => (
                <li
                  key={h}
                  className="text-sm flex gap-2"
                  style={{ color: "var(--text-muted)" }}
                >
                  <span style={{ color: "var(--accent)" }}>›</span>
                  <span>{h}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2">
              {exp.technologies.map((tech) => (
                <Badge key={tech} label={tech} />
              ))}
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
