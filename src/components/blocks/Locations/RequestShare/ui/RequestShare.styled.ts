"use client";

import styled from "styled-components";

export const Section = styled.section`
  width: 100%;
  padding: 0 20px;
  display: flex;
  justify-content: center;
  margin-top: 120px;
  margin-bottom: 100px;
`;

export const Container = styled.div`
  max-width: 1200px;
  width: 100%;
  border-radius: 32px;
  background: linear-gradient(
    253deg,
    rgb(236, 194, 230) 0%,
    rgb(245, 207, 232) 13.5135%,
    rgb(252, 231, 242) 26.5766%,
    rgb(255, 248, 253) 45.9459%,
    rgb(255, 246, 251) 65.7658%,
    rgb(250, 228, 241) 77.027%,
    rgb(249, 218, 234) 100%
  );
  padding: 80px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 32px;
`;

export const Title = styled.h2`
  font-family: var(--noheim-medium);
  font-size: 48px;
  font-weight: 500;
  line-height: 1.2em;
  color: #1f1f1f;
  max-width: 800px;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

export const Description = styled.p`
  font-family: var(--geist-regular);
  font-size: 16px;
  line-height: 1.5em;
  color: #1f1f1f;
  max-width: 600px;
  margin: 0;
  opacity: 0.8;
`;

export const ButtonCircle = styled.span`
  width: 32px;
  height: 32px;
  background-color: #ffffff;
  border-radius: 50%;
  position: absolute;
  left: 6px;
  top: 50%;
  transform: translateY(-50%);
  transition: all 0.6s cubic-bezier(0.25, 1, 0.5, 1);
`;

export const ButtonText = styled.span`
  position: relative;
  z-index: 1;
  font-family: var(--geist-regular);
  font-size: 16px;
  font-weight: 500;
  color: #ffffff;
  margin-left: 32px;
  transition: transform 0.5s cubic-bezier(0.25, 1, 0.5, 1);
`;

export const ActionButton = styled.button`
  position: relative;
  height: 44px;
  padding: 0 24px 0 12px;
  background-color: #ed327e;
  border: none;
  border-radius: 22px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  min-width: 280px;

  &:hover ${ButtonCircle} {
    left: calc(100% - 38px);
  }

  &:hover ${ButtonText} {
    transform: translateX(-22px);
  }
`;
