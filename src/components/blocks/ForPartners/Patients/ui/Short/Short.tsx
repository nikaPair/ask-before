"use client";

import React from "react";
import {
  PulseContainer,
  ShortContainer,
  ShortDot,
  ShortDotText,
  ShortText,
} from "./Short.styled";

const Short = () => {
  return (
    <ShortContainer initial={{ scale: 0.85, }} animate={{ scale: 1}} transition={{ duration: 0.5, delay: 0.2}}>
      <ShortText>
        Intimka allows partners to exchange STI certificates and find nearby
        testing locations
      </ShortText>
      <PulseContainer>
        <div style={{ width: "8px", height: "8px" }}>
          <ShortDot />
        </div>
        <ShortDotText>What is Intimka in short?</ShortDotText>
      </PulseContainer>
    </ShortContainer>
  );
};

export default Short;
