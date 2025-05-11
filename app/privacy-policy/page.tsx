import { Metadata } from "next";
import Link from "next/link";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Политика конфиденциальности – РИКОМ",
  description:
    "Политика конфиденциальности компании РИКОМ. Информация об обработке, хранении и защите персональных данных пользователей в соответствии с законодательством РФ (ФЗ-152). Узнайте, какие данные собираются, как они используются и защищаются.",
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
