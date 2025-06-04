"use client";
import classNames from "classnames";
import styles from "./Letters.module.css";
import { FC, HTMLAttributes, useEffect, useState } from "react";
import NextImage from "next/image";
import Container from "@/components/Container/Container";
import Title from "@/components/Title/Title";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";
import { letters } from "./LettersData";

interface LettersProps extends HTMLAttributes<HTMLElement> {
  className?: string;
}

const Letters: FC<LettersProps> = ({ className }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  useEffect(() => {
    letters.forEach((letter) => {
      const img = new window.Image();
      img.src = letter.src;
    });
  }, []);

  const handleOpenModal = (index: number) => {
    setSelectedIndex(index);
    setIsOpen(true);
  };

  return (
    <section className={classNames(styles.letters, className)}>
      <Container className={styles.container}>
        <Title
          type="h2"
          className={styles.title}
          aria-label="Благодарственные письма."
        >
          Благодарственные письма
        </Title>
        <div className={styles.imageWrap}>
          {letters.map((letter, i) => (
            <div
              key={letter.id}
              className={styles.card}
              onClick={() => handleOpenModal(i)}
            >
              <NextImage
                src={letter.src}
                alt={letter.alt}
                width={200}
                height={280}
                className={styles.image}
                quality={90}
                loading="eager"
              />
            </div>
          ))}
        </div>
      </Container>

      <Lightbox
        open={isOpen}
        close={() => setIsOpen(false)}
        slides={letters.map((letter) => ({
          src: letter.src,
          alt: letter.alt,
        }))}
        index={selectedIndex}
        on={{ view: ({ index }) => setSelectedIndex(index) }}
        plugins={[Zoom]}
        controller={{ closeOnBackdropClick: true }}
        styles={{
          container: {
            backgroundColor: "rgba(0, 0, 0, 0.7)",
          },
        }}
      />
    </section>
  );
};

export default Letters;
