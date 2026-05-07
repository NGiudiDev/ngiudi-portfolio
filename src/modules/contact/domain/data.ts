import {
  EnvelopeIcon,
  MapPinIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";

import { SocialLink } from "@/types";

export const contactInfo = [
  {
    icon: EnvelopeIcon,
    labelKey: "email",
    value: "ngiudice.dev@gmail.com",
    href: "mailto:ngiudice.dev@gmail.com",
    color: "text-[#4ec9b0]",
  },
  {
    icon: PhoneIcon,
    labelKey: "phone",
    value: "+54 9 11 6794-6707",
    href: "tel:+5491167946707",
    color: "text-[#569cd6]",
  },
  {
    icon: MapPinIcon,
    labelKey: "location",
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
