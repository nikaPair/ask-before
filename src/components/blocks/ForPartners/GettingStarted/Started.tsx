"use client";
import React from "react";
import { StartedContainer, StartedWrapper } from "./Started.styled";
import StartedHeader from "./ui/StartedHeader/StartedHeader";
import StartedSteps from "./ui/StartedSteps/StartedSteps";
import GetInTouchButton from "./ui/GetInTouchButton/GetInTouchButton";

const Started = () => {
  return (
    <StartedWrapper>
      <StartedContainer>
        <StartedHeader />
        <StartedSteps />
        <GetInTouchButton />
      </StartedContainer>
    </StartedWrapper>
  );
};

export default Started;
