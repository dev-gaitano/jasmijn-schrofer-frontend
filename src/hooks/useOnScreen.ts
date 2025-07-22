import { useState, useEffect } from "react";

export const useIsOnScreen = (threshold = 0.2) => {
  const [isOnScreen, setIsOnScreen] = useState(false);

  useEffect(() => {
    const observedElements = document.querySelectorAll(".observed");

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsOnScreen(entry.isIntersecting);
      },
      { threshold },
    );

    observedElements.forEach((observedElement) => {
      observer.observe(observedElement);
    });

    return () => observer.disconnect();
  }, [threshold]);

  return { isOnScreen };
};
