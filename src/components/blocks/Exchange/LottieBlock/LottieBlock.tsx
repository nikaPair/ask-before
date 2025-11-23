"use client";
import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import {
  IconContainer,
  VisibilityContainer,
  VisibilitySpan,
  VisibilityTitle,
  VisibilityWrapper,
} from "./LottieBlock.styled";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

export default function LottieBlock() {
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    fetch("/Fire.json")
      .then((res) => res.json())
      .then((data) => setAnimationData(data))
      .catch((err) => console.error("Failed to load animation:", err));
  }, []);

  return (
    <VisibilityWrapper>
      <VisibilityContainer width="1200">
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
        <VisibilityTitle $maxWidth="775">
          <VisibilitySpan style={{ color: "rgb(149, 74, 235)" }}>
            Free to use
          </VisibilitySpan>
          <br />
          care for your health and respect your partner's
        </VisibilityTitle>
      </VisibilityContainer>
    </VisibilityWrapper>
  );
}
