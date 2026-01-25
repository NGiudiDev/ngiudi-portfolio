import type { Metadata } from "next";

import { ClientAnalytics } from "@/modules/common/ui/ClientAnalytics";
import { StatusBar } from "@/modules/common/ui/StatusBar";
import { Sidebar } from "@/modules/common/ui/Sidebar";
import { TabBar } from "@/modules/common/ui/TabBar";

import { Geist, Geist_Mono } from "next/font/google";

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
  title: "Nicolas Giudi | Portfolio",
  description: "Full Stack Developer Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ClientAnalytics measurementId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID || ""} />
        
        <div className="flex h-screen overflow-hidden bg-[#1e1e1e]">
          <Sidebar />
          
          {/* Main Content Area */}
          <div className="flex-1 flex flex-col overflow-hidden">
            <TabBar />

            {/* Content */}
            <main className="flex-1 overflow-auto bg-[#1e1e1e] text-[#cccccc]">
              {children}
            </main>

            <StatusBar />
          </div>
        </div>
      </body>
    </html>
  );
}
