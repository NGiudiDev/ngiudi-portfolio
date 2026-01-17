"use client";

interface InterestCardProps {
  interest: {
    icon: string;
    title: string;
    description: string;
  };
}

export function InterestCard({ interest }: InterestCardProps) {
  return (
    <div className="bg-[#252526] border border-[#2d2d2d] rounded-lg p-5 hover:border-[#007acc] transition-all duration-300 group hover:scale-105">
      <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
        {interest.icon}
      </div>
      
      <h3 className="text-lg font-semibold text-[#4ec9b0] mb-2 group-hover:text-[#6dd4bd] transition-colors">
        {interest.title}
      </h3>
      
      <p className="text-[#cccccc] text-sm leading-relaxed">
        {interest.description}
      </p>
    </div>
  );
}
