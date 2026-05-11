"use client";

import { useTransition, useState, useRef, useEffect } from "react";
import { useLocale } from "next-intl";
import { useRouter, usePathname } from "@/i18n/navigation";

const LOCALES = [
  { code: "es", label: "Español" },
  { code: "pt", label: "Português" },
  { code: "en", label: "English" },
] as const;

export function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (code: string) => {
    setOpen(false);
    startTransition(() => {
      router.replace(pathname, { locale: code });
    });
  };

  return (
    <div className="relative" ref={ref}>
      <button
        className="px-2 pb-5 text-[#858585] hover:text-white transition-colors disabled:opacity-50"
        disabled={isPending}
        onClick={() => setOpen((prev) => !prev)}
        title="Language"
      >
        <span className="text-xs font-mono font-bold">{locale.toUpperCase()}</span>
      </button>

      {open && (
        <div className="absolute left-12 bottom-5 bg-[#2d2d2d] border border-[#3e3e3e] rounded shadow-lg z-50 overflow-hidden">
          {LOCALES.map(({ code, label }) => (
            <button
              key={code}
              disabled={isPending}
              onClick={() => handleSelect(code)}
              className={`flex items-center gap-2 w-full px-3 py-1.5 text-xs text-left transition-colors whitespace-nowrap ${
                locale === code
                  ? "text-white bg-[#094771]"
                  : "text-[#cccccc] hover:bg-[#3e3e3e]"
              }`}
            >
              <span className="font-mono font-bold w-6">{code.toUpperCase()}</span>
              <span>{label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
