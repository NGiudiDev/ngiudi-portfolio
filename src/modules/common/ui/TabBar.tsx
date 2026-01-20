"use client";

import { usePathname } from "next/navigation";

export function TabBar() {
  const pathname = usePathname();

  return (
    <div className="h-9 bg-[#252526] flex items-center border-b border-[#2d2d2d] overflow-x-auto">
      <div className="flex items-center gap-2 px-4 h-full cursor-pointer border-r border-[#2d2d2d] min-w-fit group bg-[#1e1e1e] text-white border-t-2 border-t-[#007acc]">
        <span className="text-sm">
          {(pathname).replace(/\//g, "") || "home"}.tsx
        </span>
      </div>
    </div>
  );
}
