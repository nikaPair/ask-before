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

  @media (max-width: 750px) {
    .logo-link {
      width: 160px !important;
    }
  }
`;
export const HeaderContent = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
      box-shadow: rgba(216, 218, 227, 0.25) 0px 8px 8px 0px;
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
  align-items: center;
  @media (max-width: 750px) {
    display: none;
  }
`;
export const HeaderLink = styled.li`align-items: center;`;
const MotionNextLink = motion.create(Link);
export const HeaderLinkItem = styled(MotionNextLink)`
  display: inline-flex;
  align-items: center;
  height: 100%;
  font-size: 16px;
  font-family: var(--geist-regular);
  color: var(--primary);
  white-space: pre-wrap;

`;
export const PartnerLinkItem = styled(HeaderLinkItem)`
  padding: 10px 12px;
  border-radius: 16px;
  font-family: var(--geist-medium);
  font-size: 15px;
  color: #ed327e;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: rgb(246, 246, 248);
  }
`;
export const HeaderLinkTextWrapper = styled.span`
  position: relative;
  display: inline-flex;
  align-items: center;
  overflow: hidden;
  height: 1.2em;
  line-height: 1.2;
`;
export const HeaderLinkTextLine = styled(motion.span)`
  display: inline-flex;
  align-items: center;
  width: 100%;
  line-height: 1.2;
  will-change: transform;

  &[data-line="clone"] {
    position: absolute;
    left: 0;
    top: 100%;
  }
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
  gap: 5px;
  padding: 8px 12px 8px 8px;
  align-items: center;
  cursor: pointer;
  @media (max-width: 750px) {
    display: none;
  } 
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