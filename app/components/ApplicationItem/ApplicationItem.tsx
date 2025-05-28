"use client";
import classNames from "classnames";
import styles from "./ApplicationItem.module.css";
import { FC, HTMLAttributes } from "react";
import Image from "next/image";
import useScrollAnimation from "@/hooks/useScrollAnimation";

interface ApplicationItemProps extends HTMLAttributes<HTMLLIElement> {
  src: string;
  alt: string;
  text: string;
  className?: string;
}

export const ApplicationItem: FC<ApplicationItemProps> = ({
  className,
  src,
  alt,
  text,
  ...props
}) => {
  const ref = useScrollAnimation<HTMLLIElement>(styles.visible);

  return (
    <li
      className={classNames(styles.applicationitem, className)}
      ref={ref}
      {...props}
    >
      <Image
        src={src}
        alt={alt}
        className={styles.image}
        width={60}
        height={60}
      />
      <span className={styles.text}>{text}</span>
    </li>
  );
};
