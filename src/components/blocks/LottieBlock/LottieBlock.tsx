"use client";
import React, { useEffect, useState, ReactNode } from "react";
import dynamic from "next/dynamic";
import {
  IconContainer,
  VisibilityContainer,
  VisibilityTitle,
  VisibilityWrapper,
} from "./LottieBlock.styled";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

interface LottieBlockProps {
  animationSrc: string;
  title: ReactNode;
  width?: string;
  maxWidth?: string;
}

export default function LottieBlock({
  animationSrc,
  title,
  width = "1200",
  maxWidth = "775",
}: LottieBlockProps) {
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    fetch(animationSrc)
      .then((res) => res.json())
      .then((data) => setAnimationData(data))
      .catch((err) => console.error("Failed to load animation:", err));
  }, [animationSrc]);

  return (
    <VisibilityWrapper>
      <VisibilityContainer width={width}>
        <IconContainer>
          {animationData && (
            <Lottie
              animationData={animationData}
              loop
              autoplay
              style={{ width: "100%", height: "100%" }}
            />
          )}
        </IconContainer>
        <VisibilityTitle $maxWidth={maxWidth}>{title}</VisibilityTitle>
      </VisibilityContainer>
    </VisibilityWrapper>
  );
}
