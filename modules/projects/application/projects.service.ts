import { Project } from "@/types";
import { projects } from "../domain/data";

export class ProjectsService {
  getAllProjects(): Project[] {
    return projects;
  }

  getProjectById(id: number): Project | undefined {
    return projects.find(project => project.id === id);
  }

  getProjectsByTechnology(technology: string): Project[] {
    return projects.filter(project => 
      project.technologies.includes(technology)
    );
  }

  getFeaturedProjects(limit: number = 3): Project[] {
    return projects.slice(0, limit);
  }
}

export const projectsService = new ProjectsService();
