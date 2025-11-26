"use client";

import React from "react";
import {
  MapButton,
  MapImageWrapper,
  MapPicture,
  IconWrapper,
  IconLine,
} from "./MapImage.styled";

const hoverSlideTransition = { duration: 0.3, ease: "easeInOut" } as const;

const primaryIconVariants = {
  rest: { x: "0%" },
  hover: { x: "100%", transition: hoverSlideTransition },
};

const cloneIconVariants = {
  rest: { x: "0%" },
  hover: { x: "100%", transition: hoverSlideTransition },
};

export default function MapImage() {
  return (
    <MapImageWrapper>
      <MapPicture src="/images/Locations/locations.png" alt="Map" />
      <MapButton initial="rest" whileHover="hover" animate="rest">
        Find STI testing location
        <IconWrapper>
          <IconLine variants={primaryIconVariants}>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.16699 10H15.8337M15.8337 10L10.0003 4.16666M15.8337 10L10.0003 15.8333"
                stroke="#1F1F1F"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </IconLine>
          <IconLine variants={cloneIconVariants} data-line="clone">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.16699 10H15.8337M15.8337 10L10.0003 4.16666M15.8337 10L10.0003 15.8333"
                stroke="#1F1F1F"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </IconLine>
        </IconWrapper>
      </MapButton>
    </MapImageWrapper>
  );
}
