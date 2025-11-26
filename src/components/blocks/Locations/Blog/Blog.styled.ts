"use client";

import styled from "styled-components";
import { motion } from "framer-motion";

export const Section = styled.section`
  width: 100%;
  padding: 0 20px;
  display: flex;
  justify-content: center;
  margin-bottom: 100px;
`;

export const Container = styled.div`
  max-width: 1200px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 64px;
`;

export const Header = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 16px;
  max-width: 800px;
`;

export const Title = styled.h2`
  font-family: var(--noheim-medium);
  font-size: 52px;
  font-weight: 500;
  line-height: 1.2em;
  max-width: 750px;
  color: #1f1f1f;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

export const Subtitle = styled.p`
  font-family: var(--geist-regular);
  font-size: 16px;
  line-height: 1.5em;
  color: #1f1f1f;
  margin: 0;
`;

export const BlogGrid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(380px, 1fr));
  gap: 32px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const ButtonWrapper = styled(motion.div)`
  display: flex;
  justify-content: center;
  margin-top: 16px;
`;

export const BlogButton = styled(motion.button)`
  display: flex;
  align-items: center;
  gap: 8px;
  background-color: #ed327e;
  color: #ffffff;
  padding: 12px 24px;
  border-radius: 8px;
  border: none;
  font-family: var(--geist-regular);
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  overflow: hidden;
`;

export const IconWrapper = styled.span`
  position: relative;
  display: inline-flex;
  align-items: center;
  overflow: hidden;
  height: 14px;
  width: 14px;
`;

export const IconLine = styled(motion.span)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  will-change: transform;

  &[data-line="clone"] {
    position: absolute;
    left: 0;
    top: 100%;
  }

  svg {
    width: 10px;
    height: 10px;
  }
`;
