"use client";
import React from "react";
import { BenefitsContainer, BenefitsWrapper } from "./Benefits.styled";
import BenefitsHeader from "./ui/BenefitsHeader/BenefitsHeader";
import BenefitsGrid from "./ui/BenefitsGrid/BenefitsGrid";

const Benefits = () => {
  return (
    <BenefitsWrapper>
      <BenefitsContainer>
        <BenefitsHeader />
        <BenefitsGrid />
      </BenefitsContainer>
    </BenefitsWrapper>
  );
};

export default Benefits;
