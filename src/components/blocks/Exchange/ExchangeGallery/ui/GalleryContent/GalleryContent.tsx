"use client";
import React from "react";
import {
  TextContent,
  SectionTitle,
  Description,
  Button,
} from "./GalleryContent.styled";

export default function GalleryContent() {
  return (
    <TextContent>
      <SectionTitle>Choose a cover for your STI test results</SectionTitle>
      <Description>
        Pick a cover that matches your vibe. A bit of visual play makes the
        request feel less awkward and more like a part of your story.
      </Description>
      <Button>Get started</Button>
    </TextContent>
  );
}
