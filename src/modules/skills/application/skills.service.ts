import { Skill } from "@/types";
import { skills, categories } from "../domain/data";

export class SkillsService {
  getAllSkills(): Skill[] {
    return skills;
  }

  getCategories() {
    return categories;
  }
}

export const skillsService = new SkillsService();
