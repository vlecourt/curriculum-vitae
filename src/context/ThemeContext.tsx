"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { DEFAULT_THEME, type ThemeId } from "@/types/theme";

const STORAGE_KEY = "portfolio-theme";

function loadTheme(): ThemeId {
  if (typeof window === "undefined") return DEFAULT_THEME;
  return (localStorage.getItem(STORAGE_KEY) as ThemeId | null) ?? DEFAULT_THEME;
}

function persistTheme(theme: ThemeId): void {
  localStorage.setItem(STORAGE_KEY, theme);
  document.documentElement.setAttribute("data-theme", theme);
}

interface ThemeContextValue {
  theme: ThemeId;
  setTheme: (theme: ThemeId) => void;
}

const ThemeContext = createContext<ThemeContextValue | null>(null);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<ThemeId>(DEFAULT_THEME);

  useEffect(() => {
    const stored = loadTheme();
    setThemeState(stored);
    document.documentElement.setAttribute("data-theme", stored);
  }, []);

  function setTheme(next: ThemeId) {
    setThemeState(next);
    persistTheme(next);
  }

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme(): ThemeContextValue {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used inside ThemeProvider");
  return ctx;
}
