import { ImageResponse } from "next/og";

export const alt = "Valentin Lecourt — Ingénieur Full-Stack & Facilitateur IA";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "60px",
          gap: "0px",
        }}
      >
        <div
          style={{
            fontSize: 14,
            color: "#3b82f6",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            marginBottom: 24,
          }}
        >
          Portfolio
        </div>
        <div
          style={{
            fontSize: 72,
            fontWeight: 700,
            color: "#f8fafc",
            marginBottom: 16,
            textAlign: "center",
            lineHeight: 1.1,
          }}
        >
          Valentin Lecourt
        </div>
        <div
          style={{
            fontSize: 28,
            color: "#3b82f6",
            marginBottom: 20,
            textAlign: "center",
          }}
        >
          Ingénieur Full-Stack & Facilitateur IA
        </div>
        <div
          style={{
            fontSize: 18,
            color: "#64748b",
            textAlign: "center",
          }}
        >
          10+ ans · DevOps · AI tooling · Grenoble
        </div>
      </div>
    ),
    size
  );
}
