"use client";

import { BriefcaseIcon, AcademicCapIcon } from "@heroicons/react/24/outline";

interface TimelineItemProps {
  item: {
    year: string;
    title: string;
    company: string;
    description: string;
    type: "work" | "education";
  };
}

export function TimelineItem({ item }: TimelineItemProps) {
  const Icon = item.type === "work" ? BriefcaseIcon : AcademicCapIcon;
  
  return (
    <div className="relative pl-8 pb-8 border-l-2 border-[#2d2d2d] last:pb-0 hover:border-[#007acc] transition-colors group">
      {/* Timeline dot */}
      <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-[#1e1e1e] border-2 border-[#007acc] group-hover:bg-[#007acc] transition-colors" />
      
      {/* Icon */}
      <div className="absolute -left-[5px] top-8">
        <div className="w-6 h-6 rounded-full bg-[#252526] border border-[#2d2d2d] flex items-center justify-center">
          <Icon className="w-3 h-3 text-[#858585]" />
        </div>
      </div>
      
      {/* Content */}
      <div className="ml-6">
        <div className="mb-2">
          <span className="text-[#858585] text-sm font-mono">{item.year}</span>
        </div>
        
        <h3 className="text-xl font-semibold text-[#4ec9b0] mb-1">
          {item.title}
        </h3>
        
        <p className="text-[#9cdcfe] mb-3">
          {item.company}
        </p>
        
        <p className="text-[#cccccc] leading-relaxed">
          {item.description}
        </p>
      </div>
    </div>
  );
}
