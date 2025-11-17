"use client";
import styled from "styled-components";
import { motion } from "motion/react";

export const HowItWorksWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 120px;
`;
export const HowItWorksContainer = styled(motion.div)`
  max-width: 1200px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 40px;
  @media (max-width: 1440px) {
    padding: 0 20px;
  }
`;
export const TopSection = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 16px;
  .icon-wrapper {
    width: 32px;
    height: 32px;
    padding: 6px;
    background-color: rgb(2, 6, 23);
    border-radius: 50%;
    display: flex;
  }
  .first-section {
    padding-right: 10px;
    display: flex;
    align-items: center;
    gap: 12px;
    background-color: rgb(248, 250, 252);
    border-radius: 60px;
    .icon-text {
      font-size: 14px;
      font-weight: 400;
      font-family: var(--mulish-regular);
      color: rgb(2, 6, 23);
    }
  }
  .title {
    font-size: 62px;
    font-family: var(--noheim-medium);
    color: var(--primary);
    font-weight: 400;
    line-height: 1.2em;
    letter-spacing: 0em;

    @media (max-width: 1440px) {
      font-size: 48px;
    }
    @media (max-width: 768px) {
      font-size: 32px;
    }
  }
  .description {
    font-size: 16px;
    font-family: var(--geist-regular);
    color: var(--primary);
    font-weight: 400;
    line-height: 1.4em;
    letter-spacing: 0em;
    paragraph-spacing: 20px;
    text-align: center;
  }
`;

export const BottomSection = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 26px;
  @media (max-width: 1440px) {
    flex-direction: column;
    gap: 50px;
  }
`;
export const ImagesWrapper = styled.div`
  max-width: 450px;
  width: 100%;
`;

export const ImageStack = styled.div`
  position: relative;
  width: 100%;
  padding-top: 123%;
  border-radius: 32px;
  overflow: hidden;
`;

export const StackedImage = styled.img<{ $isActive: boolean }>`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: inherit;
  opacity: ${({ $isActive }) => ($isActive ? 1 : 0)};
  transition: opacity 0.6s ease;
  will-change: opacity;

  @media (max-width: 1440px) {
    width: 375px;
    height: 478px;
  }
`;
