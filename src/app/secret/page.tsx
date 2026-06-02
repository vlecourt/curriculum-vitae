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
        Cet endroit existe. Peu de gens le trouvent — par curiosité, par exploration du code, ou par séquence bien connue.
      </p>

      <div className="text-sm opacity-60 space-y-1 mb-12">
        <p>🎮 La page principale cache une séquence culte : ↑ ↑ ↓ ↓ ← → ← → B A</p>
        <p>⚔️ Heroic Fantasy est mon thème de cœur.</p>
        <p>🃏 Harlequin est né de trop de soirées murder party et jeux de rôles.</p>
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
