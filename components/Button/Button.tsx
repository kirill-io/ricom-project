import classNames from "classnames";
import styles from "./Button.module.css";
import { ButtonHTMLAttributes, FC } from "react";
import { ButtonVariant } from "./ButtonTypes";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: ButtonVariant;
  className?: string;
}

const Button: FC<ButtonProps> = ({
  variant,
  className,
  children,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={classNames(styles.button, className, {
        [styles.primary]: variant === ButtonVariant.PRIMARY,
        [styles.secondary]: variant === ButtonVariant.SECONDARY,
      })}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
