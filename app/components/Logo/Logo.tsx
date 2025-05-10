"use client";
import Link from "next/link";
import Image from "next/image";
import classNames from "classnames";
import { LogoProps, LogoType } from "./Logo.props";
import styles from "./Logo.module.css";

export const Logo = ({ type }: LogoProps) => {
  const selectionLogo = (type: LogoType) => {
    switch (type) {
      case LogoType.PRIMARY:
        return (
          <Link href="/" className={classNames(styles.link, styles.logo)}>
            <Image
              src={"/images/logo/logo-primary.svg"}
              alt="Логотип РИКОМ."
              className={styles.image}
              width={173}
              height={35}
              priority
            />
          </Link>
        );
      case LogoType.SECONDARY:
        return (
          <Link href="/" className={classNames(styles.link, styles.logo)}>
            <Image
              src={"/images/logo/logo-secondary.svg"}
              alt="Логотип РИКОМ."
              className={styles.image}
              width={173}
              height={35}
              priority
            />
          </Link>
        );
      case LogoType.SKOLKOVO:
        return (
          <Link
            href="https://www.sk.ru/"
            className={classNames(styles.link, styles.skolkovo)}
            target="_blank"
          >
            <Image
              src={"/images/logo/logo-sk.svg"}
              alt="Логотип инновационного центра Сколково."
              className={styles.image}
              width={126}
              height={35}
              priority
            />
          </Link>
        );
      case LogoType.KUZTECH:
        return (
          <Link
            href="https://technopark42.ru/"
            className={classNames(styles.link, styles.kuztech)}
            target="_blank"
          >
            <Image
              src={"/images/logo/logo-kt.svg"}
              alt="Логотип Технопарка КузТех."
              className={styles.image}
              width={61}
              height={35}
              priority
            />
          </Link>
        );
      default:
        return <></>;
    }
  };

  return selectionLogo(type);
};
