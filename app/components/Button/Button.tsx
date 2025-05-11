import classNames from "classnames";
import styles from "./Button.module.css";
import { ButtonProps, ButtonVariant } from "./Button.props";

export const Button = ({
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
