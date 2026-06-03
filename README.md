# curriculum-vitae

CV interactif de Valentin Lecourt — construit avec Next.js 16, React 19 et Tailwind CSS v4. Déployé sur Railway.

## Stack

- **Next.js 16** (App Router) + **React 19**
- **TypeScript 5**
- **Tailwind CSS v4**
- **qrcode.react** — QR code pointant vers le site sur la version imprimable
- Déploiement : **Railway** (nixpacks)

## Structure

```
src/
├── app/
│   ├── layout.tsx              # Layout racine, script anti-flash thème
│   ├── page.tsx                # Page principale (CV)
│   ├── print/page.tsx          # Version imprimable (/print)
│   ├── secret/page.tsx         # Page easter egg (Konami code)
│   ├── opengraph-image.tsx     # OG image générée dynamiquement
│   ├── robots.ts               # robots.txt
│   └── sitemap.ts              # sitemap.xml
├── components/
│   ├── easter-eggs/            # KonamiCode, ConsoleGreeting
│   ├── layout/                 # Header, Footer, ThemeSwitcher
│   ├── print/                  # PrintButton, PrintContent, SiteQRCode
│   ├── sections/               # Hero, Experience, Skills, Projects, Education, Contact
│   └── ui/                     # Badge, Card, Section
├── context/ThemeContext.tsx
├── data/
│   ├── cv.ts                   # Données du CV (source unique de vérité)
│   └── cv-fantasy.ts           # Variante heroic-fantasy du CV
├── hooks/useTypewriter.ts
├── types/                      # cv.ts, theme.ts
└── utils/consoleStyles.ts
```

## Lancer en local

```bash
npm install
npm run dev       # http://localhost:3000
```

```bash
npm run build     # build de production
npm run start     # serveur de production
npm run lint      # ESLint
```

## Fonctionnalités

- **Mode sombre / clair** sans flash SSR (script bloquant injecté dans `<head>`)
- **Mode heroic-fantasy** — version "manuscrit enluminé" du CV accessible depuis le sélecteur de thème, avec ses propres données (`cv-fantasy.ts`)
- **Version imprimable** à `/print` avec QR code renvoyant vers le site, compatible avec les trois thèmes (clair, sombre, fantasy) en une seule page A4
- **SEO** : OG image dynamique, sitemap, robots.txt, canonical URLs, security headers
- **Easter eggs** :
  <details><summary>spoiler</summary>

  - Konami code (↑↑↓↓←→←→BA) → `/secret`
  - Message de bienvenue dans la console développeur

  </details>

## Déploiement (Railway)

Le fichier `railway.toml` configure le build nixpacks et le démarrage avec `npm run start`. Pousser sur `main` déclenche un déploiement automatique.

## Licence

© 2026 Valentin LECOURT — Tous droits réservés. Voir [LICENSE](LICENSE).
