"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ThemeSwitcher } from "./ThemeSwitcher";

const NAV_LINKS = [
  { href: "/#experience", label: "Expérience" },
  { href: "/#skills", label: "Stack" },
  { href: "/#projects", label: "Projets" },
  { href: "/#education", label: "Formation" },
  { href: "/#contact", label: "Contact" },
];

const BAR_STYLE = { backgroundColor: "var(--text)" } as React.CSSProperties;

function NavLink({
  href,
  label,
  className = "",
  onClick,
}: {
  href: string;
  label: string;
  className?: string;
  onClick?: () => void;
}) {
  return (
    <a
      href={href}
      onClick={onClick}
      className={`text-sm opacity-70 [@media(hover:hover)]:hover:opacity-100 transition-opacity ${className}`}
      style={{ color: "var(--text)", fontFamily: "var(--font-body)" }}
    >
      {label}
    </a>
  );
}

function PrintLink({ className = "", onClick }: { className?: string; onClick?: () => void }) {
  return (
    <Link
      href="/print"
      target="_blank"
      onClick={onClick}
      className={`inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded border transition-opacity opacity-60 [@media(hover:hover)]:hover:opacity-100 ${className}`}
      style={{ borderColor: "var(--border)", color: "var(--text)" }}
    >
      <span>⎙</span> Version papier
    </Link>
  );
}

function HamburgerIcon({ open }: { open: boolean }) {
  return (
    <>
      <span
        className="block w-5 h-0.5 transition-all duration-200"
        style={{ ...BAR_STYLE, transform: open ? "translateY(8px) rotate(45deg)" : "none" }}
      />
      <span
        className="block w-5 h-0.5 transition-all duration-200"
        style={{ ...BAR_STYLE, opacity: open ? 0 : 1 }}
      />
      <span
        className="block w-5 h-0.5 transition-all duration-200"
        style={{ ...BAR_STYLE, transform: open ? "translateY(-8px) rotate(-45deg)" : "none" }}
      />
    </>
  );
}

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!menuOpen) return;
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") setMenuOpen(false);
    }
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [menuOpen]);

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
            <NavLink key={href} href={href} label={label} />
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <PrintLink className="hidden md:inline-flex" />
          <ThemeSwitcher />
          <button
            className="md:hidden w-8 h-8 flex flex-col justify-center items-center gap-1.5"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={menuOpen}
          >
            <HamburgerIcon open={menuOpen} />
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav
          className="md:hidden border-t px-4 py-4 flex flex-col gap-1"
          style={{ backgroundColor: "var(--bg)", borderColor: "var(--border)" }}
        >
          {NAV_LINKS.map(({ href, label }) => (
            <NavLink
              key={href}
              href={href}
              label={label}
              className="py-2.5"
              onClick={() => setMenuOpen(false)}
            />
          ))}
          <PrintLink className="self-start mt-2" onClick={() => setMenuOpen(false)} />
        </nav>
      )}
    </header>
  );
}
