"use client";

import React from "react";
import LottieBlockShared from "@/components/blocks/LottieBlock/LottieBlock";
import { VisibilitySpan } from "@/components/blocks/LottieBlock/LottieBlock.styled";

export default function FreeToUse() {
  return (
    <LottieBlockShared
      animationSrc="/percents.json"
      title={
        <>
          <VisibilitySpan style={{ color: "rgb(149, 74, 235)" }}>
            Free to use
          </VisibilitySpan>
          <br />
          no markups, real clinics' prices
        </>
      }
    />
  );
}
