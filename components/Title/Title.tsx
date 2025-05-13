"use client";

import React, { FC, HTMLAttributes } from "react";
import classNames from "classnames";
import styles from "./Title.module.css";

interface TitleProps extends HTMLAttributes<HTMLHeadingElement> {
  type: "h1" | "h2" | "h3" | "h4";
  className?: string;
}

const Title: FC<TitleProps> = ({ type, children, className, ...props }) => {
  const Component = type;

  return (
    <Component className={classNames(styles.title, className)} {...props}>
      {children}
    </Component>
  );
};

export default Title;
