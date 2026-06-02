"use client";

export function PrintButton() {
  return (
    <button
      onClick={() => window.print()}
      className="no-print"
      style={{
        padding: "8px 20px",
        background: "#1e293b",
        color: "#fff",
        border: "none",
        borderRadius: 6,
        cursor: "pointer",
        fontSize: 14,
        fontFamily: "system-ui, sans-serif",
        fontWeight: 500,
      }}
    >
      Imprimer / Sauvegarder en PDF
    </button>
  );
}
