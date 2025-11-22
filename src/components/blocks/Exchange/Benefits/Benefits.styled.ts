"use client";
import styled from "styled-components";

export const BenefitsWrapper = styled.section`
  width: 100%;
  background-color: #ffffff;
  padding: 100px 0;
`;

export const BenefitsContainer = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h2`
  font-family: var(--noheim-medium);
  font-size: 32px;
  line-height: 1.1;
  text-align: center;
  font-weight: 500;
  color: #262628;
  margin-bottom: 64px;
  max-width: 800px;

  @media (max-width: 768px) {
    font-size: 32px;
    margin-bottom: 40px;
  }
`;

export const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 400px 1fr;
  gap: 24px;
  width: 100%;
  align-items: center;

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }

  @media (max-width: 768px) {
    gap: 16px;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  height: 100%;
  justify-content: space-between;

  @media (max-width: 1024px) {
    flex-direction: row;
    width: 100%;
    justify-content: center;
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Card = styled.div`
  background: #f6f6f8;
  border-radius: 32px;
  padding: 16px 24px 24px;
  display: flex;
  width: 100%;
  max-width: 368px;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 24px;
  height: 224px;
  justify-content: center;
  @media (max-width: 1024px) {
    max-width: 100%;
  }
  @media (max-width: 900px) {
    width: 100%;
    max-width: 100%;
  }
`;

export const IconWrapper = styled.div`
  width: 48px;
  height: 48px;
  background: #ffffff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.04);
`;

export const CardText = styled.p`
  font-family: var(--noheim-medium);
  font-size: 22px;
  font-weight: 500;
  line-height: 1.4;
  color: #262628;
  margin: 0;

  strong {
    color: #ed327e;
    font-weight: inherit;
  }
`;

export const CenterImage = styled.div`
  width: 100%;
  height: 500px;
  border-radius: 32px;
  overflow: hidden;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: 768px) {
    height: 400px;
  }
`;
