"use client";
import { motion } from "motion/react";
import { keyframes } from "styled-components";
import styled from "styled-components";
const pulse = keyframes`
  0% {
    transform: scale(1);
  }
  3% {
    transform: scale(0.7);
  }
  50% {
    transform: scale(1);
  }
  9%,
  100% {
    transform: scale(1);
  }
`;
export const ShortContainer = styled(motion.div)`
  height: 267px;
  overflow: clip;
  will-change: transform;
  z-index: 1;
  background-color: #fff;
  border-radius: 32px;
  flex-flow: column;
  flex: none;
  place-content: center;
  align-items: center;
  gap: 10px;
  width: 980px;
  padding: 24px 160px 48px;
  display: flex;
  position: absolute;
  bottom: -58px;
  left: calc(50% - 490px);
  box-shadow: inset 0 -71px 50px #f7daec;

  @media (max-width: 1100px) {
    width: 80%;

    left: unset;
    padding: 24px 20px 24px;
  }
  @media (max-width: 750px) {
    bottom: 0;
    position: relative;
    align-self: flex-start;
    transform: translateX(0);
    width: calc(100% - 64px);
    bottom: unset;
    height: 240px;
    left: unset;
    transform: translateX(0);
    flex-direction: column-reverse;
  }
  @media (max-width: 500px) {
    width: 100%;
    padding: 16px;
  }
`;

export const ShortText = styled.p`
  font-family: var(--noheim-medium);
  font-size: 20px;
  color: var(--primary);
  letter-spacing: 0;
  text-align: center;
  line-height: 1.6em;
  font-weight: 400;
  max-width: 600px;
  margin: 0 auto;
`;
export const PulseContainer = styled.div`
  will-change: transform;
  z-index: 1;
  background-color: #f5f6fa;
  border-radius: 30px;
  flex-flow: row;
  flex: none;
  place-content: center;
  align-items: center;
  gap: 4px;
  padding: 6px 12px;
  display: flex;
  position: absolute;
  top: 40px;
  left: 50%;
  overflow: visible;
  transform: translate(-50%);
  @media (max-width: 750px) {
    position: relative;
    top: unset;
    left: unset;
    transform: unset;
  }
`;
export const ShortDot = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: rgb(89, 79, 238);
  animation: ${pulse} 5s infinite ease-in-out;
  will-change: transform;
`;
export const ShortDotText = styled.p`
  font-size: 12px;
  color: var(--primary);
  font-weight: 500;
  letter-spacing: 0;
  text-align: center;
  line-height: 1.6em;
  font-family: var(--mulish-regular);
`;
