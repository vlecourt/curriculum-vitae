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
│   ├── layout.tsx          # Layout racine, script anti-flash thème
│   ├── page.tsx            # Page principale (CV)
│   └── secret/page.tsx     # Page easter egg (Konami code)
├── components/
│   ├── easter-eggs/        # KonamiCode, ConsoleGreeting
│   ├── layout/             # Header, Footer, ThemeSwitcher
│   ├── print/              # PrintButton, SiteQRCode
│   ├── sections/           # Hero, Experience, Skills, Projects, Education, Contact
│   └── ui/                 # Badge, Card, Section
├── context/ThemeContext.tsx
├── data/cv.ts              # Données du CV (source unique de vérité)
├── hooks/useTypewriter.ts
└── types/                  # cv.ts, theme.ts
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
- **Version imprimable** avec QR code renvoyant vers le site en ligne
- **Easter eggs** : Konami code → `/secret`, message de bienvenue dans la console développeur

## Déploiement (Railway)

Le fichier `railway.toml` configure le build nixpacks et le démarrage avec `npm run start`. Pousser sur `main` déclenche un déploiement automatique.
