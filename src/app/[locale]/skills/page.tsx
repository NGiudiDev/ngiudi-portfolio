import type { Metadata } from "next";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { PageTitle } from "@/modules/common/ui/PageTitle";
import { SkillCard } from "@/modules/skills/ui";
import { skillsService } from "@/modules/skills/application/skills.service";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;

  const titles: Record<string, string> = {
    es: "Habilidades Técnicas",
    pt: "Habilidades Técnicas",
  };
  const descriptions: Record<string, string> = {
    es: "Habilidades técnicas de Nicolás Giudice — React, TypeScript, Next.js, Node.js, AWS y más. Más de 4 años de experiencia en desarrollo web.",
    pt: "Habilidades técnicas de Nicolás Giudice — React, TypeScript, Next.js, Node.js, AWS e mais. Mais de 4 anos de experiência em desenvolvimento web.",
  };

  return {
    title: titles[locale] ?? titles.es,
    description: descriptions[locale] ?? descriptions.es,
    alternates: {
      canonical: "https://ngiudidev.com/skills",
      languages: {
        es: "https://ngiudidev.com/skills",
        pt: "https://ngiudidev.com/pt/skills",
      },
    },
  };
}

export default async function SkillsPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("skills");

  const categories = skillsService.getCategories();
  const skills = skillsService.getAllSkills();

  return (
    <div className="p-8 font-mono max-w-6xl mx-auto">
      <PageTitle
        title={t("title")}
        subtitle={
          <>
            <span className="text-[#569cd6]">const</span>{" "}
            <span className="text-[#9cdcfe]">{t("countVar")}</span>{" "}
            <span className="text-[#d4d4d4]">=</span>{" "}
            <span className="text-[#b5cea8]">{skills.length}</span>
            <span className="text-[#d4d4d4]">;</span>
          </>
        }
      />

      {categories.map((category) => {
        const categorySkills = skills.filter(
          (skill) => skill.category === category.name
        );

        if (categorySkills.length === 0) return null;

        return (
          <section key={category.name} className="mb-12">
            <div className="mb-6">
              <h2 className="text-2xl font-semibold text-[#569cd6] mb-2">
                {t(`categories.${category.translationKey}` as Parameters<typeof t>[0])}
              </h2>
              <div className="h-0.5 w-20 bg-[#b5cea8]" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {categorySkills.map((skill) => (
                <SkillCard
                  key={skill.name}
                  skill={skill}
                  levelLabel={t(`levels.${skill.level}` as Parameters<typeof t>[0])}
                />
              ))}
            </div>
          </section>
        );
      })}

      <div className="mt-16 pt-8 border-t border-[#2d2d2d]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#252526] border border-[#2d2d2d] rounded-lg p-6">
            <div className="text-[#569cd6] text-sm mb-2">{t("yearsLabel")}</div>
            <div className="text-4xl font-bold text-[#4ec9b0]">4+</div>
          </div>

          <div className="bg-[#252526] border border-[#2d2d2d] rounded-lg p-6">
            <div className="text-[#569cd6] text-sm mb-2">{t("techLabel")}</div>
            <div className="text-4xl font-bold text-[#4ec9b0]">
              {skills.filter((s) => s.level === "avanzado").length}
            </div>
          </div>

          <div className="bg-[#252526] border border-[#2d2d2d] rounded-lg p-6">
            <div className="text-[#569cd6] text-sm mb-2">
              {t("learningLabel")}
            </div>
            <div className="text-4xl font-bold text-[#4ec9b0]">100%</div>
          </div>
        </div>
      </div>
    </div>
  );
}
