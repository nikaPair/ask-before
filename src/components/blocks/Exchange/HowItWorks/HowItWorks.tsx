"use client";
import React from "react";
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

export default function HowItWorks() {
  return (
    <Section>
      <Container>
        <Header>
          <Title>Make it quick, convenient and affordable</Title>
          <Subtitle>
            We make STI test sharing comfortable, private and stigma-free.
          </Subtitle>
        </Header>
        <CardsGrid>
          <Card>
            <MediaContainer $bgColor="#FFD1F6">
              <video
                src="/videos/visibility.mp4"
                autoPlay
                loop
                muted
                playsInline
              />
            </MediaContainer>
            <CardContent>
              <NumberBadge>1</NumberBadge>
              <CardTitle>Get tested without doctor referal</CardTitle>
              <CardDescription>
                Find a clinic that fits your schedule and budget.
              </CardDescription>
            </CardContent>
          </Card>

          <Card>
            <MediaContainer $bgColor="#F3F3F3">
              <video src="/videos/attach.mp4" autoPlay loop muted playsInline />
            </MediaContainer>
            <CardContent>
              <NumberBadge>2</NumberBadge>
              <CardTitle>Upload your STI results on your own</CardTitle>
              <CardDescription>
                Make your exchange lovely if you like, or keep it simple.
              </CardDescription>
            </CardContent>
          </Card>

          <Card>
            <MediaContainer $bgColor="#FCD875">
              <img src="/images/howitworks/EN/3.png" alt="Show QR code" />
            </MediaContainer>
            <CardContent>
              <NumberBadge>3</NumberBadge>
              <CardTitle>Show QR code to partner</CardTitle>
              <CardDescription>
                They’ll land on your exchange page and get the message instantly
                😉
              </CardDescription>
            </CardContent>
          </Card>
        </CardsGrid>
      </Container>
    </Section>
  );
}
