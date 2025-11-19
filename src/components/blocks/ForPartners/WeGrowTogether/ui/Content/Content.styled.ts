"use client";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 580px;
  width: 100%;
  z-index: 2;

  @media (max-width: 1024px) {
    max-width: 100%;
  }
`;

export const Headline = styled.h2`
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  color: #020617;
  margin-bottom: 24px;
  font-family: var(--mulish-regular);

  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

export const Description = styled.p`
  font-size: 18px;
  line-height: 1.6;
  font-family: var(--mulish-regular);
  color: #020617;
  margin-bottom: 40px;
  padding-bottom: 40px;
  border-bottom: 1px solid #e5e7eb;
`;

export const FeaturesWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 24px;
  }
`;

export const FeatureItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const FeatureIcon = styled.div`
  width: 24px;
  height: 24px;
  color: #0b0f19;
`;

export const FeatureTitle = styled.h3`
  font-size: 20px;
  font-weight: 500;
  color: #020617;
  margin-bottom: 8px;
  font-family: var(--mulish-regular, sans-serif);
`;

export const FeatureText = styled.p`
  font-family: var(--mulish-regular, sans-serif);
  font-size: 14px;
  line-height: 1.5;
  color: #020617;
`;
