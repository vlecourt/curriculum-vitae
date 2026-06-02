"use client";

import { QRCodeSVG } from "qrcode.react";
import { useEffect, useState } from "react";

export function SiteQRCode({ size = 80 }: { size?: number }) {
  const [url, setUrl] = useState("");

  useEffect(() => {
    setUrl(window.location.origin);
  }, []);

  if (!url) return <div style={{ width: size, height: size }} />;

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
      <QRCodeSVG value={url} size={size} bgColor="#ffffff" fgColor="#000000" level="M" />
      <span style={{ fontSize: 9, color: "#666", fontFamily: "monospace", letterSpacing: "0.02em" }}>
        {url.replace(/^https?:\/\//, "")}
      </span>
    </div>
  );
}
