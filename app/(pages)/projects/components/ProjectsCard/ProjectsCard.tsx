"use client";
import classNames from "classnames";
import Image from "next/image";
import styles from "./ProjectsCard.module.css";
import { FC, HTMLAttributes } from "react";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import useScrollAnimation from "@/hooks/useScrollAnimation";

interface ProjectsCardProps extends HTMLAttributes<HTMLLIElement> {
  className?: string;
  image: string | StaticImport;
  title: string;
  alt: string;
  text: string;
}

export const ProjectsCard: FC<ProjectsCardProps> = ({
  className,
  image,
  title,
  alt,
  text,
  ...props
}) => {
  const ref = useScrollAnimation<HTMLLIElement>(styles.visible);

  return (
    <li
      className={classNames(styles.projectsCard, className)}
      ref={ref}
      {...props}
    >
      <div className={styles.imageWrap}>
        <Image
          src={image}
          alt={alt}
          width={592}
          height={420}
          className={styles.image}
        />
      </div>
      <div className={styles.textWrap}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{text}</p>
      </div>
    </li>
  );
};
