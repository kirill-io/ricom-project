import { JSX } from "react";
import Link from "next/link";
import classNames from "classnames";
import { LogoProps, LogoType } from "./Logo.props";
import LogoPrimaryImage from "./images/logo-primary.svg";
import LogoSecondaryImage from "./images/logo-secondary.svg";
import LogoSkImage from "./images/logo-sk.svg";
import LogoKtImage from "./images/logo-kt.svg";
import styles from "./Logo.module.css";

export const Logo = ({ type }: LogoProps): JSX.Element => {
  const selectionLogo = (type: LogoType) => {
    switch (type) {
      case LogoType.PRIMARY:
        return <LogoPrimaryImage className={styles.image} />;
      case LogoType.SECONDARY:
        return <LogoSecondaryImage className={styles.image} />;
      case LogoType.SKOLKOVO:
        return <LogoSkImage className={styles.image} />;
      case LogoType.KUZTECH:
        return <LogoKtImage className={styles.image} />;
      default:
        return <></>;
    }
  };

  return (
    <Link
      href="/"
      className={classNames(styles.link, {
        [styles.logo]: type === LogoType.PRIMARY || type === LogoType.SECONDARY,
        [styles.skolkovo]: type === LogoType.SKOLKOVO,
        [styles.kuztech]: type === LogoType.KUZTECH,
      })}
    >
      {selectionLogo(type)}
    </Link>
  );
};
