"use client";
import React from "react";
import {
  FirstCenter,
  Item,
  ItemBottom,
  ItemCenter,
  ItemDesxription,
  ItemTitle,
  ItemTop,
} from "./Cards.styled";

const VisibilityCard = () => {
  return (
    <Item
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ amount: 0.25, once: true }}
      transition={{ duration: 0.3 }}
    >
      <ItemTop>
        <ItemCenter style={{ width: "285px" }}>
          <FirstCenter
            src="/videos/visibility.mp4"
            autoPlay
            muted
            loop
          ></FirstCenter>
        </ItemCenter>
      </ItemTop>
      <ItemBottom>
        <ItemTitle>Increased visibility</ItemTitle>
        <ItemDesxription>
          Users find your practice faster than through independent search.
        </ItemDesxription>
      </ItemBottom>
    </Item>
  );
};

export default VisibilityCard;
