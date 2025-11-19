"use client";
import { motion } from "motion/react";
import styled from "styled-components";

export const Section = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 120px;
  padding: 0 60px;
  background-color: #f5f6fa;
`;

export const Container = styled(motion.div)`
  max-width: 1200px;
  width: 100%;
  display: flex;
  align-items: center;
  gap: 80px;
  padding-top: 80px;
  padding-bottom: 120px;

  @media (max-width: 1024px) {
    flex-direction: column;
    gap: 40px;
  }
`;
