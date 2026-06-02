import { skills } from "@/data/cv";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";

export function Skills() {
  return (
    <Section id="skills" title="Stack technique">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {skills.map((group) => (
          <Card key={group.category}>
            <h3
              className="text-sm font-semibold mb-3 uppercase tracking-widest"
              style={{ color: "var(--text-muted)", fontFamily: "var(--font-mono)" }}
            >
              {group.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <Badge key={item} label={item} />
              ))}
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
