"use client";
import { FC, HTMLAttributes } from "react";
import Image from "next/image";
import styles from "./TechnicalSpecifications.module.css";
import classNames from "classnames";
import Container from "@/components/Container/Container";
import Title from "@/components/Title/Title";

interface TechnicalSpecificationsProps extends HTMLAttributes<HTMLElement> {
  className?: string;
}

const TechnicalSpecifications: FC<TechnicalSpecificationsProps> = ({
  className,
}: TechnicalSpecificationsProps) => {
  return (
    <section className={classNames(styles.technicalSpecifications, className)}>
      <Container className={styles.container}>
        <div className={styles.imageWrap}>
          <div className={styles.imageContainer}>
            <Image
              src={"/images/technicalSpecifications/led.jpg"}
              alt="Технические характеристики – выключено."
              className={styles.image}
              width={620}
              height={295}
            />
          </div>
        </div>
        <div className={styles.textWrap}>
          <Title
            type="h2"
            className={styles.title}
            aria-label="Характеристики ленты RSD-Ex"
          >
            Характеристики ленты RSD-Ex
          </Title>
          <div className={styles.row}>
            <h3 className={styles.rowTitle}>
              Варианты исполнения для RSD-EX-ma, RSD-EX-mb:
            </h3>
            <ul className={styles.list}>
              <li className={styles.item}>РО Ех mа I Ma Х</li>
              <li className={styles.item}>0Ех mа IIC T5 Ga X</li>
              <li className={styles.item}>РВ Ex mb I Mb X</li>
              <li className={styles.item}>1Ex mb IIC Т5 Gb X</li>
            </ul>
          </div>
          <div className={classNames(styles.row, styles.line)}>
            <h3 className={styles.rowTitle}>Напряжение:</h3>
            <ul className={styles.list}>
              <li className={styles.item}>24В DC</li>
              <li className={styles.item}>36В DC</li>
              <li className={styles.item}>127В AC</li>
              <li className={styles.item}>220В AC</li>
            </ul>
          </div>
          <div className={classNames(styles.row, styles.line)}>
            <h3 className={styles.rowTitle}>Цветовая температура:</h3>
            <ul className={styles.list}>
              <li className={styles.item}>4500K - 5500K</li>
            </ul>
          </div>
          <div className={classNames(styles.row, styles.line)}>
            <h3 className={styles.rowTitle}>Цвет свечения:</h3>
            <ul className={styles.list}>
              <li className={styles.item}>Белый = W.</li>
              <li className={styles.item}>Красный = R.</li>
              <li className={styles.item}>Зеленый = G.</li>
              <li className={styles.item}>Желтый = Y.</li>
            </ul>
          </div>
          <div className={classNames(styles.row, styles.line)}>
            <h3 className={styles.rowTitle}>Мощность:</h3>
            <ul className={styles.list}>
              <li className={styles.item}>12 Вт/м при R.G.Y.</li>
              <li className={styles.item}>15 Вт/м при W.</li>
            </ul>
          </div>
          <div className={classNames(styles.row, styles.line)}>
            <h3 className={styles.rowTitle}>Световой поток:</h3>
            <ul className={styles.list}>
              <li className={styles.item}>576 Лм/м при R.Y.</li>
              <li className={styles.item}>960 Лм/м при G.</li>
              <li className={styles.item}>1170 Лм/м при W</li>
            </ul>
          </div>
          <div className={classNames(styles.row, styles.line)}>
            <h3 className={styles.rowTitle}>Количество светодиодов:</h3>
            <ul className={styles.list}>
              <li className={styles.item}>60 шт/м при 24В</li>
              <li className={styles.item}>72 шт/м при 36В</li>
              <li className={styles.item}>72 шт/м при 127В</li>
              <li className={styles.item}>72 шт/м при 220В</li>
            </ul>
          </div>
          <div className={classNames(styles.row, styles.line)}>
            <h3 className={styles.rowTitle}>Температура окружающей среды:</h3>
            <ul className={styles.list}>
              <li className={styles.item}>от -40 до +40 °С</li>
            </ul>
          </div>
          <div className={classNames(styles.row, styles.line)}>
            <h3 className={styles.rowTitle}>
              Степень защиты от внешних воздействий:
            </h3>
            <ul className={styles.list}>
              <li className={styles.item}>IP68</li>
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default TechnicalSpecifications;
