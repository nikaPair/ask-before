"use client";

import React from "react";
import Content from "./ui/Content/Content";
import Avatars from "./ui/Avatars/Avatars";
import { Section, Container, ContentWrapper, AvatarsWrapper } from "./WeGrowTogether.styled";

const WeGrowTogether = () => {
  return (
    <Section>
      <Container>
        <ContentWrapper>
          <Content />
        </ContentWrapper>
        <AvatarsWrapper>
          <Avatars />
        </AvatarsWrapper>
      </Container>
    </Section>
  );
};

export default WeGrowTogether;

