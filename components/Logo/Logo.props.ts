import { AnchorHTMLAttributes, DetailedHTMLProps } from "react";

export enum LogoType {
  PRIMARY = "primary",
  SECONDARY = "secondary",
  SKOLKOVO = "skolkovo",
  KUZTECH = "kuztech",
}

export interface LogoProps
  extends DetailedHTMLProps<
    AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  > {
  type: LogoType;
  className?: string;
}
