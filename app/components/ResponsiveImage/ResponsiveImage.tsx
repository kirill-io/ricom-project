"use client";
import { FC, useEffect, useState } from "react";
import Image, { ImageProps, StaticImageData } from "next/image";
import { MOBILE_BREAKPOINT } from "./constants";

interface ResponsiveImageProps extends Omit<ImageProps, "src"> {
  desktopSrc: StaticImageData;
  mobileSrc: StaticImageData;
}

const ResponsiveImage: FC<ResponsiveImageProps> = ({
  desktopSrc,
  mobileSrc,
  alt,
  width,
  height,
  className,
  priority = false,
  ...props
}) => {
  const [isClient, setIsClient] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsClient(true);

    const update = () => {
      setIsMobile(window.innerWidth <= MOBILE_BREAKPOINT);
    };

    update();
    window.addEventListener("resize", update);
    window.addEventListener("orientationchange", update);

    return () => {
      window.removeEventListener("resize", update);
      window.removeEventListener("orientationchange", update);
    };
  }, []);

  const actualSrc = isClient && isMobile ? mobileSrc : desktopSrc;

  return (
    <Image
      src={actualSrc}
      alt={alt}
      width={width}
      height={height}
      className={className}
      priority={priority}
      {...props}
    />
  );
};

export default ResponsiveImage;
