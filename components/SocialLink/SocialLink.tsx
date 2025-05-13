import Link from "next/link";
import Image from "next/image";
import styles from "./SocialLink.module.css";
import { FC, HTMLAttributes } from "react";

interface SocialLinkProps extends HTMLAttributes<HTMLUListElement> {
  className?: string;
}

const SocialLink: FC<SocialLinkProps> = () => {
  return (
    <ul className={styles.socialLink}>
      <li>
        <Link
          className={styles.link}
          href="https://wa.me/78005052898"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Написать в WhatsApp"
        >
          <Image
            src={"/images/socialLink/whatsapp-icon.svg"}
            alt="Иконка WhatsApp – нажмите для быстрой связи через мессенджер."
            className={styles.image}
            width={40}
            height={40}
          />
        </Link>
      </li>
      <li>
        <Link
          className={styles.link}
          href="https://t.me/+78005052898"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Написать в Telegram"
        >
          <Image
            src={"/images/socialLink/telegram-icon.svg"}
            alt="Иконка Telegram – нажмите для быстрой связи через мессенджер."
            className={styles.image}
            width={40}
            height={40}
          />
        </Link>
      </li>
      <li>
        <Link
          className={styles.link}
          href="https://vk.com/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Перейти в группу ВКонтакте"
        >
          <Image
            src={"/images/socialLink/vk-icon.svg"}
            alt="Иконка ВКонтакте – перейти в группу компании."
            className={styles.image}
            width={40}
            height={40}
          />
        </Link>
      </li>
      <li>
        <Link
          className={styles.link}
          href="https://dzen.ru/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Перейти на страницу компании в Яндекс Дзен"
        >
          <Image
            src={"/images/socialLink/dzen-icon.svg"}
            alt="Иконка Яндекс Дзен – перейти на страницу компании."
            className={styles.image}
            width={40}
            height={40}
          />
        </Link>
      </li>
    </ul>
  );
};

export default SocialLink;
