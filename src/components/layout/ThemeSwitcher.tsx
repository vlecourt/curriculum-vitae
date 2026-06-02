"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { THEMES, type ThemeId } from "@/types/theme";
import { useTheme } from "@/context/ThemeContext";
import { CONSOLE_STYLES } from "@/utils/consoleStyles";

const HINT_TRIGGER_THEME: ThemeId = "heroic-fantasy";
const TOAST_APPEAR_DELAY_MS = 10;
const TOAST_VISIBLE_MS = 2800;
const TOAST_UNMOUNT_MS = 3300;

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const [toastVisible, setToastVisible] = useState(false);
  const [toastOpaque, setToastOpaque] = useState(false);
  const toastTimers = useRef<ReturnType<typeof setTimeout>[]>([]);

  useEffect(() => {
    return () => toastTimers.current.forEach(clearTimeout);
  }, []);

  function showConsoleHint() {
    toastTimers.current.forEach(clearTimeout);

    console.log(`%c⚔️  Héroïc Fantasy activé...`, CONSOLE_STYLES.hint);
    console.log(`%c   Tu sembles apprécier les thèmes cachés.`, CONSOLE_STYLES.hint);
    console.log(`%c   🃏 Il paraît qu'une séquence légendaire débloque quelque chose de... chaotique.`, CONSOLE_STYLES.secretItalic);

    setToastVisible(true);
    toastTimers.current = [
      setTimeout(() => setToastOpaque(true), TOAST_APPEAR_DELAY_MS),
      setTimeout(() => setToastOpaque(false), TOAST_VISIBLE_MS),
      setTimeout(() => setToastVisible(false), TOAST_UNMOUNT_MS),
    ];
  }

  function handleClick(id: ThemeId) {
    if (id === theme) return;
    if (id === HINT_TRIGGER_THEME) showConsoleHint();
    setTheme(id);
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
        {THEMES.map((themeOption) => (
          <button
            key={themeOption.id}
            onClick={() => handleClick(themeOption.id)}
            title={themeOption.label}
            className="w-7 h-7 md:w-8 md:h-8 rounded flex items-center justify-center text-xs md:text-sm transition-all cursor-pointer"
            style={{
              backgroundColor: theme === themeOption.id ? "var(--accent)" : "transparent",
              color: theme === themeOption.id ? "var(--accent-text)" : "var(--text-muted)",
              border: `1px solid ${theme === themeOption.id ? "var(--accent)" : "var(--border)"}`,
            }}
          >
            {themeOption.icon}
          </button>
        ))}
      </div>
      {toast}
    </>
  );
}
