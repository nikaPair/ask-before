"use client";
import React from "react";
import { AnimatePresence } from "motion/react";
import {
  FAQItem as ItemWrapper,
  QuestionButton,
  QuestionText,
  IconWrapper,
  AnswerWrapper,
  AnswerText,
} from "../FAQ.styled";

interface FAQAccordionItemProps {
  id: number;
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: (id: number) => void;
}

export const FAQAccordionItem = ({
  id,
  question,
  answer,
  isOpen,
  onToggle,
}: FAQAccordionItemProps) => {
  return (
    <ItemWrapper>
      <QuestionButton onClick={() => onToggle(id)}>
        <QuestionText>{question}</QuestionText>
        <IconWrapper
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6 9L12 15L18 9"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </IconWrapper>
      </QuestionButton>
      <AnimatePresence>
        {isOpen && (
          <AnswerWrapper
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <AnswerText>{answer}</AnswerText>
          </AnswerWrapper>
        )}
      </AnimatePresence>
    </ItemWrapper>
  );
};
