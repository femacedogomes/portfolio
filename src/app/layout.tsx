import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Felipe Macedo Gomes | Desenvolvedor",
  description:
    "Desenvolvedor Front-End com experiência em React, Next.js e React Native.",
  keywords:
    "desenvolvedor, front-end, react, next.js, react native, typescript",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
