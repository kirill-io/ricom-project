import { JSX } from "react";
import Link from "next/link";
import { LogoProps, LogoType } from "./Logo.props";
import LogoPrimaryImage from "./images/logo-primary.svg";
import LogoSecondaryImage from "./images/logo-secondary.svg";
import styles from "./Logo.module.css";

export const Logo = ({ type }: LogoProps): JSX.Element => {
  return (
    <Link href="/" className={styles.link}>
      {type === LogoType.PRIMARY && (
        <LogoPrimaryImage className={styles.logo} />
      )}
      {type === LogoType.SECONDARY && (
        <LogoSecondaryImage className={styles.logo} />
      )}
    </Link>
  );
};
