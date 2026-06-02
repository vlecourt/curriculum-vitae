"use client";

const DEFAULT_STYLE: React.CSSProperties = {
  padding: "8px 20px",
  background: "#1e293b",
  color: "#fff",
  border: "none",
  borderRadius: 6,
  cursor: "pointer",
  fontSize: 14,
  fontFamily: "system-ui, sans-serif",
  fontWeight: 500,
};

export function PrintButton({
  label = "Imprimer / Sauvegarder en PDF",
  style,
}: {
  label?: string;
  style?: React.CSSProperties;
} = {}) {
  return (
    <button
      onClick={() => window.print()}
      className="no-print"
      style={{ ...DEFAULT_STYLE, ...style }}
    >
      {label}
    </button>
  );
}
