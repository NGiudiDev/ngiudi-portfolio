import type { Metadata } from "next";
import { setRequestLocale, getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { Geist, Geist_Mono } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";

import { routing } from "@/i18n/routing";
import { ClientAnalytics } from "@/modules/common/ui/ClientAnalytics";
import { StatusBar } from "@/modules/common/ui/StatusBar";
import { Sidebar } from "@/modules/common/ui/Sidebar";
import { TabBar } from "@/modules/common/ui/TabBar";
import { getYearsOfExperience } from "@/modules/about/domain/experience";
import "../globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

const yearsOfExperience = getYearsOfExperience();

export const metadata: Metadata = {
  metadataBase: new URL("https://ngiudidev.com"),
  title: {
    default: "Nicolás Giudice | Frontend Tech Lead & Full Stack Developer",
    template: "%s | Nicolás Giudice",
  },
  description:
    `Portfolio de Nicolás Giudice — Líder técnico Frontend y desarrollador Full Stack con más de ${yearsOfExperience} años de experiencia. Buenos Aires, Argentina.`,
  authors: [{ name: "Nicolás Giudice", url: "https://ngiudidev.com" }],
  creator: "Nicolás Giudice",
  openGraph: {
    type: "website",
    siteName: "Nicolás Giudice — Portfolio",
    title: "Nicolás Giudice | Frontend Tech Lead & Full Stack Developer",
    description:
      `Portfolio de Nicolás Giudice — Líder técnico Frontend y desarrollador Full Stack con más de ${yearsOfExperience} años de experiencia. Buenos Aires, Argentina.`,
    locale: "es_AR",
    alternateLocale: "pt_BR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nicolás Giudice | Frontend Tech Lead & Full Stack Developer",
    description:
      `Portfolio de Nicolás Giudice — Líder técnico Frontend y desarrollador Full Stack con más de ${yearsOfExperience} años de experiencia.`,
  },
  alternates: {
    canonical: "https://ngiudidev.com",
    languages: {
      en: "https://ngiudidev.com/en",
      es: "https://ngiudidev.com",
      pt: "https://ngiudidev.com/pt",
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Nicolás Giudice",
  url: "https://ngiudidev.com",
  jobTitle: "Frontend Tech Lead",
  worksFor: {
    "@type": "Organization",
    name: "Shipnow",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Buenos Aires",
    addressCountry: "AR",
  },
  sameAs: [
    "https://github.com/ngiudidev",
    "https://www.linkedin.com/in/nicol%C3%A1s-giudice-5652a0181/",
    "https://www.codewars.com/users/NGiudi",
  ],
  email: "ngiudice.dev@gmail.com",
  knowsAbout: [
    "React",
    "TypeScript",
    "Next.js",
    "Node.js",
    "Full Stack Development",
    "Frontend Architecture",
  ],
};

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as (typeof routing.locales)[number])) {
    notFound();
  }

  setRequestLocale(locale);

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NextIntlClientProvider locale={locale} messages={messages}>
          <ClientAnalytics
            measurementId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID || ""}
            logRocketAppId={process.env.NEXT_PUBLIC_LOGROCKET_APP_ID || ""}
          />

          <div className="flex h-screen overflow-hidden bg-[#1e1e1e]">
            <Sidebar />

            <div className="flex-1 flex flex-col overflow-hidden">
              <TabBar />
              <main className="flex-1 overflow-auto bg-[#1e1e1e] text-[#cccccc]">
                {children}
              </main>
              <StatusBar />
            </div>
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
