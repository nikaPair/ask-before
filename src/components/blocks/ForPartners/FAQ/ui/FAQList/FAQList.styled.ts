"use client";
import { motion } from "motion/react";
import styled from "styled-components";

export const ListWrapper = styled.div`
  width: 100%;
  max-width: 900px;
  background-color: #fff;
  border-radius: 24px;
  border: 1px solid #e1e3e8;
  overflow: hidden;
  padding: 0px 20px;
`;

export const ItemWrapper = styled.div`
  border-bottom: 1px solid #e1e3e8;
  &:last-child {
    border-bottom: none;
  }
`;

export const QuestionButton = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 24px;
  padding: 24px 0;
  background: none;
  border: none;
  cursor: pointer;
  text-align: left;
  transition: background-color 0.2s ease;
`;

export const IconContainer = styled.div`
  width: 24px;
  height: 24px;
  display: flex;
  align-self: start;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  color: var(--primary);
`;

export const QuestionText = styled.span`
  font-family: var(--mulish-regular);
  font-size: 18px;
  color: var(--primary);
  font-weight: 600;
  flex: 1;
  color: #020617;
`;

export const AnswerWrapper = styled(motion.div)`
  overflow: hidden;
`;

export const AnswerInner = styled.div`
  background-color: #f5f6fa;
  border-radius: 16px;
  padding: 16px;
  margin-bottom: 20px;
`;

export const AnswerContent = styled.div`
  font-family: var(--mulish-regular);
  font-size: 16px;
  color: #020617;
  line-height: 160%;
  font-weight: 400;
  @media (max-width: 768px) {
    padding: 0 24px 24px 24px;
  }
`;
