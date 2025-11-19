"use client";
import React from "react";
import { TopSection } from "./BenefitsHeader.styled";

const BenefitsHeader = () => {
  return (
    <TopSection
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ amount: 0.25, once: false }}
      transition={{ duration: 0.5 }}
    >
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
        <p className="icon-text">Why Intimka works for Healthcare Providers</p>
      </div>
      <h2 className="title">Your benefits</h2>
      <p className="description">
        We bring the user. You receive the payment. No risk, just results.
      </p>
    </TopSection>
  );
};

export default BenefitsHeader;
