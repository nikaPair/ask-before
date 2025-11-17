"use client";
import type { HTMLMotionProps } from "motion/react";
import React from "react";
import { SelectFlag, SelectItem, SelectText } from "./Select.styled";
import { SelectContainer } from "./Select.styled";
import Deutsch from "./ui/Deutsch/Deutsch";
import English from "./ui/English/English";
import Romanian from "./ui/Romanian/Romanian";

type SelectProps = HTMLMotionProps<"div">;

const Select = (props: SelectProps) => {
  return (
    <SelectContainer {...props}>
      <SelectItem>
        <SelectFlag>
          <Deutsch />
        </SelectFlag>
        <SelectText>Deutsch</SelectText>
      </SelectItem>
      <SelectItem>
        <SelectFlag>
          <English />
        </SelectFlag>
        <SelectText>English</SelectText>
      </SelectItem>
      <SelectItem>
        <SelectFlag>
          <Romanian />
        </SelectFlag>
        <SelectText>Romanian</SelectText>
      </SelectItem>
    </SelectContainer>
  );
};

export default Select;
