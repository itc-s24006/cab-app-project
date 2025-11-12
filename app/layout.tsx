import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import { ThemeModeScript, ThemeProvider } from "flowbite-react";
import { ThemeToggle } from "@/components/ThemeToggle/page";
import "./globals.css";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "CAB暗算練習アプリ",
  description: "Web-CAB暗算の練習ができるアプリケーションです。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <head>
        {/* Flowbiteのダークモード制御スクリプト */}
        <ThemeModeScript />
      </head>
      <body>
        <ThemeProvider>
          <header className="flex justify-end p-4 border-b">
            <ThemeToggle />
          </header>
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
