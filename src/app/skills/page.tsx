import { PageTitle } from "@/modules/common/ui/PageTitle";
import { SkillCard } from "@/modules/skills/ui";

import { skillsService } from "@/modules/skills/application/skills.service";

const categories = skillsService.getCategories();
const skills = skillsService.getAllSkills();

export default function SkillsPage() {
  return (
    <div className="p-8 font-mono max-w-6xl mx-auto">
      <PageTitle 
        title="Habilidades Técnicas" 
        subtitle={
          <>
            <span className="text-[#569cd6]">const</span>{" "}
            <span className="text-[#9cdcfe]">totalSkills</span>{" "}
            <span className="text-[#d4d4d4]">=</span>{" "}
            <span className="text-[#b5cea8]">{skills.length}</span>
            <span className="text-[#d4d4d4]">;</span>
          </>
        }
      />

      {/* Skills by Category */}
      {categories.map((category) => {
        const categorySkills = skills.filter(
          (skill) => skill.category === category.name
        );
        
        if (categorySkills.length === 0) return null;

        return (
          <section key={category.name} className="mb-12">
            <div className="mb-6">
              <h2 className="text-2xl font-semibold text-[#569cd6] mb-2">
                {category.name}
              </h2>

              <div className="h-0.5 w-20 bg-[#b5cea8]" />
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
              <span className="text-[#6a9955]">&#47;&#47; </span>Años de experiencia
            </div>
            
            <div className="text-4xl font-bold text-[#4ec9b0]">5+</div>
          </div>
          
          <div className="bg-[#252526] border border-[#2d2d2d] rounded-lg p-6">
            <div className="text-[#569cd6] text-sm mb-2">
              <span className="text-[#6a9955]">&#47;&#47; </span>Tecnologías dominadas
            </div>

            <div className="text-4xl font-bold text-[#4ec9b0]">
              {skills.filter((s) => s.level >= 80).length}
            </div>
          </div>
          
          <div className="bg-[#252526] border border-[#2d2d2d] rounded-lg p-6">
            <div className="text-[#569cd6] text-sm mb-2">
              <span className="text-[#6a9955]">&#47;&#47; </span>Aprendizaje continuo
            </div>
            
            <div className="text-4xl font-bold text-[#4ec9b0]">100%</div>
          </div>
        </div>
      </div>
    </div>
  );
}
