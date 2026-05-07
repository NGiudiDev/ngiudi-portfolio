import { Project, Locale } from "@/types";
import { projectsData } from "../domain/data";

export class ProjectsService {
  getAllProjects(locale: Locale = "es"): Project[] {
    return projectsData[locale];
  }
}

export const projectsService = new ProjectsService();
