"use client";
import Link from "next/link";
import Image from "next/image";
import classNames from "classnames";
import { LogoType } from "./LogoTypes";
import styles from "./Logo.module.css";
import { AnchorHTMLAttributes, DetailedHTMLProps, FC } from "react";
import { logos } from "./LogoData";

interface LogoProps
  extends DetailedHTMLProps<
    AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  > {
  type: LogoType;
  className?: string;
}

const Logo: FC<LogoProps> = ({ type, ...props }) => {
  const logo = logos[type];

  return (
    <Link
      href={logo.href}
      className={classNames(styles.link, logo.className)}
      target={logo.target}
      rel={logo.target ? "noopener noreferrer" : undefined}
      aria-label={
        logo.target
          ? `Перейти на сайт ${logo.alt.replace("Логотип ", "")}`
          : "Перейти на главную страницу"
      }
      {...props}
    >
      <Image
        src={logo.src}
        alt={logo.alt}
        className={styles.image}
        width={logo.width}
        height={logo.height}
        priority
      />
    </Link>
  );
};

export default Logo;
