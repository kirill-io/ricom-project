import { Metadata } from "next";
import Link from "next/link";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Контакты – светодиодная лента RSD-Ex от РИКОМ",
  description:
    "Контактная информация компании РИКОМ: телефоны, email, адрес и рабочие часы. Свяжитесь с нами для консультаций, получения коммерческих предложений и уточнения условий сотрудничества. Встроенная карта и юридическая информация для удобства взаимодействия.",
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
