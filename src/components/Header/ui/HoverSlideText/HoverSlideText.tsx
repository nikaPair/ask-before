"use client";
import React from "react";
import PropTypes from "prop-types";
import { TextLine, TextWrapper } from "./HoverSlideText.styled";

const hoverSlideTransition = { duration: 0.25 };
const primaryTextVariants = {
  rest: { y: "0%" },
  hover: { y: "-100%", transition: hoverSlideTransition },
};
const cloneTextVariants = {
  rest: { y: "0%" },
  hover: { y: "-100%", transition: hoverSlideTransition },
};

type HoverSlideTextProps = {
  text: string;
};

function HoverSlideText({ text }: HoverSlideTextProps) {
  return (
    <TextWrapper>
      <TextLine variants={primaryTextVariants}>{text}</TextLine>
      <TextLine
        variants={cloneTextVariants}
        data-line="clone"
        aria-hidden="true"
      >
        {text}
      </TextLine>
    </TextWrapper>
  );
}

HoverSlideText.propTypes = {
  text: PropTypes.string.isRequired,
};

export default HoverSlideText;
