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
    padding: 50px 0 0px;
    height: 1500px;
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
  padding: 0 20px;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    justify-content: start;
    align-items: center;
    gap: 0;
    top: 80px;
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
    position: relative;
    top: auto;
    bottom: auto;
    left: auto;
    right: auto;
    padding: 0 20px;
    z-index: 10;
    max-width: 100%;
    height: 135px;
    justify-content: flex-end;
  }
`;
