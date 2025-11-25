import styled from "styled-components";

export const GalleryWrapper = styled.section`
  width: 100%;
  padding: 100px 0;
  background-color: var(--white);
  overflow: hidden;
  display: flex;
  justify-content: center;
`;

export const GalleryContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  padding: 0 24px;
  display: flex;
  flex-direction: column;
  gap: 60px;
  align-items: center;
`;

export const ContentRow = styled.div`
  display: flex;
  width: 100%;
  gap: 40px;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;
