import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { KonamiCode } from "@/components/easter-eggs/KonamiCode";
import { ConsoleGreeting } from "@/components/easter-eggs/ConsoleGreeting";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Valentin Lecourt — Ingénieur Full-Stack & Facilitateur IA",
  description:
    "Portfolio de Valentin Lecourt, ingénieur logiciel avec 10+ ans d'expérience en développement full-stack, DevOps et IA. Basé à Grenoble.",
  openGraph: {
    title: "Valentin Lecourt — Ingénieur Full-Stack",
    description: "Portfolio de Valentin Lecourt, ingénieur logiciel basé à Grenoble.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    // Hint in source: <!-- Try /secret -->
    <html lang="fr" className={`${inter.className} h-full antialiased`} suppressHydrationWarning>
      {/* Blocking script: sets data-theme before first paint to prevent flash */}
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `try{var t=localStorage.getItem('portfolio-theme')||'dark';document.documentElement.setAttribute('data-theme',t)}catch(e){}`,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <ThemeProvider>
          <ConsoleGreeting />
          <KonamiCode />
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
