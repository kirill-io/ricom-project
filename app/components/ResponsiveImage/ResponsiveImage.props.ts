import { StaticImageData } from "next/image";

export interface ResponsiveImageProps {
  desktopSrc: StaticImageData;
  mobileSrc: StaticImageData;
  alt: string;
  width: number;
  height: number;
  className?: string;
  priority?: boolean;
}
