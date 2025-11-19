"use client";
import React, { ReactNode } from "react";
import { GetInTouch, IconSlideTrack, IconSlideWrapper } from "./Button.styled";
import { buttonIcon } from "./data";

type SlideIconProps = {
  children: ReactNode;
};

function SlideIcon({ children }: SlideIconProps) {
  return (
    <IconSlideWrapper aria-hidden="true">
      <IconSlideTrack>{children}</IconSlideTrack>
      <IconSlideTrack data-icon="clone" aria-hidden="true">
        {children}
      </IconSlideTrack>
    </IconSlideWrapper>
  );
}

const Button = () => {
  return (
    <GetInTouch href="/">
      Get in touch
      <SlideIcon>{buttonIcon}</SlideIcon>
    </GetInTouch>
  );
};

export default Button;
