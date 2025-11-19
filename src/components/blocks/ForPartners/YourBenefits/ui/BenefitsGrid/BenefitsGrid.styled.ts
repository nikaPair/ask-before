"use client";
import styled from "styled-components";

export const ItemsWrapper = styled.div`
  flex: none;
  grid-template-rows: repeat(1, min-content);
  grid-template-columns: repeat(3, minmax(50px, 1fr));
  grid-auto-rows: min-content;
  justify-content: center;
  gap: 32px;
  width: 100%;
  max-width: 1200px;
  height: min-content;
  padding: 0;
  display: grid;
  position: relative;
  overflow: visible;

  @media (max-width: 1440px) {
    grid-template-columns: repeat(2, minmax(50px, 1fr));
    gap: 24px;
    height: 848px;
  }
  @media (max-width: 991px) {
    grid-template-rows: repeat(2, min-content);
    grid-template-columns: repeat(2, minmax(50px, 1fr));
    padding: 0 0 48px;
  }
  @media (max-width: 768px) {
    grid-template-columns: repeat(1, minmax(50px, 1fr));
    height: auto;
  }
`;

export const BottomSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;
