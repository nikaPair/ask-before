"use client";
import styled from "styled-components";
import { motion } from "framer-motion";

export const ContactSection = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 150px 20px 0 20px;
  background-color: #fff;
`;

export const ContactContainer = styled.div`
  max-width: 600px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const FormWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Title = styled.h2`
  font-size: 36px;
  font-family: var(--noheim-medium);
  font-weight: 400;
  color: var(--primary);
  display: flex;
  align-items: center;
  gap: 12px;
  margin: 0;

  @media (max-width: 700px) {
    font-size: 20px;
  }
`;

export const Description = styled.p`
  font-family: var(--geist-regular);
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
  color: #1a1d21;
  margin: 0;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const FieldGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Label = styled.label`
  font-family: var(--geist-regular);
  font-size: 16px;
  font-weight: 400;
  color: var(--primary);
`;

export const Input = styled.input<{ $hasError?: boolean }>`
  width: 100%;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid
    ${({ $hasError }) => ($hasError ? "#ff4d4d" : "transparent")};
  background-color: #f5f5f5;
  font-family: var(--geist-regular);
  font-size: 16px;
  color: var(--primary);
  outline: none;
  transition: all 0.2s;

  &:focus {
    background-color: #ebebeb;
    border-color: ${({ $hasError }) => ($hasError ? "#ff4d4d" : "transparent")};
  }

  &::placeholder {
    color: #999;
  }
`;

export const TextArea = styled.textarea<{ $hasError?: boolean }>`
  width: 100%;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid
    ${({ $hasError }) => ($hasError ? "#ff4d4d" : "transparent")};
  background-color: #f5f5f5;
  font-family: var(--geist-regular);
  font-size: 16px;
  color: var(--primary);
  outline: none;
  min-height: 150px;
  resize: vertical;
  transition: all 0.2s;

  &:focus {
    background-color: #ebebeb;
    border-color: ${({ $hasError }) => ($hasError ? "#ff4d4d" : "transparent")};
  }

  &::placeholder {
    color: #999;
  }
`;

export const ErrorText = styled.span`
  font-family: var(--geist-regular);
  font-size: 14px;
  color: #ff4d4d;
`;

export const FooterText = styled.p`
  font-family: var(--geist-regular);
  font-size: 16px;
  line-height: 1.5;
  color: var(--primary);
  margin: 0;
`;

export const Link = styled.a`
  color: #ff4d8d;
  text-decoration: none;
  font-family: var(--geist-regular);
  &:hover {
    text-decoration: underline;
  }
`;

export const SubmitButton = styled.button`
  width: 100%;
  padding: 16px;
  border-radius: 12px;
  border: none;
  background-color: #f53b7e;
  color: white;
  font-family: var(--geist-medium);
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s;
  margin-top: 8px;

  &:hover {
    background-color: #d62f6b;
  }

  &:disabled {
    background-color: #ffb3c9;
    cursor: not-allowed;
  }
`;

export const SuccessWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 24px;
  padding: 40px 0;
`;

export const SuccessIcon = styled.div`
  font-size: 64px;
`;

export const SuccessTitle = styled.h3`
  font-family: var(--noheim-medium);
  font-size: 32px;
  color: var(--primary);
  margin: 0;
`;

export const SuccessMessage = styled.p`
  font-family: var(--geist-regular);
  font-size: 18px;
  color: #666;
  margin: 0;
  max-width: 400px;
`;
