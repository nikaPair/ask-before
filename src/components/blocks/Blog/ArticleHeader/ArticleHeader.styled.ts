"use client";
import styled from "styled-components";
import Link from "next/link";
import { motion } from "framer-motion";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 170px 0 60px;
  max-width: 1000px;
  margin: 0 auto;

  @media (max-width: 800px) {
    padding: 170px 0 0;
  }
`;

export const BackLink = styled(Link)`
  text-decoration: none;
  margin-bottom: 32px;
  display: inline-block;
`;

export const BackLinkContent = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  color: var(--primary);
`;

export const ArrowContainer = styled.div`
  position: relative;
  width: 10px;
  height: 16px;
  overflow: hidden;
`;

export const Arrow = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Text = styled.span`
  font-family: var(--geist-regular);
  font-size: 16px;
  line-height: 20px;
  color: var(--primary);
`;

export const Title = styled.h1`
  font-family: var(--noheim-medium);
  font-size: 36px;
  line-height: 1.2;
  letter-spacing: 0.03em;
  text-align: center;
  font-weight: 500;
  color: var(--primary);
  margin: 0 0 16px;
  max-width: 800px;

  @media (max-width: 800px) {
    font-size: 20px;
  }
`;

export const Date = styled.span`
  font-family: var(--geist-regular);
  font-size: 16px;
  color: var(--primary);
  margin-bottom: 30px;
`;

export const ImageWrapper = styled.div`
  width: 100%;
  border-radius: 24px;
  overflow: hidden;
  aspect-ratio: 16/9;
  max-width: 800px;
  background-color: #f5f5f5;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top;
  }
`;
