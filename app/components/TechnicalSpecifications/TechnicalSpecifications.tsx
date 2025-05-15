"use client";
import { FC, HTMLAttributes } from "react";
import Image from "next/image";
import styles from "./TechnicalSpecifications.module.css";
import classNames from "classnames";
import Container from "@/components/Container/Container";
import Title from "@/components/Title/Title";
import { technicalSpecificationsData } from "./TechnicalSpecificationsData";
import TechnicalSpecificationsItem from "../TechnicalSpecificationsItem/TechnicalSpecificationsItem";

interface TechnicalSpecificationsProps extends HTMLAttributes<HTMLElement> {
  className?: string;
}

const TechnicalSpecifications: FC<TechnicalSpecificationsProps> = ({
  className,
  ...props
}: TechnicalSpecificationsProps) => {
  return (
    <section
      className={classNames(styles.technicalSpecifications, className)}
      {...props}
    >
      <Container className={styles.container}>
        <div className={styles.imageWrap}>
          <div className={styles.imageContainer}>
            <Image
              src={"/images/technicalSpecifications/led.jpg"}
              alt="Светодиодная лента RSD-Ex с ярким холодным белым свечением в защитной оболочке, уложенная в кольцо на металлической поверхности."
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
          {technicalSpecificationsData.map((item, i) => (
            <TechnicalSpecificationsItem
              key={i}
              title={item.title}
              list={item.list}
              line={item.line}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default TechnicalSpecifications;
