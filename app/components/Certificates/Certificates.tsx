"use client";
import { FC, HTMLAttributes, useState, useEffect } from "react";
import NextImage from "next/image";
import styles from "./Certificates.module.css";
import classNames from "classnames";
import Container from "@/components/Container/Container";
import Title from "@/components/Title/Title";
import { certificates } from "./CertificatesData";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";

interface CertificatesProps extends HTMLAttributes<HTMLElement> {
  className?: string;
}

const Certificates: FC<CertificatesProps> = ({ className, ...props }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  useEffect(() => {
    certificates.forEach((certificate) => {
      const img = new window.Image();
      img.src = certificate.src;
    });
  }, []);

  const handleOpenModal = (index: number) => {
    setSelectedIndex(index);
    setIsOpen(true);
  };

  return (
    <section className={classNames(styles.certificates, className)} {...props}>
      <Container className={styles.container}>
        <Title
          type="h2"
          className={styles.title}
          aria-label="Сертификаты и соответствие стандартам."
        >
          Сертификаты и соответствие стандартам
        </Title>
        <div className={styles.imageWrap}>
          {certificates.map((certificate, i) => (
            <div
              key={certificate.id}
              className={styles.card}
              onClick={() => handleOpenModal(i)}
            >
              <NextImage
                src={certificate.src}
                alt={certificate.alt}
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
        slides={certificates.map((certificate) => ({
          src: certificate.src,
          alt: certificate.alt,
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

export default Certificates;
