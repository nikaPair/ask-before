"use client";
import styled from "styled-components";
import { motion } from "motion/react";
import Link from "next/link";

export const MenuContainer = styled(motion.div)`
  position: absolute;
  top: 74px;
  right: 15px;
  width: 100%;
  max-width: 320px;
  z-index: 99;
  padding-right: 0;

  @media (min-width: 1131px) {
    display: none;
  }
`;

export const MenuContent = styled.div`
  background-color: var(--white);
  border-radius: 24px;
  padding: 24px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const MenuLogo = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
`;

export const MenuItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const MenuLink = styled(Link)`
  font-size: 16px;
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
  font-size: 16px;
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
  padding: 14px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s;
  font-family: var(--geist-medium);

  &:hover {
    background-color: #d62f71;
  }
`;
