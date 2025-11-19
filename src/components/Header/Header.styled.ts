"use client";
import { motion } from "motion/react";
import styled from "styled-components";

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
