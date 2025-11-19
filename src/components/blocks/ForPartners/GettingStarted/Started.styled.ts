"use client";
import { motion } from "framer-motion";
import styled from "styled-components";

export const StartedWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 120px;
`;
export const StartedContainer = styled(motion.div)`
  max-width: 1200px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 80px;
  @media (max-width: 1440px) {
    padding: 0 20px;
  }
`;
