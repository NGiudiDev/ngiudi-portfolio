import type { Metadata } from "next";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { TimelineItem, InterestCard } from "@/modules/about/ui";
import { PageTitle } from "@/modules/common/ui/PageTitle";
import { aboutService } from "@/modules/about/application/about.service";
import { Locale } from "@/types";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;

  const titles: Record<string, string> = {
    es: "Sobre Mí",
    pt: "Sobre Mim",
  };
  const descriptions: Record<string, string> = {
    es: "Conoce a Nicolás Giudice — desarrollador Full Stack con más de 4 años de experiencia en React, TypeScript y Node.js. Buenos Aires, Argentina.",
    pt: "Conheça Nicolás Giudice — desenvolvedor Full Stack com mais de 4 anos de experiência em React, TypeScript e Node.js. Buenos Aires, Argentina.",
  };

  return {
    title: titles[locale] ?? titles.es,
    description: descriptions[locale] ?? descriptions.es,
    alternates: {
      canonical: "https://ngiudidev.com/about",
      languages: {
        es: "https://ngiudidev.com/about",
        pt: "https://ngiudidev.com/pt/about",
      },
    },
  };
}

export default async function AboutPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const resolvedLocale = locale as Locale;
  const t = await getTranslations("about");

  const experiences = aboutService.getExperiences(resolvedLocale);
  const education = aboutService.getEducation(resolvedLocale);
  const interests = aboutService.getInterests(resolvedLocale);

  return (
    <div className="p-8 font-mono max-w-6xl mx-auto">
      <PageTitle title={t("title")} />

      {/* Introduction */}
      <section className="mb-16">
        <div className="bg-[#252526] border border-[#2d2d2d] rounded-lg p-6">
          <div className="mb-4">
            <span className="text-[#569cd6]">const</span>{" "}
            <span className="text-[#9cdcfe]">{t("varName")}</span>{" "}
            <span className="text-[#d4d4d4]">=</span>{" "}
            <span className="text-[#d4d4d4]">{"{"}</span>
          </div>

          <div className="pl-4 space-y-3 text-[#d4d4d4]">
            <p>
              <span className="text-[#9cdcfe]">{t("bioKey")}:</span>{" "}
              <span className="text-[#ce9178]">{t("bioValue")}</span>
              <span className="text-[#d4d4d4]">,</span>
            </p>
            <p>
              <span className="text-[#9cdcfe]">{t("locationKey")}:</span>{" "}
              <span className="text-[#ce9178]">&quot;Buenos Aires, Argentina&quot;</span>
              <span className="text-[#d4d4d4]">,</span>
            </p>
            <p>
              <span className="text-[#9cdcfe]">{t("yearsKey")}:</span>{" "}
              <span className="text-[#b5cea8]">4</span>
              <span className="text-[#d4d4d4]">,</span>
            </p>
            <p>
              <span className="text-[#9cdcfe]">{t("philosophyKey")}:</span>{" "}
              <span className="text-[#ce9178]">{t("philosophyValue")}</span>
            </p>
          </div>

          <div className="mt-4">
            <span className="text-[#d4d4d4]">{"}"};</span>
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="mb-16">
        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-[#569cd6] mb-2">
            {t("experienceTitle")}
          </h2>
          <div className="h-0.5 w-20 bg-[#b5cea8]" />
        </div>

        <div className="space-y-4">
          {experiences.map((exp, index) => (
            <TimelineItem key={index} item={exp} />
          ))}
        </div>
      </section>

      {/* Education Timeline */}
      <section className="mb-16">
        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-[#569cd6] mb-2">
            {t("educationTitle")}
          </h2>
          <div className="h-0.5 w-20 bg-[#b5cea8]" />
        </div>

        <div className="space-y-4">
          {education.map((edu, index) => (
            <TimelineItem key={index} item={edu} />
          ))}
        </div>
      </section>

      {/* Interests */}
      <section className="mb-8">
        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-[#569cd6] mb-2">
            {t("interestsTitle")}
          </h2>
          <div className="h-0.5 w-20 bg-[#b5cea8]" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {interests.map((interest, index) => (
            <InterestCard key={index} interest={interest} />
          ))}
        </div>
      </section>
    </div>
  );
}
