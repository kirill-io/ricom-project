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
  ...props
}: ResponsiveImageProps) => {
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
