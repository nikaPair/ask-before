"use client";
import React from "react";
import {
  MapBlockWrapper,
  MapBlockContainer,
  Title,
  Subtitle,
  FeaturesList,
  FeatureItem,
  CheckIcon,
  FeatureText,
  MapFrameWrapper,
  ActionButton,
} from "./MapBlock.styled";

export default function MapBlock() {
  return (
    <MapBlockWrapper>
      <MapBlockContainer>
        <Title>Get tested at actual clinic prices</Title>
        <Subtitle>
          Find the most convenient time and price for STI testing near you.
        </Subtitle>

        <FeaturesList>
          <FeatureItem>
            <CheckIcon>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20 6L9 17L4 12"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </CheckIcon>
            <FeatureText>100% Private (No Insurance Needed)</FeatureText>
          </FeatureItem>
          <FeatureItem>
            <CheckIcon>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20 6L9 17L4 12"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </CheckIcon>
            <FeatureText>No doctor referal needed</FeatureText>
          </FeatureItem>
          <FeatureItem>
            <CheckIcon>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20 6L9 17L4 12"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </CheckIcon>
            <FeatureText>Real clinics' prices</FeatureText>
          </FeatureItem>
        </FeaturesList>

        <MapFrameWrapper>
          <iframe
            src="https://intimka-map.vercel.app/"
            loading="lazy"
            title="Clinic Map"
          />
        </MapFrameWrapper>

        <ActionButton>
          Find out the best options
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 12H19M19 12L12 5M19 12L12 19"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </ActionButton>
      </MapBlockContainer>
    </MapBlockWrapper>
  );
}
