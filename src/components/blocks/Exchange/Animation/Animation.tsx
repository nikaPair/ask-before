"use client";
import {
  AnimationWrapper,
  AnimationContainer,
  ScrollWrapper,
  ScrollList,
} from "./Animation.styled";
import { HeroStep } from "./ui/HeroStep/HeroStep";
import { HeroVideoDisplay } from "./ui/HeroVideoDisplay/HeroVideoDisplay";
import { useAnimation } from "./hooks/useAnimation";

const steps = [
  {
    id: 1,
    title: "Upload records",
    bigTitle: "Add your medical test results",
    description: "Add your medical test results which will appear in the card",
    video: "/videos/mobile/1.mp4",
  },
  {
    id: 2,
    title: "Customize exchange",
    bigTitle: "Choose what to share",
    description: "Choose what information you want to share with your partner",
    video: "/videos/mobile/2.mp4",
  },
  {
    id: 3,
    title: "Share results",
    bigTitle: "Send a secure link",
    description:
      "Send a secure link to your partner to view your verified results",
    video: "/videos/mobile/3.mp4",
  },
];

export default function Animation() {
  const { activeStep, direction, containerRef, handleStepClick } =
    useAnimation(steps);

  return (
    <AnimationWrapper>
      <AnimationContainer ref={containerRef}>
        <ScrollWrapper>
          <ScrollList>
            {steps.map((step, index) => (
              <HeroStep
                key={step.id}
                step={step}
                isActive={activeStep === index}
                onClick={() => handleStepClick(index)}
              />
            ))}
          </ScrollList>
          <HeroVideoDisplay
            activeStep={activeStep}
            direction={direction}
            steps={steps}
          />
        </ScrollWrapper>
      </AnimationContainer>
    </AnimationWrapper>
  );
}
