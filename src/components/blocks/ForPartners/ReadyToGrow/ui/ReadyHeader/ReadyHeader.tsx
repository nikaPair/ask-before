"use client";
import React from "react";
import { Description, TextContainer, Title } from "./ReadyHeader.styled";

const ReadyHeader = () => {
  return (
    <TextContainer>
      <Title>Ready to grow with Intimka?</Title>
      <Description>
        Join the platform that brings patients directly to your clinic — no
        setup costs, no risk. Let’s discuss your clinic’s profile, pricing, and
        visibility options.
      </Description>
    </TextContainer>
  );
};

export default ReadyHeader;
