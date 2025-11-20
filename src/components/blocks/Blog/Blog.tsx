"use client";
import React from "react";
import Link from "next/link";
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

import { BLOG_POSTS } from "@/data/blogData";

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
            <Link
              href={`/blogs/${post.slug}`}
              key={post.id}
              style={{ textDecoration: "none" }}
            >
              <Card
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
            </Link>
          ))}
        </Grid>
      </BlogContainer>
    </BlogSection>
  );
};
