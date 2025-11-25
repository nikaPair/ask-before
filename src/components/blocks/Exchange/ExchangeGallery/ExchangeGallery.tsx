"use client";
import React from "react";
import {
  GalleryWrapper,
  GalleryContainer,
  ContentRow,
} from "./ExchangeGallery.styled";
import GalleryHeader from "./ui/GalleryHeader/GalleryHeader";
import GalleryContent from "./ui/GalleryContent/GalleryContent";
import GalleryGrid from "./ui/GalleryGrid/GalleryGrid";

export default function ExchangeGallery() {
  return (
    <GalleryWrapper>
      <GalleryContainer>
        <GalleryHeader />
        <ContentRow>
          <GalleryContent />
          <GalleryGrid />
        </ContentRow>
      </GalleryContainer>
    </GalleryWrapper>
  );
}
