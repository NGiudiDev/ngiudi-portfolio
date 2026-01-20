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
    value: "ngiudice.dev@gmail.comm",
    href: "mailto:ngiudice.dev@gmail.com",
    color: "text-[#4ec9b0]",
  },
  {
    icon: PhoneIcon,
    label: "Teléfono",
    value: "+54 11 6794-6707",
    href: "tel:+541167946707",
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
    url: "https://github.com/ngiudidev",
    icon: "🔗",
    username: "@ngiudi",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/nicol%C3%A1s-giudice-5652a0181/",
    icon: "💼",
    username: "Nicolas Giudice",
  },
  {
    name: "Codewars",
    url: "https://www.codewars.com/users/NGiudi",
    icon: "🌐",
    username: "ngiudi",
  },
];
