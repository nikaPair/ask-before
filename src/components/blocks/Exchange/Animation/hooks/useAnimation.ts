import { useState, useRef, useEffect } from "react";
import { useScroll, useMotionValueEvent } from "motion/react";

interface Step {
  video: string;
}

export const useAnimation = (steps: Step[]) => {
  const [activeStep, setActiveStep] = useState(0);
  const [direction, setDirection] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const stepCount = steps.length;
    const newStep = Math.min(Math.floor(latest * stepCount), stepCount - 1);

    if (newStep !== activeStep) {
      setDirection(newStep > activeStep ? 1 : -1);
      setActiveStep(newStep);
    }
  });

  const handleStepClick = (index: number) => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const { offsetTop, offsetHeight } = container;
    const scrollHeight = offsetHeight - window.innerHeight;

    const stepProgress = index / steps.length + 0.01;

    const targetScrollY = offsetTop + stepProgress * scrollHeight;

    window.scrollTo({
      top: targetScrollY,
      behavior: "smooth",
    });
  };

  return {
    activeStep,
    direction,
    containerRef,
    handleStepClick,
  };
};
