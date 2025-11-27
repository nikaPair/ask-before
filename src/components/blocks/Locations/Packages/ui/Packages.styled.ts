"use client";

import styled from "styled-components";
import { motion } from "framer-motion";

export const Section = styled.section`
  width: 100%;
  padding: 50px 0;
  display: flex;
  justify-content: center;
  overflow: hidden;

  @media (max-width: 800px) {
    padding: 250px 0;
  }
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  padding: 0 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 60px;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 24px;
  max-width: 800px;
`;

export const Title = styled.h2`
  font-family: var(--noheim-medium);
  font-size: 56px;
  font-weight: 500;
  color: #1f1f1f;
  line-height: 1.1;

  @media (max-width: 768px) {
    font-size: 36px;
  }
`;

export const Subtitle = styled.p`
  font-family: var(--geist-regular);
  font-size: 18px;
  color: #1f1f1f;
  opacity: 0.8;
  line-height: 1.5;
`;

export const SliderWrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  overflow: hidden;
`;

export const SliderTrack = styled(motion.div)`
  display: flex;
  gap: 10px;
  width: max-content;
`;

export const Card = styled.div`
  width: 282px;
  background-color: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.05);
  border-radius: 24px;
  padding: 24px;
  height: fit-content;
  display: flex;
  flex-direction: column;
  gap: 24px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.02);
  flex-shrink: 0;

  @media (max-width: 1400px) {
    min-width: 564px;
    width: 564px;
  }

  @media (max-width: 1248px) {
    min-width: calc((100vw - 72px) / 2);
    width: calc((100vw - 72px) / 2);
  }

  @media (max-width: 800px) {
    min-width: calc(100vw - 48px);
    width: calc(100vw - 48px);
  }
`;

export const CardTitle = styled.h3`
  font-family: var(--noheim-medium);
  font-size: 20px;
  font-weight: 500;
  color: #1f1f1f;
  padding-bottom: 16px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
`;

export const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  gap: 12px;
  font-family: var(--geist-regular);
  font-size: 16px;
  color: #1f1f1f;
`;

export const CheckIcon = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #ffeef6; /* Light pink background */
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ed327e; /* Pink checkmark color */
  flex-shrink: 0;

  svg {
    width: 10px;
    height: 10px;
  }
`;

export const NavigationButton = styled.button<{ $direction: "left" | "right" }>`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  ${({ $direction }) =>
    $direction === "left" ? "left: 10px;" : "right: 10px;"}
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.2); /* Semi-transparent grey */
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 2;
  transition: background-color 0.3s ease;
  color: white;

  &:hover {
    background-color: rgba(0, 0, 0, 0.3);
  }
`;
