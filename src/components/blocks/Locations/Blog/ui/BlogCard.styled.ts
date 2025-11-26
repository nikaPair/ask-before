"use client";

import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  cursor: pointer;
  max-width: 375px;
  width: 100%;
`;

export const ImageWrapper = styled.div`
  width: 100%;
  height: 240px;
  border-radius: 16px;
  overflow: hidden;
  background-color: #f0f0f0;
`;

export const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const CardTitle = styled.h3`
  font-family: var(--geist-regular);
  font-size: 20px;
  font-weight: 500;
  line-height: 1.4em;
  color: #1f1f1f;
  margin: 0;
`;

export const CardDate = styled.span`
  font-family: var(--geist-regular);
  font-size: 16px;
  color: #1f1f1f;
`;
