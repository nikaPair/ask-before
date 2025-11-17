"use client";

import React from "react";
import {
  ItemDescription,
  ItemDescriptionContainer,
  ItemTitle,
  ItemWrapper,
  Number,
  NumberWrapper,
} from "./Item.styled";

type ItemProps = {
  number: string;
  description: string;
  title: string;
  onSelect: () => void;
};

const Item = ({ number, description, title, onSelect }: ItemProps) => {
  return (
    <ItemWrapper type="button" onClick={onSelect}>
      <NumberWrapper>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="38"
          height="40"
          viewBox="0 0 18 18"
          fill="none"
        >
          <path
            fill="#F4F6F9"
            d="M4.779.062h-.003A5.635 5.635 0 0 0 0 5.633v9.915a2.463 2.463 0 0 0 2.304 2.464h10.247a5.63 5.63 0 0 0 5.396-4.749c.036-.342.058-.688.065-1.038v-.002a5.631 5.631 0 0 0-4.54-5.357 2.46 2.46 0 0 1-1.6-.725 2.473 2.473 0 0 1-.719-1.643A5.636 5.636 0 0 0 5.795 0c-.342.007-.682.028-1.016.062Z"
          />
        </svg>
        <Number>{number}</Number>
      </NumberWrapper>
      <ItemDescriptionContainer>
        <ItemTitle>{title}</ItemTitle>
        <ItemDescription>{description}</ItemDescription>
      </ItemDescriptionContainer>
    </ItemWrapper>
  );
};

export default Item;
