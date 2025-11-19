"use client";
import { motion } from "motion/react";
import styled from "styled-components";
import Link from "next/link";

const MotionLink = motion.create(Link);

export const ReadyWrapper = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 120px;
  padding: 0 20px;
  margin-bottom: 120px;
`;

export const ReadyContainer = styled(motion.div)`
  max-width: 1200px;
  width: 100%;
  background-color: #ed327e;
  border-radius: 32px;
  padding: 80px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 32px;
  position: relative;
  overflow: hidden;

  &:after {
    content: "";
    border-width: 4px;
    border-color: #fff;
    border-style: solid;
    box-sizing: border-box;
    border-radius: inherit;
    pointer-events: none;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }

  @media (max-width: 768px) {
    padding: 32px 24px;
  }
`;
