"use client";
import { FC, HTMLAttributes } from "react";
import styles from "./Services.module.css";
import classNames from "classnames";
import Container from "@/components/Container/Container";
import Title from "@/components/Title/Title";
import Subtitle from "@/components/Subtitle/Subtitle";
import { servicesData } from "./ServicesData";
import ServicesCard from "../ServicesCard/ServicesCard";

interface ServicesProps extends HTMLAttributes<HTMLElement> {
  className?: string;
}

const Services: FC<ServicesProps> = ({ className, ...props }) => {
  return (
    <section className={classNames(styles.services, className)} {...props}>
      <Container className={styles.container}>
        <div className={styles.titleWrap}>
          <Title
            type="h2"
            className={styles.title}
            aria-label="Сервисы компании РИКОМ"
          >
            Сервисы компании риком
          </Title>
          <Subtitle className={styles.subtitle}>
            Мы сопровождаем проекты на всех стадиях — от идеи до технической
            поддержки на объекте
          </Subtitle>
        </div>
        <ul className={styles.list}>
          {servicesData.map((card, i) => (
            <ServicesCard
              key={i}
              title={card.title}
              text={card.text}
              image={card.image}
              alt={card.alt}
              type={card.type}
            />
          ))}
        </ul>
      </Container>
    </section>
  );
};

export default Services;
