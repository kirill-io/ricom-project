"use client";
import Image, { ImageProps, StaticImageData } from "next/image";
import styles from "./ConstructionFeaturesImage.module.css";
import { FC, useEffect, useState } from "react";
import classNames from "classnames";
import { MOBILE_BREAKPOINT, TABLET_BREAKPOINT } from "./constants";

interface ConstructionFeaturesProps extends Omit<ImageProps, "src"> {
  desktopSrc: StaticImageData;
  tabletSrc: StaticImageData;
  mobileSrc: StaticImageData;
  className?: string;
}

export const ConstructionFeaturesImage: FC<ConstructionFeaturesProps> = ({
  desktopSrc,
  tabletSrc,
  mobileSrc,
  alt,
  width,
  height,
  className,
  priority = false,
  ...props
}) => {
  const [src, setSrc] = useState<StaticImageData>(desktopSrc);

  const handleResize = () => {
    if (window.innerWidth <= MOBILE_BREAKPOINT) {
      setSrc(mobileSrc);
    } else if (window.innerWidth <= TABLET_BREAKPOINT) {
      setSrc(tabletSrc);
    } else {
      setSrc(desktopSrc);
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    window.addEventListener("orientationchange", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("orientationchange", handleResize);
    };
  }, [src]);

  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={classNames(styles.constructionFeaturesImage, className)}
      priority={priority}
      {...props}
    />
  );
};
