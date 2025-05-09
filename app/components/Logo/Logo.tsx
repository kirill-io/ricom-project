import Link from "next/link";
import classNames from "classnames";
import { LogoProps, LogoType } from "./Logo.props";
import LogoPrimaryImage from "./images/logo-primary.svg";
import LogoSecondaryImage from "./images/logo-secondary.svg";
import LogoSkImage from "./images/logo-sk.svg";
import LogoKtImage from "./images/logo-kt.svg";
import styles from "./Logo.module.css";

export const Logo = ({ type }: LogoProps) => {
  const selectionLogo = (type: LogoType) => {
    switch (type) {
      case LogoType.PRIMARY:
        return (
          <Link href="/" className={classNames(styles.link, styles.logo)}>
            <LogoPrimaryImage className={styles.image} />
          </Link>
        );
      case LogoType.SECONDARY:
        return (
          <Link href="/" className={classNames(styles.link, styles.logo)}>
            <LogoSecondaryImage className={styles.image} />
          </Link>
        );
      case LogoType.SKOLKOVO:
        return (
          <Link
            href="https://www.sk.ru/"
            className={classNames(styles.link, styles.skolkovo)}
            target="_blank"
          >
            <LogoSkImage className={styles.image} />
          </Link>
        );
      case LogoType.KUZTECH:
        return (
          <Link
            href="https://technopark42.ru/"
            className={classNames(styles.link, styles.kuztech)}
            target="_blank"
          >
            <LogoKtImage className={styles.image} />
          </Link>
        );
      default:
        return <></>;
    }
  };

  return selectionLogo(type);
};
