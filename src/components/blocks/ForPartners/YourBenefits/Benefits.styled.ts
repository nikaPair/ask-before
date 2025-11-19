"use client";
import { motion } from "motion/react";
import styled from "styled-components";

export const BenefitsWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 120px;
  overflow: hidden;
`;
export const BenefitsContainer = styled(motion.div)`
  max-width: 1200px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 40px;
  @media (max-width: 1440px) {
    padding: 0 20px;
  }
`;
