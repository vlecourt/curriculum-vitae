"use client";

import {
  education,
  experiences,
  interests,
  languages,
  profile,
  projects,
  skills,
} from "@/data/cv";
import {
  FANTASY_INTERESTS,
  FANTASY_LABELS,
  FANTASY_LANG_LEVELS,
  FANTASY_LOCATIONS,
  FANTASY_SKILL_CATEGORIES,
} from "@/data/cv-fantasy";
import { PrintButton } from "@/components/print/PrintButton";
import { SiteQRCode } from "@/components/print/SiteQRCode";
import { HEROIC_FANTASY_THEME } from "@/types/theme";
import { useTheme } from "@/context/ThemeContext";

// ── SVG Ornaments ─────────────────────────────────────────────────────────────

function CornerOrnament({ flipX = false, flipY = false }: { flipX?: boolean; flipY?: boolean }) {
  return (
    <svg
      width="80"
      height="80"
      viewBox="0 0 80 80"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      style={{ display: "block", transform: `scale(${flipX ? -1 : 1}, ${flipY ? -1 : 1})` }}
    >
      {/* Gold L-frame */}
      <path d="M1 1 L70 1 L70 7 L7 7 L7 70 L1 70 Z" fill="#c9a84c" />
      {/* Crimson inner shadow line */}
      <path d="M3 3 L68 3 L68 5 L5 5 L5 68 L3 68 Z" fill="#8b0000" opacity="0.35" />
      {/* Diamond on top bar */}
      <path d="M35 4 L39 1 L43 4 L39 7 Z" fill="#8b0000" />
      {/* Diamond on left bar */}
      <path d="M4 35 L1 39 L4 43 L7 39 Z" fill="#8b0000" />
      {/* Quatrefoil at inner corner */}
      <circle cx="22" cy="22" r="8" fill="none" stroke="#c9a84c" strokeWidth="1.2" />
      <circle cx="22" cy="14" r="3" fill="#c9a84c" opacity="0.65" />
      <circle cx="22" cy="30" r="3" fill="#c9a84c" opacity="0.65" />
      <circle cx="14" cy="22" r="3" fill="#c9a84c" opacity="0.65" />
      <circle cx="30" cy="22" r="3" fill="#c9a84c" opacity="0.65" />
      <circle cx="22" cy="22" r="2.5" fill="#8b0000" />
      {/* Vine tendrils toward frame */}
      <path d="M28 18 Q40 12 40 7" stroke="#c9a84c" strokeWidth="0.8" fill="none" opacity="0.5" />
      <path d="M18 28 Q12 40 7 40" stroke="#c9a84c" strokeWidth="0.8" fill="none" opacity="0.5" />
    </svg>
  );
}

function CornerOrnamentSet() {
  return (
    <>
      <div style={{ position: "absolute", top: 0, left: 0, pointerEvents: "none" }}>
        <CornerOrnament />
      </div>
      <div style={{ position: "absolute", top: 0, right: 0, pointerEvents: "none" }}>
        <CornerOrnament flipX />
      </div>
      <div style={{ position: "absolute", bottom: 0, left: 0, pointerEvents: "none" }}>
        <CornerOrnament flipY />
      </div>
      <div style={{ position: "absolute", bottom: 0, right: 0, pointerEvents: "none" }}>
        <CornerOrnament flipX flipY />
      </div>
    </>
  );
}

function HeaderDivider() {
  return (
    <div style={{ margin: "8px 0 12px" }}>
      <svg
        width="100%"
        height="14"
        viewBox="0 0 400 14"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line x1="0" y1="7" x2="163" y2="7" stroke="#c9a84c" strokeWidth="0.9" />
        <path d="M167 7 L171 2 L175 7 L171 12 Z" fill="#8b0000" />
        <path d="M179 7 L184 1.5 L189 7 L184 12.5 Z" fill="#c9a84c" />
        <circle cx="196" cy="7" r="3.5" fill="none" stroke="#c9a84c" strokeWidth="1.2" />
        <circle cx="196" cy="7" r="1.5" fill="#8b0000" />
        <path d="M203 7 L208 1.5 L213 7 L208 12.5 Z" fill="#c9a84c" />
        <path d="M217 7 L221 2 L225 7 L221 12 Z" fill="#8b0000" />
        <line x1="229" y1="7" x2="400" y2="7" stroke="#c9a84c" strokeWidth="0.9" />
      </svg>
    </div>
  );
}

// ── Helpers ───────────────────────────────────────────────────────────────────

const FANTASY_FONT_BODY = "var(--font-im-fell,'Palatino Linotype','Book Antiqua',Georgia,serif)";
const FANTASY_FONT_HEADING = "var(--font-cinzel,'Palatino Linotype','Book Antiqua',Georgia,serif)";
const LETTRINE_FONT_SIZE = 46;

function fantasyTitle(label: string): string {
  return `✦ ${label} ✦`;
}

// ── Styles ────────────────────────────────────────────────────────────────────

const SHARED_STYLES = {
  toolbar: {
    maxWidth: 794,
    margin: "0 auto 16px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 12,
  } as React.CSSProperties,

  expItem: {
    marginBottom: 10,
    breakInside: "avoid" as React.CSSProperties["breakInside"],
  } as React.CSSProperties,

  expHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "baseline",
    marginBottom: 4,
  } as React.CSSProperties,

  tags: {
    display: "flex",
    flexWrap: "wrap" as React.CSSProperties["flexWrap"],
    gap: 4,
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

  langList: {
    display: "flex",
    flexWrap: "wrap" as React.CSSProperties["flexWrap"],
    gap: "4px 20px",
  } as React.CSSProperties,

  columns: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 24,
    marginTop: 4,
  } as React.CSSProperties,

  eduItem: {
    marginBottom: 10,
    breakInside: "avoid" as React.CSSProperties["breakInside"],
  } as React.CSSProperties,
};

const PRINT_STYLES = {
  ...SHARED_STYLES,

  page: {
    background: "#e5e7eb",
    minHeight: "100vh",
    padding: "32px 16px",
    fontFamily: "'Inter', system-ui, sans-serif",
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
    position: "relative" as React.CSSProperties["position"],
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
    marginTop: 14,
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

  tag: {
    fontSize: 9,
    background: "#dbeafe",
    color: "#1d4ed8",
    borderRadius: 3,
    padding: "1px 5px",
    fontWeight: 500,
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

  skillCategory: {
    fontSize: 11,
    fontWeight: 700,
    color: "#0f172a",
    marginBottom: 2,
  } as React.CSSProperties,

  skillItems: {
    fontSize: 11,
    color: "#475569",
    marginBottom: 5,
    lineHeight: 1.5,
  } as React.CSSProperties,

  langItem: {
    fontSize: 11,
    color: "#334155",
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

const FANTASY_STYLES = {
  ...SHARED_STYLES,

  page: {
    background: "linear-gradient(160deg,#3d1e00 0%,#2a1400 50%,#3d1e00 100%)",
    minHeight: "100vh",
    padding: "32px 16px",
    fontFamily: FANTASY_FONT_BODY,
  } as React.CSSProperties,

  toolbarLabel: {
    fontSize: 13,
    color: "#c9a84c",
    fontFamily: FANTASY_FONT_BODY,
    fontStyle: "italic",
  } as React.CSSProperties,

  paper: {
    maxWidth: 794,
    margin: "0 auto",
    background: "linear-gradient(160deg,#f9ead0 0%,#f0daa5 40%,#ecdba3 70%,#f4e4bc 100%)",
    color: "#2c1810",
    boxShadow: "0 12px 50px rgba(0,0,0,0.6),inset 0 0 60px rgba(139,90,20,0.07)",
    padding: "60px 60px 48px",
    boxSizing: "border-box" as React.CSSProperties["boxSizing"],
    border: "2px solid #c9a84c",
    position: "relative" as React.CSSProperties["position"],
    fontFamily: FANTASY_FONT_BODY,
  } as React.CSSProperties,

  cvHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    paddingBottom: 0,
    marginBottom: 0,
    gap: 16,
  } as React.CSSProperties,

  h1: {
    fontSize: 26,
    fontWeight: 700,
    color: "#2c1810",
    margin: "0 0 6px",
    letterSpacing: "0.04em",
    fontFamily: FANTASY_FONT_HEADING,
    display: "flex",
    alignItems: "flex-end",
    lineHeight: "1",
  } as React.CSSProperties,

  jobTitle: {
    fontSize: 12,
    color: "#8b0000",
    fontWeight: 600,
    margin: "0 0 5px",
    fontFamily: FANTASY_FONT_HEADING,
    letterSpacing: "0.04em",
  } as React.CSSProperties,

  tagline: {
    fontSize: 11,
    color: "#5c3d1e",
    margin: "0 0 10px",
    fontStyle: "italic",
    fontFamily: FANTASY_FONT_BODY,
  } as React.CSSProperties,

  contactLine: {
    display: "flex",
    flexWrap: "wrap" as React.CSSProperties["flexWrap"],
    gap: "4px 16px",
    fontSize: 11,
    color: "#3d2200",
    fontFamily: FANTASY_FONT_BODY,
  } as React.CSSProperties,

  sectionTitle: {
    fontSize: 10,
    fontWeight: 700,
    letterSpacing: "0.14em",
    textTransform: "uppercase" as React.CSSProperties["textTransform"],
    color: "#8b0000",
    borderBottom: "1px solid #c9a84c",
    paddingBottom: 5,
    marginBottom: 10,
    marginTop: 10,
    fontFamily: FANTASY_FONT_HEADING,
  } as React.CSSProperties,

  expCompany: {
    fontSize: 13,
    fontWeight: 700,
    color: "#2c1810",
    fontFamily: FANTASY_FONT_HEADING,
  } as React.CSSProperties,

  expMeta: {
    fontSize: 10,
    color: "#5c3d1e",
    fontStyle: "italic",
    fontFamily: FANTASY_FONT_BODY,
  } as React.CSSProperties,

  expType: {
    fontSize: 10,
    color: "#8b0000",
    marginLeft: 6,
    fontStyle: "italic",
  } as React.CSSProperties,

  ul: {
    margin: "0 0 6px",
    padding: "0 0 0 6px",
    listStyle: "none",
  } as React.CSSProperties,

  li: {
    fontSize: 11,
    color: "#3d2200",
    marginBottom: 3,
    lineHeight: 1.65,
    fontFamily: FANTASY_FONT_BODY,
  } as React.CSSProperties,

  tag: {
    fontSize: 9,
    background: "#e8d5a0",
    color: "#5c3d1e",
    borderRadius: 2,
    padding: "1px 5px",
    fontWeight: 500,
    border: "0.5px solid #c9a84c",
    fontFamily: FANTASY_FONT_BODY,
  } as React.CSSProperties,

  projectName: {
    fontSize: 11,
    fontWeight: 700,
    color: "#2c1810",
    fontFamily: FANTASY_FONT_HEADING,
  } as React.CSSProperties,

  projectDesc: {
    fontSize: 10,
    color: "#3d2200",
    margin: "2px 0 4px",
    lineHeight: 1.5,
    fontFamily: FANTASY_FONT_BODY,
    fontStyle: "italic",
  } as React.CSSProperties,

  skillCategory: {
    fontSize: 11,
    fontWeight: 700,
    color: "#2c1810",
    marginBottom: 2,
    fontFamily: FANTASY_FONT_HEADING,
  } as React.CSSProperties,

  skillItems: {
    fontSize: 11,
    color: "#3d2200",
    marginBottom: 5,
    lineHeight: 1.6,
    fontFamily: FANTASY_FONT_BODY,
  } as React.CSSProperties,

  langItem: {
    fontSize: 11,
    color: "#3d2200",
    fontFamily: FANTASY_FONT_BODY,
  } as React.CSSProperties,

  eduDegree: {
    fontSize: 11,
    fontWeight: 700,
    color: "#2c1810",
    marginBottom: 1,
    fontFamily: FANTASY_FONT_HEADING,
  } as React.CSSProperties,

  eduMeta: {
    fontSize: 10,
    color: "#5c3d1e",
    fontStyle: "italic",
    fontFamily: FANTASY_FONT_BODY,
  } as React.CSSProperties,

  eduDetails: {
    fontSize: 10,
    color: "#7a5a30",
    marginTop: 1,
    fontFamily: FANTASY_FONT_BODY,
  } as React.CSSProperties,

  interestList: {
    fontSize: 11,
    color: "#3d2200",
    lineHeight: 1.9,
    fontFamily: FANTASY_FONT_BODY,
    fontStyle: "italic",
  } as React.CSSProperties,

  printButton: {
    background: "#8b0000",
    color: "#f4e4bc",
    border: "1px solid #c9a84c",
    borderRadius: 4,
    fontSize: 13,
    fontFamily: FANTASY_FONT_BODY,
    fontStyle: "italic",
    letterSpacing: "0.03em",
  } as React.CSSProperties,

  colophon: {
    marginTop: 28,
    textAlign: "center" as React.CSSProperties["textAlign"],
    fontSize: 9,
    color: "#8b0000",
    fontStyle: "italic",
    fontFamily: FANTASY_FONT_BODY,
    opacity: 0.85,
    borderTop: "1px solid #c9a84c",
    paddingTop: 12,
    letterSpacing: "0.06em",
  } as React.CSSProperties,
};

// ── Component ─────────────────────────────────────────────────────────────────

export function PrintContent() {
  const { theme } = useTheme();
  const isFantasy = theme === HEROIC_FANTASY_THEME;
  const styles = isFantasy ? FANTASY_STYLES : PRINT_STYLES;

  return (
    <div className="print-page-wrapper" style={styles.page}>
      <div className="no-print" style={styles.toolbar}>
        <span style={styles.toolbarLabel}>
          {isFantasy
            ? "✦ Enluminure du Parchemin — Mode Héroïc Fantasy"
            : "Aperçu avant impression — Version papier du CV"}
        </span>
        {isFantasy ? (
          <PrintButton label="⚜ Graver sur Parchemin" style={FANTASY_STYLES.printButton} />
        ) : (
          <PrintButton />
        )}
      </div>

      <div id="cv-print" className={isFantasy ? "cv-print-fantasy" : ""} style={styles.paper}>
        {isFantasy && <CornerOrnamentSet />}

        {/* ── Header ── */}
        <div style={styles.cvHeader}>
          <div>
            <h1 style={styles.h1}>
              {isFantasy ? (
                <>
                  <span style={{ fontSize: LETTRINE_FONT_SIZE, color: "#8b0000", lineHeight: 1, marginRight: 1 }}>V</span>
                  <span>alentin </span>
                  <span style={{ fontSize: LETTRINE_FONT_SIZE, color: "#8b0000", lineHeight: 1, marginLeft: 5, marginRight: 1 }}>L</span>
                  <span>ecourt</span>
                </>
              ) : profile.name}
            </h1>
            <p style={styles.jobTitle}>{isFantasy ? FANTASY_LABELS.profileTitle : profile.title}</p>
            <p style={styles.tagline}>{isFantasy ? FANTASY_LABELS.profileTagline : profile.tagline}</p>
            <div style={styles.contactLine}>
              <span>{isFantasy ? FANTASY_LABELS.contactEmail : "✉"} {profile.email}</span>
              <span>{isFantasy ? FANTASY_LABELS.contactPhone : "✆"} {profile.phone}</span>
              <span>{isFantasy ? FANTASY_LABELS.contactGithub : "⌥"} github.com/{profile.github}</span>
              <span>{isFantasy ? FANTASY_LABELS.contactLocation : "◎"} {isFantasy ? (FANTASY_LOCATIONS[profile.location] ?? profile.location) : profile.location}</span>
            </div>
          </div>

          <div style={{ textAlign: "center" }}>
            {isFantasy && (
              <div style={{ fontSize: 8, color: "#8b0000", marginBottom: 4, fontStyle: "italic", fontFamily: FANTASY_FONT_BODY }}>
                {FANTASY_LABELS.qrCaption}
              </div>
            )}
            <SiteQRCode size={72} />
          </div>
        </div>

        {isFantasy && <HeaderDivider />}

        {/* ── Expérience ── */}
        <h2 style={styles.sectionTitle}>
          {isFantasy ? fantasyTitle(FANTASY_LABELS.sectionExperiences) : "Expérience professionnelle"}
        </h2>
        {experiences.map((exp) => (
          <div key={exp.company} style={styles.expItem}>
            <div style={styles.expHeader}>
              <span style={styles.expCompany}>
                {exp.company}
                <span style={styles.expType}>{exp.type}</span>
              </span>
              <span style={styles.expMeta}>{exp.period}</span>
            </div>
            <ul style={styles.ul}>
              {exp.highlights.map((highlight) => (
                <li key={highlight} style={styles.li}>
                  {isFantasy ? `❧ ${highlight}` : highlight}
                </li>
              ))}
            </ul>
            <div style={styles.tags}>
              {exp.technologies.map((tech) => (
                <span key={tech} style={styles.tag}>{tech}</span>
              ))}
            </div>
          </div>
        ))}

        {/* ── Projets ── */}
        <h2 style={styles.sectionTitle}>
          {isFantasy ? fantasyTitle(FANTASY_LABELS.sectionProjects) : "Projets personnels"}
        </h2>
        <div style={styles.projectGrid}>
          {projects.map((project) => (
            <div key={project.name} style={styles.projectItem}>
              <div style={styles.projectHeader}>
                <span style={styles.projectName}>{project.name}</span>
                <span style={styles.expMeta}>{project.period}</span>
              </div>
              <p style={styles.projectDesc}>{project.description}</p>
              <div style={styles.tags}>
                {project.tags.map((tag) => (
                  <span key={tag} style={styles.tag}>{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* ── Colonnes compétences / formation ── */}
        <div style={styles.columns}>
          <div>
            <h2 style={styles.sectionTitle}>
              {isFantasy ? fantasyTitle(FANTASY_LABELS.sectionSkills) : "Compétences"}
            </h2>
            {skills.map((group) => (
              <div key={group.category}>
                <div style={styles.skillCategory}>
                  {isFantasy
                    ? (FANTASY_SKILL_CATEGORIES[group.category] ?? group.category)
                    : group.category}
                </div>
                <div style={styles.skillItems}>{group.items.join(", ")}</div>
              </div>
            ))}

            <h2 style={styles.sectionTitle}>
              {isFantasy ? fantasyTitle(FANTASY_LABELS.sectionLanguages) : "Langues"}
            </h2>
            <div style={styles.langList}>
              {languages.map((lang) => (
                <span key={lang.name} style={styles.langItem}>
                  <strong>{lang.name}</strong> —{" "}
                  {isFantasy
                    ? (FANTASY_LANG_LEVELS[lang.level] ?? lang.level)
                    : lang.level}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h2 style={styles.sectionTitle}>
              {isFantasy ? fantasyTitle(FANTASY_LABELS.sectionEducation) : "Formation"}
            </h2>
            {education.map((edu) => (
              <div key={edu.degree} style={styles.eduItem}>
                <div style={styles.eduDegree}>{edu.degree}</div>
                <div style={styles.eduMeta}>
                  {edu.institution} · {isFantasy ? (FANTASY_LOCATIONS[edu.location] ?? edu.location) : edu.location} · {edu.period}
                </div>
                {edu.details && (
                  <div style={styles.eduDetails}>{edu.details.join(", ")}</div>
                )}
              </div>
            ))}

            <h2 style={styles.sectionTitle}>
              {isFantasy ? fantasyTitle(FANTASY_LABELS.sectionInterests) : "Centres d'intérêt"}
            </h2>
            <div style={styles.interestList}>
              {(isFantasy ? FANTASY_INTERESTS : interests).join(" · ")}
            </div>
          </div>
        </div>

        {isFantasy && (
          <div style={FANTASY_STYLES.colophon}>{FANTASY_LABELS.footer}</div>
        )}
      </div>
    </div>
  );
}
