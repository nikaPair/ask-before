"use client";
import { motion } from "motion/react";
import styled, { css } from "styled-components";
import Link from "next/link";

const MotionLink = motion.create(Link);

const buttonBase = css`
  font-family: var(--geist-regular);
  font-size: 16px;
  text-align: center;
  font-weight: 400;
  line-height: 1.4em;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  border-radius: 8px;
  padding: 14px 24px;
`;

export const IconSlideWrapper = styled.span`
  position: relative;
  display: inline-flex;
  width: 18px;
  height: 18px;
  overflow: hidden;
  flex-shrink: 0;
`;

export const IconSlideTrack = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  will-change: transform;
  transform: translateX(0);
  transition: transform 0.25s ease;

  &[data-icon="clone"] {
    position: absolute;
    left: 100%;
    top: 0;
  }
`;

const iconHoverEffect = css`
  &:hover ${IconSlideTrack}, &:focus-visible ${IconSlideTrack} {
    transform: translateX(-100%);
  }
`;

export const GetInTouch = styled(MotionLink)`
  ${buttonBase}
  ${iconHoverEffect}
  color: var(--white, #ffffff);
  background-color: #ed327e;
  border: none;
  width: fit-content;
  text-decoration: none;
  
  @media (max-width: 768px) {
    width: 100%;
  }
`;

