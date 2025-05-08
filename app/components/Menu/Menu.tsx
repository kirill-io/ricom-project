import Link from "next/link";
import styles from "./Menu.module.css";
import СartImage from "./cart-icon.svg";

export const Menu = () => {
  return (
    <div className={styles.menu}>
      <menu className={styles.list}>
        <li className={styles.item}>
          <Link href="" className={styles.link}>
            Главная
          </Link>
        </li>
        <li className={styles.item}>
          <Link href="" className={styles.link}>
            О Технологии
          </Link>
        </li>
        <li className={styles.item}>
          <Link href="" className={styles.link}>
            Наши Проекты
          </Link>
        </li>
        <li className={styles.item}>
          <Link href="" className={styles.link}>
            Каталог
          </Link>
        </li>
        <li className={styles.item}>
          <Link href="" className={styles.link}>
            Документация
          </Link>
        </li>
        <li className={styles.item}>
          <Link href="" className={styles.link}>
            Блог
          </Link>
        </li>
        <li className={styles.item}>
          <Link href="" className={styles.link}>
            <СartImage className={styles.image} />
          </Link>
        </li>
      </menu>
    </div>
  );
};
