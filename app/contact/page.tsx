"use client";

import { useState } from "react";
import {
  EnvelopeIcon,
  MapPinIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";
import {
  DocumentTextIcon,
  ChatBubbleLeftRightIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/solid";
import { contactService } from "@/modules/contact/application/contact.service";

const contactInfo = contactService.getContactInfo();
const socialLinks = contactService.getSocialLinks();

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors = contactService.validateForm(formData);
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // Usar el servicio para enviar el formulario
    await contactService.submitForm(formData);

    console.log("Form submitted:", formData);

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Resetear formulario después de 3 segundos
    setTimeout(() => {
      setFormData({ name: "", email: "", subject: "", message: "" });
      setIsSubmitted(false);
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    
    // Limpiar error del campo al escribir
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  return (
    <div className="p-8 font-mono max-w-6xl mx-auto">
      {/* Header */}
      <div className="mb-12">
        <div className="mb-4">
          <span className="text-[#6a9955]">// contact.tsx</span>
        </div>
        <h1 className="text-4xl font-bold text-[#4ec9b0] mb-4">Contacto</h1>
        <p className="text-[#d4d4d4] text-lg">
          <span className="text-[#569cd6]">const</span>{" "}
          <span className="text-[#9cdcfe]">message</span>{" "}
          <span className="text-[#d4d4d4]">=</span>{" "}
          <span className="text-[#ce9178]">
            &quot;¡Hablemos sobre tu próximo proyecto!&quot;
          </span>
          <span className="text-[#d4d4d4]">;</span>
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Contact Form */}
        <div className="lg:col-span-2">
          <div className="bg-[#252526] border border-[#2d2d2d] rounded-lg p-6">
            <div className="mb-6">
              <h2 className="text-2xl font-semibold text-[#dcdcaa] flex items-center gap-2">
                <ChatBubbleLeftRightIcon className="w-6 h-6" />
                Envíame un mensaje
              </h2>
              <p className="text-[#858585] text-sm mt-2">
                <span className="text-[#6a9955]">// </span>
                Completa el formulario y te responderé lo antes posible
              </p>
            </div>

            {isSubmitted ? (
              <div className="py-12 text-center">
                <CheckCircleIcon className="w-16 h-16 text-[#4ec9b0] mx-auto mb-4" />
                <h3 className="text-2xl font-semibold text-[#4ec9b0] mb-2">
                  ¡Mensaje enviado!
                </h3>
                <p className="text-[#d4d4d4]">
                  Gracias por contactarme. Te responderé pronto.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-[#9cdcfe] text-sm mb-2"
                  >
                    <span className="text-[#569cd6]">const</span> name{" "}
                    <span className="text-[#d4d4d4]">=</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full bg-[#1e1e1e] border ${
                      errors.name ? "border-[#f48771]" : "border-[#3c3c3c]"
                    } rounded px-4 py-3 text-[#d4d4d4] focus:border-[#007acc] focus:outline-none transition-colors`}
                    placeholder="Tu nombre completo"
                  />
                  {errors.name && (
                    <p className="text-[#f48771] text-xs mt-1">
                      <span className="text-[#6a9955]">// </span>
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-[#9cdcfe] text-sm mb-2"
                  >
                    <span className="text-[#569cd6]">const</span> email{" "}
                    <span className="text-[#d4d4d4]">=</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full bg-[#1e1e1e] border ${
                      errors.email ? "border-[#f48771]" : "border-[#3c3c3c]"
                    } rounded px-4 py-3 text-[#d4d4d4] focus:border-[#007acc] focus:outline-none transition-colors`}
                    placeholder="tu.email@ejemplo.com"
                  />
                  {errors.email && (
                    <p className="text-[#f48771] text-xs mt-1">
                      <span className="text-[#6a9955]">// </span>
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* Subject */}
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-[#9cdcfe] text-sm mb-2"
                  >
                    <span className="text-[#569cd6]">const</span> subject{" "}
                    <span className="text-[#d4d4d4]">=</span>
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={`w-full bg-[#1e1e1e] border ${
                      errors.subject ? "border-[#f48771]" : "border-[#3c3c3c]"
                    } rounded px-4 py-3 text-[#d4d4d4] focus:border-[#007acc] focus:outline-none transition-colors`}
                    placeholder="Asunto del mensaje"
                  />
                  {errors.subject && (
                    <p className="text-[#f48771] text-xs mt-1">
                      <span className="text-[#6a9955]">// </span>
                      {errors.subject}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-[#9cdcfe] text-sm mb-2"
                  >
                    <span className="text-[#569cd6]">const</span> message{" "}
                    <span className="text-[#d4d4d4]">=</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className={`w-full bg-[#1e1e1e] border ${
                      errors.message ? "border-[#f48771]" : "border-[#3c3c3c]"
                    } rounded px-4 py-3 text-[#d4d4d4] focus:border-[#007acc] focus:outline-none transition-colors resize-none`}
                    placeholder="Escribe tu mensaje aquí..."
                  />
                  {errors.message && (
                    <p className="text-[#f48771] text-xs mt-1">
                      <span className="text-[#6a9955]">// </span>
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <div className="flex gap-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1 bg-[#007acc] text-white px-6 py-3 rounded hover:bg-[#005a9e] transition-colors disabled:opacity-50 disabled:cursor-not-allowed font-semibold"
                  >
                    {isSubmitting ? "Enviando..." : "Enviar Mensaje"}
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setFormData({ name: "", email: "", subject: "", message: "" });
                      setErrors({});
                    }}
                    className="px-6 py-3 border border-[#007acc] text-[#007acc] rounded hover:bg-[#007acc] hover:text-white transition-colors"
                  >
                    Limpiar
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>

        {/* Contact Information Sidebar */}
        <div className="space-y-6">
          {/* Contact Methods */}
          <div className="bg-[#252526] border border-[#2d2d2d] rounded-lg p-6">
            <h3 className="text-lg font-semibold text-[#dcdcaa] mb-4 flex items-center gap-2">
              <DocumentTextIcon className="w-5 h-5" />
              Información de Contacto
            </h3>
            <div className="space-y-4">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <div key={index} className="flex items-start gap-3">
                    <Icon className={`w-5 h-5 mt-0.5 ${info.color}`} />
                    <div>
                      <p className="text-[#858585] text-xs uppercase tracking-wider">
                        {info.label}
                      </p>
                      {info.href ? (
                        <a
                          href={info.href}
                          className="text-[#9cdcfe] hover:text-[#4ec9b0] transition-colors text-sm"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-[#d4d4d4] text-sm">{info.value}</p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Social Links */}
          <div className="bg-[#252526] border border-[#2d2d2d] rounded-lg p-6">
            <h3 className="text-lg font-semibold text-[#dcdcaa] mb-4">
              Encuéntrame en:
            </h3>
            <div className="space-y-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 bg-[#1e1e1e] rounded hover:bg-[#2d2d2d] transition-all group"
                >
                  <span className="text-2xl">{social.icon}</span>
                  <div>
                    <p className="text-[#d4d4d4] font-semibold group-hover:text-[#4ec9b0] transition-colors">
                      {social.name}
                    </p>
                    <p className="text-[#858585] text-xs">{social.username}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Availability */}
          <div className="bg-[#252526] border border-[#2d2d2d] rounded-lg p-6">
            <h3 className="text-lg font-semibold text-[#dcdcaa] mb-3">
              Disponibilidad
            </h3>
            <div className="flex items-center gap-2 mb-2">
              <div className="w-3 h-3 bg-[#4ec9b0] rounded-full animate-pulse" />
              <p className="text-[#4ec9b0] font-semibold">
                Disponible para proyectos
              </p>
            </div>
            <p className="text-[#858585] text-sm">
              Tiempo de respuesta: <span className="text-[#9cdcfe]">24-48 horas</span>
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-12 pt-6 border-t border-[#2d2d2d] text-center">
        <p className="text-[#6a9955] text-sm">
          <span className="text-[#569cd6]">export default</span>{" "}
          <span className="text-[#9cdcfe]">ContactPage</span>
          <span className="text-[#d4d4d4]">;</span>
        </p>
      </div>
    </div>
  );
}
