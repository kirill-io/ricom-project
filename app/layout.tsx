import type { Metadata } from "next";
import { roboto } from "./fonts/fonts";
import "./globals.css";

export const metadata: Metadata = {
  keywords: [
    "светодиодная лента RSD-Ex",
    "рудничная светодиодная лента",
    "взрывозащищённое освещение",
    "освещение для опасных зон",
    "светодиодное освещение для шахт",
    "освещение для НПЗ",
    "освещение для химических предприятий",
    "промышленное светодиодное освещение",
    "светодиодная лента IP68",
    "светодиодная лента ГОСТ",
    "освещение с ТР ТС 012/2011",
    "РИКОМ",
    "взрывозащищённая лента",
    "рудничное исполнение",
    "промышленная светодиодная лента",
    "лента для взрывоопасных зон",
    "лента для подземных работ",
    "сертифицированное освещение",
    "долговечная светодиодная лента",
    "освещение для промышленных объектов",
  ],
  robots: "index, follow",
  authors: [{ name: "РИКОМ" }],
  creator: "РИКОМ",
  publisher: "РИКОМ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <head>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link
          rel="icon"
          href="/favicon-32x32.png"
          sizes="32x32"
          type="image/png"
        />
        <link
          rel="icon"
          href="/favicon-96x96.png"
          sizes="96x96"
          type="image/png"
        />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="copyright" content="РИКОМ, 2025" />
      </head>
      <body className={roboto.variable}>{children}</body>
    </html>
  );
}
