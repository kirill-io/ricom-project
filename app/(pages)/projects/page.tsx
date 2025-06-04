import { Metadata } from "next";
import styles from "./page.module.css";
import Projects from "./components/Projects/Projects";
import Letters from "./components/Letters/Letters";

export const metadata: Metadata = {
  title: "Наши проекты – светодиодная лента RSD-Ex на промышленных объектах",
  description:
    "Реализованные проекты компании РИКОМ по установке светодиодной ленты RSD-Ex на промышленных объектах. Доказанная эффективность, безопасность и надёжность в условиях взрывоопасных производств. Ознакомьтесь с примерами использования в различных отраслях: нефтепереработка, химическая промышленность, угольные шахты и другие.",
  authors: [{ name: "РИКОМ" }],
  creator: "РИКОМ",
  publisher: "РИКОМ",
};

export default function Home() {
  return (
    <main className={styles.page}>
      <Projects />
      <Letters />
    </main>
  );
}
