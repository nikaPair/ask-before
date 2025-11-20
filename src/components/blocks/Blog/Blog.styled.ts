"use client";
import styled from "styled-components";
import { motion } from "framer-motion";

export const BlogSection = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 150px 20px 0px;
  background-color: #fff;
`;

export const BlogContainer = styled.div`
  max-width: 1200px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

export const Header = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Title = styled.h1`
  font-family: var(--noheim-medium);
  font-size: 36px;
  font-weight: 400;
  color: var(--primary);
  margin: 0;

  @media (max-width: 768px) {
    font-size: 36px;
  }
`;

export const Subtitle = styled.p`
  font-family: var(--geist-regular);
  font-size: 16px;
  color: var(--primary);
  margin: 0;
  max-width: 600px;
  line-height: 1.5;
`;

export const Grid = styled.div`
  display: grid;
  gap: 20px;
  grid-auto-rows: minmax(0px, 1fr);
  grid-template-columns: repeat(3, minmax(50px, 1fr));
  width: 100%;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const Card = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 20px;
  cursor: pointer;
  group: hover;
`;

export const ImageWrapper = styled.div`
  width: 100%;
  aspect-ratio: 16/9;
  border-radius: 12px;
  overflow: hidden;
  background-color: #f5f5f5;
  position: relative;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const CardTitle = styled.h3`
  font-family: var(--geist-medium);
  font-size: 20px;
  line-height: 1.4;
  color: var(--primary);
  margin: 0;
  font-weight: 500;
`;

export const Date = styled.span`
  font-family: var(--geist-regular);
  font-size: 16px;
  color: var(--primary);
`;
