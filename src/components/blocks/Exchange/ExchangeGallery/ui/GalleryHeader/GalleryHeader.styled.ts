import styled from "styled-components";

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  text-align: center;
  max-width: 800px;
`;

export const MainTitle = styled.h2`
  font-family: var(--noheim-medium);
  font-size: 56px;
  color: var(--primary);
  line-height: 1.1;
  font-weight: 500;

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
