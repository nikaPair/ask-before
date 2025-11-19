"use client";
import styled from "styled-components";
import Image from "next/image";

export const LeftColumn = styled.div`
  flex: 1 1 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border-radius: 16px;
  padding: 40px;
  box-shadow: 0 7px 30px #0000000a;

  @media (max-width: 768px) {
    padding: 20px;
    width: 100%;
  }
`;

export const StyledImage = styled(Image)`
  width: 100%;
  height: auto;
  object-fit: contain;
  max-width: 500px;
  border-radius: inherit;
`;
