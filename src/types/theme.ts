export type ThemeId = "light" | "dark" | "geekos" | "heroic-fantasy" | "harlequin";

export interface Theme {
  id: ThemeId;
  label: string;
  icon: string;
}

export const THEMES: Theme[] = [
  { id: "light", label: "Light", icon: "☀️" },
  { id: "dark", label: "Dark", icon: "🌙" },
  { id: "geekos", label: "Geekos", icon: "💻" },
  { id: "heroic-fantasy", label: "Heroic Fantasy", icon: "🗡" },
];

export const DEFAULT_THEME: ThemeId = "dark";
export const EASTER_EGG_THEME: ThemeId = "harlequin";
