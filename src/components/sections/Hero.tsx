"use client";

import { heroTitles, profile } from "@/data/cv";
import { useTypewriter } from "@/hooks/useTypewriter";

export function Hero() {
  const title = useTypewriter(heroTitles);

  return (
    <section className="relative min-h-[80vh] flex flex-col justify-center px-4 max-w-4xl mx-auto py-12 md:py-20">
      <p
        className="text-sm mb-4 tracking-widest uppercase"
        style={{ color: "var(--text-muted)", fontFamily: "var(--font-mono)" }}
      >
        &gt; Bonjour, je suis
      </p>

      <h1
        className="text-5xl md:text-7xl font-bold mb-4 leading-tight"
        style={{ color: "var(--text)", fontFamily: "var(--font-heading)" }}
      >
        {profile.name}
      </h1>

      <div
        className="text-2xl md:text-3xl font-medium mb-6 h-10 flex items-center gap-2"
        style={{ color: "var(--accent)", fontFamily: "var(--font-mono)" }}
      >
        <span>{title}</span>
        <span className="animate-pulse">|</span>
      </div>

      <p
        className="text-lg mb-10 max-w-xl"
        style={{ color: "var(--text-muted)" }}
      >
        {profile.tagline}
      </p>

      <div className="flex flex-col sm:flex-row flex-wrap gap-3 md:gap-4">
        <a
          href="#experience"
          className="px-6 py-3 rounded-lg font-medium text-center transition-all hover:scale-105"
          style={{
            backgroundColor: "var(--accent)",
            color: "var(--accent-text)",
            fontFamily: "var(--font-body)",
          }}
        >
          Voir mon parcours
        </a>
        <a
          href={`https://github.com/${profile.github}`}
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 rounded-lg font-medium border text-center transition-all hover:scale-105"
          style={{
            borderColor: "var(--accent)",
            color: "var(--accent)",
            fontFamily: "var(--font-body)",
          }}
        >
          GitHub
        </a>
        <a
          href="#contact"
          className="px-6 py-3 rounded-lg font-medium border text-center transition-all hover:scale-105"
          style={{
            borderColor: "var(--border)",
            color: "var(--text-muted)",
            fontFamily: "var(--font-body)",
          }}
        >
          Me contacter
        </a>
      </div>

      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden md:block"
        style={{ color: "var(--text-muted)" }}
      >
        ↓
      </div>
    </section>
  );
}
