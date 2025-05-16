"use client";

import React, { FC, HTMLAttributes } from "react";
import classNames from "classnames";
import styles from "./Subtitle.module.css";

interface SubtitleProps extends HTMLAttributes<HTMLParagraphElement> {
  size?: "normal" | "small";
  className?: string;
}

const Subtitle: FC<SubtitleProps> = ({
  children,
  size = "normal",
  className,
  ...props
}) => {
  return (
    <p
      className={classNames(styles.subtitle, className, {
        [styles.normal]: size === "normal",
        [styles.small]: size === "small",
      })}
      {...props}
    >
      {children}
    </p>
  );
};

export default Subtitle;
