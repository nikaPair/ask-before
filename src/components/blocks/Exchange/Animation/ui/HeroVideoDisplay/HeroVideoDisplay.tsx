"use client";
import React from "react";
import { motion } from "motion/react";
import {
  HeroVideoWrapper,
  HeroVideo,
  HeroIphoneImage,
} from "./HeroVideoDisplay.styled";

interface Step {
  id: number;
  video: string;
}

interface HeroVideoDisplayProps {
  activeStep: number;
  direction: number;
  steps: Step[];
}

export const HeroVideoDisplay: React.FC<HeroVideoDisplayProps> = ({
  activeStep,
  direction,
  steps,
}) => {
  return (
    <HeroVideoWrapper
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div
        style={{
          position: "absolute",
          width: "90%",
          height: "96%",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          borderRadius: "45px",
          overflow: "hidden",
          zIndex: 1,
        }}
      >
        {steps.map((step, index) => {
          const isAfter = index > activeStep;
          const isBefore = index < activeStep;
          const isActive = index === activeStep;

          return (
            <motion.div
              key={step.id}
              initial={false}
              animate={{
                y: isAfter ? "100%" : "0%",
                zIndex: isActive ? 2 : isAfter ? 3 : 1,
                opacity: 1,
              }}
              transition={{
                duration: 0.6,
                ease: [0.32, 0.72, 0, 1],
              }}
              style={{
                position: "absolute",
                width: "100%",
                height: "100%",
                top: 0,
                left: 0,
                background: "#000", // Fallback background
              }}
            >
              <HeroVideo src={step.video} autoPlay loop muted playsInline />
            </motion.div>
          );
        })}
      </div>
      <HeroIphoneImage src="/images/Exchange/iphone.svg" />
    </HeroVideoWrapper>
  );
};
