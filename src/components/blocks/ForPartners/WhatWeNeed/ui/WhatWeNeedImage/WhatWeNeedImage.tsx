"use client";
import React from "react";
import { LeftColumn, StyledImage } from "./WhatWeNeedImage.styled";

const WhatWeNeedImage = () => {
  return (
    <LeftColumn>
      <StyledImage
        src="/images/whatweneed/EN/card.png"
        alt="What we need to start interface preview"
        width={500}
        height={400}
      />
    </LeftColumn>
  );
};

export default WhatWeNeedImage;
