"use client";
import React from "react";
import { BuiltContainer, BuiltWrapper } from "./Built.styled";
import BuiltHeader from "./ui/BuiltHeader/BuiltHeader";
import BuiltItems from "./ui/BuiltItems/BuiltItems";

const Built = () => {
  return (
    <BuiltWrapper>
      <BuiltContainer>
        <BuiltHeader />
        <BuiltItems />
      </BuiltContainer>
    </BuiltWrapper>
  );
};

export default Built;
