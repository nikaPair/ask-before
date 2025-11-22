"use client";
import styled from "styled-components";

export const HeroWrapper = styled.div`
  width: 100%;
  background-image: url("/images/Exchange/hero-bg.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export const HeroContainer = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 160px 0;
`;

export const HeroContent = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  gap: 64px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 32px 0;
`;

export const ScrollWrapper = styled.div`
  display: flex;
  gap: 62px;
  align-items: flex-start;
  position: relative;
  width: 100%;
  justify-content: center;
  scroll-snap-align: center;
`;

export const ScrollList = styled.ul`
  max-width: 540px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding-top: 60px;
  padding-bottom: 60px;
`;
