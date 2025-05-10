"use client";
import Link from "next/link";
import Image from "next/image";
import classNames from "classnames";
import { LogoProps, LogoType } from "./Logo.props";
import styles from "./Logo.module.css";

const logos: Record<
  LogoType,
  {
    href: string;
    src: string;
    alt: string;
    width: number;
    height: number;
    className: string;
    target?: string;
  }
> = {
  [LogoType.PRIMARY]: {
    href: "/",
    src: "/images/logo/logo-primary.svg",
    alt: "Логотип РИКОМ.",
    width: 173,
    height: 35,
    className: styles.logo,
    target: undefined,
  },
  [LogoType.SECONDARY]: {
    href: "/",
    src: "/images/logo/logo-secondary.svg",
    alt: "Логотип РИКОМ.",
    width: 173,
    height: 35,
    className: styles.logo,
    target: undefined,
  },
  [LogoType.SKOLKOVO]: {
    href: "https://www.sk.ru/",
    src: "/images/logo/logo-sk.svg",
    alt: "Логотип инновационного центра Сколково.",
    width: 126,
    height: 35,
    className: styles.skolkovo,
    target: "_blank",
  },
  [LogoType.KUZTECH]: {
    href: "https://technopark42.ru/",
    src: "/images/logo/logo-kt.svg",
    alt: "Логотип Технопарка КузТех.",
    width: 61,
    height: 35,
    className: styles.kuztech,
    target: "_blank",
  },
};

export const Logo = ({ type, ...props }: LogoProps) => {
  const logo = logos[type];

  return (
    <Link
      href={logo.href}
      className={classNames(styles.link, logo.className)}
      target={logo.target}
      rel={logo.target ? "noopener noreferrer" : undefined}
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
