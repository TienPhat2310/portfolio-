import type { Metadata } from "next";
import { JetBrains_Mono, Inter } from "next/font/google";
import "./globals.css";

const mono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Phát Nguyễn | Portfolio",
  description: "Cybersecurity Student & SOC Intern",
};

import { ThemeProvider } from "../src/components/ThemeProvider";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <body className={`${mono.variable} ${inter.variable} antialiased font-[family-name:var(--font-sans)]`}>
        <ThemeProvider>
          <div className="bg-mesh"></div>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}