"use client";

import { THEMES } from "@/types/theme";
import { useTheme } from "@/context/ThemeContext";

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex items-center gap-1">
      {THEMES.map((t) => (
        <button
          key={t.id}
          onClick={() => setTheme(t.id)}
          title={t.label}
          className="w-8 h-8 rounded flex items-center justify-center text-sm transition-all"
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
  );
}
