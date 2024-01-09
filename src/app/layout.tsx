import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ReactNode } from "react";
import styles from "./page.module.css";

interface IProps {
  children: ReactNode;
}

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Z 무슨일이 일어나고 있나요?",
  description: 'D.com inspired by X.com',
};

export default function RootLayout({
  children,
}: IProps) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
