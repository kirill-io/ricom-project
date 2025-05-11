"use client";
import Link from "next/link";
import Image from "next/image";
import styles from "./Contacts.module.css";
import { ContactsProps } from "./Contact.props";

export const Contacts = ({ phoneIcon, ...props }: ContactsProps) => {
  return (
    <ul className={styles.list} {...props}>
      <li className={styles.item}>
        <Link
          className={styles.link}
          href="https://wa.me/78005052898"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Написать в WhatsApp"
        >
          <Image
            src={"/images/contact/whatsapp-icon.svg"}
            alt="Иконка WhatsApp – нажмите для быстрой связи через мессенджер."
            className={styles.image}
            width={30}
            height={30}
            priority
          />
        </Link>
      </li>
      <li className={styles.item}>
        <Link
          className={styles.link}
          href="https://t.me/+78005052898"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Написать в Telegram"
        >
          <Image
            src={"/images/contact/telegram-icon.svg"}
            alt="Иконка Telegram – нажмите для быстрой связи через мессенджер."
            className={styles.image}
            width={30}
            height={30}
            priority
          />
        </Link>
      </li>
      <li className={styles.item}>
        <Link
          className={styles.link}
          href="tel:+78005052898"
          aria-label="Позвонить в РИКОМ по номеру +7 800 505-28-98"
        >
          {phoneIcon ? (
            <Image
              src={"/images/contact/phone-icon.svg"}
              alt="Иконка телефона – нажмите для быстрого звонка в РИКОМ."
              className={styles.image}
              width={30}
              height={30}
              priority
            />
          ) : (
            <>+7 800 505-28-98</>
          )}
        </Link>
      </li>
    </ul>
  );
};
