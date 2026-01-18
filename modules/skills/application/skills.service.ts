import { Skill } from "@/types";
import { skills, categories } from "../domain/data";

export class SkillsService {
  getAllSkills(): Skill[] {
    return skills;
  }

  getSkillsByCategory(category: string): Skill[] {
    return skills.filter(skill => skill.category === category);
  }

  getCategories() {
    return categories;
  }

  getMasteredSkills(threshold: number = 80): Skill[] {
    return skills.filter(skill => skill.level >= threshold);
  }

  getSkillStats() {
    return {
      totalSkills: skills.length,
      categories: categories.length,
      masteredSkills: this.getMasteredSkills().length,
    };
  }
}

export const skillsService = new SkillsService();
