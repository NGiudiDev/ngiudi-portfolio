import { TimelineItemType, Interest } from "@/types";

export const experiences: TimelineItemType[] = [
  {
    year: "2024 - Presente",
    title: "Senior Full Stack Developer",
    company: "Tech Solutions Inc.",
    description: "Liderando el desarrollo de aplicaciones web escalables utilizando Next.js, React y Node.js. Implementación de arquitecturas serverless y optimización de rendimiento.",
    type: "work"
  },
  {
    year: "2022 - 2024",
    title: "Full Stack Developer",
    company: "Digital Agency",
    description: "Desarrollo de aplicaciones web y móviles para clientes. Trabajo con React, TypeScript, y AWS. Colaboración con equipos multidisciplinarios.",
    type: "work"
  },
  {
    year: "2020 - 2022",
    title: "Frontend Developer",
    company: "StartUp XYZ",
    description: "Construcción de interfaces de usuario modernas y responsivas. Implementación de mejores prácticas de accesibilidad y UX.",
    type: "work"
  }
];

export const education: TimelineItemType[] = [
  {
    year: "2019 - 2023",
    title: "Ingeniería en Sistemas",
    company: "Universidad Nacional",
    description: "Enfoque en desarrollo de software, algoritmos, estructuras de datos y arquitectura de sistemas.",
    type: "education"
  },
  {
    year: "2023",
    title: "AWS Certified Solutions Architect",
    company: "Amazon Web Services",
    description: "Certificación en diseño y despliegue de sistemas escalables en AWS.",
    type: "education"
  }
];

export const interests: Interest[] = [
  {
    icon: "💻",
    title: "Open Source",
    description: "Contribuyo a proyectos open source y mantengo mis propias librerías."
  },
  {
    icon: "🎓",
    title: "Aprendizaje Continuo",
    description: "Siempre explorando nuevas tecnologías y mejores prácticas de desarrollo."
  },
  {
    icon: "🎨",
    title: "UI/UX Design",
    description: "Me apasiona crear experiencias de usuario intuitivas y atractivas."
  },
  {
    icon: "🚀",
    title: "Innovación",
    description: "Busco constantemente formas de mejorar procesos y crear soluciones eficientes."
  }
];
