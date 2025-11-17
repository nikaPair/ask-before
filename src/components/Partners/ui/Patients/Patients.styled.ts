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
