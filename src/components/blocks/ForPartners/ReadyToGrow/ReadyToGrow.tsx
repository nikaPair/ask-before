"use client";
import React from "react";
import { ReadyContainer, ReadyWrapper } from "./ReadyToGrow.styled";
import ReadyHeader from "./ui/ReadyHeader/ReadyHeader";
import ReadyButton from "./ui/ReadyButton/ReadyButton";

const ReadyToGrow = () => {
  return (
    <ReadyWrapper>
      <ReadyContainer
        initial={{ opacity: 0, scale: 0.85 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ amount: 0.2, once: true }}
        transition={{ duration: 0.3 }}
      >
        <ReadyHeader />
        <ReadyButton />
      </ReadyContainer>
    </ReadyWrapper>
  );
};

export default ReadyToGrow;
