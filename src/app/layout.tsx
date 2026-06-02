import type { Metadata } from "next";
import { Inter, Cinzel_Decorative, IM_Fell_English } from "next/font/google";
import "./globals.css";
import { ThemeProvider, STORAGE_KEY } from "@/context/ThemeContext";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { KonamiCode } from "@/components/easter-eggs/KonamiCode";
import { ConsoleGreeting } from "@/components/easter-eggs/ConsoleGreeting";

const inter = Inter({ subsets: ["latin"] });
// These fonts are only used by PrintContent's heroic-fantasy mode.
// next/font injects them as CSS variables (--font-cinzel, --font-im-fell) via the html className.
const cinzelDecorative = Cinzel_Decorative({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-cinzel",
  preload: false,
});
const imFellEnglish = IM_Fell_English({
  weight: "400",
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-im-fell",
  preload: false,
});

export const metadata: Metadata = {
  metadataBase: new URL("https://curriculum-vitae-production-9f0a.up.railway.app"),
  title: "Valentin Lecourt — Ingénieur Full-Stack & Facilitateur IA",
  description:
    "Portfolio de Valentin Lecourt, ingénieur logiciel avec 10+ ans d'expérience en développement full-stack, DevOps et IA. Basé à Grenoble.",
  openGraph: {
    title: "Valentin Lecourt — Ingénieur Full-Stack",
    description: "Portfolio de Valentin Lecourt, ingénieur logiciel basé à Grenoble.",
    type: "website",
    url: "/",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${inter.className} ${cinzelDecorative.variable} ${imFellEnglish.variable} h-full antialiased`} suppressHydrationWarning>
      {/* Blocking script: sets data-theme before first paint to prevent flash */}
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `try{var t=localStorage.getItem(${JSON.stringify(STORAGE_KEY)})||'dark';document.documentElement.setAttribute('data-theme',t)}catch(e){}`,
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
