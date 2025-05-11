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
