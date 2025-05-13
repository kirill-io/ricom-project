"use client";
import { FC, HTMLAttributes, useEffect, useState } from "react";
import styles from "./Header.module.css";
import Logo from "../Logo/Logo";
import { LogoType } from "../Logo/LogoTypes";
import Menu from "../Menu/Menu";
import Contacts from "../Contacts/Contacts";
import { MOBILE_BREAKPOINT } from "./constants";
import MobileMenu from "../MobileMenu/MobileMenu";

interface HeaderProps extends HTMLAttributes<HTMLElement> {
  className?: string;
}

const Header: FC<HeaderProps> = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsMobile(window.innerWidth <= MOBILE_BREAKPOINT);

      const handleResize = () => {
        setIsMobile(window.innerWidth <= MOBILE_BREAKPOINT);
      };

      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logoRow}>
          <Logo type={LogoType.PRIMARY} />
          {!isMobile && (
            <div className={styles.partners}>
              <Logo type={LogoType.KUZTECH} />
              <Logo type={LogoType.SKOLKOVO} />
            </div>
          )}
          {isMobile && <MobileMenu />}
        </div>
        <div className={styles.menuRow}>{!isMobile && <Menu />}</div>
        <div className={styles.contactsRow}>
          <Contacts phoneIcon={isMobile} />
        </div>
      </div>
    </header>
  );
};

export default Header;
