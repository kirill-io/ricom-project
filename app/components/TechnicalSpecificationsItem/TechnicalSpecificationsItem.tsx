"use client";
import { FC, HTMLAttributes } from "react";
import styles from "./TechnicalSpecificationsItem.module.css";
import classNames from "classnames";
import useScrollAnimation from "@/hooks/useScrollAnimation";

interface TechnicalSpecificationsItemProps
  extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  title: string;
  list: string[];
  line: boolean;
}

const TechnicalSpecificationsItem: FC<TechnicalSpecificationsItemProps> = ({
  className,
  title,
  list,
  line,
  ...props
}) => {
  const ref = useScrollAnimation<HTMLDivElement>(styles.visible);

  return (
    <div
      className={classNames(styles.technicalSpecificationsItem, className, {
        [styles.line]: line,
      })}
      ref={ref}
      {...props}
    >
      <h3 className={styles.title}>{title}</h3>
      <ul className={styles.list}>
        {list.map((item, i) => (
          <li className={styles.item} key={i}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TechnicalSpecificationsItem;
