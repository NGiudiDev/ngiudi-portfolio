import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "Plataforma de comercio electrónico completa con carrito de compras, pasarela de pagos y panel de administración.",
    technologies: ["Next.js", "TypeScript", "Stripe", "Prisma", "PostgreSQL"],
    date: "2025",
    github: "https://github.com/ngiudi/ecommerce-platform",
    demo: "https://ecommerce-demo.vercel.app",
    image: "/projects/ecommerce.jpg"
  },
  {
    id: 2,
    title: "Task Management App",
    description: "Aplicación de gestión de tareas con colaboración en tiempo real, tableros Kanban y notificaciones.",
    technologies: ["React", "Node.js", "Socket.io", "MongoDB", "Express"],
    date: "2024",
    github: "https://github.com/ngiudi/task-manager",
    demo: "https://task-manager-demo.vercel.app",
    image: "/projects/task-manager.jpg"
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description: "Dashboard del clima con pronósticos extendidos, visualizaciones interactivas y favoritos de ubicaciones.",
    technologies: ["Vue.js", "TypeScript", "Chart.js", "OpenWeather API"],
    date: "2024",
    github: "https://github.com/ngiudi/weather-dashboard",
    demo: "https://weather-dashboard-demo.vercel.app",
    image: "/projects/weather.jpg"
  },
  {
    id: 4,
    title: "Social Media Analytics",
    description: "Herramienta de análisis de redes sociales con métricas en tiempo real, reportes y visualización de datos.",
    technologies: ["React", "D3.js", "Python", "FastAPI", "Redis"],
    date: "2024",
    github: "https://github.com/ngiudi/social-analytics",
    image: "/projects/analytics.jpg"
  },
  {
    id: 5,
    title: "AI Chat Assistant",
    description: "Asistente de chat basado en IA con procesamiento de lenguaje natural y respuestas contextuales.",
    technologies: ["Next.js", "OpenAI API", "LangChain", "Tailwind CSS"],
    date: "2023",
    github: "https://github.com/ngiudi/ai-chat",
    demo: "https://ai-chat-demo.vercel.app",
    image: "/projects/ai-chat.jpg"
  },
  {
    id: 6,
    title: "Portfolio CMS",
    description: "Sistema de gestión de contenido para portfolios con editor visual y generación de sitios estáticos.",
    technologies: ["Next.js", "Sanity.io", "TypeScript", "Tailwind CSS"],
    date: "2023",
    github: "https://github.com/ngiudi/portfolio-cms",
    image: "/projects/cms.jpg"
  }
];
