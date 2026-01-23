import { Project } from "@/types";

import cryptoPriceNotifier from "../../../images/crypto-price-notifier.png";

export const projects: Project[] = [
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
