"use client";

import React from "react";
import { HeroContent, HeroWrapper, HeroContainer } from "./Hero.styled";
import { HeroTextContent } from "./ui/HeroTextContent";
import MapImage from "../MapImage/MapImage";

export default function Hero() {
  return (
    <HeroWrapper>
      <HeroContainer>
        <HeroContent>
          <HeroTextContent />
        </HeroContent>
      </HeroContainer>
      <MapImage />
    </HeroWrapper>
  );
}
