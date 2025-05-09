import type { Metadata } from "next";
import { roboto } from "./fonts/fonts";
import "./globals.css";
import { Header } from "./components/Header/Header";
import { Loader } from "./Loader";

export const metadata: Metadata = {
  title: "РИКОМ – рудничная взрывозащищённая светодиодная лента RSD-Ex",
  description:
    "Безопасное освещение от РИКОМ: рудничная взрывозащищённая лента RSD-Ex для промышленных зон. Сертифицировано, надёжно, готово к эксплуатации.",
  authors: [{ name: "РИКОМ" }],
  creator: "РИКОМ",
  publisher: "РИКОМ",
};

export const dynamic = "force-static";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <head>
        <link rel="icon" href="/favicon/favicon.ico" type="image/x-icon" />
        <link rel="icon" href="/favicon/favicon.svg" type="image/svg+xml" />
        <link
          rel="icon"
          href="/favicon/favicon-32x32.png"
          sizes="32x32"
          type="image/png"
        />
        <link
          rel="icon"
          href="/favicon/favicon-96x96.png"
          sizes="96x96"
          type="image/png"
        />
        <link rel="apple-touch-icon" href="/favicon/apple-touch-icon.png" />
        <meta name="copyright" content="РИКОМ, 2025" />
      </head>
      <body className={roboto.variable}>
        <Loader />
        <Header />
        {children}
      </body>
    </html>
  );
}
