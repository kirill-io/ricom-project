import { roboto } from "../fonts/fonts";
import "./globals.css";
import { Loader } from "./Loader";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <head>
        <link
          rel="icon"
          href="/images/favicon/favicon.ico"
          type="image/x-icon"
        />
        <link
          rel="icon"
          href="/images/favicon/favicon.svg"
          type="image/svg+xml"
        />
        <link
          rel="icon"
          href="/images/favicon/favicon-32x32.png"
          sizes="32x32"
          type="image/png"
        />
        <link
          rel="icon"
          href="/images/favicon/favicon-96x96.png"
          sizes="96x96"
          type="image/png"
        />
        <link
          rel="apple-touch-icon"
          href="/images/favicon/apple-touch-icon.png"
        />
        <meta name="copyright" content="РИКОМ, 2025" />
      </head>
      <body className={roboto.variable}>
        <Loader />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
