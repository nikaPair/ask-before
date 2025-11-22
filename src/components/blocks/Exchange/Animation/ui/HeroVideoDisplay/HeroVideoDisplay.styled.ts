"use client";
import styled from "styled-components";
import { motion } from "motion/react";

export const HeroVideoWrapper = styled(motion.div)`
  width: 375px;
  height: 750px;
  position: sticky;
  top: 100px;
  z-index: 1;
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    width: 200px;
    height: auto;
    position: relative;
    top: 24px;

    div {
      border-radius: 8px !important ;
    }
  }
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
