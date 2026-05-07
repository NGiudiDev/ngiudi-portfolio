import { FormData } from "@/types";
import { contactInfo, socialLinks } from "../domain/data";
import { sendContactEmail } from "./actions";

export class ContactService {
  getContactInfo() {
    return contactInfo;
  }

  getSocialLinks() {
    return socialLinks;
  }

  validateForm(formData: FormData): { [key: string]: string } {
    const errors: { [key: string]: string } = {};

    if (!formData.name.trim()) {
      errors.name = "nameRequired";
    }

    if (!formData.email.trim()) {
      errors.email = "emailRequired";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = "emailInvalid";
    }

    if (!formData.subject.trim()) {
      errors.subject = "subjectRequired";
    }

    if (!formData.message.trim()) {
      errors.message = "messageRequired";
    } else if (formData.message.trim().length < 10) {
      errors.message = "messageTooShort";
    }

    return errors;
  }

  async submitForm(formData: FormData): Promise<{ success: boolean; error?: string }> {
    return await sendContactEmail(formData);
  }
}

export const contactService = new ContactService();
