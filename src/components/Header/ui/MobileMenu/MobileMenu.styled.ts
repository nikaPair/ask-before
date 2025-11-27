"use client";
import styled from "styled-components";
import { motion } from "motion/react";
import Link from "next/link";

export const MenuContainer = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 200;
  padding: 0;

  @media (min-width: 1131px) {
    display: none;
  }
`;

export const MenuContent = styled.div`
  background-color: var(--white);
  width: 100%;
  height: 100%;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 60px;
  overflow-y: auto;
`;

export const MenuHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 20px;
`;

export const MenuLogo = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
  color: #1a1d21;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    opacity: 0.7;
  }
`;

export const MenuItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const MenuLink = styled(Link)`
  font-size: 24px;
  color: var(--primary, #1a1d21);
  text-decoration: none;
  font-family: var(--geist-regular);
  display: flex;
  align-items: center;
  gap: 8px;

  &:hover {
    color: #ed327e;
  }
`;

export const StarIcon = styled.span`
  font-size: 24px;
`;

export const MenuDivider = styled.div`
  height: 1px;
  background-color: #f0f0f0;
  width: 100%;
`;

export const LangContainer = styled.div`
  display: flex;
  gap: 12px;
  justify-content: center;
  margin-top: auto;
`;

export const LangOption = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 8px 16px;
  background-color: #f6f6f8;
  border-radius: 100px;
  font-size: 16px;
  font-family: var(--geist-regular);
  color: var(--primary, #1a1d21);
  cursor: pointer;

  &:hover {
    background-color: #e5e7eb;
  }

  svg {
    width: 20px;
    height: 20px;
    border-radius: 50%;
  }
`;

export const SignInButton = styled.button`
  width: 100%;
  background-color: #ed327e;
  color: white;
  border: none;
  border-radius: 12px;
  padding: 16px;
  font-size: 18px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s;
  font-family: var(--geist-medium);

  &:hover {
    background-color: #d62f71;
  }
`;
