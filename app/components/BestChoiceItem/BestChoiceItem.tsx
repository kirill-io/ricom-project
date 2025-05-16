"use client";
import Image from "next/image";
import classNames from "classnames";
import styles from "./BestChoiceItem.module.css";
import { FC, HTMLAttributes } from "react";
import useScrollAnimation from "@/hooks/useScrollAnimation";

interface BestChoiceItemProps extends HTMLAttributes<HTMLLIElement> {
  className?: string;
  children: string;
}

const BestChoiceItem: FC<BestChoiceItemProps> = ({ className, children }) => {
  const ref = useScrollAnimation<HTMLLIElement>(styles.visible);

  return (
    <li className={classNames(styles.bestChoiceItem, className)} ref={ref}>
      <Image
        src="/images/bestChoiceItem/led-icon.svg"
        alt="Иконка SMD светодиода с четырьмя выводами, выполненная в минималистичном синем стиле."
        width={25}
        height={25}
        className={styles.image}
      />
      <span className={styles.text}>{children}</span>
    </li>
  );
};

export default BestChoiceItem;
