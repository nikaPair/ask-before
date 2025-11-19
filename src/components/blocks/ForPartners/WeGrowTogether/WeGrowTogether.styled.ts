"use client";
import styled from "styled-components";

export const Section = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 120px;
  margin-bottom: 120px;
  overflow: hidden;
  padding: 0 20px;
  background-color: #f8fafc;
  padding: 120px 60px;

  @media (max-width: 800px) {
    padding: 60px 30px;
  }
`;

export const Container = styled.div`
  max-width: 1200px;
  width: 100%;
  display: flex;
  align-items: center;
  gap: 40px;
  position: relative;

  @media (max-width: 1024px) {
    flex-direction: column;
    gap: 60px;
  }
`;

export const ContentWrapper = styled.div`
  flex: 1;
  max-width: 600px;
`;

export const AvatarsWrapper = styled.div`
  flex: 1;
  height: 100%;
  position: relative;
  width: 100%;

  @media (min-width: 1024px) {
    height: 600px;
  }
`;
