import { ImageProps, StaticImageData } from "next/image";

export interface ResponsiveImageProps extends Omit<ImageProps, "src"> {
  desktopSrc: StaticImageData;
  mobileSrc: StaticImageData;
}
