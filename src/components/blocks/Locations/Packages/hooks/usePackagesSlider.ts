import { useRef, useState, useEffect } from "react";
import { useMotionValue, animate } from "framer-motion";

export const usePackagesSlider = () => {
  const [width, setWidth] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  useEffect(() => {
    const updateWidth = () => {
      if (sliderRef.current) {
        const scrollWidth = sliderRef.current.scrollWidth;
        const viewportWidth = sliderRef.current.parentElement?.offsetWidth || 0;
        setWidth(scrollWidth - viewportWidth);
      }
    };

    const timer = setTimeout(updateWidth, 100);
    window.addEventListener("resize", updateWidth);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", updateWidth);
    };
  }, []);

  useEffect(() => {
    const checkScroll = () => {
      const currentX = x.get();
      setCanScrollLeft(currentX < 0);
      setCanScrollRight(currentX > -width);
    };

    const unsubscribe = x.on("change", checkScroll);
    checkScroll();

    return () => unsubscribe();
  }, [x, width]);

  const getStep = () => {
    if (sliderRef.current?.firstElementChild) {
      const cardWidth = (sliderRef.current.firstElementChild as HTMLElement)
        .offsetWidth;
      return cardWidth + 10; // Card width + gap (10px as per styled component)
    }
    return 292; // Fallback (282 + 10)
  };

  const slideLeft = () => {
    const step = getStep();
    const currentX = x.get();
    const alignedX = Math.round(currentX / step) * step;
    const newX = Math.min(alignedX + step, 0);
    animate(x, newX, { type: "spring", stiffness: 300, damping: 30 });
  };

  const slideRight = () => {
    const step = getStep();
    const currentX = x.get();
    const alignedX = Math.round(currentX / step) * step;
    const newX = Math.max(alignedX - step, -width);
    animate(x, newX, { type: "spring", stiffness: 300, damping: 30 });
  };

  return {
    sliderRef,
    x,
    width,
    canScrollLeft,
    canScrollRight,
    slideLeft,
    slideRight,
  };
};
