"use client";
import Link from "next/link";
import Image from "next/image";
import styles from "./Menu.module.css";
import classNames from "classnames";
import { MenuProps } from "./Menu.props";

export const Menu = ({ className, ...props }: MenuProps) => {
  return (
    <nav className={classNames(styles.menu, className)} {...props}>
      <menu className={styles.list}>
        <li className={styles.item}>
          <Link
            href="."
            className={styles.link}
            aria-label="Перейти на главную страницу"
          >
            Главная
          </Link>
        </li>
        <li className={styles.item}>
          <Link
            href="/technology"
            className={styles.link}
            aria-label="Узнать о технологии"
          >
            О Технологии
          </Link>
        </li>
        <li className={styles.item}>
          <Link
            href="/projects"
            className={styles.link}
            aria-label="Просмотреть реализованные проекты"
          >
            Наши Проекты
          </Link>
        </li>
        <li className={styles.item}>
          <Link
            href="/catalog"
            className={styles.link}
            aria-label="Перейти в каталог товаров"
          >
            Каталог
          </Link>
        </li>
        <li className={styles.item}>
          <Link
            href="/documentation"
            className={styles.link}
            aria-label="Открыть документацию"
          >
            Документация
          </Link>
        </li>
        <li className={styles.item}>
          <Link
            href="/blog"
            className={styles.link}
            aria-label="Читать блог компании"
          >
            Блог
          </Link>
        </li>
        <li className={styles.item}>
          <Link
            href="/contacts"
            className={styles.link}
            aria-label="Перейти на страницу контактов компании"
          >
            Контакты
          </Link>
        </li>
        <li className={styles.item}>
          <Link
            href="/cart"
            className={styles.link}
            aria-label="Перейти в корзину для проверки и оформления заказов"
          >
            <Image
              src={"/images/menu/cart-icon.svg"}
              alt="Иконка корзины – быстрый доступ к оформлению и проверке заказов."
              className={styles.image}
              width={43}
              height={35}
              priority
            />
          </Link>
        </li>
      </menu>
    </nav>
  );
};
