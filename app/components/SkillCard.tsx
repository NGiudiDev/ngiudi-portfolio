interface SkillCardProps {
  skill: {
    name: string;
    level: number; // 1-100
    category: string;
    icon?: string;
    color: string;
  };
}

export function SkillCard({ skill }: SkillCardProps) {
  const getBarColor = (color: string) => {
    const colors: { [key: string]: string } = {
      blue: "bg-[#569cd6]",
      green: "bg-[#4ec9b0]",
      yellow: "bg-[#dcdcaa]",
      orange: "bg-[#ce9178]",
      purple: "bg-[#c586c0]",
      red: "bg-[#f48771]",
    };
    return colors[color] || colors.blue;
  };

  return (
    <div className="bg-[#252526] border border-[#2d2d2d] rounded-lg p-5 hover:border-[#007acc] transition-all duration-300 group">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          {skill.icon && <span className="text-2xl">{skill.icon}</span>}
          <h3 className="text-[#d4d4d4] font-semibold group-hover:text-[#4ec9b0] transition-colors">
            {skill.name}
          </h3>
        </div>
        <span className="text-[#9cdcfe] text-sm font-mono">
          {skill.level}%
        </span>
      </div>
      
      <div className="mb-2">
        <div className="w-full bg-[#3c3c3c] rounded-full h-2 overflow-hidden">
          <div
            className={`h-full rounded-full transition-all duration-500 ${getBarColor(
              skill.color
            )}`}
            style={{ width: `${skill.level}%` }}
          />
        </div>
      </div>
      
      <div className="text-[#6a9955] text-xs">
        <span className="text-[#858585]">// </span>
        {skill.category}
      </div>
    </div>
  );
}
