"use client";

import Link from "next/link";
import { ThemeSwitcher } from "./ThemeSwitcher";

const NAV_LINKS = [
  { href: "/#experience", label: "Expérience" },
  { href: "/#skills", label: "Stack" },
  { href: "/#projects", label: "Projets" },
  { href: "/#education", label: "Formation" },
  { href: "/#contact", label: "Contact" },
];

export function Header() {
  return (
    <header
      className="sticky top-0 z-50 border-b backdrop-blur-sm"
      style={{
        backgroundColor: "color-mix(in srgb, var(--bg) 85%, transparent)",
        borderColor: "var(--border)",
      }}
    >
      <div className="max-w-4xl mx-auto px-4 h-14 flex items-center justify-between">
        <Link
          href="/"
          className="font-bold text-sm tracking-tight"
          style={{ color: "var(--accent)", fontFamily: "var(--font-heading)" }}
        >
          VL
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {NAV_LINKS.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="text-sm transition-colors hover:opacity-100 opacity-70"
              style={{ color: "var(--text)", fontFamily: "var(--font-body)" }}
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/print"
            className="hidden md:inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded border transition-opacity opacity-60 hover:opacity-100"
            style={{ borderColor: "var(--border)", color: "var(--text)" }}
            target="_blank"
          >
            <span>⎙</span> Version papier
          </Link>
          <ThemeSwitcher />
        </div>
      </div>
    </header>
  );
}
