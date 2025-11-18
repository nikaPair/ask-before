"use client";
import React from "react";
import {
  BottomSection,
  BuiltContainer,
  BuiltWrapper,
  Item,
  ItemDescription,
  ItemSpan,
  ItemTitle,
  TopSection,
} from "./Built.styled";

const Built = () => {
  return (
    <BuiltWrapper>
      <BuiltContainer>
        <TopSection>
          <div className="first-section">
            <div className="icon-wrapper">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 256 256"
                focusable="false"
                color="var(--white)"
                style={{
                  userSelect: "none",
                  width: "20px",
                  height: "20px",
                  display: "inline-block",
                  fill: "var(--white)",
                  color: "var(--white)",
                  flexShrink: "0",
                }}
              >
                <g color="var(--white)">
                  <path d="M232,208a8,8,0,0,1-8,8H32a8,8,0,0,1,0-16h8V136a8,8,0,0,1,8-8H72a8,8,0,0,1,8,8v64H96V88a8,8,0,0,1,8-8h32a8,8,0,0,1,8,8V200h16V40a8,8,0,0,1,8-8h40a8,8,0,0,1,8,8V200h8A8,8,0,0,1,232,208Z"></path>
                </g>
              </svg>
            </div>
            <p className="icon-text">Why trust Intimka</p>
          </div>
          <h2 className="title">Built with compliance in mind</h2>
          <p className="description">
            Meeting the highest standards of privacy and security.
          </p>
        </TopSection>
        <BottomSection>
          <Item>
            <ItemTitle>
              Data protection aligned with <ItemSpan>GDPR</ItemSpan>
            </ItemTitle>
            <ItemDescription>for personal data privacy</ItemDescription>
          </Item>
          <Item>
            <ItemTitle>
              Following <ItemSpan>ISO 27001</ItemSpan> best practices
            </ItemTitle>
            <ItemDescription>for personal data privacy</ItemDescription>
          </Item>
          <Item>
            <ItemTitle>
              Supports <ItemSpan>AWMF</ItemSpan> guidelines
            </ItemTitle>
            <ItemDescription>
              for confidential test result transfer and partner notifications
            </ItemDescription>
          </Item>
        </BottomSection>
      </BuiltContainer>
    </BuiltWrapper>
  );
};

export default Built;
