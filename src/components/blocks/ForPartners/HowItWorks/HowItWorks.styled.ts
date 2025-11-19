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
export const BottomSection = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 26px;
  @media (max-width: 1440px) {
    flex-direction: column;
    gap: 50px;
  }
`;
