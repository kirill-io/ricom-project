import { Metadata } from "next";
import Link from "next/link";
import styles from "./page.module.css";

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
      <article className={styles.container}>
        <h1 className={styles.title}>Наш сайт в процессе обновления</h1>
        <p className={styles.text}>
          Мы работаем над улучшением нашего сайта. Скоро он станет ещё лучше!
          Спасибо за ваше терпение.
        </p>
        <nav className={styles.nav}>
          <Link
            href="/"
            className={styles.link}
            aria-label="Перейти на главную страницу"
          >
            На главную
          </Link>
        </nav>
      </article>
    </main>
  );
}
