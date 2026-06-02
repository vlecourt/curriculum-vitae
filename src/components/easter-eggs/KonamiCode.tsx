"use client";

import { useEffect, useState } from "react";
import { useTheme } from "@/context/ThemeContext";
import { EASTER_EGG_THEME } from "@/types/theme";

const KONAMI = [
  "ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown",
  "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight",
  "b", "a",
];

export function KonamiCode() {
  const { setTheme } = useTheme();
  const [progress, setProgress] = useState(0);
  const [unlocked, setUnlocked] = useState(false);

  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === KONAMI[progress]) {
        const next = progress + 1;
        if (next === KONAMI.length) {
          setUnlocked(true);
          setTheme(EASTER_EGG_THEME);
          setProgress(0);
        } else {
          setProgress(next);
        }
      } else {
        setProgress(0);
      }
    }

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [progress, setTheme]);

  useEffect(() => {
    if (!unlocked) return;
    const timeout = setTimeout(() => setUnlocked(false), 5000);
    return () => clearTimeout(timeout);
  }, [unlocked]);

  if (!unlocked) return null;

  return (
    <div
      className="fixed inset-0 flex items-center justify-center z-[9999] pointer-events-none"
      style={{ backgroundColor: "rgba(0,0,0,0.8)" }}
    >
      <div className="text-center animate-bounce">
        <p className="text-6xl mb-4">🃏</p>
        <p className="text-2xl font-bold text-white">KONAMI CODE ACTIVÉ</p>
        <p className="text-white opacity-70 mt-2">Bienvenue dans le chaos, Harlequin mode engagé.</p>
      </div>
    </div>
  );
}
