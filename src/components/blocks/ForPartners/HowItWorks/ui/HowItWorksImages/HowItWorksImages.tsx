"use client";
import React from "react";
import {
  ImageStack,
  ImagesWrapper,
  StackedImage,
} from "./HowItWorksImages.styled";

interface HowItWorksImagesProps {
  images: string[];
  activeIndex: number;
}

const HowItWorksImages: React.FC<HowItWorksImagesProps> = ({
  images,
  activeIndex,
}) => {
  return (
    <ImagesWrapper>
      <ImageStack>
        {images.map((src, index) => (
          <StackedImage
            key={src}
            src={src}
            alt="How it works"
            $isActive={index === activeIndex}
          />
        ))}
      </ImageStack>
    </ImagesWrapper>
  );
};

export default HowItWorksImages;
