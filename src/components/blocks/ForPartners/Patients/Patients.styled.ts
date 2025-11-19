"use client";

import styled from "styled-components";
import { motion } from "motion/react";

export const PatientsSection = styled.section`
  width: 100%;
  padding: 0 32px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  position: relative;
  overflow: hidden;

  @media (max-width: 770px) {
    padding: 40px 16px 0 16px;
  }
`;
export const PatientsContainer = styled(motion.div)`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 12px;
  margin-top: 140px;
  background-image: url("/images/more.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 32px;
  padding: 80px 120px 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  will-change: transform;
  gap: 16px;
  @media (max-width: 991.98px) {
    padding: 32px 32px 250px;
  }
  @media (max-width: 750px) {
    padding: 80px 16px 0 16px;
  }
`;
