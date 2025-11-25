import styled from "styled-components";

export const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  color: var(--primary);
  width: 287px;

  @media (max-width: 1025px) {
    width: 100%;
  }
`;

export const SectionTitle = styled.h3`
  font-family: var(--noheim-medium);
  font-size: 36px;
  font-weight: 500;
  line-height: 1.1;
  color: var(--primary);

  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

export const Description = styled.p`
  font-family: var(--geist-regular);
  font-size: 16px;
  line-height: 1.5;
  color: var(--primary);
  opacity: 0.8;
`;

export const Button = styled.button`
  background-color: #ed327e;
  color: var(--white);
  padding: 14px 28px;
  border-radius: 8px;
  border: none;
  font-family: var(--geist-medium);
  font-size: 16px;
  cursor: pointer;
  align-self: flex-start;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.9;
  }
`;
