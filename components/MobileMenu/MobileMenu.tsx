"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import styles from "./MobileMenu.module.css";
import { Menu } from "../Menu/Menu";
import classNames from "classnames";
import { Logo } from "../Logo/Logo";
import { LogoType } from "../Logo/Logo.props";

export const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    closeMenu();
  }, [pathname]);

  return (
    <>
      <button
        className={classNames(styles.burger, {
          [styles.open]: isOpen === true,
        })}
        onClick={toggleMenu}
        aria-label={isOpen ? "Закрыть меню" : "Открыть меню"}
        aria-expanded={isOpen}
      >
        <span className={styles.line} />
        <span className={styles.line} />
        <span className={styles.line} />
      </button>
      <div
        className={classNames(styles.overlay, { [styles.show]: isOpen })}
        onClick={closeMenu}
      />
      <div className={classNames(styles.menu, { [styles.open]: isOpen })}>
        <div className={styles.menuContent}>
          <Menu className={styles.mobileMenu} />
          <div className={styles.logo}>
            <Logo type={LogoType.SKOLKOVO} />
            <Logo type={LogoType.KUZTECH} />
          </div>
        </div>
      </div>
    </>
  );
};
