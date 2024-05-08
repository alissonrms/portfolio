"use client";
import "./globals.css";
import { Poppins } from "@next/font/google";
import { CustomThemeProvider } from "@/providers/customThemeProvider";
import { Analytics } from "@vercel/analytics/react";
import { useEffect, useState } from "react";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <html
      lang="pt-BR"
      className={`${poppins.className}`}
      suppressHydrationWarning
    >
      <head />
      <body
        className={`font-poppins bg-gray-100/50 dark:bg-grey-900 text-black dark:text-white overflow-x-hidden`}
      >
        {mounted && <CustomThemeProvider>{children}</CustomThemeProvider>}
      </body>
      <Analytics />
    </html>
  );
}
