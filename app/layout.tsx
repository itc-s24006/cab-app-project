// import type { Metadata } from "next";
// // import { Geist, Geist_Mono } from "next/font/google";
// import FlowbiteProvider from "@/components/FlowbiteProvider";
// import ThemeToggle from "@/components/ThemeToggle/page";
// import "./globals.css";

// // const geistSans = Geist({
// //   variable: "--font-geist-sans",
// //   subsets: ["latin"],
// // });

// // const geistMono = Geist_Mono({
// //   variable: "--font-geist-mono",
// //   subsets: ["latin"],
// // });

// export const metadata: Metadata = {
//   title: "CAB暗算練習アプリ",
//   description: "Web-CAB暗算の練習ができるアプリケーションです。",
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="ja" suppressHydrationWarning>
//       <body>
//         <FlowbiteProvider>{children}</FlowbiteProvider>
//       </body>
//     </html>
//   );
// }

// app/layout.tsx

import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

import Header from "@/components/Header/page";
import MainCard from "@/components/MainCard/page";
// import { Footer } from "@/components/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen space-y-6">
          <Header />

          {/* 2. メインコンテンツエリア（フル幅に変更） */}
          <main className="flex-grow container mx-auto p-4">
            {/* メインコンテンツが幅を占めるようにw-fullを指定 */}
            <div className="w-full">
              <MainCard>
                {children} {/* app/page.tsxの内容 */}
              </MainCard>
            </div>
          </main>

          {/* <Footer /> */}
        </div>
      </body>
    </html>
  );
}
