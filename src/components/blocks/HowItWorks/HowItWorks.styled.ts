import styled from "styled-components";

export const Section = styled.section`
  width: 100%;
  padding: 50px 0 0 0;
  background-color: var(--white);
  display: flex;
  justify-content: center;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  padding: 0 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 60px;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  text-align: center;
  max-width: 800px;
`;

export const Title = styled.h2`
  font-family: var(--noheim-medium);
  font-size: 56px;
  font-weight: 500;
  color: var(--primary);
  line-height: 1.1;

  @media (max-width: 768px) {
    font-size: 36px;
  }
`;

export const Subtitle = styled.p`
  font-family: var(--geist-regular);
  font-size: 18px;
  color: var(--primary);
  opacity: 0.8;
`;

export const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  width: 100%;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  background-color: var(--white);
  border-radius: 24px;
  overflow: hidden;
  border: 1px solid rgba(0, 0, 0, 0.05);
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.02);
  padding: 24px;
  padding-top: 0;
`;

export const MediaContainer = styled.div<{ $bgColor: string }>`
  width: calc(100% + 48px);
  margin-left: -24px;
  margin-right: -24px;
  height: 240px; /* Default height, can be overridden if needed but 240 seems standard */
  background-color: ${({ $bgColor }) => $bgColor};
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: relative;

  video,
  img {
    height: auto;
    max-width: 350px;
    width: 90%;
    height: 100%;
    object-fit: cover;
    border-radius: 12px;
    position: absolute;
    bottom: -10%;
  }
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: flex-start;
`;

export const NumberBadge = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: var(--primary);
  color: var(--white);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--geist-medium);
  font-size: 16px;
  margin-top: 8px;
`;

export const CardTitle = styled.h3`
  font-family: var(--noheim-medium);
  font-size: 24px;
  font-weight: 400;
  color: var(--primary);
  line-height: 1.2;
`;

export const CardDescription = styled.p`
  font-family: var(--geist-regular);
  font-size: 16px;
  color: var(--primary);
  opacity: 0.7;
  line-height: 1.5;
`;
