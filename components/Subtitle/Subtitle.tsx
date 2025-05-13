"use client";

import React, { FC, HTMLAttributes } from "react";
import classNames from "classnames";
import styles from "./Subtitle.module.css";

interface SubtitleProps extends HTMLAttributes<HTMLParagraphElement> {
  className?: string;
}

const Subtitle: FC<SubtitleProps> = ({ children, className, ...props }) => {
  return (
    <p className={classNames(styles.subtitle, className)} {...props}>
      {children}
    </p>
  );
};

export default Subtitle;
