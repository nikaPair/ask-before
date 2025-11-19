"use client";
import { motion } from "motion/react";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

export const ActionsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const MotionLink = motion.create(Link);

export const ContactLink = styled(MotionLink)`
  font-size: 16px;
  font-family: var(--geist-regular);
  color: var(--primary);
  text-decoration: none;
  margin-right: 8px;
  cursor: pointer;
  display: inline-flex;
  overflow: hidden;
  height: 20px; /* Adjust based on font size/line height */
  align-items: center;

  @media (max-width: 750px) {
    display: none;
  }
`;

export const LangButton = styled.div`
  border-radius: 1000px;
  background-color: rgb(246, 246, 248);
  display: flex;
  gap: 5px;
  padding: 8px 12px 8px 8px;
  align-items: center;
  cursor: pointer;
  @media (max-width: 750px) {
    display: none;
  }
`;

export const FlagIcon = styled(Image)`
  width: 24px;
  object-fit: contain;
  object-position: center;
  height: 24px;
`;

export const LangText = styled.p`
  font-size: 16px;
  font-family: var(--geist-regular);
  color: var(--primary);
`;

export const AuthButton = styled.button`
  border-radius: 8px;
  border: 0.5px solid rgb(26, 29, 33);
  display: flex;
  align-items: center;
  gap: 2px;
  padding: 10px 14px;
  background-color: var(--white);
  height: 43px;
  box-sizing: border-box;
`;

export const AuthText = styled.p`
  font-size: 16px;
  font-family: var(--geist-regular);
  color: var(--primary);
`;

export const AuthIcon = styled.div`
  width: 14px;
  height: 14px;
`;
