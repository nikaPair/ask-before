"use client";
import styled from "styled-components";

const TEXT_COLOR = "rgba(0, 0, 0, 0.8)";

export const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 60px 0 0;
  color: var(--primary);
  font-family: var(--geist-regular);

  h2 {
    font-family: var(--geist-regular);
    font-size: 20px;
    line-height: 1.4em;
    letter-spacing: 0em;
    margin-top: 48px;
    margin-bottom: 24px;
    font-weight: 700;
    color: var(--primary);
    text-align: center;

    &:first-child {
      margin-top: 0;
    }
  }

  p {
    font-size: 16px;
    line-height: 1.6;
    margin-bottom: 24px;
    color: ${TEXT_COLOR};
  }

  ul,
  ol {
    padding-left: 24px;
    margin-bottom: 24px;
    font-size: 16px;
    line-height: 1.6;
    color: ${TEXT_COLOR};

    li {
      margin-bottom: 12px;
      padding-left: 8px;
      list-style: inherit;

      &::marker {
        color: ${TEXT_COLOR};
      }
    }

    ul {
      margin-top: 12px;
      margin-bottom: 0;
      list-style: disc;
    }
  }

  ul {
    list-style: disc;
  }

  ol {
    list-style: decimal;
  }

  strong {
    font-weight: 600;
    color: #000;
  }

  .cta {
    margin-top: 48px;
    font-size: 16px;
  }
`;
