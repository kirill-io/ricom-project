"use client";
import classNames from "classnames";
import styles from "./ConstructionFeatures.module.css";
import { FC, HTMLAttributes } from "react";
import Container from "@/components/Container/Container";
import Title from "@/components/Title/Title";
import Subtitle from "@/components/Subtitle/Subtitle";
import useScrollAnimation from "@/hooks/useScrollAnimation";
import { ConstructionFeaturesImage } from "../ConstructionFeaturesImage/ConstructionFeaturesImage";
import { images } from "./ConstructionFeatures.data";

interface ConstructionFeaturesProps extends HTMLAttributes<HTMLElement> {
  className?: string;
}

export const ConstructionFeatures: FC<ConstructionFeaturesProps> = ({
  className,
}: ConstructionFeaturesProps) => {
  const leftImageRef = useScrollAnimation<HTMLDivElement>(styles.visibleLeft);
  const centerImageRef = useScrollAnimation<HTMLDivElement>(
    styles.visibleCenter
  );
  const rightImageRef = useScrollAnimation<HTMLDivElement>(styles.visibleRight);

  return (
    <section className={classNames(styles.constructionFeatures, className)}>
      <Container className={styles.container}>
        <Title
          type="h2"
          className={styles.title}
          aria-label="Конструктивные особенности ленты RSD-Ex"
        >
          Конструктивные особенности ленты RSD-Ex
        </Title>
        <Subtitle className={styles.subtitle}>
          Подробное устройство ленты RSD-Ex, обеспечивающее надежность,
          безопасность и долговечность при эксплуатации в опасных зонах.
        </Subtitle>

        <div className={styles.imageWrap}>
          <div
            className={classNames(
              styles.imageContainer,
              styles.imageContainerLeft
            )}
            ref={leftImageRef}
          >
            <ConstructionFeaturesImage
              desktopSrc={images[0].desktop}
              tabletSrc={images[0].tablet}
              mobileSrc={images[0].mobile}
              alt={""}
              width={1600}
              height={350}
              quality={90}
              className={classNames(styles.image, styles.imageLeft)}
            />
          </div>
        </div>

        <div className={styles.imageWrap}>
          <div
            className={classNames(
              styles.imageContainer,
              styles.imageContainerCenter
            )}
            ref={centerImageRef}
          >
            <ConstructionFeaturesImage
              desktopSrc={images[1].desktop}
              tabletSrc={images[1].tablet}
              mobileSrc={images[1].mobile}
              alt={""}
              width={1600}
              height={350}
              quality={90}
              className={classNames(styles.image)}
            />
          </div>
        </div>

        <div className={styles.imageWrap}>
          <div
            className={classNames(
              styles.imageContainer,
              styles.imageContainerRight
            )}
            ref={rightImageRef}
          >
            <ConstructionFeaturesImage
              desktopSrc={images[2].desktop}
              tabletSrc={images[2].tablet}
              mobileSrc={images[2].mobile}
              alt={""}
              width={1600}
              height={350}
              quality={90}
              className={classNames(styles.image, styles.imageRight)}
            />
          </div>
        </div>
      </Container>
    </section>
  );
};
