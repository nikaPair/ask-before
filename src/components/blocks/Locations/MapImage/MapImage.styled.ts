"use client";

import styled from "styled-components";
import { motion } from "framer-motion";

export const MapImageWrapper = styled.div`
  max-width: 1200px;
  width: 100%;
  position: absolute;
  top: 115%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  gap: 32px;
  align-items: center;
  padding: 0 16px;

  @media (max-width: 1200px) {
    top: 110%;
  }

  @media (max-width: 1000px) {
    top: 100%;
  }
`;

export const MapPicture = styled.img`
  width: 100%;
  max-height: 657px;
  height: 100%;
  object-fit: cover;
  border-radius: 32px;
`;

export const MapButton = styled(motion.button)`
  display: flex;
  align-items: center;
  gap: 12px;
  background-color: #ffffff;
  color: #1f1f1f;
  padding: 16px 32px;
  border-radius: 12px;
  border: 1px solid #1f1f1f;
  font-family: var(--geist-regular);
  font-size: 18px;
  font-weight: 500;
  cursor: pointer;
  overflow: hidden;
  z-index: 2;
`;

export const IconWrapper = styled.span`
  position: relative;
  display: inline-flex;
  align-items: center;
  overflow: hidden;
  height: 20px;
  width: 20px;
`;

export const IconLine = styled(motion.span)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  will-change: transform;

  &[data-line="clone"] {
    position: absolute;
    left: -100%;
    top: 0;
  }

  svg {
    width: 20px;
    height: 20px;
  }
`;
