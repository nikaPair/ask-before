"use client";
import styled from "styled-components";
import { motion } from "motion/react";

export const FAQSection = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 0 20px;
  background-color: #fff;
`;

export const FAQContainer = styled.div`
  max-width: 1200px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 62px;

  @media (max-width: 1200px) {
    flex-direction: column;
    gap: 80px;
  }
`;

export const Title = styled.h2`
  font-family: var(--noheim-medium);
  font-size: 32px;
  font-weight: 400;
  color: #262628;
  margin: 0;
  flex: 0 0 500px;

  @media (max-width: 1200px) {
    flex: auto;
    font-size: 28px;
  }
`;

export const FAQList = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  max-width: 60%;

  @media (max-width: 1200px) {
    max-width: 100%;
  }
`;

export const FAQItem = styled.div`
  border-bottom: 1px solid #e5e5e5;
  &:first-child {
    button {
      padding-top: 0px;
    }
  }
`;

export const QuestionButton = styled.button`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px 0;
  background: none;
  border: none;
  cursor: pointer;
  text-align: left;
  gap: 20px;
`;

export const QuestionText = styled.span`
  font-family: var(--noheim-medium);
  font-size: 24px;
  font-weight: 400;
  color: #262628;
`;

export const IconWrapper = styled(motion.div)`
  color: #666;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const AnswerWrapper = styled(motion.div)`
  overflow: hidden;
`;

export const AnswerText = styled.div`
  padding-bottom: 24px;
  font-family: var(--geist-regular);
  font-size: 16px;
  line-height: 1.6;
  color: #262628;
`;

export const ViewMoreButton = styled.button`
  background: #ed327e;
  color: white;
  padding: 12px 24px;
  border-radius: 8px;
  font-family: var(--geist-regular);
  font-size: 14px;
  font-weight: 500;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 32px;
  align-self: center; /* Align to the right of the flex column */
  transition: background 0.2s ease;

  &:hover {
    background: #db2777;
  }

  @media (max-width: 1200px) {
    align-self: flex-start;
  }
`;
