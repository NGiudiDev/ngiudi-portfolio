import { Experience, Education, Certification } from "@/types";
import { personalInfo, experiences, education, certifications, skills, languages } from "../domain/data";

export class ResumeService {
  getPersonalInfo() {
    return personalInfo;
  }

  getExperiences(): Experience[] {
    return experiences;
  }

  getEducation(): Education[] {
    return education;
  }

  getCertifications(): Certification[] {
    return certifications;
  }

  getSkills() {
    return skills;
  }

  getLanguages() {
    return languages;
  }

  downloadResume() {
    // Implementar la lógica de descarga del PDF
    alert("Funcionalidad de descarga de PDF próximamente...");
  }
}

export const resumeService = new ResumeService();
