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
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" && window.innerWidth <= MOBILE_BREAKPOINT
  );

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= MOBILE_BREAKPOINT);
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("orientationchange", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("orientationchange", handleResize);
    };
  }, []);

  return (
    <Image
      src={isMobile ? mobileSrc : desktopSrc}
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
