"use client";
import styled from "styled-components";

export const VisibilityWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 120px;
  @media (max-width: 1440px) {
    padding: 0 20px;
    margin-top: 100px;
  }
`;

export const VisibilityContainer = styled.div<{ width: string }>`
  max-width: ${(props) => props.width}px;
  width: 100%;
  border-radius: 48px;
  margin: 0 auto;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 32px;
  justify-content: center;
  align-items: center;
  background-color: #f6f6f8;
  padding: 66px 120px 120px;
  @media (max-width: 1000px) {
    padding: 24px 16px 48px;
  }
`;

export const IconContainer = styled.div`
  width: 110px;
  height: 55px;
  border-radius: 160px;
  background-color: var(--white);
  video {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

export const VisibilityTitle = styled.h2<{ $maxWidth?: string }>`
  font-size: 48px;
  font-family: var(--noheim-medium);
  color: #262628;
  text-align: center;
  font-weight: 500;
  line-height: 1.4em;
  max-width: ${(props) => (props.$maxWidth ? `${props.$maxWidth}px` : "100%")};
  @media (max-width: 1000px) {
    font-size: 32px;
    line-height: 1.2em;
  }
`;

export const VisibilitySpan = styled.span`
  color: rgb(149, 74, 235);
`;
