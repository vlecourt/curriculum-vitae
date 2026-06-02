import { projects } from "@/data/cv";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";

export function Projects() {
  return (
    <Section id="projects" title="Projets">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {projects.map((project) => (
          <Card key={project.name} className="flex flex-col justify-between">
            <div>
              <div className="flex items-start justify-between gap-2 mb-2">
                <h3
                  className="text-lg font-bold"
                  style={{ color: "var(--text)", fontFamily: "var(--font-heading)" }}
                >
                  {project.name}
                </h3>
                <span
                  className="text-xs whitespace-nowrap mt-1"
                  style={{ color: "var(--text-muted)", fontFamily: "var(--font-mono)" }}
                >
                  {project.period}
                </span>
              </div>
              <p
                className="text-sm mb-4"
                style={{ color: "var(--text-muted)" }}
              >
                {project.description}
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <Badge key={tag} label={tag} />
              ))}
            </div>

            {project.url && (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 text-xs underline"
                style={{ color: "var(--accent)" }}
              >
                Voir le projet →
              </a>
            )}
          </Card>
        ))}
      </div>
    </Section>
  );
}
