import Link from "next/link";
import { Metadata } from "next";
import styles from "./not-found.module.css";

export const metadata: Metadata = {
  title: "Страница не найдена – РИКОМ",
  description:
    "Извините, но запрашиваемая страница не найдена. Возможно, она была перемещена или удалена. Вернитесь на главную страницу, чтобы найти нужную информацию.",
  authors: [{ name: "РИКОМ" }],
  creator: "РИКОМ",
  publisher: "РИКОМ",
  robots: "noindex, follow",
};

export default function NotFound() {
  return (
    <main className={styles.page}>
      <article className={styles.container}>
        <h1 className={styles.title}>Страница не найдена</h1>
        <p className={styles.text}>
          К сожалению, запрашиваемая страница не существует или была удалена.
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
