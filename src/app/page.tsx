import { getTranslations } from "next-intl/server";
import Link from "next/link";
import { ArrowDownTrayIcon } from "@heroicons/react/24/outline";

export default async function HomePage() {
  const t = await getTranslations("home");

  return (
    <div className="p-8 font-mono max-w-6xl mx-auto">
      <div className="mb-8">
        <span className="text-[#569cd6]">const</span>{" "}
        <span className="text-[#9cdcfe]">{t("greetingVar")}</span>{" "}
        <span className="text-[#d4d4d4]">=</span>{" "}
        <span className="text-[#ce9178]">{t("greeting")}</span>
        <span className="text-[#d4d4d4]">;</span>
      </div>

      <div className="space-y-4">
        <h1 className="text-4xl font-bold text-[#4ec9b0]">{t("title")}</h1>

        <p className="text-[#d4d4d4] text-lg">
          <span className="text-[#6a9955]">{t("developerComment")}</span>
        </p>

        <div className="mt-8 space-y-2 text-[#d4d4d4]">
          <p>
            <span className="text-[#c586c0]">export</span>{" "}
            <span className="text-[#569cd6]">const</span>{" "}
            <span className="text-[#4ec9b0]">{t("developerVar")}</span> = &#123;
          </p>

          <p className="pl-4">
            <span className="text-[#9cdcfe]">{t("nameField")}</span>:{" "}
            <span className="text-[#ce9178]">{t("nameValue")}</span>,
          </p>

          <p className="pl-4">
            <span className="text-[#9cdcfe]">{t("missionField")}</span>:{" "}
            <span className="text-[#ce9178]">{t("missionValue")}</span>,
          </p>

          <p className="pl-4">
            <span className="text-[#9cdcfe]">{t("jobField")}</span>: &#123;
          </p>

          <p className="pl-8">
            <span className="text-[#9cdcfe]">{t("sinceField")}</span>:{" "}
            <span className="text-[#ce9178]">{t("sinceValue")}</span>,
          </p>

          <p className="pl-8">
            <span className="text-[#9cdcfe]">{t("companyField")}</span>:{" "}
            <span className="text-[#ce9178]">{t("companyValue")}</span>,
          </p>

          <p className="pl-8">
            <span className="text-[#9cdcfe]">{t("roleField")}</span>:{" "}
            <span className="text-[#ce9178]">{t("roleValue")}</span>,
          </p>

          <p className="pl-4">&#125;,</p>

          <p>&#125;</p>
        </div>

        <div className="mt-8 flex gap-4">
          <a
            className="flex items-center gap-2 px-4 py-2 bg-[#007acc] text-white rounded hover:bg-[#005fa3] transition-colors"
            download
            href="/CV%20Nicolás%20Giudice%202026.pdf"
          >
            <ArrowDownTrayIcon className="w-5 h-5" />
            {t("downloadPdf")}
          </a>

          <Link
            href="/contact"
            className="px-4 py-2 border border-[#007acc] text-[#007acc] rounded hover:bg-[#007acc] hover:text-white transition-colors inline-block text-center"
          >
            {t("contactBtn")}
          </Link>
        </div>
      </div>
    </div>
  );
}
