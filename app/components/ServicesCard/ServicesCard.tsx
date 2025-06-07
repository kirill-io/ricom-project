"use client";
import classNames from "classnames";
import styles from "./ServicesCard.module.css";
import { FC, HTMLAttributes } from "react";
import Title from "@/components/Title/Title";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import useScrollAnimation from "@/hooks/useScrollAnimation";

interface ServicesCardProps extends HTMLAttributes<HTMLLIElement> {
  className?: string;
  title: string;
  text: string;
  image: string | StaticImport;
  alt: string;
  type: string | undefined;
}

const ServicesCard: FC<ServicesCardProps> = ({
  className,
  title,
  text,
  image,
  alt,
  type,
  ...props
}) => {
  const ref = useScrollAnimation<HTMLLIElement>(styles.visible);

  return (
    <li
      className={classNames(
        styles.servicesCard,
        {
          [styles.left]: type === "left",
          [styles.right]: type === "right",
        },
        className
      )}
      ref={ref}
      {...props}
    >
      <div className={styles.imageWrap}>
        <Image
          src={image}
          alt={alt}
          width={80}
          height={80}
          className={styles.image}
        />
      </div>
      <div className={styles.textWrap}>
        <Title className={styles.title} type="h3" size="small">
          {title}
        </Title>
        <p className={styles.text}>{text}</p>
      </div>
      <div className={styles.arrowWrap}>
        {type === "left" && (
          <Image
            src="/images/services/arrow-right.svg"
            alt={alt}
            width={126}
            height={80}
            className={styles.imageArrow}
          />
        )}
        {type === "right" && (
          <Image
            src="/images/services/arrow-left.svg"
            alt={alt}
            width={126}
            height={80}
            className={styles.imageArrow}
          />
        )}
      </div>
    </li>
  );
};

export default ServicesCard;
