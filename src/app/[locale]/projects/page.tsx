import type { Metadata } from "next";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { PageTitle } from "@/modules/common/ui/PageTitle";
import { ProjectCard } from "@/modules/projects/ui";
import { projectsService } from "@/modules/projects/application/projects.service";
import { Locale } from "@/types";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;

  const titles: Record<string, string> = {
    es: "Mis Proyectos",
    pt: "Meus Projetos",
  };

  const descriptions: Record<string, string> = {
    es: "Proyectos de Nicolás Giudice — aplicaciones web desarrolladas con React, Next.js, TypeScript y más. Portfolio de trabajos reales.",
    pt: "Projetos de Nicolás Giudice — aplicações web desenvolvidas com React, Next.js, TypeScript e mais. Portfólio de trabalhos reais.",
  };

  return {
    title: titles[locale] ?? titles.es,
    description: descriptions[locale] ?? descriptions.es,
    alternates: {
      canonical: "https://ngiudidev.com/projects",
      languages: {
        es: "https://ngiudidev.com/projects",
        pt: "https://ngiudidev.com/pt/projects",
      },
    },
  };
}

export default async function ProjectsPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const resolvedLocale = locale as Locale;
  const t = await getTranslations("projects");

  const projects = projectsService.getAllProjects(resolvedLocale);

  return (
    <div className="p-8 font-mono max-w-6xl mx-auto">
      <PageTitle
        title={t("title")}
        subtitle={
          <>
            <span className="text-[#569cd6]">const</span>{" "}
            <span className="text-[#9cdcfe]">{t("countVar")}</span>{" "}
            <span className="text-[#d4d4d4]">=</span>{" "}
            <span className="text-[#b5cea8]">{projects.length}</span>
            <span className="text-[#d4d4d4]">;</span>
          </>
        }
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      <div className="mt-12 pt-6 border-t border-[#2d2d2d]">
        <p className="text-[#6a9955] text-sm">{t("moreComingSoon")}</p>
      </div>
    </div>
  );
}
