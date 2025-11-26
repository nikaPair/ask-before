"use client";

import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import {
  Section,
  Container,
  IconWrapper,
  Title,
  GreenText,
  InputWrapper,
  Input,
} from "./ui/CompareBlock.styled";
import { CompareButton } from "./ui/CompareButton";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

export default function CompareBlock() {
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    fetch("/check.json")
      .then((res) => res.json())
      .then((data) => setAnimationData(data))
      .catch((err) => console.error("Failed to load animation:", err));
  }, []);

  return (
    <Section>
      <Container>
        <IconWrapper>
          {animationData && (
            <Lottie
              animationData={animationData}
              loop
              autoplay
              style={{ width: "100%", height: "100%" }}
            />
          )}
        </IconWrapper>
        <Title>
          Compare, choose, and book with
          <br />
          ease: <GreenText>everything in one place</GreenText>
        </Title>
        <InputWrapper>
          <Input placeholder="Address or postal code" />
        </InputWrapper>
        <CompareButton />
      </Container>
    </Section>
  );
}
