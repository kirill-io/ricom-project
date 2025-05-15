"use client";
import { FC, HTMLAttributes } from "react";
import classNames from "classnames";
import styles from "./Features.module.css";
import Container from "@/components/Container/Container";
import Title from "@/components/Title/Title";
import Subtitle from "@/components/Subtitle/Subtitle";
import { FeaturesCard } from "../FeaturesCard/FeaturesCard";
import { featuresData } from "./FeaturesData";

interface FeaturesProps extends HTMLAttributes<HTMLElement> {
  className?: string;
}

const Features: FC<FeaturesProps> = ({ className, ...props }) => {
  return (
    <section className={classNames(styles.features, className)} {...props}>
      <Container className={styles.container}>
        <div className={styles.titleWrap}>
          <Title
            type="h2"
            className={styles.title}
            aria-label="Основные преимущества RSD-Ex"
          >
            ОСНОВНЫЕ ПРЕИМУЩЕСТВА ленты RSD-Ex
          </Title>
          <Subtitle className={styles.subtitle}>
            Инновационные решения для безопасного и эффективного освещения
          </Subtitle>
        </div>
        <ul className={styles.list}>
          {featuresData.map((card, i) => (
            <FeaturesCard
              key={i}
              icon={card.icon}
              title={card.title}
              alt={card.alt}
              description={card.text}
            />
          ))}
        </ul>
      </Container>
    </section>
  );
};

export default Features;
