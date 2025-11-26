"use client";
import styled from "styled-components";
import { motion } from "motion/react";

export const HeroCTO = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 32px;
  padding: 0 20px;
`;
export const TextContainer = styled(motion.div)`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;
export const HeroTitle = styled.h1`
  font-size: 56px;
  font-family: var(--noheim-medium);
  font-weight: 500;
  text-align: center;
  color: var(--primary);
  line-height: 1.2em;
  max-width: 900px;

  @media (max-width: 768px) {
    font-size: 32px;
  }
`;
export const HeroSubtitle = styled.p`
  font-size: 16px;
  font-family: var(--geist-regular);
  font-weight: 400;
  text-align: center;
  max-width: 608px;
  line-height: 1.4em;
  letter-spacing: 0em;
  color: var(--primary);
`;
export const HeroButton = styled(motion.button)`
  display: flex;
  align-items: center;
  gap: 6px;
  background-color: #ed327e;
  padding: 12px 24px;
  border: none;
  border-radius: 8px;
  cursor: pointer;

  @media (max-width: 768px) {
    width: 100%;
    align-items: center;
    justify-content: center;
  }
`;

export const ButtpnText = styled.span`
  font-size: 16px;
  font-family: var(--geist-regular);
  font-weight: 400;
  text-align: center;
  line-height: 1.4em;
  letter-spacing: 0em;
  color: var(--white);
`;

export const Badge = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  background-color: #fff;
  padding: 4px 12px;
  border-radius: 16px;
  font-family: var(--geist-regular);
  font-size: 14px;
  color: var(--primary);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  transform: rotate(-5deg);
  position: absolute;
  right: -20px;
  bottom: 0;

  svg {
    color: #ed327e;
  }
`;

export const TitleWrapper = styled.div`
  position: relative;
  display: inline-block;
`;
