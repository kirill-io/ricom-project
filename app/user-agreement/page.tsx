import { Metadata } from "next";
import Link from "next/link";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Пользовательское соглашение – РИКОМ",
  description:
    "Пользовательское соглашение компании РИКОМ. Правила использования сайта, порядок взаимодействия с контентом, обработка персональных данных, права и обязанности сторон. Ознакомьтесь с условиями и юридическими положениями.",
  authors: [{ name: "РИКОМ" }],
  creator: "РИКОМ",
  publisher: "РИКОМ",
  robots: "noindex, follow",
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
