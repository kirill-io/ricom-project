"use client";
import Link from "next/link";
import { Logo } from "../Logo/Logo";
import { LogoType } from "../Logo/Logo.props";
import styles from "./Footer.module.css";
import { SocialLink } from "../SocialLink/SocialLink";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.row}>
          <Logo type={LogoType.PRIMARY} />
          <p className={styles.slogan}>
            Освещение для взрывоопасных производств.
            <br />
            Надежно, эффективно, безопасно.
          </p>
        </div>
        <div className={styles.row}>
          <address className={styles.adress}>
            <span className={styles.adressRow}>ООО «РИКОМ»</span>
            <span className={styles.adressText}>
              650002, Кемеровская область, г Кемерово,
              <br />
              б-р Имени Академика Л.С. Барбараша,
              <br />
              зд. 1, помещ. 208
            </span>
            <span className={styles.adressRow}>
              Пн – Пт, с 10:00 до 19:00 (МСК)
            </span>
            <Link
              className={styles.link}
              href="tel:+78005052898"
              aria-label="Позвонить в РИКОМ по номеру +7 800 505-28-98"
            >
              +7 800 505-28-98
            </Link>
            <Link
              className={styles.link}
              href="mailto:test@example.com"
              aria-label="Отправить письмо на электронную почту test@example.com"
            >
              test@example.com
            </Link>
          </address>
          <nav className={styles.socialLink} aria-label="Социальные сети">
            <SocialLink />
          </nav>
        </div>
        <div className={styles.row}>
          <nav className={styles.legal} aria-label="Юридическая информация">
            <ul className={styles.legalLinks}>
              <li className={styles.legalItem}>
                <Link
                  className={styles.link}
                  href="/privacy-policy"
                  aria-label="Открыть Политику конфиденциальности компании РИКОМ"
                >
                  Политика конфиденциальности
                </Link>
              </li>
              <li className={styles.legalItem}>
                <Link
                  className={styles.link}
                  href="/user-agreement"
                  aria-label="Открыть Пользовательское соглашение компании РИКОМ"
                >
                  Пользовательское соглашение
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className={styles.row}>
          <p className={styles.copyright}>© 2025 ООО «РИКОМ»</p>
        </div>
      </div>
    </footer>
  );
};
