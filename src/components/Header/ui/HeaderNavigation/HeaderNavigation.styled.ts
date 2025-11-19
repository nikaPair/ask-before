"use client";
import { motion } from "motion/react";
import styled from "styled-components";
import Link from "next/link";

export const NavList = styled.ul`
  display: flex;
  gap: 32px;
  align-items: center;
  @media (max-width: 750px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  align-items: center;
`;

const MotionNextLink = motion.create(Link);

export const NavLink = styled(MotionNextLink)`
  display: inline-flex;
  align-items: center;
  height: 100%;
  font-size: 16px;
  font-family: var(--geist-regular);
  color: var(--primary);
  white-space: pre-wrap;
`;

export const PartnerLink = styled(NavLink)`
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
