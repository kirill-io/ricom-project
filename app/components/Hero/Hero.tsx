"use client";
import { useEffect, useState } from "react";
import styles from "./Hero.module.css";
import { images, items } from "./Hero.data";
import { ResponsiveImage } from "../ResponsiveImage/ResponsiveImage";

export const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideDuration = 7000;
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, slideDuration);

    return () => clearInterval(interval);
  }, []);

  if (!isMounted) {
    // На сервере ничего не рендерим — предотвращаем ошибку
    return null;
  }

  return (
    <section className={styles.hero}>
      {images.map((image, index) => (
        <div
          key={index}
          className={`${styles.slide} ${
            index === currentIndex ? styles.activeSlide : ""
          }`}
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
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.text}>
            <h1 className={styles.title}>
              Светодиодное освещение
              <br />
              для взрывоопасных производств
            </h1>
            <p className={styles.subtitle}>
              Сертифицированная лента RSD-Ex для безопасной эксплуатации в зонах
              с повышенной опасностью.
            </p>
          </div>
          <ul className={styles.list}>
            {items.map((item, index) => (
              <li
                className={`${styles.item} ${
                  index === currentIndex ? styles.activeItem : ""
                }`}
                key={index}
                style={{ animationDuration: `${slideDuration}ms` }}
              >
                <span
                  className={styles.progress}
                  style={{ animationDuration: `${slideDuration}ms` }}
                ></span>

                {/* Проверка на рендер компонента и его наличие */}
                {item.icon && <item.icon className={styles.icon} />}

                <span className={styles.itemText}>{item.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
