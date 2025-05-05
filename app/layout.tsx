import type { Metadata } from "next";
import { roboto } from "./fonts/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "РИКОМ — Светодиодные ленты RSD-Ex",
  description: "Взрывозащищённые решения для освещения промышленных объектов",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={roboto.variable}>
        {children}
      </body>
    </html>
  );
}
