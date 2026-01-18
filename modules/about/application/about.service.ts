import { TimelineItemType, Interest } from "@/types";
import { experiences, education, interests } from "../domain/data";

export class AboutService {
  getExperiences(): TimelineItemType[] {
    return experiences;
  }

  getEducation(): TimelineItemType[] {
    return education;
  }

  getInterests(): Interest[] {
    return interests;
  }

  getAllTimeline(): TimelineItemType[] {
    return [...experiences, ...education];
  }
}

export const aboutService = new AboutService();
