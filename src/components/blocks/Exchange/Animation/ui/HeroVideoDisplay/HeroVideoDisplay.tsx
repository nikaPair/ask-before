"use client";
import React from "react";
import { motion, AnimatePresence } from "motion/react";
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

const variants = {
  enter: (direction: number) => ({
    y: direction > 0 ? "100%" : 0,
    zIndex: direction > 0 ? 5 : 1,
    opacity: 1,
  }),
  center: {
    y: 0,
    zIndex: 2,
    opacity: 1,
  },
  exit: (direction: number) => ({
    y: direction < 0 ? "100%" : 0,
    zIndex: direction < 0 ? 5 : 1,
    opacity: direction > 0 ? 0.99 : 1,
    transition: { duration: 0.6, ease: [0.32, 0.72, 0, 1] as const },
  }),
};

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
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={activeStep}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              y: { duration: 0.6, ease: [0.32, 0.72, 0, 1] },
              zIndex: { duration: 0 },
            }}
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              top: 0,
              left: 0,
            }}
          >
            <HeroVideo
              src={steps[activeStep].video}
              autoPlay
              loop
              muted
              playsInline
            />
          </motion.div>
        </AnimatePresence>
      </div>
      <HeroIphoneImage src="/images/Exchange/iphone.svg" />
    </HeroVideoWrapper>
  );
};
