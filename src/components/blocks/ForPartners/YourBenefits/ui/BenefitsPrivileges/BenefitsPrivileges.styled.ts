"use client";
import { motion } from "motion/react";
import styled from "styled-components";

export const PrivilegesWrapper = styled.div`
  display: flex;
  gap: 32px;
  width: 100%;
  @media (max-width: 1440px) {
    flex-direction: column;
  }
  @media (max-width: 768px) {
    height: 400px;
  }
`;
export const PrivilegesItem = styled(motion.div)`
  flex-flow: column;
  flex: none;
  place-content: flex-start center;
  align-items: flex-start;
  gap: 12px;
  width: 100%;
  height: min-content;
  padding: 24px;
  display: flex;
  position: relative;
  overflow: hidden;
  box-shadow: 0 7px 30px #0000000a;
  border-radius: 16px;
  flex: 1 0 0;
`;

export const ItemTitle = styled.p`
  font-size: 24px;
  font-weight: 700;
  color: #020617;
  font-family: var(--mulish-regular);
  line-height: 1.5em;
  text-align: center;
  margin: 0;
`;
export const ItemDesxription = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: #1a1d21;
  letter-spacing: 0em;
  line-height: 1.4em;
  font-family: var(--mulish-regular);
  white-space: pre-wrap;
  word-break: break-word;
  word-wrap: break-word;
`;
