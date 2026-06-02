export interface Experience {
  company: string;
  period: string;
  type: string;
  highlights: string[];
  technologies: string[];
}

export interface Education {
  degree: string;
  institution: string;
  location: string;
  period: string;
  details?: string[];
}

export interface Project {
  name: string;
  description: string;
  period: string;
  tags: string[];
  url?: string;
}

export interface Language {
  name: string;
  level: string;
}

export interface SkillGroup {
  category: string;
  items: string[];
}

export interface Profile {
  name: string;
  title: string;
  tagline: string;
  email: string;
  phone: string;
  github: string;
  linkedin: string;
  location: string;
}

export interface ContactLink {
  label: string;
  value: string;
  href?: string;
}
