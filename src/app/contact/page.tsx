"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { PageTitle } from "@/modules/common/ui/PageTitle";
import { contactService } from "@/modules/contact/application/contact.service";
import {
  DocumentTextIcon,
  ChatBubbleLeftRightIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/solid";

const contactInfo = contactService.getContactInfo();
const socialLinks = contactService.getSocialLinks();

export default function ContactPage() {
  const t = useTranslations("contact");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const validateForm = () => {
    const errorKeys = contactService.validateForm(formData);
    
    const translated: { [key: string]: string } = {};
    
    Object.entries(errorKeys).forEach(([field, key]) => {
      translated[field] = t(`errors.${key}` as Parameters<typeof t>[0]);
    });
    
    setErrors(translated);
    
    return Object.keys(errorKeys).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitError(null);

    const result = await contactService.submitForm(formData);

    setIsSubmitting(false);

    if (result.success) {
      setIsSubmitted(true);
      setTimeout(() => {
        setFormData({ name: "", email: "", subject: "", message: "" });
        setIsSubmitted(false);
      }, 3000);
    } else {
      setSubmitError(t("errors.genericError"));
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  return (
    <div className="p-8 font-mono max-w-6xl mx-auto">
      <PageTitle
        title={t("title")}
        subtitle={
          <>
            <span className="text-[#569cd6]">const</span>{" "}
            <span className="text-[#9cdcfe]">{t("messageVar")}</span>{" "}
            <span className="text-[#d4d4d4]">=</span>{" "}
            <span className="text-[#ce9178]">{t("messageValue")}</span>
            <span className="text-[#d4d4d4]">;</span>
          </>
        }
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Contact Form */}
        <div className="lg:col-span-2">
          <div className="bg-[#252526] border border-[#2d2d2d] rounded-lg p-6">
            <div className="mb-6">
              <h2 className="text-2xl font-semibold text-[#dcdcaa] flex items-center gap-2">
                <ChatBubbleLeftRightIcon className="w-6 h-6" />
                {t("formTitle")}
              </h2>
              <p className="text-[#858585] text-sm mt-2">
                &#47;&#47; {t("formComment").replace("// ", "")}
              </p>
            </div>

            {isSubmitted ? (
              <div className="py-12 text-center">
                <CheckCircleIcon className="w-16 h-16 text-[#4ec9b0] mx-auto mb-4" />
                <h3 className="text-2xl font-semibold text-[#4ec9b0] mb-2">
                  {t("successTitle")}
                </h3>
                <p className="text-[#d4d4d4]">{t("successMsg")}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label className="block text-[#9cdcfe] text-sm mb-2" htmlFor="name">
                    <span className="text-[#569cd6]">const</span>{" "}
                    {t("nameLabel")}{" "}
                    <span className="text-[#d4d4d4]">=</span>
                  </label>
                  <input
                    className={`w-full bg-[#1e1e1e] border ${
                      errors.name ? "border-[#f48771]" : "border-[#3c3c3c]"
                    } rounded px-4 py-3 text-[#d4d4d4] focus:border-[#007acc] focus:outline-none transition-colors`}
                    id="name"
                    name="name"
                    onChange={handleChange}
                    placeholder={t("namePlaceholder")}
                    type="text"
                    value={formData.name}
                  />
                  {errors.name && (
                    <p className="text-[#f48771] text-xs mt-1">{errors.name}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label className="block text-[#9cdcfe] text-sm mb-2" htmlFor="email">
                    <span className="text-[#569cd6]">const</span>
                      {" "}{t("emailLabel")}{" "}
                    <span className="text-[#d4d4d4]">=</span>
                  </label>
                  <input
                    className={`w-full bg-[#1e1e1e] border ${
                      errors.email ? "border-[#f48771]" : "border-[#3c3c3c]"
                    } rounded px-4 py-3 text-[#d4d4d4] focus:border-[#007acc] focus:outline-none transition-colors`}
                    id="email"
                    name="email"
                    onChange={handleChange}
                    placeholder={t("emailPlaceholder")}
                    type="email"
                    value={formData.email}
                  />
                  {errors.email && (
                    <p className="text-[#f48771] text-xs mt-1">{errors.email}</p>
                  )}
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-[#9cdcfe] text-sm mb-2" htmlFor="subject">
                    <span className="text-[#569cd6]">const</span>
                      {" "}{t("subjectLabel")}{" "}
                    <span className="text-[#d4d4d4]">=</span>
                  </label>
                  <input
                    className={`w-full bg-[#1e1e1e] border ${
                      errors.subject ? "border-[#f48771]" : "border-[#3c3c3c]"
                    } rounded px-4 py-3 text-[#d4d4d4] focus:border-[#007acc] focus:outline-none transition-colors`}
                    id="subject"
                    name="subject"
                    onChange={handleChange}
                    placeholder={t("subjectPlaceholder")}
                    type="text"
                    value={formData.subject}
                  />
                  {errors.subject && (
                    <p className="text-[#f48771] text-xs mt-1">{errors.subject}</p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label className="block text-[#9cdcfe] text-sm mb-2" htmlFor="message">
                    <span className="text-[#569cd6]">const</span>
                      {" "}{t("messageLabel")}{" "}
                    <span className="text-[#d4d4d4]">=</span>
                  </label>
                  <textarea
                    className={`w-full bg-[#1e1e1e] border ${
                      errors.message ? "border-[#f48771]" : "border-[#3c3c3c]"
                    } rounded px-4 py-3 text-[#d4d4d4] focus:border-[#007acc] focus:outline-none transition-colors resize-none`}
                    id="message"
                    name="message"
                    onChange={handleChange}
                    placeholder={t("messagePlaceholder")}
                    rows={6}
                    value={formData.message}
                  />
                  {errors.message && (
                    <p className="text-[#f48771] text-xs mt-1">{errors.message}</p>
                  )}
                </div>

                {submitError && (
                  <div className="bg-[#5a1d1d] border border-[#f48771] rounded px-4 py-3">
                    <p className="text-[#f48771] text-sm">⚠️ {submitError}</p>
                  </div>
                )}

                <div className="flex gap-4">
                  <button
                    className="flex-1 bg-[#007acc] text-white px-6 py-3 rounded hover:bg-[#005a9e] transition-colors disabled:opacity-50 disabled:cursor-not-allowed font-semibold"
                    disabled={isSubmitting}
                    type="submit"
                  >
                    {isSubmitting ? t("submittingBtn") : t("submitBtn")}
                  </button>
                  <button
                    className="px-6 py-3 border border-[#007acc] text-[#007acc] rounded hover:bg-[#007acc] hover:text-white transition-colors"
                    onClick={() => {
                      setFormData({ name: "", email: "", subject: "", message: "" });
                      setErrors({});
                    }}
                    type="button"
                  >
                    {t("clearBtn")}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>

        {/* Contact Information Sidebar */}
        <div className="space-y-6">
          <div className="bg-[#252526] border border-[#2d2d2d] rounded-lg p-6">
            <h3 className="text-lg font-semibold text-[#dcdcaa] mb-4 flex items-center gap-2">
              <DocumentTextIcon className="w-5 h-5" />
              {t("contactInfoTitle")}
            </h3>
            <div className="space-y-4">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <div key={index} className="flex items-start gap-3">
                    <Icon className={`w-5 h-5 mt-0.5 ${info.color}`} />
                    <div>
                      <p className="text-[#858585] text-xs uppercase tracking-wider">
                        {t(`labels.${info.labelKey}` as Parameters<typeof t>[0])}
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

          <div className="bg-[#252526] border border-[#2d2d2d] rounded-lg p-6">
            <h3 className="text-lg font-semibold text-[#dcdcaa] mb-4">
              {t("socialTitle")}
            </h3>
            <div className="space-y-3">
              {socialLinks.map((social, index) => (
                <a
                  className="flex items-center gap-3 p-3 bg-[#1e1e1e] rounded hover:bg-[#2d2d2d] transition-all group"
                  href={social.url}
                  key={index}
                  rel="noopener noreferrer"
                  target="_blank"
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
        </div>
      </div>
    </div>
  );
}
