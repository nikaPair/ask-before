"use client";

import React from "react";
import {
  Container,
  Headline,
  Description,
  FeaturesWrapper,
  FeatureItem,
  FeatureIcon,
  FeatureTitle,
  FeatureText,
} from "./Content.styled";
import Button from "../Button/Button";

import { features } from "./data";

const Content = () => {
  return (
    <Container>
      <Headline>
        We grow together — <br />
        supporting Healthcare <br />
        Providers worldwide
      </Headline>
      <Description>
        Join our platform to effortlessly reach more patients. With a smooth
        onboarding process and localised clinic support, we ensure seamless
        collaboration — no matter your city or setup.
      </Description>

      <FeaturesWrapper>
        {features.map((feature, index) => (
          <FeatureItem key={index}>
            <FeatureIcon>{feature.icon}</FeatureIcon>
            <div>
              <FeatureTitle>{feature.title}</FeatureTitle>
              <FeatureText>{feature.text}</FeatureText>
            </div>
          </FeatureItem>
        ))}
      </FeaturesWrapper>

      <Button />
    </Container>
  );
};

export default Content;
