"use client";
import styled from "styled-components";

export const MapBlockWrapper = styled.section`
  width: 100%;
  background-color: #ffffff;
  padding: 100px 130px;

  @media (max-width: 1024px) {
    padding: 100px 20px;
  }
`;

export const MapBlockContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h2`
  font-family: var(--noheim-medium);
  font-size: 48px;
  line-height: 1.1;
  font-weight: 500;
  text-align: center;
  color: #262628;
  margin-bottom: 16px;

  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

export const Subtitle = styled.p`
  font-family: var(--geist-regular);
  font-size: 16px;
  line-height: 1.5;
  text-align: center;
  font-weight: 400;
  color: #1a1d21;
  margin-bottom: 48px;
  max-width: 600px;
`;

export const FeaturesList = styled.div`
  display: flex;
  gap: 32px;
  margin-bottom: 64px;
  flex-wrap: wrap;
  align-items: flex-start;

  @media (max-width: 768px) {
    gap: 16px;
    flex-direction: column;
    justify-content: start;
    align-self: start;
  }
`;

export const FeatureItem = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const CheckIcon = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: #fce7f3;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  svg {
    width: 14px;
    height: 14px;
    color: #ed327e; /* Pink checkmark */
  }
`;

export const FeatureText = styled.span`
  font-family: var(--geist-regular);
  line-height: 1.4em;
  font-size: 24px;
  color: #1a1d21;
  font-weight: 500;
`;

export const MapFrameWrapper = styled.div`
  width: 100%;
  height: 600px;
  overflow: hidden;
  margin-bottom: 48px;
  background: #f3f4f6;

  iframe {
    width: 110%;
    height: 110%;
    border: none;
  }

  @media (max-width: 768px) {
    height: 400px;
  }
`;

export const ActionButton = styled.button`
  background: #ed327e;
  color: white;
  padding: 16px 32px;
  border-radius: 12px;
  font-family: var(--geist-regular);
  font-size: 16px;
  font-weight: 500;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
`;
