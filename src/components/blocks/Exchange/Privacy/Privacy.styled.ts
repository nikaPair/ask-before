import styled from "styled-components";

export const Section = styled.section`
  width: 100%;
  padding: 100px 0;
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
  color: var(--primary);
  line-height: 1.1;
  font-weight: 500;

  @media (max-width: 768px) {
    font-size: 36px;
  }
`;

export const Grid = styled.div`
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
  background-color: var(--white);
  border-radius: 24px;
  overflow: hidden;
  border: 1px solid rgba(0, 0, 0, 0.05);
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.02);
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 200px;
  background-color: #f9f9f9;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 120px;
    height: 120px;
    object-fit: contain;
  }
`;

export const CardContent = styled.div`
  padding: 32px;
  padding-top: 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const CardTitle = styled.h3`
  font-family: var(--noheim-medium);
  font-size: 24px;
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

export const BottomRow = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
  width: 100%;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const SmallCard = styled(Card)`
  padding: 32px;
  gap: 16px;
`;

export const IconCircle = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background-color: #f3f4f6;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 8px;

  svg {
    width: 24px;
    height: 24px;
    color: var(--primary);
  }
`;
