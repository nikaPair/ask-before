"use client";
import { motion } from "motion/react";
import styled from "styled-components";

export const SelectContainer = styled(motion.div)`
  border: 1px solid rgb(238, 238, 238);
  background-color: rgb(255, 255, 255);
  will-change: transform;
  border-radius: 20px;
  opacity: 1;
  transform: none;
  transform-origin: 50% 0% 0px;
  flex-flow: column;
  place-content: flex-start;
  align-items: flex-start;
  gap: 0;
  width: min-content;
  height: min-content;
  padding: 5px;
  display: flex;
  position: absolute;
  top: 63px;
  right: 100px;
`;

export const SelectItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  width: 127px;
  height: min-content;
  padding: 10px 8px;
  border-radius: 16px;
  &:hover {
    background-color: rgb(246, 246, 248);
  }
`;
export const SelectFlag = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
 export const SelectText = styled.p`
  font-family: "Inter", "Inter Placeholder", sans-serif;
  font-size: 15px;
  font-weight: 500;
  letter-spacing: -0.01em;
  line-height: 1.5em;
  text-align: left;
  color: rgb(17, 17, 17);
`;
