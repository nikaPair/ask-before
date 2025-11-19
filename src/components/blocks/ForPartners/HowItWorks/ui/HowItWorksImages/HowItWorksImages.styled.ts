"use client";
import styled from "styled-components";

export const ImagesWrapper = styled.div`
  max-width: 450px;
  width: 100%;
  height: 100%;
  @media (max-width: 1440px) {
    height: 478px;
    max-width: 375px;
  }
  @media (max-width: 400px) {
    max-width: 350px;
  }
`;

export const ImageStack = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 32px;
  overflow: hidden;
  @media (max-width: 1440px) {
    height: 478px;
    max-width: 375px;
  }
`;

export const StackedImage = styled.img<{ $isActive: boolean }>`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: inherit;
  opacity: ${({ $isActive }) => ($isActive ? 1 : 0)};
  transition: opacity 0.6s ease;
  will-change: opacity;

  @media (max-width: 1440px) {
    width: 375px;
    height: 478px;
  }
  @media (max-width: 400px) {
    width: 100%;
  }
`;
