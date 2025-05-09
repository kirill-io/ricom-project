"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { ResponsiveImageProps } from "./ResponsiveImage.props";
import { MOBILE_BREAKPOINT } from "./constants";

export const ResponsiveImage = ({
  desktopSrc,
  mobileSrc,
  alt,
  width,
  height,
  className,
  priority = false,
}: ResponsiveImageProps) => {
  const [isMobile, setIsMobile] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    const handleResize = () => {
      if (typeof window !== "undefined") {
        setIsMobile(window.innerWidth <= MOBILE_BREAKPOINT);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    window.addEventListener("orientationchange", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("orientationchange", handleResize);
    };
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <Image
      src={isMobile ? mobileSrc : desktopSrc}
      alt={alt}
      width={width}
      height={height}
      className={className}
      priority={priority}
    />
  );
};
