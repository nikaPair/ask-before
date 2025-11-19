"use client";
import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  Description,
  Item,
  ItemBottom,
  ItemCenter,
  ItemDesxription,
  ItemTitle,
  ItemTop,
  Percentage,
  SecondCenter,
  SecontIcon,
  SecontSVG,
  SecontSVGInner,
  SecontTextContainer,
  Title,
} from "./Cards.styled";

const HighIntentIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g strokeLinecap="round" strokeLinejoin="round">
      <path
        d="M21.96 13.4199C21.8233 12.3214 21.326 11.2993 20.546 10.5139C19.766 9.72844 18.7474 9.22406 17.65 9.07977C17.1768 7.75468 16.2529 6.63824 15.0399 5.92523C13.8269 5.21223 12.4019 4.94801 11.0139 5.17914C9.62597 5.41026 8.36341 6.12202 7.4469 7.18964C6.53039 8.25726 6.01826 9.61302 6 11.02C4.93913 11.02 3.92172 11.4412 3.17157 12.1913C2.42142 12.9415 2 13.9591 2 15.02C2 16.0808 2.42142 17.0982 3.17157 17.8483C3.92172 18.5985 4.93913 19.02 6 19.02H12"
        stroke="#ffffff"
        strokeWidth="1.5"
      ></path>
      <path d="M18.7793 23V15" stroke="#ffffff" strokeWidth="1.5"></path>
      <path
        d="M15.5801 18.2L18.7801 15L21.98 18.2"
        stroke="#ffffff"
        strokeWidth="1.5"
      ></path>
    </g>
  </svg>
);

const HighIntentCard = () => {
  const [isSecondHovered, setIsSecondHovered] = useState(false);
  const [percentageValue, setPercentageValue] = useState(75);
  const percentageTimerRef = useRef<number | null>(null);

  const stopPercentageTimer = useCallback(() => {
    if (percentageTimerRef.current) {
      window.clearInterval(percentageTimerRef.current);
      percentageTimerRef.current = null;
    }
  }, []);

  const animatePercentage = useCallback(
    (target: number) => {
      stopPercentageTimer();
      percentageTimerRef.current = window.setInterval(() => {
        setPercentageValue((prev) => {
          if (prev === target) {
            stopPercentageTimer();
            return prev;
          }
          const direction = prev < target ? 1 : -1;
          return prev + direction;
        });
      }, 35);
    },
    [stopPercentageTimer]
  );

  const handleSecondHoverOn = useCallback(() => {
    setIsSecondHovered(true);
    animatePercentage(85);
  }, [animatePercentage]);

  const handleSecondHoverOff = useCallback(() => {
    setIsSecondHovered(false);
    animatePercentage(75);
  }, [animatePercentage]);

  useEffect(() => {
    return () => {
      stopPercentageTimer();
    };
  }, [stopPercentageTimer]);

  return (
    <Item
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ amount: 0.25, once: true }}
      transition={{ delay: 0.1, duration: 0.3 }}
    >
      <ItemTop>
        <ItemCenter>
          <SecondCenter
            onMouseEnter={handleSecondHoverOn}
            onMouseLeave={handleSecondHoverOff}
          >
            <SecontSVG>
              <SecontSVGInner $isHovered={isSecondHovered}>
                <SecontIcon $variant="primary" $isHovered={isSecondHovered}>
                  <HighIntentIcon />
                </SecontIcon>
                <SecontIcon $variant="secondary" $isHovered={isSecondHovered}>
                  <HighIntentIcon />
                </SecontIcon>
              </SecontSVGInner>
            </SecontSVG>
            <SecontTextContainer>
              <Title>High-intent users</Title>
              <Percentage>{percentageValue}%</Percentage>
              <Description>
                People who already decided to get tested — no cold leads.
              </Description>
            </SecontTextContainer>
          </SecondCenter>
        </ItemCenter>
      </ItemTop>
      <ItemBottom>
        <ItemTitle>High-intent users</ItemTitle>
        <ItemDesxription>
          People who already decided to get tested — no cold leads.
        </ItemDesxription>
      </ItemBottom>
    </Item>
  );
};

export default HighIntentCard;
