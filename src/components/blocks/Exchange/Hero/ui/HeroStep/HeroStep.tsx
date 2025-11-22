"use client";
import React from "react";
import { AnimatePresence } from "motion/react";
import {
  ScrollItem,
  ItemHeader,
  ItemTitle,
  ItemIcon,
  ItemBody,
  ItemBigTitle,
} from "./HeroStep.styled";

interface Step {
  id: number;
  title: string;
  bigTitle: string;
  description: string;
  video: string;
}

interface HeroStepProps {
  step: Step;
  isActive: boolean;
  onClick: () => void;
}

export const HeroStep: React.FC<HeroStepProps> = ({
  step,
  isActive,
  onClick,
}) => {
  return (
    <ScrollItem $isActive={isActive} onClick={onClick}>
      <ItemHeader>
        <ItemTitle $isActive={isActive}>{step.title}</ItemTitle>
        <ItemIcon $isActive={isActive}>
          <div
            style={{
              background: "#F3F4F6",
              borderRadius: "50%",
              width: "32px",
              height: "32px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 4V16M12 16L8 12M12 16L16 12M4 20H20"
                stroke="#6B7280"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </ItemIcon>
      </ItemHeader>
      <AnimatePresence mode="wait">
        {isActive && (
          <ItemBody
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div
              style={{
                height: "120px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <ItemBigTitle>{step.bigTitle}</ItemBigTitle>
            </div>
          </ItemBody>
        )}
      </AnimatePresence>
    </ScrollItem>
  );
};
