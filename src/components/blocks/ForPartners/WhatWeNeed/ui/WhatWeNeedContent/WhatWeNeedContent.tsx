"use client";
import React, { ReactNode } from "react";
import {
  GetInTouch,
  IconSlideTrack,
  IconSlideWrapper,
  ItemText,
  List,
  ListItem,
  NumberCircle,
  RightColumn,
  Title,
} from "./WhatWeNeedContent.styled";

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

const listItems = [
  "Sign a simple cooperation agreement",
  "Specify your prices in your personal account",
  "Connect Stripe (fast and free)",
  "Enable users to easily book a date and time",
];

const WhatWeNeedContent = () => {
  return (
    <RightColumn>
      <Title>What we need to start</Title>
      <List>
        {listItems.map((item, index) => (
          <ListItem key={index}>
            <NumberCircle>{index + 1}</NumberCircle>
            <ItemText>{item}</ItemText>
          </ListItem>
        ))}
      </List>
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
    </RightColumn>
  );
};

export default WhatWeNeedContent;
