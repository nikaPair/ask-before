"use client";
import { motion } from "motion/react";
import styled, { css } from "styled-components";
import Link from "next/link";

const MotionLink = motion.create(Link);

const buttonBase = css`
  font-family: var(--geist-regular);
  font-size: 16px;
  text-align: center;
  font-weight: 500;
  line-height: 1.4em;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  border-radius: 12px;
  padding: 16px 32px;
  cursor: pointer;
  width: 228px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const GetInTouchButton = styled(MotionLink)`
  ${buttonBase}
  background-color: #fff;
  color: #020617;
  border: none;
`;
