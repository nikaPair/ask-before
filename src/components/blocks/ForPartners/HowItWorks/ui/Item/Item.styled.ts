"use client";
import styled from "styled-components";

export const ItemWrapper = styled.button`
  width: 100%;
  height: 100%;
  display: flex;
  gap: 16px;
  padding: 16px;
  cursor: pointer;
  border-radius: 16px;
  transition: background-color 0.2s ease;
  background: transparent;
  border: none;
  text-align: left;
  align-items: flex-start;

  &:hover {
    background-color: #f4f6f9;
  }

  &:focus-visible {
    outline: 2px solid rgba(2, 6, 23, 0.2);
    outline-offset: 2px;
  }
`;

export const NumberWrapper = styled.div`
  position: relative;
  width: 38px;
  height: 40px;
`;
export const Number = styled.p`
  position: absolute;
  top: 55%;
  left: 45%;
  transform: translate(-50%, -50%);
  font-family: var(--geist-regular);
  font-size: 12px;
  font-weight: 500;
  color: #000000;
`;
export const ItemDescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
export const ItemDescription = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: #1a1d21;
  letter-spacing: 0em;
  line-height: 1.4em;
  font-family: var(--geist-regular);
  white-space: pre-wrap;
  word-break: break-word;
  word-wrap: break-word;
`;
export const ItemTitle = styled.p`
  font-size: 24px;
  font-weight: 700;
  color: #020617;
  font-family: var(--mulish-regular);
  line-height: 1.2em;
`;
