"use client";
import { motion } from "motion/react";
import styled from "styled-components";

export const PatientsTextContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  will-change: transform;
`;
export const PatientsTitle = styled.h1`
  font-family: var(--noheim-medium);
  font-size: 64px;
  color: var(--primary);
  text-align: center;
  font-weight: 500;
  line-height: 1.2;
  @media (max-width: 770px) {
    font-size: 48px;
  }
`;

export const PatientsDescription = styled.p`
  font-family: var(--mulish-regular);
  font-size: 18px;
  color: var(--primary);
  text-align: center;
  font-weight: 400;
  line-height: 1.6;
`;
