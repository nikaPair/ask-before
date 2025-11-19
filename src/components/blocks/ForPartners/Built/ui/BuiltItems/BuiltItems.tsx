"use client";
import React from "react";
import {
  BottomSection,
  Item,
  ItemDescription,
  ItemSpan,
  ItemTitle,
} from "./BuiltItems.styled";

const BuiltItems = () => {
  return (
    <BottomSection>
      <Item>
        <ItemTitle>
          Data protection aligned with <ItemSpan>GDPR</ItemSpan>
        </ItemTitle>
        <ItemDescription>for personal data privacy</ItemDescription>
      </Item>
      <Item>
        <ItemTitle>
          Following <ItemSpan>ISO 27001</ItemSpan> best practices
        </ItemTitle>
        <ItemDescription>for personal data privacy</ItemDescription>
      </Item>
      <Item>
        <ItemTitle>
          Supports <ItemSpan>AWMF</ItemSpan> guidelines
        </ItemTitle>
        <ItemDescription>
          for confidential test result transfer and partner notifications
        </ItemDescription>
      </Item>
    </BottomSection>
  );
};

export default BuiltItems;
