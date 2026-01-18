import { Experience, Education, Certification } from "@/types";

export const personalInfo = {
  name: "Nicolas Giudi",
  title: "Senior Full Stack Developer",
  email: "nicolas.giudi@example.com",
  phone: "+54 11 1234-5678",
  location: "Buenos Aires, Argentina",
  website: "ngiudi.dev",
  summary: "Desarrollador Full Stack con más de 5 años de experiencia en la creación de aplicaciones web escalables y de alto rendimiento. Especializado en React, Next.js, Node.js y arquitecturas cloud. Apasionado por escribir código limpio, implementar mejores prácticas y liderar equipos técnicos."
};

export const experiences: Experience[] = [
  {
    period: "2024 - Presente",
    position: "Senior Full Stack Developer",
    company: "Tech Solutions Inc.",
    location: "Buenos Aires, Argentina",
    responsibilities: [
      "Lidero equipo de 5 desarrolladores en la construcción de plataformas SaaS escalables",
      "Implementación de arquitecturas serverless con Next.js y AWS Lambda",
      "Reducción del tiempo de carga en 60% mediante optimizaciones de rendimiento",
      "Mentoría y code reviews para mantener estándares de código de alta calidad"
    ],
    technologies: ["Next.js", "TypeScript", "AWS", "PostgreSQL", "Docker"]
  },
  {
    period: "2022 - 2024",
    position: "Full Stack Developer",
    company: "Digital Agency",
    location: "Buenos Aires, Argentina",
    responsibilities: [
      "Desarrollo de aplicaciones web y móviles para clientes corporativos",
      "Implementación de APIs REST y GraphQL con Node.js y Express",
      "Integración de pasarelas de pago (Stripe, MercadoPago)",
      "Colaboración con equipos de diseño para implementar interfaces responsivas"
    ],
    technologies: ["React", "Node.js", "MongoDB", "GraphQL", "AWS"]
  },
  {
    period: "2020 - 2022",
    position: "Frontend Developer",
    company: "StartUp XYZ",
    location: "Buenos Aires, Argentina",
    responsibilities: [
      "Construcción de SPAs con React y Redux para gestión de estado",
      "Implementación de mejores prácticas de accesibilidad (WCAG 2.1)",
      "Optimización de bundle size reduciendo tiempo de carga en 40%",
      "Creación de sistema de diseño interno con Storybook"
    ],
    technologies: ["React", "Redux", "TypeScript", "Sass", "Jest"]
  }
];

export const education: Education[] = [
  {
    period: "2019 - 2023",
    degree: "Ingeniería en Sistemas",
    institution: "Universidad Nacional",
    location: "Buenos Aires, Argentina",
    honors: "Promedio: 8.5/10"
  }
];

export const certifications: Certification[] = [
  {
    year: "2025",
    name: "AWS Certified Solutions Architect - Professional",
    issuer: "Amazon Web Services"
  },
  {
    year: "2023",
    name: "AWS Certified Solutions Architect - Associate",
    issuer: "Amazon Web Services"
  },
  {
    year: "2022",
    name: "Meta Front-End Developer Professional Certificate",
    issuer: "Meta (Facebook)"
  }
];

export const skills = {
  "Frontend": ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "Vue.js"],
  "Backend": ["Node.js", "Express", "Python", "FastAPI", "GraphQL", "REST APIs"],
  "Database": ["PostgreSQL", "MongoDB", "Redis", "Prisma"],
  "DevOps & Cloud": ["AWS", "Docker", "Git", "CI/CD", "Vercel", "Netlify"],
  "Tools & Others": ["Jest", "Cypress", "Figma", "Agile/Scrum", "Jira"]
};

export const languages = [
  { name: "Español", level: "Nativo" },
  { name: "Inglés", level: "Avanzado (C1)" }
];
