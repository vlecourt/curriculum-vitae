"use client";

import { useEffect } from "react";
import { profile } from "@/data/cv";

const CONSOLE_STYLES = {
  title: "color: #60a5fa; font-size: 18px; font-weight: bold; font-family: monospace;",
  normal: "color: #94a3b8; font-size: 13px; font-family: monospace;",
  accent: "color: #00ff41; font-size: 13px; font-family: monospace;",
  secret: "color: #d4af37; font-size: 13px; font-family: monospace;",
};

export function ConsoleGreeting() {
  useEffect(() => {
    console.log(`%c> ${profile.name} — Portfolio`, CONSOLE_STYLES.title);
    console.log(`%cBonjour, développeur curieux 👀`, CONSOLE_STYLES.accent);
    console.log(`%cTu inspectes le code ? J'aime ton style.`, CONSOLE_STYLES.normal);
    console.log(`%c`, "");
    console.log(`%c  Stack: Next.js 15 + TypeScript + Tailwind`, CONSOLE_STYLES.normal);
    console.log(`%c  Thèmes: light / dark / geekos / heroic-fantasy / harlequin`, CONSOLE_STYLES.normal);
    console.log(`%c`, "");
    console.log(`%c  🎮 Essaie le Konami code sur la page.`, CONSOLE_STYLES.accent);
    console.log(`%c  🔐 Il y a une page secrète quelque part...`, CONSOLE_STYLES.secret);
    console.log(`%c  📧 ${profile.email}`, CONSOLE_STYLES.normal);
  }, []);

  return null;
}
