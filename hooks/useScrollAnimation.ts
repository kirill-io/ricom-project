"use client";
import { RefObject, useEffect, useRef } from "react";

function useGenericRef<T extends HTMLElement>(): RefObject<T> {
  return useRef<T>(null) as RefObject<T>;
}

const useScrollAnimation = <T extends HTMLElement>(className: string) => {
  const ref = useGenericRef<T>();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(className);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [className]);

  return ref;
};

export default useScrollAnimation;
