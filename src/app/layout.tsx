import { ReactNode } from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { MSWComponent } from "./_components/MSWComponents";
import "./globals.css";
import AuthSession from "./_components/AuthSession";

interface IProps {
  children: ReactNode;
}

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Z 무슨일이 일어나고 있나요?",
  description: "D.com inspired by X.com",
};

export default function RootLayout({ children }: IProps) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MSWComponent />
        <main>
          <AuthSession>{children}</AuthSession>
          {/* 이렇게 감싸주면 useSession을 사용 가능 */}
        </main>
      </body>
    </html>
  );
}
