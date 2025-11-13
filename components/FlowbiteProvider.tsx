"use client";

import { ThemeModeScript, ThemeProvider } from "flowbite-react";
import ThemeToggle from "../components/ThemeToggle/page";

export default function FlowbiteProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <ThemeModeScript />
      <ThemeProvider>
        <header className="flex justify-end p-4 border-b">
          <ThemeToggle />
        </header>
        <main>{children}</main>
      </ThemeProvider>
    </>
  );
}
