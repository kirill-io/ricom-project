"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./Hero.module.css";
import { images, item } from "./Hero.data";

export const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideDuration = 7000;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, slideDuration);

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
          <picture>
            <source
              srcSet={`${image.webp} 1x, ${image.webp2x} 2x`}
              type="image/webp"
            />
            <source
              srcSet={`${image.jpg} 1x, ${image.jpg2x} 2x`}
              type="image/jpeg"
            />
            <Image
              src={image.jpg}
              alt={`Slide ${index + 1}`}
              className={styles.image}
            />
          </picture>
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
        </div>
        <ul className={styles.list}>
          {item.map((item, index) => (
            <li
              className={`${styles.item} ${
                index === currentIndex ? styles.activeItem : ""
              }`}
              key={index}
            >
              <span
                className={styles.progress}
                style={{ animationDuration: `${slideDuration}ms` }}
              ></span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
