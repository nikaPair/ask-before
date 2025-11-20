"use client";
import React, { useState } from "react";
import { FAQSection, FAQContainer, Title, FAQList } from "./FAQ.styled";
import { FAQ_DATA } from "./data";
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
        </FAQList>
      </FAQContainer>
    </FAQSection>
  );
};
