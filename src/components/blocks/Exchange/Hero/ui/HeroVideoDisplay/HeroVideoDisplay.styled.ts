"use client";
import styled from "styled-components";
import { motion } from "motion/react";

export const HeroVideoWrapper = styled(motion.div)`
  width: 375px;
  height: 750px; /* Approximate height of iPhone frame */
  position: sticky;
  top: 100px;
  z-index: 1;
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HeroVideo = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const HeroIphoneImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  pointer-events: none;
  position: relative;
  z-index: 2;
`;
