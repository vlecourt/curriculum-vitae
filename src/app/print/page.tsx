import { education, experiences, interests, languages, profile, projects, skills } from "@/data/cv";
import { SiteQRCode } from "@/components/print/SiteQRCode";
import { PrintButton } from "@/components/print/PrintButton";

export const metadata = {
  title: "CV Imprimable — Valentin Lecourt, Ingénieur Full-Stack & DevOps",
  description:
    "Version imprimable du CV de Valentin Lecourt : expériences professionnelles, compétences techniques, formation et projets personnels.",
  alternates: { canonical: "/print" },
};

const PRINT_STYLES = {
  page: {
    background: "#e5e7eb",
    minHeight: "100vh",
    padding: "32px 16px",
    fontFamily: "'Inter', system-ui, sans-serif",
  } as React.CSSProperties,

  toolbar: {
    maxWidth: 794,
    margin: "0 auto 16px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 12,
  } as React.CSSProperties,

  toolbarLabel: {
    fontSize: 13,
    color: "#6b7280",
  } as React.CSSProperties,

  paper: {
    maxWidth: 794,
    margin: "0 auto",
    background: "#fff",
    color: "#1e293b",
    boxShadow: "0 4px 24px rgba(0,0,0,0.15)",
    padding: "48px 52px",
    boxSizing: "border-box" as React.CSSProperties["boxSizing"],
  } as React.CSSProperties,

  cvHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    borderBottom: "2px solid #1e293b",
    paddingBottom: 16,
    marginBottom: 24,
    gap: 16,
  } as React.CSSProperties,

  h1: {
    fontSize: 26,
    fontWeight: 700,
    color: "#0f172a",
    margin: "0 0 2px",
    letterSpacing: "-0.02em",
  } as React.CSSProperties,

  jobTitle: {
    fontSize: 13,
    color: "#2563eb",
    fontWeight: 600,
    margin: "0 0 4px",
  } as React.CSSProperties,

  tagline: {
    fontSize: 11,
    color: "#64748b",
    margin: "0 0 10px",
  } as React.CSSProperties,

  contactLine: {
    display: "flex",
    flexWrap: "wrap" as React.CSSProperties["flexWrap"],
    gap: "4px 16px",
    fontSize: 11,
    color: "#334155",
  } as React.CSSProperties,

  sectionTitle: {
    fontSize: 11,
    fontWeight: 700,
    letterSpacing: "0.1em",
    textTransform: "uppercase" as React.CSSProperties["textTransform"],
    color: "#0f172a",
    borderBottom: "1px solid #cbd5e1",
    paddingBottom: 4,
    marginBottom: 12,
    marginTop: 20,
  } as React.CSSProperties,

  expItem: {
    marginBottom: 14,
    breakInside: "avoid" as React.CSSProperties["breakInside"],
  } as React.CSSProperties,

  expHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "baseline",
    marginBottom: 4,
  } as React.CSSProperties,

  expCompany: {
    fontSize: 13,
    fontWeight: 700,
    color: "#0f172a",
  } as React.CSSProperties,

  expMeta: {
    fontSize: 10,
    color: "#64748b",
    fontFamily: "monospace",
  } as React.CSSProperties,

  expType: {
    fontSize: 10,
    color: "#2563eb",
    marginLeft: 6,
  } as React.CSSProperties,

  ul: {
    margin: "0 0 6px",
    padding: "0 0 0 14px",
    listStyle: "disc",
  } as React.CSSProperties,

  li: {
    fontSize: 11,
    color: "#334155",
    marginBottom: 2,
    lineHeight: 1.5,
  } as React.CSSProperties,

  tags: {
    display: "flex",
    flexWrap: "wrap" as React.CSSProperties["flexWrap"],
    gap: 4,
  } as React.CSSProperties,

  tag: {
    fontSize: 9,
    background: "#dbeafe",
    color: "#1d4ed8",
    borderRadius: 3,
    padding: "1px 5px",
    fontWeight: 500,
  } as React.CSSProperties,

  projectGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "8px 24px",
  } as React.CSSProperties,

  projectItem: {
    breakInside: "avoid" as React.CSSProperties["breakInside"],
    marginBottom: 6,
  } as React.CSSProperties,

  projectHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "baseline",
  } as React.CSSProperties,

  projectName: {
    fontSize: 11,
    fontWeight: 700,
    color: "#0f172a",
  } as React.CSSProperties,

  projectDesc: {
    fontSize: 10,
    color: "#475569",
    margin: "2px 0 4px",
    lineHeight: 1.4,
  } as React.CSSProperties,

  columns: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 24,
    marginTop: 4,
  } as React.CSSProperties,

  skillCategory: {
    fontSize: 11,
    fontWeight: 700,
    color: "#0f172a",
    marginBottom: 2,
  } as React.CSSProperties,

  skillItems: {
    fontSize: 11,
    color: "#475569",
    marginBottom: 8,
    lineHeight: 1.5,
  } as React.CSSProperties,

  langList: {
    display: "flex",
    flexWrap: "wrap" as React.CSSProperties["flexWrap"],
    gap: "4px 20px",
  } as React.CSSProperties,

  langItem: {
    fontSize: 11,
    color: "#334155",
  } as React.CSSProperties,

  eduItem: {
    marginBottom: 10,
    breakInside: "avoid" as React.CSSProperties["breakInside"],
  } as React.CSSProperties,

  eduDegree: {
    fontSize: 11,
    fontWeight: 700,
    color: "#0f172a",
    marginBottom: 1,
  } as React.CSSProperties,

  eduMeta: {
    fontSize: 10,
    color: "#64748b",
  } as React.CSSProperties,

  eduDetails: {
    fontSize: 10,
    color: "#94a3b8",
    marginTop: 1,
  } as React.CSSProperties,

  interestList: {
    fontSize: 11,
    color: "#475569",
    lineHeight: 1.8,
  } as React.CSSProperties,
};

export default function PrintPage() {
  return (
    <div style={PRINT_STYLES.page}>
      <div className="no-print" style={PRINT_STYLES.toolbar}>
        <span style={PRINT_STYLES.toolbarLabel}>
          Aperçu avant impression — Version papier du CV
        </span>
        <PrintButton />
      </div>

      <div id="cv-print" style={PRINT_STYLES.paper}>
        <div style={PRINT_STYLES.cvHeader}>
          <div>
            <h1 style={PRINT_STYLES.h1}>{profile.name}</h1>
            <p style={PRINT_STYLES.jobTitle}>{profile.title}</p>
            <p style={PRINT_STYLES.tagline}>{profile.tagline}</p>
            <div style={PRINT_STYLES.contactLine}>
              <span>✉ {profile.email}</span>
              <span>✆ {profile.phone}</span>
              <span>⌥ github.com/{profile.github}</span>
              <span>◎ {profile.location}</span>
            </div>
          </div>
          <SiteQRCode size={72} />
        </div>

        <h2 style={PRINT_STYLES.sectionTitle}>Expérience professionnelle</h2>
        {experiences.map((exp) => (
          <div key={exp.company} style={PRINT_STYLES.expItem}>
            <div style={PRINT_STYLES.expHeader}>
              <span style={PRINT_STYLES.expCompany}>
                {exp.company}
                <span style={PRINT_STYLES.expType}>{exp.type}</span>
              </span>
              <span style={PRINT_STYLES.expMeta}>{exp.period}</span>
            </div>
            <ul style={PRINT_STYLES.ul}>
              {exp.highlights.map((highlight) => (
                <li key={highlight} style={PRINT_STYLES.li}>{highlight}</li>
              ))}
            </ul>
            <div style={PRINT_STYLES.tags}>
              {exp.technologies.map((tech) => (
                <span key={tech} style={PRINT_STYLES.tag}>{tech}</span>
              ))}
            </div>
          </div>
        ))}

        <h2 style={PRINT_STYLES.sectionTitle}>Projets personnels</h2>
        <div style={PRINT_STYLES.projectGrid}>
          {projects.map((project) => (
            <div key={project.name} style={PRINT_STYLES.projectItem}>
              <div style={PRINT_STYLES.projectHeader}>
                <span style={PRINT_STYLES.projectName}>{project.name}</span>
                <span style={PRINT_STYLES.expMeta}>{project.period}</span>
              </div>
              <p style={PRINT_STYLES.projectDesc}>{project.description}</p>
              <div style={PRINT_STYLES.tags}>
                {project.tags.map((tag) => (
                  <span key={tag} style={PRINT_STYLES.tag}>{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div style={PRINT_STYLES.columns}>
          <div>
            <h2 style={PRINT_STYLES.sectionTitle}>Compétences</h2>
            {skills.map((group) => (
              <div key={group.category}>
                <div style={PRINT_STYLES.skillCategory}>{group.category}</div>
                <div style={PRINT_STYLES.skillItems}>{group.items.join(", ")}</div>
              </div>
            ))}

            <h2 style={PRINT_STYLES.sectionTitle}>Langues</h2>
            <div style={PRINT_STYLES.langList}>
              {languages.map((lang) => (
                <span key={lang.name} style={PRINT_STYLES.langItem}>
                  <strong>{lang.name}</strong> — {lang.level}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h2 style={PRINT_STYLES.sectionTitle}>Formation</h2>
            {education.map((edu) => (
              <div key={edu.degree} style={PRINT_STYLES.eduItem}>
                <div style={PRINT_STYLES.eduDegree}>{edu.degree}</div>
                <div style={PRINT_STYLES.eduMeta}>
                  {edu.institution} · {edu.location} · {edu.period}
                </div>
                {edu.details && (
                  <div style={PRINT_STYLES.eduDetails}>
                    {edu.details.join(", ")}
                  </div>
                )}
              </div>
            ))}

            <h2 style={PRINT_STYLES.sectionTitle}>Centres d&apos;intérêt</h2>
            <div style={PRINT_STYLES.interestList}>
              {interests.join(" · ")}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
