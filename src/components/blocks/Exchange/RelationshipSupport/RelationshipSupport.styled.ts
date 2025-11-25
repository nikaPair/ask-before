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
  gap: 48px;
`;

export const Heading = styled.h2`
  font-family: var(--noheim-medium);
  font-size: 52px;
  color: var(--primary);
  line-height: 1.2;
  text-align: center;
  font-weight: 500;
  max-width: 1200px;

  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

export const InlineBlock = styled.span`
  display: inline-flex;
  align-items: center;
  vertical-align: middle;
  margin: 0 12px;
  height: 64px;
  background-color: #f3f4f6;
  border-radius: 32px;
  padding: 0 16px;

  @media (max-width: 768px) {
    height: 48px;
    padding: 0 12px;
    margin: 0 8px;
  }
`;

export const AnimationWrapper = styled.div`
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    width: 32px;
    height: 32px;
  }
`;

export const Button = styled.button`
  background-color: #ed327e;
  color: var(--white);
  padding: 16px 32px;
  border-radius: 12px;
  border: none;
  font-family: var(--geist-medium);
  font-size: 18px;
  cursor: pointer;
  transition: opacity 0.2s;
  margin-top: 16px;

  &:hover {
    opacity: 0.9;
  }
`;
