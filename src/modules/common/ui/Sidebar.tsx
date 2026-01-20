"use client";

import { usePathname } from "next/navigation";

import Link from "next/link";

import { 
  HomeIcon, 
  UserIcon, 
  BriefcaseIcon, 
  EnvelopeIcon,
  DocumentTextIcon,
  CodeBracketIcon
} from "@heroicons/react/24/outline";

const navigationItems = [
  { href: "/", icon: HomeIcon, name: "Inicio" },
  { href: "/about", icon: UserIcon, name: "Sobre mí" },
  { href: "/projects", icon: BriefcaseIcon, name: "Mis Proyectos" },
  { href: "/skills", icon: CodeBracketIcon, name: "Habilidades" },
  { href: "/resume", icon: DocumentTextIcon, name: "Currículum Vitae" },
  { href: "/contact", icon: EnvelopeIcon, name: "Contacto" },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-12 bg-[#333333] flex flex-col items-center py-4 border-r border-[#2d2d2d]">
      <div className="mb-8">
        <div className="w-8 h-8 bg-[#007acc] rounded flex items-center justify-center text-white font-bold text-sm">
          N
        </div>
      </div>
      
      <nav className="flex flex-col gap-4">
        {navigationItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;

          return (
            <Link
              className={`p-2 rounded transition-colors relative group ${
                isActive
                  ? "text-white"
                  : "text-[#858585] hover:text-white"
              }`}  
              href={item.href}
              key={item.name}
              title={item.name}
            >
              <Icon className="w-6 h-6" />

              {/* White bar indicator */}
              {isActive && (
                <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-white" />
              )}
              
              {/* Tooltip */}
              <div className="absolute left-12 top-1/2 -translate-y-1/2 bg-[#2d2d2d] text-white px-2 py-1 rounded text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-50">
                {item.name}
              </div>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
