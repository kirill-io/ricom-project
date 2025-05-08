import { JSX } from "react";
import styles from "./Header.module.css";
import { Logo } from "../Logo/Logo";
import { LogoType } from "../Logo/Logo.props";
import { Menu } from "../Menu/Menu";
import { Contacts } from "../Contacts/Contacts";

export const Header = (): JSX.Element => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logoRow}>
          <Logo type={LogoType.PRIMARY} />
          <div className={styles.partners}>
            <Logo type={LogoType.KUZTECH} />
            <Logo type={LogoType.SKOLKOVO} />
          </div>
        </div>
        <div className={styles.menuRow}>
          <Menu />
        </div>
        <div className={styles.contactsRow}>
          <Contacts />
        </div>
      </div>
    </header>
  );
};
