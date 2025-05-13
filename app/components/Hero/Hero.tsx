"use client";
import { FC, HTMLAttributes, useEffect, useState } from "react";
import styles from "./Hero.module.css";
import { images, items } from "./Hero.data";
import ResponsiveImage from "../ResponsiveImage/ResponsiveImage";
import { SLIDE_DURATION } from "./constants";
import Button from "../../../components/Button/Button";
import { ButtonVariant } from "../../../components/Button/ButtonTypes";
import Title from "@/components/Title/Title";
import Subtitle from "@/components/Subtitle/Subtitle";
import Container from "@/components/Container/Container";

interface HeroProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
}

const Hero: FC<HeroProps> = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, SLIDE_DURATION);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className={styles.hero}
      aria-label="Главная секция — Светодиодное освещение для взрывоопасных производств"
    >
      {images.map((image, index) => (
        <div
          key={index}
          className={`${styles.slide} ${
            index === currentIndex ? styles.activeSlide : ""
          }`}
          aria-hidden={index !== currentIndex}
        >
          <ResponsiveImage
            desktopSrc={image.desktop}
            mobileSrc={image.mobile}
            alt={`Слайд ${index + 1}`}
            width={2560}
            height={1440}
            className={styles.image}
            priority={index === 0}
          />
        </div>
      ))}
      <div className={styles.overlay} />
      <Container className={styles.container}>
        <div className={styles.content}>
          <div className={styles.text}>
            <Title
              type="h1"
              className={styles.title}
              aria-label="Основной заголовок: Светодиодное освещение для взрывоопасных производств"
            >
              Светодиодное освещение
              <br />
              для взрывоопасных производств
            </Title>
            <Subtitle className={styles.subtitle}>
              Сертифицированная лента RSD-Ex для безопасной эксплуатации в зонах
              с повышенной опасностью.
            </Subtitle>
            <Button
              variant={ButtonVariant.PRIMARY}
              className={styles.button}
              type="button"
              aria-label="Оставить заявку на светодиодное освещение RSD-Ex"
            >
              Оставить заявку
            </Button>
          </div>
          <ul
            className={styles.list}
            aria-label="Преимущества светодиодной ленты RSD-Ex"
          >
            {items.map((item, index) => (
              <li
                className={`${styles.item} ${
                  index === currentIndex ? styles.activeItem : ""
                }`}
                key={index}
                style={{ animationDuration: `${SLIDE_DURATION}ms` }}
              >
                <span
                  className={styles.progress}
                  style={{ animationDuration: `${SLIDE_DURATION}ms` }}
                ></span>
                {item.icon && <item.icon className={styles.icon} />}
                <span className={styles.itemText}>{item.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
