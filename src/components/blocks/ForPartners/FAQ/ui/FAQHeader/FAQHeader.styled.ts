"use client";
import styled from "styled-components";
import Image from "next/image";

export const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 24px;
  margin-bottom: 30px;
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  background-color: #f5f6fa;
  padding: 8px 16px;
  border-radius: 100px;
`;

export const IconLabel = styled.span`
  font-family: var(--geist-medium);
  font-size: 14px;
  color: var(--primary);
`;

export const Title = styled.h2`
  font-family: var(--noheim-medium);
  font-size: 60px;
  color: var(--primary);
  font-weight: 500;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 36px;
  }
`;

export const Subtitle = styled.p`
  font-family: var(--mulish-regular);
  font-size: 18px;
  color: #020617;
  line-height: 1.5;
`;
