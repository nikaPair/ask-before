"use client";
import React from "react";
import {
  DescNumber,
  Number,
  DescriptionContainer,
  DesctNumberCircle,
  ImageBlock,
  ImageContainer,
  ImageDescriptionWrapper,
  Picture,
  DescriptionTitle,
  DescriptionText,
  Line,
  IconsContainer,
  IconTitle,
  IconItem,
  Icon,
  IconText,
} from "./StepCard.styled";

interface IconData {
  icon: React.ReactNode;
  title: string;
  text: string;
}

interface StepCardProps {
  stepNumber: number | string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt?: string;
  icons: IconData[];
  isReversed?: boolean;
}

const StepCard: React.FC<StepCardProps> = ({
  stepNumber,
  title,
  description,
  imageSrc,
  imageAlt = "started",
  icons,
  isReversed = false,
}) => {
  const ImageSection = (
    <ImageBlock>
      <ImageContainer>
        <Picture src={imageSrc} alt={imageAlt} width={480} height={400} />
      </ImageContainer>
    </ImageBlock>
  );

  const DescriptionSection = (
    <DescriptionContainer>
      <DescNumber>
        <DesctNumberCircle>
          <Number>{stepNumber}</Number>
        </DesctNumberCircle>
      </DescNumber>
      <DescriptionTitle>{title}</DescriptionTitle>
      <DescriptionText>{description}</DescriptionText>
      <Line />
      <IconsContainer>
        {icons.map((icon, index) => (
          <IconItem key={index}>
            <Icon>{icon.icon}</Icon>
            <IconTitle>{icon.title}</IconTitle>
            <IconText>{icon.text}</IconText>
          </IconItem>
        ))}
      </IconsContainer>
    </DescriptionContainer>
  );

  return (
    <ImageDescriptionWrapper>
      {isReversed ? (
        <>
          {DescriptionSection}
          {ImageSection}
        </>
      ) : (
        <>
          {ImageSection}
          {DescriptionSection}
        </>
      )}
    </ImageDescriptionWrapper>
  );
};

export default StepCard;
