"use client";
import React from "react";
import {
  HeroCTO,
  TextContainer,
  HeroTitle,
  HeroSubtitle,
  HeroButton,
  ButtpnText,
} from "./HeroTextContent.styled";

export const HeroTextContent = () => {
  return (
    <HeroCTO>
      <TextContainer>
        <HeroTitle>
          Ask for STI test results quickly and beautifully — without awkward
          talks
        </HeroTitle>
        <HeroSubtitle>
          Create a private Exchange Page to gently request and share STI test
          results — fully protected with end-to-end encryption.
        </HeroSubtitle>
      </TextContainer>
      <HeroButton>
        <ButtpnText>Create Exchange Page</ButtpnText>{" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 256 256"
          focusable="false"
          style={{
            userSelect: "none",
            width: "18px",
            height: "18px",
            display: "inline-block",
            fill: "var(--white)",
            color: "var(--white)",
            flexShrink: 0,
          }}
        >
          <g color="var(--white)">
            <path d="M178,40c-20.65,0-38.73,8.88-50,23.89C116.73,48.88,98.65,40,78,40a62.07,62.07,0,0,0-62,62c0,70,103.79,126.66,108.21,129a8,8,0,0,0,7.58,0C136.21,228.66,240,172,240,102A62.07,62.07,0,0,0,178,40ZM128,214.8C109.74,204.16,32,155.69,32,102A46.06,46.06,0,0,1,78,56c19.45,0,35.78,10.36,42.6,27a8,8,0,0,0,14.8,0c6.82-16.67,23.15-27,42.6-27a46.06,46.06,0,0,1,46,46C224,155.61,146.24,204.15,128,214.8Z"></path>
          </g>
        </svg>
      </HeroButton>
    </HeroCTO>
  );
};
