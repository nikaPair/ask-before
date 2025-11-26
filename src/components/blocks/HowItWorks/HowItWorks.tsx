"use client";

import React, { ReactNode } from "react";
import {
  Section,
  Container,
  Header,
  Title,
  Subtitle,
  CardsGrid,
  Card,
  MediaContainer,
  CardContent,
  NumberBadge,
  CardTitle,
  CardDescription,
} from "./HowItWorks.styled";

export interface HowItWorksItem {
  badge: string | number;
  title: ReactNode;
  description: ReactNode;
  media: ReactNode;
  bgColor: string;
}

interface HowItWorksProps {
  title: ReactNode;
  subtitle: ReactNode;
  items: HowItWorksItem[];
}

export default function HowItWorks({
  title,
  subtitle,
  items,
}: HowItWorksProps) {
  return (
    <Section>
      <Container>
        <Header>
          <Title>{title}</Title>
          <Subtitle>{subtitle}</Subtitle>
        </Header>
        <CardsGrid>
          {items.map((item, index) => (
            <Card key={index}>
              <MediaContainer $bgColor={item.bgColor}>
                {item.media}
              </MediaContainer>
              <CardContent>
                <NumberBadge>{item.badge}</NumberBadge>
                <CardTitle>{item.title}</CardTitle>
                <CardDescription>{item.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </CardsGrid>
      </Container>
    </Section>
  );
}
