"use client";

import React from "react";
import {
  Card,
  ImageWrapper,
  CardImage,
  CardContent,
  CardTitle,
  CardDate,
} from "./BlogCard.styled";

interface BlogCardProps {
  image: string;
  title: string;
  date: string;
}

export const BlogCard: React.FC<BlogCardProps> = ({ image, title, date }) => {
  return (
    <Card>
      <ImageWrapper>
        <CardImage src={image} alt={title} />
      </ImageWrapper>
      <CardContent>
        <CardTitle>{title}</CardTitle>
        <CardDate>{date}</CardDate>
      </CardContent>
    </Card>
  );
};
