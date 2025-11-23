"use client";
import styled from "styled-components";

export const StandardsWrapper = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 100px 0 0 0;
  background-color: #ffffff;
`;

export const StandardsContainer = styled.div`
  max-width: 1200px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding: 0 20px;
`;

export const Title = styled.h2`
  font-family: var(--noheim-medium);
  font-size: 52px;
  line-height: 1.1;
  text-align: center;
  font-weight: 500;
  color: #262628;
  max-width: 680px;
  margin: 0 auto;

  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

export const CardsGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const TopRow = styled.div`
  display: flex;
  gap: 16px;
  width: 100%;

  @media (max-width: 990px) {
    flex-direction: column;
  }
`;

export const Card = styled.div`
  background-color: #f5f6fa;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 24px;
  flex: 1;
  text-align: center;
`;

export const FullWidthCard = styled(Card)`
  width: 100%;
  flex-direction: row;
  gap: 10px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const CardTitle = styled.p`
  font-size: 24px;
  font-weight: 700;
  color: #020617;
  font-family: var(--mulish-regular);
  line-height: 1.3em;
  margin: 0;
`;

export const CardDescription = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: #020617;
  line-height: 1.4em;
  font-family: var(--geist-regular);
  margin: 0;
`;

export const Highlight = styled.span`
  color: #ed327e;
`;
