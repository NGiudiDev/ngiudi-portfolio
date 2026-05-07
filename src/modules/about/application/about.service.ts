import { TimelineItemType, Interest, Locale } from "@/types";
import { experiencesData, educationData, interestsData } from "../domain/data";

export class AboutService {
  getExperiences(locale: Locale = "es"): TimelineItemType[] {
    return experiencesData[locale];
  }

  getEducation(locale: Locale = "es"): TimelineItemType[] {
    return educationData[locale];
  }

  getInterests(locale: Locale = "es"): Interest[] {
    return interestsData[locale];
  }
}

export const aboutService = new AboutService();
