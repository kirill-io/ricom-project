"use client";
import classNames from "classnames";
import styles from "./Application.module.css";
import { FC, HTMLAttributes } from "react";
import Image from "next/image";
import Container from "@/components/Container/Container";
import Title from "@/components/Title/Title";
import { application } from "./ApplicationData";
import { ApplicationItem } from "../ApplicationItem/ApplicationItem";

interface ApplicationProps extends HTMLAttributes<HTMLElement> {
  className?: string;
}

export const Application: FC<ApplicationProps> = ({ className, ...props }) => {
  return (
    <section className={classNames(styles.application, className)} {...props}>
      <Container className={styles.container}>
        <Title
          type="h2"
          className={styles.title}
          aria-label="Применение ленты RSD-Ex"
        >
          Применение ленты RSD-Ex
        </Title>
        <div className={styles.wrap}>
          <Image
            src={"/images/application/map.png"}
            alt="Контурная карта России."
            className={styles.image}
            width={1280}
            height={630}
          />
          <ul className={styles.list}>
            {application.map((item, i) => (
              <ApplicationItem
                key={i}
                src={item.src}
                alt={item.alt}
                text={item.text}
                className={styles[item.positionClass]}
              />
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
};
