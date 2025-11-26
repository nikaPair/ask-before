"use client";

import styled from "styled-components";
import { motion } from "framer-motion";

export const Section = styled.section`
  width: 100%;
  padding: 0 20px;
  display: flex;
  justify-content: center;
  margin-top: 50px;
  margin-bottom: 50px;
`;

export const Container = styled.div`
  max-width: 1200px;
  width: 100%;
  border-radius: 48px;
  background-color: #f6f6f8;
  padding: 80px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 32px;
`;

export const IconWrapper = styled.div`
  width: 80px;
  height: 40px;
  background-color: #ffffff;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  /* Adjust size for the lottie animation if needed */
  > div {
    width: 100%;
    height: 100%;
  }
`;

export const Title = styled.h2`
  font-family: var(--noheim-medium);
  font-size: 56px;
  font-weight: 500;
  line-height: 1.1em;
  color: #1f1f1f;
  max-width: 900px;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

export const GreenText = styled.span`
  color: #2eb846; /* Approximate green from image */
`;

export const InputWrapper = styled.div`
  width: 100%;
  max-width: 800px;
  position: relative;
  margin-top: 16px;
`;

export const Input = styled.input`
  width: 100%;
  height: 56px;
  border-radius: 12px;
  border: 2px solid transparent;
  padding: 0 20px;
  font-family: var(--geist-regular);
  font-size: 16px;
  color: #1f1f1f;
  background-color: #ffffff;
  outline: none;

  &::placeholder {
    color: #707483;
  }

  &:focus {
    border-color: #ed327e;
  }
`;

export const Button = styled(motion.button)`
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
  margin-top: 16px;
  transition: background-color 0.3s ease;
  overflow: hidden;

  &:hover {
    background-color: #d6206b;
  }
`;

export const ButtonIconWrapper = styled.span`
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
    left: -100%;
    top: 0;
  }

  svg {
    width: 10px;
    height: 10px;
  }
`;
