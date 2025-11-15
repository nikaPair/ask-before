"use client";
import { motion } from "motion/react";
import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
export const HeaderContainer = styled(motion.header)`
  width: 100%;
  max-width: 1200px;
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  top: 24px;
  z-index: 100;
  will-change: auto;
  display: flex;
  align-items: center;
  padding: 0 12px;
`;
export const HeaderContent = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 30px 0px;
  border-radius: 12px;
  background-color: var(--white);
  width: 100%;
  height: 66px;
  padding: 12px;
`;
export const HeaderNavigation = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderLinks = styled.ul`
  display: flex;
  gap: 32px;
`;
export const HeaderLink = styled.li``;
export const HeaderLinkItem = styled(Link)`
  font-size: 16px;
  font-family: var(--geist-regular);
  color: var(--primary);
`;

export const LangAndAuth = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;
export const LangSelect = styled.div`
  border-radius: 1000px;
  background-color: rgb(246, 246, 248);
  display: flex;
  gap: 8px;
  padding: 8px 12px 8px 8px;
  align-items: center;
`;
export const SelectIcon = styled(Image)`
  width: 24px;
  object-fit: contain;
  object-position: center;
  height: 24px;
`;
export const SelectText = styled.p`
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
`;
export const AuthButtonText = styled.p`
  font-size: 16px;
  font-family: var(--geist-regular);
  color: var(--primary);
`;
export const AuthButtonIcon = styled.div`
  width: 14px;
  height: 14px;
`;