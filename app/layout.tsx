import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "爪爪清爽屋 | 宠物洗护美容",
  description: "爪爪清爽屋提供宠物洗澡、修剪造型、皮毛护理、猫咪安抚洗护和幼宠护理服务。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
