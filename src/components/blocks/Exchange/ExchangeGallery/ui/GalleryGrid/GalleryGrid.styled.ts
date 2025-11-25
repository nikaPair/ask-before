import styled, { keyframes } from "styled-components";

export const ImagesGrid = styled.div`
  flex: 1;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  height: 484px;
  overflow: hidden;
  position: relative;

  @media (max-width: 1024px) {
    display: none;
  }
`;

export const MobileGrid = styled.div`
  display: none;
  width: 100%;
  overflow: hidden;
  position: relative;
  height: 300px;
  mask-image: linear-gradient(
    to right,
    transparent,
    black 10%,
    black 90%,
    transparent
  );

  @media (max-width: 1024px) {
    display: flex;
  }
`;

const scrollUp = keyframes`
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-50%);
  }
`;

const scrollDown = keyframes`
  0% {
    transform: translateY(-50%);
  }
  100% {
    transform: translateY(0);
  }
`;

const scrollLeft = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
`;

export const Column = styled.div<{
  $direction: "up" | "down";
  $duration?: string;
}>`
  display: flex;
  flex-direction: column;
  gap: 16px;
  animation: ${({ $direction }) =>
      $direction === "up" ? scrollUp : scrollDown}
    ${({ $duration }) => $duration || "20s"} linear infinite;
`;

export const MobileRow = styled.div`
  display: flex;
  gap: 16px;
  animation: ${scrollLeft} 30s linear infinite;
  width: max-content;
`;

export const ImageWrapper = styled.div`
  width: 100%;
  border-radius: 12px;
  overflow: hidden;
  position: relative;
  border-radius: 12px;
  aspect-ratio: 3/4;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: inherit;
    display: block;
  }
`;

export const MobileImageWrapper = styled(ImageWrapper)`
  width: 200px;
  flex-shrink: 0;
`;
