"use client";
import React from "react";
import {
  BlogSection,
  BlogContainer,
  Header,
  Title,
  Subtitle,
  Grid,
  Card,
  ImageWrapper,
  Image,
  CardContent,
  CardTitle,
  Date,
} from "./Blog.styled";

const BLOG_POSTS = [
  {
    id: 1,
    title: "Book an STI Test in Europe — Compare Prices & Availability Easily",
    date: "Sep 16, 2025",
    image: "/images/Blog/EN/intimka.png",
  },
];

export const Blog = () => {
  return (
    <BlogSection>
      <BlogContainer>
        <Header
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Title>Our blog</Title>
          <Subtitle>
            Your guide to smarter, safer sexual health decisions.
          </Subtitle>
        </Header>

        <Grid>
          {BLOG_POSTS.map((post) => (
            <Card
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <ImageWrapper>
                <Image src={post.image} alt={post.title} />
              </ImageWrapper>
              <CardContent>
                <CardTitle>{post.title}</CardTitle>
                <Date>{post.date}</Date>
              </CardContent>
            </Card>
          ))}
        </Grid>
      </BlogContainer>
    </BlogSection>
  );
};
