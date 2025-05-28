"use client";
import classNames from "classnames";
import styles from "./Video.module.css";
import { FC, HTMLAttributes } from "react";
import Container from "@/components/Container/Container";
import Title from "@/components/Title/Title";

interface VideoProps extends HTMLAttributes<HTMLElement> {
  className?: string;
}

const Video: FC<VideoProps> = ({ className, ...props }) => {
  return (
    <section className={classNames(styles.video, className)} {...props}>
      <Container className={styles.container}>
        <Title
          type="h2"
          className={styles.title}
          aria-label="Демонстрация надёжности ленты RSD-Ex"
        >
          Демонстрация надёжности ленты RSD-Ex
        </Title>
        <div className={styles.videoWrap}>
          <video
            className={styles.videoPlayer}
            controls
            preload="metadata"
            poster="/images/video/video-1.jpg"
            playsInline
          >
            <source
              src="https://storage.yandexcloud.net/ricom/video-1.mp4"
              type="video/mp4"
            />
            <source
              src="https://storage.yandexcloud.net/ricom/video-1.webm"
              type="video/webm"
            />
            Ваш браузер не поддерживает видео.
          </video>
          <video
            className={styles.videoPlayer}
            controls
            preload="metadata"
            poster="/images/video/video-2.jpg"
            playsInline
          >
            <source
              src="https://storage.yandexcloud.net/ricom/video-2.mp4"
              type="video/mp4"
            />
            <source
              src="https://storage.yandexcloud.net/ricom/video-2.webm"
              type="video/webm"
            />
            Ваш браузер не поддерживает видео.
          </video>
        </div>
      </Container>
    </section>
  );
};

export default Video;
