"use client";
import { motion } from "motion/react";
import styled from "styled-components";
import Image from "next/image";

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

export const ItemTitle = styled.p`
  font-size: 24px;
  font-weight: 700;
  color: #020617;
  font-family: var(--mulish-regular);
  line-height: 1.5em;
  text-align: center;
  margin: 0;
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
