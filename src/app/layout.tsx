import type { Metadata } from "next";
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
  title: "molldo — 생활을 더 편리하게, 취미를 더 즐겁게",
  description: "molldo는 라이프스타일에 딱 맞는 앱을 만드는 제작소입니다.",
  metadataBase: new URL("https://molldo-web.vercel.app"),
  verification: {
    google: "niezDJo5PYRlP93L5OQ-0ZqnVrK3-TXM1_ZM6GCYve0",
  },
  openGraph: {
    title: "molldo",
    description:
      "생활을 더 편리하게, 취미를 더 즐겁게 — 라이프스타일 앱 제작 브랜드",
    type: "website",
    url: "https://molldo-web.vercel.app",
  },
  twitter: {
    card: "summary_large_image",
    title: "molldo",
    description:
      "생활을 더 편리하게, 취미를 더 즐겁게 — 라이프스타일 앱 제작 브랜드",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="dark">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}

