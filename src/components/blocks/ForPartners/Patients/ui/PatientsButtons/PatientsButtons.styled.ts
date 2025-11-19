"use client";
import Link from "next/link";
import styled, { css } from "styled-components";
import { motion } from "motion/react";

const MotionLink = motion.create(Link);

const outlineOverlay = css`
  --border-widths: 1px;
  --border-color: rgb(146, 154, 166);
  --border-style: solid;
  position: relative;
  &::after {
    content: "";
    position: absolute;
    inset: 0;
    border-width: var(--border-widths, 0);
    border-color: var(--border-color, transparent);
    border-style: var(--border-style, none);
    box-sizing: border-box;
    border-radius: inherit;
    pointer-events: none;
  }
`;

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

export const PatientsButtonsContainer = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  will-change: transform;
  padding: 24px 0;
  @media (max-width: 770px) {
    width: 100%;
    flex-direction: column;
    gap: 12px;
  }
`;

export const GetStarted = styled(MotionLink)`
  ${buttonBase}
  ${outlineOverlay}
  ${iconHoverEffect}
  color: var(--primary);
  background-color: var(--white);
  @media (max-width: 770px) {
    width: 100%;
  }
`;

export const GetInTouch = styled(MotionLink)`
  ${buttonBase}
  ${iconHoverEffect}
  color: var(--white);
  background-color: #ed327e;
  border: none;
  @media (max-width: 770px) {
    width: 100%;
  }
`;
