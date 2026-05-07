import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "RuangAkademi - Persiapan CPNS Terbaik di Indonesia",
  description: "Platform belajar CPNS terlengkap dengan materi yang selalu diperbarui sesuai kisi-kisi terbaru. Raih mimpi karir Anda di instansi idaman.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={`${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
