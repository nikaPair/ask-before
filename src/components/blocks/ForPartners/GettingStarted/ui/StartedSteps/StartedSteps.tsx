"use client";
import React from "react";
import { BottomSectionWrapper } from "./StartedSteps.styled";
import StepCard from "../StepCard/StepCard";
import { steps } from "../../data";

const StartedSteps = () => {
  return (
    <BottomSectionWrapper>
      {steps.map((step, index) => (
        <StepCard
          key={index}
          stepNumber={step.stepNumber}
          title={step.title}
          description={step.description}
          imageSrc={step.imageSrc}
          icons={step.icons}
          isReversed={step.isReversed}
        />
      ))}
    </BottomSectionWrapper>
  );
};

export default StartedSteps;
