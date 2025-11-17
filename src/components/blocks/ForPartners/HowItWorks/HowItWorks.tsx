"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  BottomSection,
  HowItWorksContainer,
  HowItWorksWrapper,
  ImageStack,
  ImagesWrapper,
  StackedImage,
  TopSection,
} from "./HowItWorks.styled";
import List from "./ui/List/List";

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
        <TopSection>
          <div className="first-section">
            <div className="icon-wrapper">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 256 256"
                focusable="false"
                color="var(--white)"
                style={{
                  userSelect: "none",
                  width: "20px",
                  height: "20px",
                  display: "inline-block",
                  fill: "var(--white)",
                  color: "var(--white)",
                  flexShrink: "0",
                }}
              >
                <g color="var(--white)">
                  <path d="M232,208a8,8,0,0,1-8,8H32a8,8,0,0,1,0-16h8V136a8,8,0,0,1,8-8H72a8,8,0,0,1,8,8v64H96V88a8,8,0,0,1,8-8h32a8,8,0,0,1,8,8V200h16V40a8,8,0,0,1,8-8h40a8,8,0,0,1,8,8V200h8A8,8,0,0,1,232,208Z"></path>
                </g>
              </svg>
            </div>
            <p className="icon-text">Why Healthcare Providers love Intimka</p>
          </div>
          <h2 className="title">How it works</h2>
          <p className="description">
            A streamlined process that benefits both patients and healthcare
            providers.
          </p>
        </TopSection>
        <BottomSection>
          <List
            onSelect={(nextIndex) => {
              setActiveIndex(nextIndex);
              scheduleNextTick();
            }}
          />
          <ImagesWrapper>
            <ImageStack>
              {images.map((src, index) => (
                <StackedImage
                  key={src}
                  src={src}
                  alt="How it works"
                  $isActive={index === activeIndex}
                />
              ))}
            </ImageStack>
          </ImagesWrapper>
        </BottomSection>
      </HowItWorksContainer>
    </HowItWorksWrapper>
  );
};

export default HowItWorks;
