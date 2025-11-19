"use client";
import styled from "styled-components";
import Image from "next/image";

export const ActionsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const LangButton = styled.div`
  border-radius: 1000px;
  background-color: rgb(246, 246, 248);
  display: flex;
  gap: 5px;
  padding: 8px 12px 8px 8px;
  align-items: center;
  cursor: pointer;
  @media (max-width: 750px) {
    display: none;
  }
`;

export const FlagIcon = styled(Image)`
  width: 24px;
  object-fit: contain;
  object-position: center;
  height: 24px;
`;

export const LangText = styled.p`
  font-size: 16px;
  font-family: var(--geist-regular);
  color: var(--primary);
`;

export const AuthButton = styled.button`
  border-radius: 8px;
  border: 0.5px solid rgb(26, 29, 33);
  display: flex;
  align-items: center;
  gap: 2px;
  padding: 10px 14px;
  background-color: var(--white);
`;

export const AuthText = styled.p`
  font-size: 16px;
  font-family: var(--geist-regular);
  color: var(--primary);
`;

export const AuthIcon = styled.div`
  width: 14px;
  height: 14px;
`;
