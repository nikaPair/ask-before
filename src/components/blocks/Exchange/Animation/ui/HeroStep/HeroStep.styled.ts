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

  @media (max-width: 768px) {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    min-height: auto;
    height: auto;
    padding: 24px;
    opacity: ${(props) => (props.$isActive ? 1 : 0)};
    visibility: ${(props) => (props.$isActive ? "visible" : "hidden")};
    transform: ${(props) =>
      props.$isActive ? "translateY(0)" : "translateY(20px)"};
    transition:
      opacity 0.4s ease,
      transform 0.4s ease,
      visibility 0.4s ease;
    pointer-events: ${(props) => (props.$isActive ? "auto" : "none")};
  }
`;

export const ItemHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const ItemTitle = styled.h2<{ $isActive?: boolean }>`
  font-family: var(--noheim-medium);
  font-size: 24px;
  line-height: 34px;
  color: #7967e5;
  margin: 0;
  font-weight: 500;

  @media (max-width: 768px) {
    font-size: 18px;
    line-height: 24px;
  }
`;

export const ItemBigTitle = styled.h3`
  font-family: var(--noheim-medium);
  font-size: 48px;
  color: #111827;
  line-height: 1.1;
  margin: 0;
  letter-spacing: -0.02em;

  @media (max-width: 768px) {
    font-size: 32px;
    margin-top: 16px;
  }
`;

export const ItemIcon = styled.div<{ $isActive?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ItemBody = styled(motion.div)`
  overflow: hidden;
  width: 100%;

  @media (max-width: 768px) {
    height: auto !important;
    opacity: 1 !important;
  }
`;

export const IconContainer = styled.div`
  background: #f3f4f6;
  border-radius: 50%;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    width: 32px;
    height: 32px;
  }
`;
