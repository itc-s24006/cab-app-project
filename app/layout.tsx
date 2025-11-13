import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import FlowbiteProvider from "@/components/FlowbiteProvider";
import ThemeToggle from "@/components/ThemeToggle/page";
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
      <body>
        <FlowbiteProvider>{children}</FlowbiteProvider>
      </body>
    </html>
  );
}
