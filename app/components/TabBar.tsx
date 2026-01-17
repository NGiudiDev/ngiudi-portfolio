"use client";

import { useState } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";

interface Tab {
  id: string;
  name: string;
  path: string;
}

export function TabBar() {
  const [activeTab, setActiveTab] = useState("1");
  
  const [tabs, setTabs] = useState<Tab[]>([
    { id: "1", name: "page.tsx", path: "/app/page.tsx" },
  ]);

  const closeTab = (tabId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setTabs(tabs.filter(tab => tab.id !== tabId));
    if (activeTab === tabId && tabs.length > 1) {
      const index = tabs.findIndex(tab => tab.id === tabId);
      const newActiveTab = tabs[index > 0 ? index - 1 : index + 1];
      setActiveTab(newActiveTab?.id || "");
    }
  };

  return (
    <div className="h-9 bg-[#252526] flex items-center border-b border-[#2d2d2d] overflow-x-auto">
      {tabs.map((tab) => (
        <div
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={`flex items-center gap-2 px-4 h-full cursor-pointer border-r border-[#2d2d2d] min-w-fit group ${
            activeTab === tab.id
              ? "bg-[#1e1e1e] text-white border-t-2 border-t-[#007acc]"
              : "bg-[#2d2d2d] text-[#969696] hover:bg-[#1e1e1e]"
          }`}
        >
          <span className="text-sm">{tab.name}</span>
          {tabs.length > 1 && (
            <button
              onClick={(e) => closeTab(tab.id, e)}
              className="opacity-0 group-hover:opacity-100 hover:bg-[#404040] rounded p-0.5"
            >
              <XMarkIcon className="w-4 h-4" />
            </button>
          )}
        </div>
      ))}
    </div>
  );
}
