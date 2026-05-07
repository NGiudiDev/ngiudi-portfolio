import { getRequestConfig } from "next-intl/server";
import { cookies } from "next/headers";
import type { Locale } from "@/types";

const locales: Locale[] = ["es", "pt"];

export default getRequestConfig(async () => {
  const cookieStore = await cookies();
  const localeCookie = cookieStore.get("NEXT_LOCALE")?.value;
  const locale: Locale =
    localeCookie && locales.includes(localeCookie as Locale)
      ? (localeCookie as Locale)
      : "es";

  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default,
  };
});
