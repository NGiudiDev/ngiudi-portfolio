import { SkillCard } from "../components/SkillCard";

const skills = [
  // Frontend
  {
    name: "React",
    level: 95,
    category: "Frontend",
    icon: "⚛️",
    color: "blue",
  },
  {
    name: "Next.js",
    level: 90,
    category: "Frontend",
    icon: "▲",
    color: "blue",
  },
  {
    name: "TypeScript",
    level: 90,
    category: "Frontend",
    icon: "📘",
    color: "blue",
  },
  {
    name: "JavaScript",
    level: 95,
    category: "Frontend",
    icon: "📜",
    color: "yellow",
  },
  {
    name: "HTML/CSS",
    level: 95,
    category: "Frontend",
    icon: "🎨",
    color: "orange",
  },
  {
    name: "Tailwind CSS",
    level: 90,
    category: "Frontend",
    icon: "💨",
    color: "blue",
  },
  {
    name: "Vue.js",
    level: 75,
    category: "Frontend",
    icon: "💚",
    color: "green",
  },
  
  // Backend
  {
    name: "Node.js",
    level: 90,
    category: "Backend",
    icon: "🟢",
    color: "green",
  },
  {
    name: "Express",
    level: 85,
    category: "Backend",
    icon: "🚂",
    color: "green",
  },
  {
    name: "Python",
    level: 75,
    category: "Backend",
    icon: "🐍",
    color: "yellow",
  },
  {
    name: "FastAPI",
    level: 70,
    category: "Backend",
    icon: "⚡",
    color: "green",
  },
  
  // Database
  {
    name: "PostgreSQL",
    level: 85,
    category: "Database",
    icon: "🐘",
    color: "blue",
  },
  {
    name: "MongoDB",
    level: 80,
    category: "Database",
    icon: "🍃",
    color: "green",
  },
  {
    name: "Redis",
    level: 75,
    category: "Database",
    icon: "🔴",
    color: "red",
  },
  {
    name: "Prisma",
    level: 85,
    category: "Database",
    icon: "⚪",
    color: "blue",
  },
  
  // DevOps & Tools
  {
    name: "Git",
    level: 90,
    category: "DevOps",
    icon: "📦",
    color: "orange",
  },
  {
    name: "Docker",
    level: 80,
    category: "DevOps",
    icon: "🐳",
    color: "blue",
  },
  {
    name: "AWS",
    level: 75,
    category: "DevOps",
    icon: "☁️",
    color: "orange",
  },
  {
    name: "CI/CD",
    level: 80,
    category: "DevOps",
    icon: "🔄",
    color: "green",
  },
  
  // Other
  {
    name: "GraphQL",
    level: 75,
    category: "API",
    icon: "◉",
    color: "purple",
  },
  {
    name: "REST API",
    level: 90,
    category: "API",
    icon: "🔌",
    color: "green",
  },
  {
    name: "Jest/Testing",
    level: 80,
    category: "Testing",
    icon: "🧪",
    color: "red",
  },
  {
    name: "UI/UX Design",
    level: 70,
    category: "Design",
    icon: "🎨",
    color: "purple",
  },
];

const categories = [
  { name: "Frontend", color: "blue" },
  { name: "Backend", color: "green" },
  { name: "Database", color: "purple" },
  { name: "DevOps", color: "orange" },
  { name: "API", color: "yellow" },
  { name: "Testing", color: "red" },
  { name: "Design", color: "purple" },
];

export default function SkillsPage() {
  return (
    <div className="p-8 font-mono max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-12">
        <div className="mb-4">
          <span className="text-[#6a9955]">// skills.tsx</span>
        </div>
        <h1 className="text-4xl font-bold text-[#4ec9b0] mb-4">
          Habilidades Técnicas
        </h1>
        <div className="space-y-1 text-[#d4d4d4]">
          <p>
            <span className="text-[#569cd6]">const</span>{" "}
            <span className="text-[#9cdcfe]">totalSkills</span>{" "}
            <span className="text-[#d4d4d4]">=</span>{" "}
            <span className="text-[#b5cea8]">{skills.length}</span>
            <span className="text-[#d4d4d4]">;</span>
          </p>
          <p>
            <span className="text-[#569cd6]">const</span>{" "}
            <span className="text-[#9cdcfe]">categories</span>{" "}
            <span className="text-[#d4d4d4]">=</span>{" "}
            <span className="text-[#b5cea8]">{categories.length}</span>
            <span className="text-[#d4d4d4]">;</span>
          </p>
        </div>
      </div>

      {/* Skills by Category */}
      {categories.map((category) => {
        const categorySkills = skills.filter(
          (skill) => skill.category === category.name
        );
        
        if (categorySkills.length === 0) return null;

        return (
          <section key={category.name} className="mb-12">
            <div className="mb-6">
              <h2 className="text-2xl font-semibold text-[#dcdcaa] mb-2">
                <span className="text-[#6a9955]">// </span>
                {category.name}
              </h2>
              <div className="h-0.5 w-20 bg-[#007acc]" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {categorySkills.map((skill) => (
                <SkillCard key={skill.name} skill={skill} />
              ))}
            </div>
          </section>
        );
      })}

      {/* Stats Section */}
      <div className="mt-16 pt-8 border-t border-[#2d2d2d]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#252526] border border-[#2d2d2d] rounded-lg p-6">
            <div className="text-[#569cd6] text-sm mb-2">
              <span className="text-[#6a9955]">// </span>Años de experiencia
            </div>
            <div className="text-4xl font-bold text-[#4ec9b0]">5+</div>
          </div>
          
          <div className="bg-[#252526] border border-[#2d2d2d] rounded-lg p-6">
            <div className="text-[#569cd6] text-sm mb-2">
              <span className="text-[#6a9955]">// </span>Tecnologías dominadas
            </div>
            <div className="text-4xl font-bold text-[#4ec9b0]">
              {skills.filter((s) => s.level >= 80).length}
            </div>
          </div>
          
          <div className="bg-[#252526] border border-[#2d2d2d] rounded-lg p-6">
            <div className="text-[#569cd6] text-sm mb-2">
              <span className="text-[#6a9955]">// </span>Aprendizaje continuo
            </div>
            <div className="text-4xl font-bold text-[#4ec9b0]">100%</div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-12">
        <p className="text-[#6a9955] text-sm">
          <span className="text-[#569cd6]">export default</span>{" "}
          <span className="text-[#9cdcfe]">SkillsPage</span>
          <span className="text-[#d4d4d4]">;</span>
        </p>
      </div>
    </div>
  );
}
