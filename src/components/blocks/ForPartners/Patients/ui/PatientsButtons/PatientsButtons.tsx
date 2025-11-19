"use client";
import React, { ReactNode } from "react";
import {
  GetInTouch,
  GetStarted,
  IconSlideTrack,
  IconSlideWrapper,
  PatientsButtonsContainer,
} from "./PatientsButtons.styled";

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

const PatientsButtons = () => {
  return (
    <PatientsButtonsContainer
      initial={{ scale: 0.75, y: 10 }}
      animate={{ scale: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <GetStarted href="/">
        How to get started
        <SlideIcon>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 256 256"
            focusable="false"
            width="18"
            height="18"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M247.31,124.76c-.35-.79-8.82-19.58-27.65-38.41C194.57,61.26,162.88,48,128,48S61.43,61.26,36.34,86.35C17.51,105.18,9,124,8.69,124.76a8,8,0,0,0,0,6.5c.35.79,8.82,19.57,27.65,38.4C61.43,194.74,93.12,208,128,208s66.57-13.26,91.66-38.34c18.83-18.83,27.3-37.61,27.65-38.4A8,8,0,0,0,247.31,124.76ZM128,192c-30.78,0-57.67-11.19-79.93-33.25A133.47,133.47,0,0,1,25,128,133.33,133.33,0,0,1,48.07,97.25C70.33,75.19,97.22,64,128,64s57.67,11.19,79.93,33.25A133.46,133.46,0,0,1,231.05,128C223.84,141.46,192.43,192,128,192Zm0-112a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160Z" />
          </svg>
        </SlideIcon>
      </GetStarted>
      <GetInTouch href="/">
        Get in touch
        <SlideIcon>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 256 256"
            focusable="false"
            width="18"
            height="18"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M104,152a8,8,0,0,1-8,8H56a8,8,0,0,1,0-16H96A8,8,0,0,1,104,152Zm136-36v60a16,16,0,0,1-16,16H136v32a8,8,0,0,1-16,0V192H32a16,16,0,0,1-16-16V116A60.07,60.07,0,0,1,76,56h76V24a8,8,0,0,1,8-8h32a8,8,0,0,1,0,16H168V56h12A60.07,60.07,0,0,1,240,116ZM120,176V116a44,44,0,0,0-88,0v60Zm104-60a44.05,44.05,0,0,0-44-44H168v72a8,8,0,0,1-16,0V72H116.75A59.86,59.86,0,0,1,136,116v60h88Z" />
          </svg>
        </SlideIcon>
      </GetInTouch>
    </PatientsButtonsContainer>
  );
};

export default PatientsButtons;
