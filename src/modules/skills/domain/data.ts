import { Skill } from "@/types";

export const skills: Skill[] = [
  // Lenguajes de Programación
  {
    name: "JavaScript",
    level: "avanzado",
    category: "Lenguajes de Programación",
    icon: "📜",
    color: "yellow",
  },
  {
    name: "TypeScript",
    level: "intermedio",
    category: "Lenguajes de Programación",
    icon: "📘",
    color: "blue",
  },
  {
    name: "Dart",
    level: "intermedio",
    category: "Lenguajes de Programación",
    icon: "🎯",
    color: "blue",
  },

  // Frontend
  {
    name: "React",
    level: "avanzado",
    category: "Frontend",
    icon: "⚛️",
    color: "blue",
  },
  {
    name: "Next.js",
    level: "principiante",
    category: "Frontend",
    icon: "▲",
    color: "yellow",
  },
  {
    name: "Vue.js",
    level: "intermedio",
    category: "Frontend",
    icon: "💚",
    color: "green",
  },
  {
    name: "Flutter",
    level: "avanzado",
    category: "Frontend",
    icon: "📱",
    color: "cyan",
  },
    
  // Backend
  {
    name: "Node.js",
    level: "avanzado",
    category: "Backend",
    icon: "🟢",
    color: "green",
  },
  {
    name: "Express",
    level: "intermedio",
    category: "Backend",
    icon: "🚂",
    color: "blue",
  },
  {
    name: "REST APIs",
    level: "avanzado",
    category: "Backend",
    icon: "🔌",
    color: "yellow",
  },

  // Database
  {
    name: "MySQL",
    level: "avanzado",
    category: "Database",
    icon: "🗄️",
    color: "yellow",
  },
  {
    name: "Sequelize",
    level: "avanzado",
    category: "Database",
    icon: "⚡",
    color: "blue",
  },
  
  // Testing
  {
    name: "Jest",
    level: "intermedio",
    category: "Testing",
    icon: "🧪",
    color: "red",
  },
  {
    name: "Cypress",
    level: "intermedio",
    category: "Testing",
    icon: "🌲",
    color: "green",
  },

  // Documentación
  {
    name: "Storybook",
    level: "intermedio",
    category: "Documentación",
    icon: "📚",
    color: "pink",
  },
  {
    name: "Figma",
    level: "intermedio",
    category: "Documentación",
    icon: "🎨",
    color: "purple",
  },

  // Herramientas
  {
    name: "Git",
    level: "avanzado",
    category: "Herramientas",
    icon: "📦",
    color: "orange",
  },
  {
    name: "Docker",
    level: "intermedio",
    category: "Herramientas",
    icon: "🐳",
    color: "blue",
  },
  {
    name: "CI/CD",
    level: "intermedio",
    category: "Herramientas",
    icon: "🔄",
    color: "green",
  },  
  
];

export const categories = [
  { name: "Lenguajes de Programación" },
  { name: "Frontend" },
  { name: "Testing" },
  { name: "Backend" },
  { name: "Database" },
  { name: "Documentación" },
  { name: "Herramientas" },
];
