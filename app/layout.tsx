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
  metadataBase: new URL("https://tienphat.tech"),
  title: "Nguyễn Văn Tiến Phát | Cybersecurity Portfolio",
  description:
    "Portfolio của Nguyễn Văn Tiến Phát — SOC Intern và sinh viên An toàn thông tin, tập trung vào SIEM, SOAR, Network Security và AI cho SDN.",
  openGraph: {
    title: "Nguyễn Văn Tiến Phát | Cybersecurity Portfolio",
    description:
      "SOC Intern tập trung vào SIEM, SOAR, Network Security và AI cho SDN.",
    url: "/",
    siteName: "Nguyễn Văn Tiến Phát",
    locale: "vi_VN",
    type: "website",
  },
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
