import { education, experiences, interests, languages, profile, projects, skills } from "@/data/cv";
import { SiteQRCode } from "@/components/print/SiteQRCode";
import { PrintButton } from "@/components/print/PrintButton";

export const metadata = {
  title: "CV — Valentin Lecourt",
};

const S = {
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
};

export default function PrintPage() {
  return (
    <div style={S.page}>
      {/* Screen-only toolbar */}
      <div className="no-print" style={S.toolbar}>
        <span style={{ fontSize: 13, color: "#6b7280" }}>
          Aperçu avant impression — Version papier du CV
        </span>
        <PrintButton />
      </div>

      {/* A4 paper */}
      <div id="cv-print" style={S.paper}>
        {/* ── Header ─────────────────────────────────────── */}
        <div style={S.cvHeader}>
          <div>
            <h1 style={S.h1}>{profile.name}</h1>
            <p style={S.jobTitle}>{profile.title}</p>
            <p style={S.tagline}>{profile.tagline}</p>
            <div style={S.contactLine}>
              <span>✉ {profile.email}</span>
              <span>✆ {profile.phone}</span>
              <span>⌥ github.com/{profile.github}</span>
              <span>◎ {profile.location}</span>
            </div>
          </div>
          <SiteQRCode size={72} />
        </div>

        {/* ── Expérience ─────────────────────────────────── */}
        <h2 style={S.sectionTitle}>Expérience professionnelle</h2>
        {experiences.map((exp) => (
          <div key={exp.company} style={S.expItem}>
            <div style={S.expHeader}>
              <span style={S.expCompany}>
                {exp.company}
                <span style={S.expType}>{exp.type}</span>
              </span>
              <span style={S.expMeta}>{exp.period}</span>
            </div>
            <ul style={S.ul}>
              {exp.highlights.map((h) => (
                <li key={h} style={S.li}>{h}</li>
              ))}
            </ul>
            <div style={S.tags}>
              {exp.technologies.map((t) => (
                <span key={t} style={S.tag}>{t}</span>
              ))}
            </div>
          </div>
        ))}

        {/* ── Projets ────────────────────────────────────── */}
        <h2 style={S.sectionTitle}>Projets personnels</h2>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px 24px" }}>
          {projects.map((p) => (
            <div key={p.name} style={{ breakInside: "avoid", marginBottom: 6 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                <span style={{ fontSize: 11, fontWeight: 700, color: "#0f172a" }}>{p.name}</span>
                <span style={S.expMeta}>{p.period}</span>
              </div>
              <p style={{ fontSize: 10, color: "#475569", margin: "2px 0 4px", lineHeight: 1.4 }}>
                {p.description}
              </p>
              <div style={S.tags}>
                {p.tags.map((t) => (
                  <span key={t} style={S.tag}>{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* ── Deux colonnes : compétences / formation ─────── */}
        <div style={S.columns}>
          {/* Colonne gauche */}
          <div>
            <h2 style={S.sectionTitle}>Compétences</h2>
            {skills.map((g) => (
              <div key={g.category}>
                <div style={S.skillCategory}>{g.category}</div>
                <div style={S.skillItems}>{g.items.join(", ")}</div>
              </div>
            ))}

            <h2 style={S.sectionTitle}>Langues</h2>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "4px 20px" }}>
              {languages.map((l) => (
                <span key={l.name} style={{ fontSize: 11, color: "#334155" }}>
                  <strong>{l.name}</strong> — {l.level}
                </span>
              ))}
            </div>
          </div>

          {/* Colonne droite */}
          <div>
            <h2 style={S.sectionTitle}>Formation</h2>
            {education.map((e) => (
              <div key={e.degree} style={S.eduItem}>
                <div style={S.eduDegree}>{e.degree}</div>
                <div style={S.eduMeta}>
                  {e.institution} · {e.location} · {e.period}
                </div>
                {e.details && (
                  <div style={{ fontSize: 10, color: "#94a3b8", marginTop: 1 }}>
                    {e.details.join(", ")}
                  </div>
                )}
              </div>
            ))}

            <h2 style={S.sectionTitle}>Centres d&apos;intérêt</h2>
            <div style={{ fontSize: 11, color: "#475569", lineHeight: 1.8 }}>
              {interests.join(" · ")}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
