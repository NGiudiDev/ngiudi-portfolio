import { FormData } from "@/types";
import { contactInfo, socialLinks } from "../domain/data";

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
      errors.name = "El nombre es requerido";
    }

    if (!formData.email.trim()) {
      errors.email = "El email es requerido";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = "El email no es válido";
    }

    if (!formData.subject.trim()) {
      errors.subject = "El asunto es requerido";
    }

    if (!formData.message.trim()) {
      errors.message = "El mensaje es requerido";
    } else if (formData.message.trim().length < 10) {
      errors.message = "El mensaje debe tener al menos 10 caracteres";
    }

    return errors;
  }

  async submitForm(formData: FormData): Promise<boolean> {
    // Simular envío del formulario
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("Formulario enviado:", formData);
        resolve(true);
      }, 1500);
    });
  }
}

export const contactService = new ContactService();
