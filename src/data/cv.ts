import type { ContactLink, Education, Experience, Language, Profile, Project, SkillGroup } from "@/types/cv";

export const profile: Profile = {
  name: "Valentin Lecourt",
  title: "Ingénieur Full-Stack & Facilitateur IA",
  tagline: "10+ ans d'expérience · DevOps · AI tooling · Cybersécurité",
  email: "valentin.lecourt.tranchant@gmail.com",
  phone: "06 42 38 24 71",
  github: "lecourtva",
  linkedin: "valentin-lecourt",
  location: "Grenoble, France",
};

export const experiences: Experience[] = [
  {
    company: "LISI Automotive",
    period: "2014 — 2019",
    type: "Alternance → CDI",
    highlights: [
      "Optimisation et administration des bases de données ERP : vues, triggers, indexes, requêtes complexes",
      "Mise en place des pipelines CI/CD et de la conteneurisation de l'ensemble du SI",
      "Stack de monitoring ELK (Elasticsearch, Logstash, Kibana) pour la supervision applicative",
    ],
    technologies: ["Java", "SQL", "Kubernetes", "Docker", "GitLab", "Angular", "Jest", "RabbitMQ", "ELK Stack"],
  },
  {
    company: "UNESS",
    period: "2020 — présent",
    type: "CDI",
    highlights: [
      "Mise en place de la stack GitLab CI/CD, Docker, RabbitMQ & Grafana en collaboration avec l'admin sys",
      "Optimisation des performances PostgreSQL (pg_stat_statements, indexes, vues matérialisées)",
      "Animation d'ateliers de montée en compétence IA : Claude, Copilot, MCP, agents, hooks, git worktree",
      "Sensibilisation aux risques cyber + pilotage hebdomadaire d'un programme de résilience applicative",
      "Animation des post-mortems avec suivi des actions correctives",
    ],
    technologies: ["Angular", "Node.js", "Bun", "Vitest", "PostgreSQL", "Docker", "RabbitMQ", "GitLab CI", "Grafana"],
  },
];

export const education: Education[] = [
  {
    degree: "DUT Informatique",
    institution: "UPMF",
    location: "Grenoble",
    period: "2011 — 2013",
  },
  {
    degree: "Diplôme d'ingénieur — Systèmes d'information",
    institution: "UTBM",
    location: "Belfort",
    period: "2014 — 2016",
  },
  {
    degree: "ERASMUS — Artificial Intelligence & Real-time Systems",
    institution: "NTNU",
    location: "Norvège (top 75 Shanghai)",
    period: "2015 — 2016",
    details: ["Artificial Intelligence", "Reactive Systems", "Real-time Systems"],
  },
];

export const projects: Project[] = [
  {
    name: "Raspberry Pi & Neural Algos",
    description: "Expérimentations sur des algorithmes neuronaux embarqués sur Raspberry Pi. Curiosité pour le ML embarqué et le traitement en local.",
    period: "2016 — 2019",
    tags: ["Raspberry Pi", "Machine Learning", "Embedded", "Python"],
  },
  {
    name: "Marché Maraîcher",
    description: "Site de commande et vente en ligne pour un maraîcher local. Catalogue produits, panier, gestion des commandes et livraisons.",
    period: "2025 — 2026",
    tags: ["TypeScript", "Next.js", "E-commerce", "Full-Stack"],
  },
  {
    name: "Boomerang Competition Manager",
    description: "PWA de gestion de compétitions de boomerang avec interface mobile pour les juges sur le terrain. Gestion des scores en temps réel, classements live.",
    period: "2025 — 2026",
    tags: ["PWA", "TypeScript", "Real-time", "Mobile"],
  },
  {
    name: "Création de jeu",
    description: "Projet personnel de développement de jeu en cours. Game design, mécaniques de jeu et prototypage.",
    period: "2026",
    tags: ["Game Dev", "TypeScript", "Design"],
  },
];

export const skills: SkillGroup[] = [
  {
    category: "Frontend",
    items: ["Angular", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Bun", "Java", "PostgreSQL", "RabbitMQ"],
  },
  {
    category: "DevOps & Infra",
    items: ["Docker", "Kubernetes", "GitLab CI/CD", "ELK Stack", "Grafana"],
  },
  {
    category: "AI & Outils",
    items: ["Claude / MCP", "Prompt Engineering", "Agents IA", "Copilot"],
  },
  {
    category: "Pratiques",
    items: ["DDD", "TDD", "Clean Code", "Post-mortem", "Cybersécurité"],
  },
];

export const languages: Language[] = [
  { name: "Français", level: "Natif" },
  { name: "Anglais", level: "Courant" },
  { name: "Allemand", level: "Notions" },
  { name: "Espagnol", level: "Notions" },
];

export const interests: string[] = [
  "Échecs & Jeux de stratégie",
  "Jeux de figurines & TCG",
  "Dessin (sketching & aquarelle)",
  "Guitare & Piano",
  "Lecture",
  "Trail",
];

export const heroTitles: string[] = [
  "Ingénieur Full-Stack",
  "Facilitateur IA",
  "DevOps Engineer",
  "Architecte Logiciel",
];

export function buildContactLinks(p: Profile): ContactLink[] {
  return [
    { label: "Email", value: p.email, href: `mailto:${p.email}` },
    { label: "Téléphone", value: p.phone, href: `tel:${p.phone.replace(/\s/g, "")}` },
    { label: "GitHub", value: `github.com/${p.github}`, href: `https://github.com/${p.github}` },
    { label: "Localisation", value: p.location, href: "#" },
  ];
}
