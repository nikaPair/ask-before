"use client";
import { motion } from "motion/react";
import styled, { css } from "styled-components";
import Link from "next/link";

const MotionLink = motion.create(Link);

export const RightColumn = styled.div`
  flex: 1 1 50%;
  display: flex;
  flex-direction: column;
  gap: 32px;
  width: 100%;
`;

export const Title = styled.h2`
  font-family: var(--noheim-medium);
  font-size: 48px;
  color: var(--primary);
  font-weight: 500;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 36px;
  }
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  gap: 16px;
  background-color: #fff;
  padding: 16px 24px;
  border-radius: 16px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.02);
  border: 1px solid #e1e3e8;
`;

export const NumberCircle = styled.span`
  width: 24px;
  height: 24px;
  background-color: #020617;
  color: #fff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--noheim-medium);
  font-size: 12px;
  font-weight: 600;
  flex-shrink: 0;
`;

export const ItemText = styled.span`
  font-family: var(--mulish-regular);
  font-size: 18px;
  color: var(--primary);
  font-weight: 400;
  line-height: 1.4;
`;

// Button Styles
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
  color: var(--white);
  background-color: #ed327e;
  border: none;
  width: fit-content;
  margin-top: 16px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;
