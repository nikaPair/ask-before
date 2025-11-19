"use client";
import Image from "next/image";
import styled from "styled-components";

export const ImageDescriptionWrapper = styled.div`
  display: flex;
  width: 100%;
  gap: 62px;
  @media (max-width: 1440px) {
    gap: 32px;
  }
  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;
export const ImageBlock = styled.div`
  background-color: #f5f6fa;
  border-radius: 16px;
  width: 50%;
  min-height: 483px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 62px;

  @media (max-width: 1000px) {
    padding: 16px;
    width: 100%;
    order: -1;
    min-height: auto;
    height: auto;
  }
  @media (max-width: 500px) {
    height: auto;
  }
`;
export const ImageContainer = styled.div`
  background-color: #fff;
  border-radius: 16px;
  max-width: 500px;
  width: 100%;
`;
export const Picture = styled(Image)`
  width: 100%;
  object-position: left top;
  object-fit: cover;
  border-radius: inherit;
`;
export const DescriptionContainer = styled.div`
  width: 50%;
  min-height: 483px;
  flex-direction: column;
  display: flex;
  align-items: start;
  justify-content: start;
  gap: 16px;
  @media (max-width: 1000px) {
    width: 100%;
    height: auto;
    min-height: auto;
  }
`;

export const DescNumber = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  padding: 10px 12px;
  border: 1px solid #e2e8f0;
`;

export const DesctNumberCircle = styled.div`
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background-color: #1a1d21;
  padding: 6px;
`;
export const Number = styled.p`
  font-size: 12px;
  font-family: var(--noheim-medium);
  color: var(--white);
  font-weight: 400;
  line-height: 1.4em;
  letter-spacing: 0em;
  paragraph-spacing: 20px;
  text-align: center;
`;
export const DescriptionTitle = styled.p`
  font-family: var(--mulish-regular);
  font-size: 48px;
  font-weight: 700;
  line-height: 1.2em;
  letter-spacing: 0em;
  color: #020617;
`;

export const DescriptionText = styled.p`
  font-family: var(--mulish-regular);
  font-size: 18px;
  font-weight: 400;
  line-height: 1.6em;
  letter-spacing: 0em;
`;

export const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: #e2e8f0;
  margin: 16px 0;
  flex-shrink: 0;
`;

export const IconsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;
  @media (max-width: 770px) {
    flex-direction: column;
  }
`;
export const IconItem = styled.div`
  display: flex;
  align-items: start;
  gap: 8px;
  justify-content: start;
  flex-direction: column;
`;
export const Icon = styled.div`
  width: 24px;
  height: 24px;
`;
export const IconTitle = styled.p`
  font-family: var(--mulish-regular);
  font-size: 20px;
  font-weight: 400;
  line-height: 160%;
  letter-spacing: 0em;
  color: #020617;
`;
export const IconText = styled.p`
  font-family: var(--mulish-regular);
  font-size: 14px;
  font-weight: 400;
  line-height: 160%;
  letter-spacing: 0em;
  color: #020617;
`;
