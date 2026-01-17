"use client";

import { useState } from "react";
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
  { href: "/", icon: HomeIcon, name: "Home" },
  { href: "/about", icon: UserIcon, name: "About" },
  { href: "/projects", icon: BriefcaseIcon, name: "Projects" },
  { href: "/skills", icon: CodeBracketIcon, name: "Skills" },
  { href: "/resume", icon: DocumentTextIcon, name: "Resume" },
  { href: "/contact", icon: EnvelopeIcon, name: "Contact" },
];

export function Sidebar() {
  const [activeItem, setActiveItem] = useState("Home");

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
          return (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setActiveItem(item.name)}
              className={`p-2 rounded transition-colors relative group ${
                activeItem === item.name
                  ? "text-white"
                  : "text-[#858585] hover:text-white"
              }`}
              title={item.name}
            >
              <Icon className="w-6 h-6" />
              {activeItem === item.name && (
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
