"use client";
import styled from "styled-components";

export const HeroCTO = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 32px;
  padding: 0 20px;
`;
export const TextContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;
export const HeroTitle = styled.h1`
  font-size: 56px;
  font-family: var(--noheim-medium);
  font-weight: 500;
  text-align: center;
  color: var(--primary);
  line-height: 1.2em;
  max-width: 900px;

  @media (max-width: 768px) {
    font-size: 32px;
  }
`;
export const HeroSubtitle = styled.p`
  font-size: 16px;
  font-family: var(--geist-regular);
  font-weight: 400;
  text-align: center;
  max-width: 608px;
  line-height: 1.4em;
  letter-spacing: 0em;
  color: var(--primary);
`;
export const HeroButton = styled.button`
  display: flex;
  align-items: center;
  gap: 6px;
  background-color: #ed327e;
  padding: 12px 24px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
`;

export const ButtpnText = styled.span`
  font-size: 16px;
  font-family: var(--geist-regular);
  font-weight: 400;
  text-align: center;
  line-height: 1.4em;
  letter-spacing: 0em;
  color: var(--white);
`;
