"use client";
import { useEffect, useState } from "react";
import styles from "./Header.module.css";
import { Logo } from "../Logo/Logo";
import { LogoType } from "../Logo/Logo.props";
import { Menu } from "../Menu/Menu";
import { Contacts } from "../Contacts/Contacts";
import { MOBILE_BREAKPOINT } from "./constants";

export const Header = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    setIsMobile(window.innerWidth <= MOBILE_BREAKPOINT);

    const handleResize = () => {
      setIsMobile(window.innerWidth <= MOBILE_BREAKPOINT);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!isMounted) {
    return null;
  }

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
        </div>
        <div className={styles.menuRow}>{!isMobile && <Menu />}</div>
        <div className={styles.contactsRow}>
          <Contacts phoneIcon={isMobile} />
        </div>
      </div>
    </header>
  );
};
