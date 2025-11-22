"use client";
import styled from "styled-components";
import { motion } from "motion/react";

export const ScrollItem = styled.li<{ $isActive?: boolean }>`
  background: #ffffff;
  border-radius: 32px;
  padding: 32px;
  box-shadow: 0px 4px 24px rgba(0, 0, 0, 0.04);
  cursor: pointer;
  border: 1px solid #f3f4f6;
  width: 100%;

  min-height: ${(props) => (props.$isActive ? "320px" : "80px")};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition:
    min-height 0.3s ease,
    border-color 0.3s ease;
`;

export const ItemHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const ItemTitle = styled.h2<{ $isActive?: boolean }>`
  font-family: var(--geist-regular);
  font-size: 16px;
  color: #7c3aed; /* Purple color from image */
  margin: 0;
  font-weight: 500;
`;

export const ItemBigTitle = styled.h3`
  font-family: var(--noheim-medium);
  font-size: 48px;
  color: #111827;
  line-height: 1.1;
  margin: 0;
  letter-spacing: -0.02em;
`;

export const ItemIcon = styled.div<{ $isActive?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ItemBody = styled(motion.div)`
  overflow: hidden;
  width: 100%;
`;
