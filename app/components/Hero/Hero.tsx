"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "./Hero.module.css";
import { images, items } from "./Hero.data";
import { ResponsiveImage } from "../ResponsiveImage/ResponsiveImage";
import { SLIDE_DURATION } from "./constants";

export const Hero = () => {
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
                style={{ animationDuration: `${SLIDE_DURATION}ms` }}
              >
                <span
                  className={styles.progress}
                  style={{ animationDuration: `${SLIDE_DURATION}ms` }}
                ></span>
                <Image
                  src={item.icon}
                  alt={item.text}
                  className={styles.icon}
                  width={40}
                  height={40}
                  priority
                />
                <span className={styles.itemText}>{item.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
