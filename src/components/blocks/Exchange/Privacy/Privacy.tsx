"use client";
import React from "react";
import {
  Section,
  Container,
  Header,
  Title,
  Grid,
  Card,
  ImageContainer,
  CardContent,
  CardTitle,
  CardDescription,
  BottomRow,
  SmallCard,
  IconCircle,
} from "./Privacy.styled";

export default function Privacy() {
  return (
    <Section>
      <Container>
        <Header>
          <Title>Feel safe — your privacy is protected with care</Title>
        </Header>

        <Grid>
          <Card>
            <ImageContainer>
              <img src="/images/Privacy/heart.png" alt="Privacy" />
            </ImageContainer>
            <CardContent>
              <CardTitle>We don’t store your medical data</CardTitle>
              <CardDescription>
                Your STI test results arrive on our servers already encrypted.
                We can’t decrypt them or view them.
              </CardDescription>
            </CardContent>
          </Card>

          <Card>
            <ImageContainer>
              <img src="/images/Privacy/heart.png" alt="Verification" />
            </ImageContainer>
            <CardContent>
              <CardTitle>You verify your partner face-to-face</CardTitle>
              <CardDescription>
                Show the QR code with access to the exchange page when you meet
                in person. We link that page to the partner who scans the QR
                code and signs in to the system.
              </CardDescription>
            </CardContent>
          </Card>

          <Card>
            <ImageContainer>
              <img src="/images/Privacy/heart.png" alt="One-time view" />
            </ImageContainer>
            <CardContent>
              <CardTitle>STI test results can be viewed only once</CardTitle>
              <CardDescription>
                Your partner can view the results only once. After they’ve
                opened them, access is automatically closed and the data is
                removed.
              </CardDescription>
            </CardContent>
          </Card>
        </Grid>

        <BottomRow>
          <SmallCard>
            <IconCircle>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.00003 11.0001C9.00003 11.0001 10.5 13.0001 13 13.0001C15.5 13.0001 17 11.0001 17 11.0001"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M9 9H9.01"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M15 9H15.01"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </IconCircle>
            <CardTitle>We block third parties</CardTitle>
            <CardDescription>
              Only the account that first accesses your exchange via the QR code
              is treated as your partner. Any attempts from other profiles are
              blocked, and you’re notified.
            </CardDescription>
          </SmallCard>

          <SmallCard>
            <IconCircle>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 22C12 22 20 18 20 12V5L12 2L4 5V12C4 18 12 22 12 22Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M9 12L11 14L15 10"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </IconCircle>
            <CardTitle>We help you protect your data</CardTitle>
            <CardDescription>
              We guide you at every step with clear tips, status updates, and
              suggestions on how to keep your data as safe as possible.
            </CardDescription>
          </SmallCard>
        </BottomRow>
      </Container>
    </Section>
  );
}
