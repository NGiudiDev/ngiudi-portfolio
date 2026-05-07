import type { Metadata } from "next";

import { getLocale, getMessages } from "next-intl/server";
import { Geist, Geist_Mono } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";

import { ClientAnalytics } from "@/modules/common/ui/ClientAnalytics";
import { StatusBar } from "@/modules/common/ui/StatusBar";
import { Sidebar } from "@/modules/common/ui/Sidebar";
import { TabBar } from "@/modules/common/ui/TabBar";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nicolas Giudice | Portfolio",
  description: "Full Stack Developer Portfolio",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <ClientAnalytics
            measurementId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID || ""}
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
