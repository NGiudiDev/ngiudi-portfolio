export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  date: string;
  github?: string;
  demo?: string;
  image?: string;
}

export interface Skill {
  name: string;
  level: number; // 1-100
  category: string;
  icon?: string;
  color: string;
}

export interface TimelineItemType {
  year: string;
  title: string;
  company: string;
  description: string;
  type: "work" | "education";
}

export interface Interest {
  icon: string;
  title: string;
  description: string;
}

export interface Experience {
  period: string;
  position: string;
  company: string;
  location: string;
  responsibilities: string[];
  technologies: string[];
}

export interface Education {
  period: string;
  degree: string;
  institution: string;
  location: string;
  honors?: string;
}

export interface Certification {
  year: string;
  name: string;
  issuer: string;
}

export interface ContactInfo {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
  href: string | null;
  color: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
  username: string;
}

export interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}
