"use client";
import { motion } from "framer-motion";
import styled from "styled-components";

export const BuiltWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 120px;
  overflow: hidden;
`;
export const BuiltContainer = styled(motion.div)`
  max-width: 1200px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 40px;
  @media (max-width: 1440px) {
    padding: 0 20px;
  }
`;

export const TopSection = styled(motion.div)`
  display: flex;
  max-width: 647px;
  width: 100%;
  margin: 0 auto;
  text-align: center;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
  gap: 16px;
  .icon-wrapper {
    width: 32px;
    height: 32px;
    padding: 6px;
    background-color: rgb(2, 6, 23);
    border-radius: 50%;
    display: flex;
  }
  .first-section {
    padding-right: 10px;
    display: flex;
    align-items: center;
    gap: 12px;
    background-color: rgb(248, 250, 252);
    border-radius: 60px;
    .icon-text {
      font-size: 14px;
      font-weight: 400;
      font-family: var(--mulish-regular);
      color: rgb(2, 6, 23);
    }
  }
  .title {
    font-size: 62px;
    font-family: var(--noheim-medium);
    color: var(--primary);
    font-weight: 400;
    line-height: 1.2em;
    letter-spacing: 0em;

    @media (max-width: 1440px) {
      font-size: 48px;
    }
    @media (max-width: 768px) {
      font-size: 32px;
    }
  }
  .description {
    font-size: 18px;
    font-family: var(--geist-regular);
    color: var(--primary);
    font-weight: 400;
    line-height: 1.4em;
    letter-spacing: 0em;
    paragraph-spacing: 20px;
    text-align: center;
  }
`;

export const BottomSection = styled.div`
  display: flex;
  gap: 16px;
  @media (max-width: 990px) {
    flex-direction: column;
    gap: 16px;
  }
`;
export const Item = styled.div`
  background-color: #f5f6fa;
  border-radius: 16px;
  flex-flow: column;
  flex: 1 0 0;
  align-items: center;
  gap: 10px;
  width: 1px;
  padding: 16px;
  display: flex;
  @media (max-width: 990px) {
    width: 100%;
  }
`;
export const ItemTitle = styled.p`
  font-size: 24px;
  font-weight: 700;
  color: #020617;
  font-family: var(--mulish-regular);
  line-height: 1.5em;
  text-align: center;
`;
export const ItemDescription = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: #020617;
  letter-spacing: 0em;
  line-height: 1.4em;
  font-family: var(--geist-regular);
  text-align: center;
`;
export const ItemSpan = styled.span`
  color: #ed327e;
`;
