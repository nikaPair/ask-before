"use client";
import { motion } from "motion/react";
import styled from "styled-components";

export const TextWrapper = styled.span`
  position: relative;
  display: inline-flex;
  align-items: center;
  overflow: hidden;
  height: 1.2em;
  line-height: 1.2;
`;

export const TextLine = styled(motion.span)`
  display: inline-flex;
  align-items: center;
  width: 100%;
  line-height: 1.2;
  will-change: transform;

  &[data-line="clone"] {
    position: absolute;
    left: 0;
    top: 100%;
  }
`;
