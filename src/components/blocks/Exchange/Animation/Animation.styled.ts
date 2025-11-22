"use client";
import styled from "styled-components";

export const AnimationWrapper = styled.div`
  width: 100%;
  background-color: #fbfbfe;
`;

export const AnimationContainer = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 100px 0 150px 0;
  height: 3000px;

  @media (max-width: 768px) {
    padding: 0;
    height: 2000px;
  }
`;

export const ScrollWrapper = styled.div`
  display: flex;
  gap: 62px;
  align-items: flex-start;
  width: 100%;
  justify-content: center;
  scroll-snap-align: center;
  position: sticky;
  top: 200px;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    align-items: center;
    gap: 0;
    top: 100px;
    height: calc(100vh - 100px);
  }
`;

export const ScrollList = styled.ul`
  max-width: 540px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding-bottom: 60px;

  @media (max-width: 768px) {
    position: absolute;
    bottom: 20px;
    left: 0;
    right: 0;
    padding: 0 20px;
    margin: 0 auto;
    z-index: 10;
    max-width: 100%;
  }
`;
