"use client";
import { FC, HTMLAttributes } from "react";
import Image from "next/image";
import styles from "./BestChoice.module.css";
import classNames from "classnames";
import Container from "@/components/Container/Container";
import Title from "@/components/Title/Title";
import Subtitle from "@/components/Subtitle/Subtitle";
import { comparisonDataOne, comparisonDataTwo } from "./BestChoiceData";
import BestChoiceItem from "../BestChoiceItem/BestChoiceItem";

interface BestChoiceProps extends HTMLAttributes<HTMLElement> {
  className?: string;
}

const BestChoice: FC<BestChoiceProps> = ({ className }) => {
  return (
    <section className={classNames(styles.bestChoice, className)}>
      <Container className={styles.container}>
        <div className={styles.textWrap}>
          <Title
            type="h2"
            size="normal"
            className={styles.title}
            aria-label="Почему RSD-Ex — лучший выбор для освещения опасных производств?"
          >
            Почему RSD-Ex — лучший выбор для освещения опасных производств?
          </Title>
          <Subtitle className={styles.text} size="small">
            Светодиодная лента RSD-Ex — это сочетание долговечности,
            энергоэффективности и устойчивости к агрессивным условиям. Она
            обеспечивает безопасное и стабильное освещение на протяжении всего
            срока службы, минимизируя эксплуатационные расходы.
          </Subtitle>
          <div className={styles.textContainer}>
            <Title
              type="h4"
              size="small"
              className={styles.textTitle}
              aria-label="Преимущества светодиодной ленты PB Ex по сравнению с шахтным светильником PB 127В:"
            >
              Преимущества светодиодной ленты PB Ex по сравнению с шахтным
              светильником PB 127В:
            </Title>
            <ul className={styles.list}>
              {comparisonDataOne.map((item, i) => (
                <BestChoiceItem key={i}>{item}</BestChoiceItem>
              ))}
            </ul>
          </div>
          <Title
            type="h3"
            size="normal"
            className={styles.title}
            aria-label="Энергоэффективность и долговечность светодиодной ленты RSD-Ex"
          >
            Энергоэффективность и долговечность светодиодной ленты RSD-Ex
          </Title>
          <Subtitle className={styles.text} size="small">
            Светодиодные ленты RSD-Ex обеспечивают значительно более высокий
            срок службы и минимальные потери яркости по сравнению с
            традиционными источниками света. Это позволяет существенно сократить
            расходы на обслуживание и замену осветительных приборов, а также
            снизить энергопотребление в промышленных условиях.
          </Subtitle>
          <div className={styles.textContainer}>
            <Title
              type="h4"
              size="small"
              className={styles.textTitle}
              aria-label="Преимущества RSD-Ex в сравнении с традиционными источниками света:"
            >
              Преимущества RSD-Ex в сравнении с традиционными источниками света:
            </Title>
            <ul className={styles.list}>
              {comparisonDataTwo.map((item, i) => (
                <BestChoiceItem key={i}>{item}</BestChoiceItem>
              ))}
            </ul>
          </div>
        </div>
        <div className={styles.imageWrap}>
          <div className={styles.imageContainer}>
            <Image
              src={"/images/bestChoice/bestChoice-image.jpg"}
              alt="Светодиодная лента RSD-Ex с ярким холодным белым свечением в защитной оболочке, уложенная в кольцо на металлической поверхности."
              className={styles.image}
              width={626}
              height={939}
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default BestChoice;
