"use client";

import { FC, HTMLAttributes } from "react";
import classNames from "classnames";
import styles from "./Title.module.css";

interface TitleProps extends HTMLAttributes<HTMLHeadingElement> {
  type: "h1" | "h2" | "h3" | "h4";
  size?: "big" | "normal" | "small";
  className?: string;
}

const Title: FC<TitleProps> = ({
  type,
  size = "big",
  children,
  className,
  ...props
}) => {
  const Component = type;

  return (
    <Component
      className={classNames(styles.title, className, {
        [styles.big]: size === "big",
        [styles.normal]: size === "normal",
        [styles.small]: size === "small",
      })}
      {...props}
    >
      {children}
    </Component>
  );
};

export default Title;
