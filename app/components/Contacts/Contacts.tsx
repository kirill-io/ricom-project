import Link from "next/link";
import styles from "./Contacts.module.css";
import WhatsappImage from "./images/whatsapp-icon.svg";
import TelegramImage from "./images/telegram-icon.svg";

export const Contacts = () => {
  return (
    <ul className={styles.list}>
      <li className={styles.item}>
        <Link
          className={styles.link}
          href="https://wa.me/78005052898"
          target="_blank"
        >
          <WhatsappImage className={styles.image} />
        </Link>
      </li>
      <li className={styles.item}>
        <Link
          className={styles.link}
          href="https://t.me/+78005052898"
          target="_blank"
        >
          <TelegramImage className={styles.image} />
        </Link>
      </li>
      <li className={styles.item}>
        <Link className={styles.link} href="tel:+78005052898" target="_blank">
          +7 800 505-28-98
        </Link>
      </li>
    </ul>
  );
};
