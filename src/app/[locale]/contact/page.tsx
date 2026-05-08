import type { Metadata } from "next";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { PageTitle } from "@/modules/common/ui/PageTitle";
import { ContactForm } from "@/modules/contact/ui/ContactForm";
import { contactService } from "@/modules/contact/application/contact.service";
import {
  DocumentTextIcon,
} from "@heroicons/react/24/solid";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;

  const titles: Record<string, string> = {
    es: "Contacto",
    pt: "Contato",
  };
  const descriptions: Record<string, string> = {
    es: "Contacta a Nicolás Giudice — Frontend Tech Lead disponible para proyectos freelance y oportunidades laborales. Buenos Aires, Argentina.",
    pt: "Entre em contato com Nicolás Giudice — Frontend Tech Lead disponível para projetos freelance e oportunidades de trabalho. Buenos Aires, Argentina.",
  };

  return {
    title: titles[locale] ?? titles.es,
    description: descriptions[locale] ?? descriptions.es,
    alternates: {
      canonical: "https://ngiudidev.com/contact",
      languages: {
        es: "https://ngiudidev.com/contact",
        pt: "https://ngiudidev.com/pt/contact",
      },
    },
  };
}

export default async function ContactPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("contact");

  const contactInfo = contactService.getContactInfo();
  const socialLinks = contactService.getSocialLinks();

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
        {/* Contact Form (Client Component) */}
        <div className="lg:col-span-2">
          <ContactForm />
        </div>

        {/* Contact Information Sidebar — Server Rendered */}
        <div className="space-y-6">
          <div className="bg-[#252526] border border-[#2d2d2d] rounded-lg p-6">
            <h2 className="text-lg font-semibold text-[#dcdcaa] mb-4 flex items-center gap-2">
              <DocumentTextIcon className="w-5 h-5" />
              {t("contactInfoTitle")}
            </h2>
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
            <h2 className="text-lg font-semibold text-[#dcdcaa] mb-4">
              {t("socialTitle")}
            </h2>
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
