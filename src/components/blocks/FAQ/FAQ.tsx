"use client";
import React, { useState } from "react";
import {
  FAQSection,
  FAQContainer,
  Title,
  FAQList,
  ViewMoreButton,
} from "./FAQ.styled";
import { FAQ_DATA } from "@/components/blocks/FAQ/data";
import { FAQAccordionItem } from "./ui/FAQAccordionItem";

export const FAQ = () => {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggleFAQ = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <FAQSection>
      <FAQContainer>
        <Title>Frequently Asked Questions</Title>
        <FAQList>
          {FAQ_DATA.map((item) => (
            <FAQAccordionItem
              key={item.id}
              id={item.id}
              question={item.question}
              answer={item.answer}
              isOpen={openId === item.id}
              onToggle={toggleFAQ}
            />
          ))}
          <ViewMoreButton>
            View more
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 12H19M19 12L12 5M19 12L12 19"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </ViewMoreButton>
        </FAQList>
      </FAQContainer>
    </FAQSection>
  );
};

export default FAQ;
