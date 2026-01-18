import {
  EnvelopeIcon,
  MapPinIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";

import { SocialLink } from "@/types";

export const contactInfo = [
  {
    icon: EnvelopeIcon,
    label: "Email",
    value: "nicolas.giudi@example.com",
    href: "mailto:nicolas.giudi@example.com",
    color: "text-[#4ec9b0]",
  },
  {
    icon: PhoneIcon,
    label: "Teléfono",
    value: "+54 11 1234-5678",
    href: "tel:+541112345678",
    color: "text-[#569cd6]",
  },
  {
    icon: MapPinIcon,
    label: "Ubicación",
    value: "Buenos Aires, Argentina",
    href: null,
    color: "text-[#ce9178]",
  },
];

export const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    url: "https://github.com/ngiudi",
    icon: "🔗",
    username: "@ngiudi",
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/nicolas-giudi",
    icon: "💼",
    username: "Nicolas Giudi",
  },
  {
    name: "Twitter",
    url: "https://twitter.com/ngiudi",
    icon: "🐦",
    username: "@ngiudi",
  },
  {
    name: "Portfolio",
    url: "https://ngiudi.dev",
    icon: "🌐",
    username: "ngiudi.dev",
  },
];
