"use client";
import React from "react";
import {
  StandardsWrapper,
  StandardsContainer,
  Title,
  CardsGrid,
  TopRow,
  Card,
  FullWidthCard,
  CardTitle,
  CardDescription,
  Highlight,
} from "./Standards.styled";

export default function Standards() {
  return (
    <StandardsWrapper>
      <StandardsContainer>
        <Title>
          Followed by European standards for medical data protection
        </Title>
        <CardsGrid>
          <TopRow>
            <Card>
              <CardTitle>
                Data protection aligned with <Highlight>GDPR</Highlight>
              </CardTitle>
              <CardDescription>for personal data privacy</CardDescription>
            </Card>
            <Card>
              <CardTitle>
                Following <Highlight>ISO 27001</Highlight> best practices
              </CardTitle>
              <CardDescription>for information security</CardDescription>
            </Card>
            <Card>
              <CardTitle>
                Supports <Highlight>AWMF</Highlight> guidelines
              </CardTitle>
              <CardDescription>
                for confidential test result transfer and partner notifications
              </CardDescription>
            </Card>
          </TopRow>
          <FullWidthCard>
            <CardTitle>
              We work with independent{" "}
              <Highlight>Data Prorivacy Office</Highlight>
            </CardTitle>
            <CardDescription>
              to design, review, and ensure our privacy and medical data
              practices comply with European standards
            </CardDescription>
          </FullWidthCard>
        </CardsGrid>
      </StandardsContainer>
    </StandardsWrapper>
  );
}
