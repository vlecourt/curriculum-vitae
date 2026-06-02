"use client";

import { useEffect } from "react";
import { profile } from "@/data/cv";
import { CONSOLE_STYLES } from "@/utils/consoleStyles";

export function ConsoleGreeting() {
  useEffect(() => {
    console.log(`%c> ${profile.name} — Portfolio`, CONSOLE_STYLES.title);
    console.log(`%cBonjour, développeur curieux 👀`, CONSOLE_STYLES.accent);
    console.log(`%cEn quête d'easter eggs ?`, CONSOLE_STYLES.normal);
    console.log(`%c  Stack: Next.js 15 + TypeScript + Tailwind`, CONSOLE_STYLES.normal);
    console.log(`%c  Thèmes: light / dark / geekos / heroic-fantasy`, CONSOLE_STYLES.normal);
    console.log(`%c  🎮 Une séquence culte pourrait débloquer quelque chose de plus... chaotique`, CONSOLE_STYLES.accent);
    console.log(`%c  🔐 Il y a une page secrète quelque part...`, CONSOLE_STYLES.secret);
    console.log(`%c  📧 ${profile.email}`, CONSOLE_STYLES.normal);
  }, []);

  return null;
}
