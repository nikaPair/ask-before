"use client";
import React from "react";
import {
  ImagesGrid,
  Column,
  ImageWrapper,
  MobileGrid,
  MobileRow,
  MobileImageWrapper,
} from "./GalleryGrid.styled";

const columns = [
  { id: 1, images: [1, 2, 3], direction: "up" as const, duration: "25s" },
  { id: 2, images: [4, 5, 6], direction: "down" as const, duration: "30s" },
  { id: 3, images: [7, 8, 9], direction: "up" as const, duration: "28s" },
  { id: 4, images: [10, 11, 12], direction: "down" as const, duration: "32s" },
];

const allImages = Array.from({ length: 12 }, (_, i) => i + 1);

export default function GalleryGrid() {
  return (
    <>
      <ImagesGrid>
        {columns.map((col) => (
          <Column
            key={col.id}
            $direction={col.direction}
            $duration={col.duration}
          >
            {/* Duplicate images for seamless loop */}
            {[...col.images, ...col.images].map((imgNum, index) => (
              <ImageWrapper key={`${col.id}-${imgNum}-${index}`}>
                <img
                  src={`/images/Exchange/${imgNum}.png`}
                  alt={`Exchange ${imgNum}`}
                />
              </ImageWrapper>
            ))}
          </Column>
        ))}
      </ImagesGrid>
      <MobileGrid>
        <MobileRow>
          {/* Duplicate images for seamless loop */}
          {[...allImages, ...allImages].map((imgNum, index) => (
            <MobileImageWrapper key={`mobile-${imgNum}-${index}`}>
              <img
                src={`/images/Exchange/${imgNum}.png`}
                alt={`Exchange ${imgNum}`}
              />
            </MobileImageWrapper>
          ))}
        </MobileRow>
      </MobileGrid>
    </>
  );
}
