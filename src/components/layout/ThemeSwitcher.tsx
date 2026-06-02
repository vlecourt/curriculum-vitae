"use client";

import { useState } from "react";
import { createPortal } from "react-dom";
import { THEMES } from "@/types/theme";
import { useTheme } from "@/context/ThemeContext";

const CONSOLE_HINT_STYLE = "color: #a855f7; font-size: 13px; font-family: monospace;";
const CONSOLE_SECRET_STYLE = "color: #d4af37; font-size: 12px; font-family: monospace; font-style: italic;";

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const [toastVisible, setToastVisible] = useState(false);
  const [toastOpaque, setToastOpaque] = useState(false);

  function showConsoleHint() {
    console.log(`%c⚔️  Héroïc Fantasy activé...`, CONSOLE_HINT_STYLE);
    console.log(`%c   Tu sembles apprécier les thèmes cachés.`, CONSOLE_HINT_STYLE);
    console.log(`%c   🃏 Il paraît qu'une séquence légendaire débloque quelque chose de... chaotique.`, CONSOLE_SECRET_STYLE);

    setToastVisible(true);
    setTimeout(() => setToastOpaque(true), 10);
    setTimeout(() => setToastOpaque(false), 2800);
    setTimeout(() => setToastVisible(false), 3300);
  }

  function handleClick(id: string) {
    if (id === theme) return;
    if (id === "heroic-fantasy") showConsoleHint();
    setTheme(id as Parameters<typeof setTheme>[0]);
  }

  const toast =
    toastVisible && typeof document !== "undefined"
      ? createPortal(
          <div
            style={{
              position: "fixed",
              bottom: "24px",
              right: "24px",
              zIndex: 9998,
              padding: "12px 16px",
              borderRadius: "8px",
              fontSize: "14px",
              pointerEvents: "none",
              backgroundColor: "var(--bg-card)",
              border: "1px solid var(--border)",
              color: "var(--text-muted)",
              boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
              opacity: toastOpaque ? 1 : 0,
              transform: toastOpaque ? "translateY(0)" : "translateY(8px)",
              transition: "opacity 0.4s ease, transform 0.4s ease",
            }}
          >
            ✨ Ouvre la console... il y a peut-être quelque chose de caché.
          </div>,
          document.body
        )
      : null;

  return (
    <>
      <div className="flex items-center gap-1">
        {THEMES.map((t) => (
          <button
            key={t.id}
            onClick={() => handleClick(t.id)}
            title={t.label}
            className="w-7 h-7 md:w-8 md:h-8 rounded flex items-center justify-center text-xs md:text-sm transition-all cursor-pointer"
            style={{
              backgroundColor: theme === t.id ? "var(--accent)" : "transparent",
              color: theme === t.id ? "var(--accent-text)" : "var(--text-muted)",
              border: `1px solid ${theme === t.id ? "var(--accent)" : "var(--border)"}`,
            }}
          >
            {t.icon}
          </button>
        ))}
      </div>
      {toast}
    </>
  );
}
