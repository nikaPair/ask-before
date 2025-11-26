"use client";
import React from "react";
import {
  HeroCTO,
  TextContainer,
  HeroTitle,
  HeroSubtitle,
  HeroButton,
  ButtpnText,
  Badge,
  TitleWrapper,
} from "./HeroTextContent.styled";

export const HeroTextContent = () => {
  return (
    <HeroCTO>
      <TextContainer
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <HeroTitle>
          Best STI test locations
          <br />
          <TitleWrapper>with real clinics' price</TitleWrapper>
        </HeroTitle>
        <HeroSubtitle>
          Find the best prices at nearby clinics and book online. Use the map to
          compare offers and quickly find the best options for you — fast,
          affordable, and nearby.
        </HeroSubtitle>
      </TextContainer>
      <HeroButton
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <ButtpnText>Find out the best options</ButtpnText>
      </HeroButton>
    </HeroCTO>
  );
};
