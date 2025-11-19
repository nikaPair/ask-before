"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  BottomSection,
  HowItWorksContainer,
  HowItWorksWrapper,
} from "./HowItWorks.styled";
import List from "./ui/List/List";
import HowItWorksHeader from "./ui/HowItWorksHeader/HowItWorksHeader";
import HowItWorksImages from "./ui/HowItWorksImages/HowItWorksImages";

const images = [
  "/images/howitworks/EN/1.png",
  "/images/howitworks/EN/2.png",
  "/images/howitworks/EN/3.png",
  "/images/howitworks/EN/4.png",
  "/images/howitworks/EN/5.png",
];
const SLIDE_INTERVAL = 10000;

const HowItWorks = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const scheduleNextTick = useCallback(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    timerRef.current = setTimeout(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
    }, SLIDE_INTERVAL);
  }, []);

  useEffect(() => {
    scheduleNextTick();
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [scheduleNextTick, activeIndex]);

  return (
    <HowItWorksWrapper>
      <HowItWorksContainer>
        <HowItWorksHeader />
        <BottomSection>
          <List
            onSelect={(nextIndex) => {
              setActiveIndex(nextIndex);
              scheduleNextTick();
            }}
          />
          <HowItWorksImages images={images} activeIndex={activeIndex} />
        </BottomSection>
      </HowItWorksContainer>
    </HowItWorksWrapper>
  );
};

export default HowItWorks;
