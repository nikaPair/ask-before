"use client";
import React, { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import {
  AnswerContent,
  AnswerInner,
  AnswerWrapper,
  IconContainer,
  ItemWrapper,
  ListWrapper,
  QuestionButton,
  QuestionText,
} from "./FAQList.styled";

type FAQItem = {
  question: string;
  answer: string;
};

const faqData: FAQItem[] = [
  {
    question: "Can you help us connect Stripe or upload prices?",
    answer:
      "Yes. You can connect Stripe on your own, or we'll guide you through every step. As for prices — just send us your test price list, and we'll upload everything for you. You'll always be able to update or adjust your prices later in your personal dashboard.",
  },
  {
    question: "What if my clinic isn't visible to users?",
    answer:
      "We provide tools and guidance to optimize your clinic's profile. Visibility depends on various factors including completeness of profile and user location. Contact our support for a personalized review.",
  },
  {
    question: "Who pays the Stripe commission?",
    answer:
      "The Stripe commission is typically handled as part of the transaction fees. Specific details can be found in your partnership agreement or by contacting our finance team.",
  },
  {
    question: "What happens if a user requests a refund?",
    answer:
      "Refunds are processed according to your clinic's cancellation policy. Our platform facilitates the communication and transaction reversal if applicable.",
  },
  {
    question: "Can we promote our clinic more visibly on the platform?",
    answer:
      "Yes, we offer various visibility packages and promotional options. Please check the 'Visibility' section or contact our partnership team for more details.",
  },
];

const FAQList = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <ListWrapper>
      {faqData.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <ItemWrapper key={index}>
            <QuestionButton onClick={() => toggleIndex(index)}>
              <IconContainer
                as={motion.div}
                animate={{ rotate: isOpen ? 45 : 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 1V13M1 7H13"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </IconContainer>
              <QuestionText>{item.question}</QuestionText>
            </QuestionButton>
            <AnimatePresence initial={false}>
              {isOpen && (
                <AnswerWrapper
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <AnswerInner>
                    <AnswerContent>{item.answer}</AnswerContent>
                  </AnswerInner>
                </AnswerWrapper>
              )}
            </AnimatePresence>
          </ItemWrapper>
        );
      })}
    </ListWrapper>
  );
};

export default FAQList;
