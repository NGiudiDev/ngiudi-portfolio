import { Project } from "@/types";
import { projects } from "../domain/data";

export class ProjectsService {
  getAllProjects(): Project[] {
    return projects;
  }
}

export const projectsService = new ProjectsService();
