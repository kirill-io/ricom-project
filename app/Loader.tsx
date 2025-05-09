"use client";

import { useEffect, useState } from "react";
import styles from "./Loader.module.css";
import classNames from "classnames";

export const Loader = () => {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const handleLoad = () => {
      setTimeout(() => {
        setFadeOut(true);
      }, 300);

      setTimeout(() => {
        setLoading(false);
      }, 1000);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => window.removeEventListener("load", handleLoad);
  }, []);

  if (!loading) return null;

  return (
    <div className={classNames(styles.loader, { [styles.hidden]: fadeOut })}>
      <div className={styles.skCircle}>
        {Array.from({ length: 12 }).map((_, index) => (
          <div
            key={index}
            className={classNames(
              styles[`skCircle${index + 1}`],
              styles.skChild
            )}
          ></div>
        ))}
      </div>
    </div>
  );
};
