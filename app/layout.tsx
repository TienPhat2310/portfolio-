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

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="vi">
      <body className={`${mono.variable} ${inter.variable} antialiased font-[family-name:var(--font-sans)]`}>
        <div className="bg-mesh"></div>
        {children}
      </body>
    </html>
  );
}