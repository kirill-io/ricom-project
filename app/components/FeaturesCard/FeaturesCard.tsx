"use client";
import { FC, HTMLAttributes } from "react";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import classNames from "classnames";
import styles from "./FeaturesCard.module.css";
import useScrollAnimation from "@/hooks/useScrollAnimation";

interface FeaturesCardProps extends HTMLAttributes<HTMLLIElement> {
  className?: string;
  icon: string | StaticImport;
  title: string;
  alt: string;
  description: string;
}

export const FeaturesCard: FC<FeaturesCardProps> = ({
  className,
  icon,
  title,
  alt,
  description,
  ...props
}) => {
  const ref = useScrollAnimation<HTMLLIElement>(styles.visible);

  return (
    <li
      ref={ref}
      className={classNames(styles.featuresCard, className)}
      {...props}
    >
      <div className={styles.row}>
        <div className={styles.imageWrap}>
          <Image
            src={icon}
            alt={alt}
            width={60}
            height={60}
            className={styles.image}
          />
        </div>
        <h3 className={styles.title}>{title}</h3>
      </div>
      <p className={styles.description}>{description}</p>
    </li>
  );
};
