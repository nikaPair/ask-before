"use client";
import styled from "styled-components";
import Image from "next/image";

export const ContactWrapper = styled.div`
  width: 100%;
  max-width: 900px;
  background-color: #020617;
  border-radius: 16px;
  padding: 32px 62px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-top: 35px;
  color: #fff;

  @media (max-width: 768px) {
    padding: 40px 24px;
  }
`;

export const AvatarStack = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 24px;
`;

export const Avatar = styled(Image)`
  width: 42px;
  height: 42px;
  border-radius: 50%;
  border: 2px solid #020617;
  margin-left: -12px;
  &:first-child {
    margin-left: 0;
  }
  object-fit: cover;
`;

export const Title = styled.h3`
  font-family: var(--mulish-regular);
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 16px;
`;

export const Description = styled.p`
  font-family: var(--mulish-regular);
  font-size: 16px;
  margin-bottom: 20px;
  line-height: 1.5;
`;

export const Form = styled.form`
  display: flex;
  gap: 16px;
  width: 100%;
  padding: 16px 0;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Input = styled.input`
  flex: 1;
  background-color: #1e293b;
  border-radius: 8px;
  border: none;
  padding: 12px;
  color: #fff;
  font-family: var(--geist-regular);
  font-size: 16px;
  outline: none;
  transition: border-color 0.2s ease;

  &::placeholder {
    color: rgba(255, 255, 255, 0.4);
  }

  &:focus {
    border-color: rgba(255, 255, 255, 0.3);
  }
`;

export const SubmitButton = styled.button`
  background-color: #fff;
  color: #020617;
  max-width: 228px;
  width: 100%;
  max-height: 56px;
  height: 100%;
  border: none;
  border-radius: 12px;
  font-family: var(--geist-medium);
  font-size: 16px;
  cursor: pointer;
  transition: transform 0.2s ease;
  @media (max-width: 768px) {
    width: 100%;
    height: 45px;
    max-width: unset;
  }
`;
