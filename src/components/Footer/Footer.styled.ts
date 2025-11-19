"use client";
import styled from "styled-components";
import Link from "next/link";

export const FooterWrapper = styled.footer`
  width: 100%;
  background-color: #ed327e;
  padding: 90px 16px 120px;
  color: #fff;
  display: flex;
  justify-content: center;
  margin-top: 120px;
`;

export const FooterContainer = styled.div`
  max-width: 1200px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 140px;
`;

export const TopSection = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 40px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 32px;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex: 1 0 0;
`;

export const FooterLink = styled(Link)`
  font-family: var(--geist-regular);
  font-size: 16px;
  color: #fff;
  text-decoration: none;
  transition: opacity 0.2s ease;
`;

export const EmailLink = styled.a`
  font-family: var(--geist-regular);
  font-size: 16px;
  color: #fff;
  text-decoration: none;
  transition: opacity 0.2s ease;

  text-align: right;
  @media (max-width: 768px) {
    text-align: left;
  }
`;

export const BottomSection = styled.div`
  padding-top: 40px;
`;

export const Copyright = styled.p`
  font-family: var(--geist-regular);
  font-size: 16px;
  color: #fff;
`;
