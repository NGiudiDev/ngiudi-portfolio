import { Project, Locale } from "@/types";

import cryptoPriceNotifier from "../../../images/crypto-price-notifier.png";
import gitlabMrBoard from "../../../images/gitlab-mr-board.png";
import hueDesignSystem from "../../../images/hue-design-system.png";
import splitlyApp from "../../../images/splitly-app.png";

export const projectsData: Record<Locale, Project[]> = {
  en: [
    {
      id: 4,
      title: "GitLab MR Board",
      description:
        "Full-stack web board that brings together open Merge Requests from multiple GitLab projects and organizes them by mergeability status. It centralizes approvals, discussions, pipelines, conflicts and assignees with multi-user authentication and encrypted credentials.",
      technologies: ["React", "Express", "PostgreSQL", "GitLab API"],
      date: "2026",
      github: "https://github.com/NGiudiDev/gitlab-mr-board",
      demo: "https://gitlab-mr-board.vercel.app/",
      image: gitlabMrBoard.src,
    },
    {
      id: 3,
      title: "Splitly",
      description:
        "Splitly is an application developed in Flutter that allows splitting expenses in a simple and visual way among multiple people.",
      technologies: ["Flutter", "Dart"],
      date: "2025",
      github: "https://github.com/NGiudiDev/splitly",
      image: splitlyApp.src,
    },
    {
      id: 2,
      title: "Hue Design System",
      description:
        "Design System developed in React, focused on component reuse, visual consistency and UI best practices.",
      technologies: ["React", "Storybook", "Styled-Components"],
      date: "2024",
      github: "https://github.com/NGiudiDev/hue-design-system",
      demo: "https://ngiudidev.github.io/hue-design-system",
      image: hueDesignSystem.src,
    },
    {
      id: 1,
      title: "Crypto Price Notifier",
      description:
        "Cryptocurrency price notifier that fetches the current value of Bitcoin, Ethereum and Solana in US dollars using the CryptoCompare API. It sends automatic notifications to the operating system and logs all events to a file.",
      technologies: ["Node.js"],
      date: "2025",
      github: "https://github.com/NGiudiDev/crypto-price-notifier",
      image: cryptoPriceNotifier.src,
    },
  ],
  es: [
    {
      id: 4,
      title: "GitLab MR Board",
      description:
        "Tablero web full stack que reúne los Merge Requests abiertos de múltiples proyectos de GitLab y los organiza según su estado de mergeabilidad. Centraliza aprobaciones, discusiones, pipelines, conflictos y responsables con autenticación multiusuario y credenciales cifradas.",
      technologies: ["React", "Express", "PostgreSQL", "GitLab API"],
      date: "2026",
      github: "https://github.com/NGiudiDev/gitlab-mr-board",
      demo: "https://gitlab-mr-board.vercel.app/",
      image: gitlabMrBoard.src,
    },
    {
      id: 3,
      title: "Splitly",
      description:
        "Splitly es una aplicación desarrollada en Flutter que permite dividir gastos de manera simple y visual entre varias personas.",
      technologies: ["Flutter", "Dart"],
      date: "2025",
      github: "https://github.com/NGiudiDev/splitly",
      image: splitlyApp.src,
    },
    {
      id: 2,
      title: "Hue Design System",
      description:
        "Design System desarrollado en React, enfocado en la reutilización de componentes, consistencia visual y buenas prácticas de UI.",
      technologies: ["React", "Storybook", "Styled-Components"],
      date: "2024",
      github: "https://github.com/NGiudiDev/hue-design-system",
      demo: "https://ngiudidev.github.io/hue-design-system",
      image: hueDesignSystem.src,
    },
    {
      id: 1,
      title: "Notificador de Precios de Criptomonedas",
      description:
        "Notificador de precios de criptomonedas que obtiene el valor actual de Bitcoin, Ethereum y Solana en dólares estadounidenses utilizando la API de CryptoCompare. Envía notificaciones automáticas al sistema operativo y registra todos los eventos en un archivo.",
      technologies: ["Node.js"],
      date: "2025",
      github: "https://github.com/NGiudiDev/crypto-price-notifier",
      image: cryptoPriceNotifier.src,
    },
  ],
  pt: [
    {
      id: 4,
      title: "GitLab MR Board",
      description:
        "Quadro web full stack que reúne os Merge Requests abertos de vários projetos do GitLab e os organiza por estado de mergeabilidade. Centraliza aprovações, discussões, pipelines, conflitos e responsáveis com autenticação multiusuário e credenciais criptografadas.",
      technologies: ["React", "Express", "PostgreSQL", "GitLab API"],
      date: "2026",
      github: "https://github.com/NGiudiDev/gitlab-mr-board",
      demo: "https://gitlab-mr-board.vercel.app/",
      image: gitlabMrBoard.src,
    },
    {
      id: 3,
      title: "Splitly",
      description:
        "Splitly é uma aplicação desenvolvida em Flutter que permite dividir despesas de forma simples e visual entre várias pessoas.",
      technologies: ["Flutter", "Dart"],
      date: "2025",
      github: "https://github.com/NGiudiDev/splitly",
      image: splitlyApp.src,
    },
    {
      id: 2,
      title: "Hue Design System",
      description:
        "Design System desenvolvido em React, focado na reutilização de componentes, consistência visual e boas práticas de UI.",
      technologies: ["React", "Storybook", "Styled-Components"],
      date: "2024",
      github: "https://github.com/NGiudiDev/hue-design-system",
      demo: "https://ngiudidev.github.io/hue-design-system",
      image: hueDesignSystem.src,
    },
    {
      id: 1,
      title: "Notificador de Preços de Criptomoedas",
      description:
        "Notificador de preços de criptomoedas que obtém o valor atual de Bitcoin, Ethereum e Solana em dólares americanos utilizando a API CryptoCompare. Envia notificações automáticas ao sistema operacional e registra todos os eventos em um arquivo.",
      technologies: ["Node.js"],
      date: "2025",
      github: "https://github.com/NGiudiDev/crypto-price-notifier",
      image: cryptoPriceNotifier.src,
    },
  ],
};
