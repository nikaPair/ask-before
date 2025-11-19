"use client";
import styled from "styled-components";

export const BottomSection = styled.div`
  display: flex;
  gap: 16px;
  @media (max-width: 990px) {
    flex-direction: column;
    gap: 16px;
  }
`;
export const Item = styled.div`
  background-color: #f5f6fa;
  border-radius: 16px;
  flex-flow: column;
  flex: 1 0 0;
  align-items: center;
  gap: 10px;
  width: 1px;
  padding: 16px;
  display: flex;
  @media (max-width: 990px) {
    width: 100%;
  }
`;
export const ItemTitle = styled.p`
  font-size: 24px;
  font-weight: 700;
  color: #020617;
  font-family: var(--mulish-regular);
  line-height: 1.5em;
  text-align: center;
  margin: 0;
`;
export const ItemDescription = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: #020617;
  letter-spacing: 0em;
  line-height: 1.4em;
  font-family: var(--geist-regular);
  text-align: center;
  margin: 0;
`;
export const ItemSpan = styled.span`
  color: #ed327e;
`;
