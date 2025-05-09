"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./Hero.module.css";
import { images, item } from "./Hero.data";

export const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [initialHeight, setInitialHeight] = useState("100vh");
  const slideDuration = 7000;

  const updateHeight = () => {
    if (window.innerWidth <= 1279) {
      setInitialHeight(`${window.innerHeight}px`);
    } else {
      setInitialHeight("100vh");
    }
  };

  useEffect(() => {
    updateHeight();
    window.addEventListener("resize", updateHeight);
    window.addEventListener("orientationchange", updateHeight);

    return () => {
      window.removeEventListener("resize", updateHeight);
      window.removeEventListener("orientationchange", updateHeight);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, slideDuration);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className={styles.hero} style={{ height: initialHeight }}>
      {images.map((image, index) => (
        <div
          key={index}
          className={`${styles.slide} ${
            index === currentIndex ? styles.activeSlide : ""
          }`}
        >
          <Image
            src={image}
            alt={`Слайд ${index + 1}`}
            className={styles.image}
            priority={index === 0}
            width={2560}
            height={1440}
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
