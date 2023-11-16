import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";

const inter = Noto_Sans_KR({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "부동산 가치상승 태양광",
  description: "태양광 수익의 모든것 알려드립니다",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
