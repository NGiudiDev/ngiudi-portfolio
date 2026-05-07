"use client";

import { useTransition } from "react";
import { useLocale, useTranslations } from "next-intl";
import { useRouter } from "next/navigation";

export function LanguageSwitcher() {
  const locale = useLocale();
  const t = useTranslations("navigation");
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const handleToggle = () => {
    const nextLocale = locale === "es" ? "pt" : "es";
    document.cookie = `NEXT_LOCALE=${nextLocale};path=/;max-age=31536000;SameSite=Lax`;
    startTransition(() => {
      router.refresh();
    });
  };

  return (
    <button
      className="p-2 text-[#858585] hover:text-white transition-colors relative group disabled:opacity-50"
      disabled={isPending}
      onClick={handleToggle}
      title={t("switchLanguage")}
    >
      <span className="text-xs font-mono font-bold">{locale.toUpperCase()}</span>

      {/* Tooltip */}
      <div className="absolute left-12 top-1/2 -translate-y-1/2 bg-[#2d2d2d] text-white px-2 py-1 rounded text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-50">
        {t("switchLanguage")}
      </div>
    </button>
  );
}
