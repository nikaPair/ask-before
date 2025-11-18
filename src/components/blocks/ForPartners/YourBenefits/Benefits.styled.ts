"use client";
import { motion } from "motion/react";
import Image from "next/image";
import styled from "styled-components";

export const BenefitsWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 120px;
  overflow: hidden;
`;
export const BenefitsContainer = styled(motion.div)`
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
  flex-direction: column;
  gap: 32px;
`;
export const ItemsWrapper = styled.div`
  flex: none;
  grid-template-rows: repeat(1, min-content);
  grid-template-columns: repeat(3, minmax(50px, 1fr));
  grid-auto-rows: min-content;
  justify-content: center;
  gap: 32px;
  width: 100%;
  max-width: 1200px;
  height: min-content;
  padding: 0;
  display: grid;
  position: relative;
  overflow: visible;

  @media (max-width: 1440px) {
    grid-template-columns: repeat(2, minmax(50px, 1fr));
    gap: 24px;
    height: 848px;
  }
  @media (max-width: 991px) {
    grid-template-rows: repeat(2, min-content);
    grid-template-columns: repeat(2, minmax(50px, 1fr));
    padding: 0 0 48px;
  }
  @media (max-width: 768px) {
    grid-template-columns: repeat(1, minmax(50px, 1fr));
    height: auto;
  }
`;
export const Item = styled(motion.div)`
  background-color: #fff;
  border-radius: 16px;
  flex-flow: column;
  flex: none;
  place-content: center;
  place-self: center;
  align-items: center;
  gap: 0;
  width: 100%;
  height: auto;
  padding: 0;
  display: flex;
  position: relative;
  box-shadow: 0 7px 30px #0000000a;
`;

export const ItemTop = styled.div`
  will-change: transform;
  background-color: #f4f2f3;
  border-radius: 12px;
  flex-flow: column;
  flex: none;
  place-content: center;
  align-items: center;
  gap: 10px;
  width: 100%;
  height: 280px;
  padding: 24px;
  display: flex;
  position: relative;
  overflow: hidden;
`;
export const ItemCenter = styled.div`
  flex: none;
  width: 100%;
  height: 180px;
  position: relative;
  overflow: visible;
  background-color: #fff;
  border-radius: 24px;
  padding: 16px;
`;
export const ItemBottom = styled.div`
  flex-flow: column;
  flex: none;
  place-content: center;
  align-items: start;
  gap: 12px;
  width: 100%;
  height: min-content;
  padding: 16px 24px 24px;
  display: flex;
  position: relative;
  overflow: hidden;
`;
export const ItemDesxription = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: #1a1d21;
  letter-spacing: 0em;
  line-height: 1.4em;
  font-family: var(--mulish-regular);
  white-space: pre-wrap;
  word-break: break-word;
  word-wrap: break-word;
`;

export const PrivilegesWrapper = styled.div`
  display: flex;
  gap: 32px;
  width: 100%;
  @media (max-width: 1440px) {
    flex-direction: column;
  }
  @media (max-width: 768px) {
    height: 400px;
  }
`;
export const PrivilegesItem = styled(motion.div)`
  flex-flow: column;
  flex: none;
  place-content: flex-start center;
  align-items: flex-start;
  gap: 12px;
  width: 100%;
  height: min-content;
  padding: 24px;
  display: flex;
  position: relative;
  overflow: hidden;
  box-shadow: 0 7px 30px #0000000a;
  border-radius: 16px;
  flex: 1 0 0;
`;
export const FirstCenter = styled.video`
  cursor: auto;
  width: 100%;
  height: 100%;
  border-radius: 0px;
  display: block;
  object-fit: cover;
  background-color: rgba(0, 0, 0, 0);
  object-position: 50% 50%;
`;
export const SecondCenter = styled.div`
  display: flex;
  padding: 16px;
  gap: 10%;
  width: 100%;
  height: 100%;
  @media (max-width: 500px) {
    padding: 0;
  }
`;
export const SecontSVG = styled.div`
  position: relative;
  width: 62px;
  height: 62px;
  border-radius: 50%;
  background-color: #fff;
  border: 1px solid #e6e7ed;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  --border-top-width: 0.5px;
  --border-right-width: 0.5px;
  --border-bottom-width: 0.5px;
  --border-left-width: 0.5px;
  --border-color: #e6e7ed;
  --border-style: solid;

  &::after {
    content: "";
    border-width: var(--border-top-width, 0) var(--border-right-width, 0)
      var(--border-bottom-width, 0) var(--border-left-width, 0);
    border-color: var(--border-color, none);
    border-style: var(--border-style, none);
    box-sizing: border-box;
    border-radius: inherit;
    pointer-events: none;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }
`;

export const SecontSVGInner = styled.div<{ $isHovered: boolean }>`
  position: relative;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #dfe0e6;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

export const SecontIcon = styled.div<{
  $variant: "primary" | "secondary";
  $isHovered: boolean;
}>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition:
    transform 0.3s ease,
    opacity 0.3s ease;
  transform: ${({ $variant, $isHovered }) =>
    $variant === "primary"
      ? `translateY(${$isHovered ? "-120%" : "0"})`
      : `translateY(${$isHovered ? "0" : "120%"})`};
  opacity: ${({ $variant, $isHovered }) =>
    $variant === "primary" ? ($isHovered ? 0 : 1) : $isHovered ? 1 : 0};

  svg {
    width: 24px;
    height: 24px;
  }
`;
export const SecontTextContainer = styled.div`
  flex-flow: column;
  flex: none;
  place-content: flex-start center;
  align-items: flex-start;
  gap: 3px;
  width: 70%;
  height: min-content;
  padding: 0;
  display: flex;
`;
export const Title = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: #1a1d21;
  letter-spacing: 0em;
  line-height: 1.4em;
  font-family: var(--mulish-regular);
  white-space: pre-wrap;
  word-break: break-word;
  word-wrap: break-word;
`;
export const Percentage = styled.p`
  font-size: 24px;
  font-weight: 700;
  color: #1a1d21;
  letter-spacing: 0em;
  line-height: 1.4em;
  font-family: var(--mulish-regular);
  white-space: pre-wrap;
  word-break: break-word;
  word-wrap: break-word;
`;
export const Description = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: #94a3b8;
  letter-spacing: 0em;
  line-height: 1.4em;
  font-family: var(--mulish-regular);
  white-space: pre-wrap;
  word-break: break-word;
  word-wrap: break-word;
`;
export const ThirdCenter = styled.div`
  will-change: var(--framer-will-change-override, transform);
  flex-flow: column;
  place-content: center;
  align-items: center;
  gap: 25px;
  width: 100%;
  height: 100%;
  display: flex;
  position: relative;
  justify-content: start;
  overflow: hidden;
  padding: 16px;
`;
export const ThirdTitle = styled.h3<{ $isHovered: boolean }>`
  font-size: 16px;
  font-weight: 400;
  color: #1a1d21;
  letter-spacing: 0em;
  line-height: 1.4em;
  font-family: var(--mulish-regular);
  white-space: pre-wrap;
  word-break: break-word;
  word-wrap: break-word;
  transform: translateY(${({ $isHovered }) => ($isHovered ? "-5px" : "0")});
  transition: transform 0.3s ease;
`;
export const ThirdImage = styled(Image)<{ $isHovered: boolean }>`
  object-fit: contain;
  width: ${({ $isHovered }) => ($isHovered ? "65px" : "115px")};
  height: ${({ $isHovered }) => ($isHovered ? "65px" : "50px")};
  border-radius: ${({ $isHovered }) => ($isHovered ? "15px" : "0px")};
`;
