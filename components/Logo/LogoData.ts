import { LogoType } from "./LogoTypes";
import styles from "./Logo.module.css";

export const logos: Record<
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
