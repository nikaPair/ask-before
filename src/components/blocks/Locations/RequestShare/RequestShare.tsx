"use client";

import React from "react";
import {
  Section,
  Container,
  Title,
  Description,
  ActionButton,
  ButtonCircle,
  ButtonText,
} from "./RequestShare.styled";

export default function RequestShare() {
  return (
    <Section>
      <Container>
        <Title>Want to request & share results with a partner?</Title>
        <Description>
          AskBefore helps you exchange test results comfortably and safely,
          creating a private, open space for communication. Learn more about the
          exchange experience now.
        </Description>
        <ActionButton>
          <ButtonCircle />
          <ButtonText>Learn about STI result exchange</ButtonText>
        </ActionButton>
      </Container>
    </Section>
  );
}
