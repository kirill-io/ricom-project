import { ButtonHTMLAttributes } from "react";

export enum ButtonVariant {
  PRIMARY = "primary",
  SECONDARY = "secondary",
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: ButtonVariant;
  className?: string;
}
