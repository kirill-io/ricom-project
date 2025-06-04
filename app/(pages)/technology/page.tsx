import { Metadata } from "next";
import styles from "./page.module.css";
import Video from "./components/Video/Video";

export const metadata: Metadata = {
  title: "Технология светодиодной ленты RSD-Ex – РИКОМ",
  description:
    "Технология светодиодной ленты RSD-Ex от компании РИКОМ. Высокая степень защиты, энергоэффективность и безопасность в опасных производственных зонах. Сертифицировано по ГОСТ и ТР ТС 012/2011.",
  authors: [{ name: "РИКОМ" }],
  creator: "РИКОМ",
  publisher: "РИКОМ",
};

export default function Home() {
  return (
    <main className={styles.page}>
      <Video />
    </main>
  );
}
