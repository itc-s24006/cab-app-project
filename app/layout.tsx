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
              <MainCard>{children}</MainCard>
            </div>
          </main>

          {/* <Footer /> */}
        </div>
      </body>
    </html>
  );
}
