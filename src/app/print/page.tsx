import { PrintContent } from "@/components/print/PrintContent";

export const metadata = {
  title: "CV Imprimable — Valentin Lecourt, Ingénieur Full-Stack & DevOps",
  description:
    "Version imprimable du CV de Valentin Lecourt : expériences professionnelles, compétences techniques, formation et projets personnels.",
  alternates: { canonical: "/print" },
};

export default function PrintPage() {
  return <PrintContent />;
}
