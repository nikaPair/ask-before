"use client";
import styled from "styled-components";

export const BurgerButton = styled.button<{ $isShrunk?: boolean }>`
  display: ${({ $isShrunk }) => ($isShrunk ? "flex" : "none")};
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
  color: #1a1d21;
  align-items: center;
  justify-content: center;

  @media (max-width: 1130px) {
    display: flex;
  }
`;
