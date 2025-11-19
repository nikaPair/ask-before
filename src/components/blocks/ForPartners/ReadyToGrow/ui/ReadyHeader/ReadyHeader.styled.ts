"use client";
import styled from "styled-components";

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;

export const Title = styled.h2`
  font-family: var(--noheim-medium);
  font-size: 62px;
  color: #fff;
  font-weight: 500;
  line-height: 1.1;
  max-width: 800px;

  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

export const Description = styled.p`
  font-family: var(--geist-regular);
  font-size: 16px;
  color: #fff;
  font-weight: 400;
  line-height: 1.5;
  max-width: 600px;
  opacity: 0.9;
`;
