import Link from "next/link";

export const metadata = {
  title: "??? — Valentin Lecourt",
  robots: { index: false },
};

export default function SecretPage() {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center text-center px-4"
      style={{ backgroundColor: "#0d1117", color: "#00ff41", fontFamily: "monospace" }}
    >
      {/* Tu as trouvé la page secrète. Bien joué. */}
      <pre className="text-xs mb-8 opacity-50 hidden md:block">
        {`
██╗   ██╗██╗
██║   ██║██║
██║   ██║██║
╚██╗ ██╔╝██║
 ╚████╔╝ ███████╗
  ╚═══╝  ╚══════╝
        `}
      </pre>

      <p className="text-xl mb-4 animate-pulse">[ PAGE SECRÈTE DÉVERROUILLÉE ]</p>
      <p className="text-sm opacity-70 mb-8 max-w-md">
        Tu as trouvé cet endroit. Soit tu as cherché dans le code source, soit tu es vraiment
        curieux·se. Dans les deux cas, j&apos;aime ton énergie.
      </p>

      <div className="text-sm opacity-60 space-y-1 mb-12">
        <p>🎮 Essaie aussi : ↑ ↑ ↓ ↓ ← → ← → B A sur la page principale</p>
        <p>💻 5 thèmes disponibles. Geekos est mon préféré.</p>
        <p>🃏 Harlequin a été inspiré par trop de soirées Magic: The Gathering.</p>
        <p>⚔️ Le thème Heroic Fantasy existe parce que j&apos;ai des figurines sur mon bureau.</p>
      </div>

      <Link
        href="/"
        className="px-6 py-3 border border-current rounded transition-all hover:bg-[#00ff41] hover:text-[#0d1117]"
      >
        ← Retourner à la réalité
      </Link>
    </div>
  );
}
