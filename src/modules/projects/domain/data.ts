import { Project } from "@/types";

import cryptoPriceNotifier from "../../../images/crypto-price-notifier.png";
import hueDesignSystem from "../../../images/hue-design-system.png";
import splitlyApp from "../../../images/splitly-app.png";

export const projects: Project[] = [
  {
    id: 3,
    title: "Splitly",
    description: "Splitly es una aplicación desarrollada en Flutter que permite dividir gastos de manera simple y visual entre varias personas.",
    technologies: ["Flutter", "Dart"],
    date: "2025",
    github: "https://github.com/NGiudiDev/splitly",
    image: splitlyApp.src,
  },
  {
    id: 2,
    title: "Hue Design System",
    description: "Design System desarrollado en React, enfocado en la reutilización de componentes, consistencia visual y buenas prácticas de UI.",
    technologies: ["React", "Storybook", "Styled-Components"],
    date: "2024",
    github: "https://github.com/NGiudiDev/hue-design-system",
    demo: "https://ngiudidev.github.io/hue-design-system",
    image: hueDesignSystem.src,
  },
  {
    id: 1,
    title: "Notificador de Precios de Criptomonedas",
    description: "Notificador de precios de criptomonedas que obtiene el valor actual de Bitcoin, Ethereum y Solana en dólares estadounidenses utilizando la API de CryptoCompare. Envía notificaciones automáticas al sistema operativo y registra todos los eventos en un archivo.",
    technologies: ["Node.js"],
    date: "2025",
    github: "https://github.com/NGiudiDev/crypto-price-notifier",
    image: cryptoPriceNotifier.src,
  },
];
