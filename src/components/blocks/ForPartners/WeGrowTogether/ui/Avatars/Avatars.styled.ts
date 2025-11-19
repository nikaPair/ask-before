"use client";
import styled from "styled-components";
import { motion } from "motion/react";

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 500px;

  @media (max-width: 1024px) {
    min-height: 400px;
  }

  @media (min-width: 1024px) {
    display: block;
  }
`;

export const AvatarImg = styled(motion.div)<{ $size: number; $img: string }>`
  position: absolute;
  width: ${(props) => props.$size}px;
  height: ${(props) => props.$size}px;
  border-radius: 50%;
  background-image: url(${(props) => props.$img});
  background-size: cover;
  background-position: center;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  cursor: pointer;

  @media (max-width: 1440px) {
    width: ${(props) => props.$size * 0.9}px;
    height: ${(props) => props.$size * 0.9}px;
  }

  @media (max-width: 1024px) {
    width: ${(props) => props.$size * 0.75}px;
    height: ${(props) => props.$size * 0.75}px;
  }

  @media (max-width: 768px) {
    width: ${(props) => props.$size * 0.6}px;
    height: ${(props) => props.$size * 0.6}px;
  }

  @media (max-width: 480px) {
    width: ${(props) => props.$size * 0.5}px;
    height: ${(props) => props.$size * 0.5}px;
  }
`;
