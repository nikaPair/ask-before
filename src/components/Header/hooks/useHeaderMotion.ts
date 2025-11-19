"use client";

import { useEffect, useMemo, useState } from "react";
import { usePathname } from "next/navigation";
import {
  useAnimationControls,
  useMotionValue,
  useMotionValueEvent,
  useScroll,
  useSpring,
} from "motion/react";

const WIDE_SCREEN_BREAKPOINT = 1440;
const BASE_MAX_WIDTH = 1224;
const SHRUNK_MAX_WIDTH = 420;

export function useHeaderMotion(
  isBurgerOpen: boolean = false,
  onShouldCloseBurger?: () => void
) {
  const pathname = usePathname();
  const controls = useAnimationControls();
  const { scrollY } = useScroll();
  const maxWidth = useMotionValue(BASE_MAX_WIDTH);
  const smoothMaxWidth = useSpring(maxWidth, { stiffness: 350, damping: 40 });
  const [isWideScreen, setIsWideScreen] = useState(false);

  useEffect(() => {
    controls.set({ opacity: 0, y: -15, translateX: "-50%" });
    controls.start({
      opacity: 1,
      y: 0,
      translateX: "-50%",
      transition: { duration: 0.4, ease: "easeInOut" },
    });
  }, [pathname, controls]);

  useEffect(() => {
    const handleResize = () => {
      const nextIsWide = window.innerWidth >= WIDE_SCREEN_BREAKPOINT;
      setIsWideScreen(nextIsWide);
      if (!nextIsWide) {
        maxWidth.set(BASE_MAX_WIDTH);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [maxWidth]);

  const [isShrunk, setIsShrunk] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (!isWideScreen) {
      setIsShrunk(false);
      return;
    }

    // If burger menu is open and user scrolls down, close it
    if (isBurgerOpen) {
      const previous = scrollY.getPrevious();
      const isScrollingDown =
        typeof previous === "number" ? latest > previous : true;

      if (isScrollingDown && latest > 20 && onShouldCloseBurger) {
        onShouldCloseBurger();
      }
      return;
    }

    const previous = scrollY.getPrevious();
    const isScrollingDown =
      typeof previous === "number" ? latest > previous : true;

    // Only shrink if we have scrolled a bit to avoid sensitivity at top
    const shouldShrink = isScrollingDown && latest > 20;

    const nextWidth = shouldShrink ? SHRUNK_MAX_WIDTH : BASE_MAX_WIDTH;
    maxWidth.set(nextWidth);
    setIsShrunk(shouldShrink);
  });

  useEffect(() => {
    if (!isWideScreen) {
      maxWidth.set(BASE_MAX_WIDTH);
      setIsShrunk(false);
    }
  }, [isWideScreen, maxWidth]);

  const headerStyle = useMemo(() => {
    return isWideScreen
      ? { maxWidth: smoothMaxWidth }
      : { maxWidth: BASE_MAX_WIDTH };
  }, [isWideScreen, smoothMaxWidth]);

  const forceExpand = () => {
    if (isWideScreen) {
      maxWidth.set(BASE_MAX_WIDTH);
      setIsShrunk(false);
    }
  };

  return {
    controls,
    headerStyle,
    isShrunk,
    forceExpand,
  };
}
