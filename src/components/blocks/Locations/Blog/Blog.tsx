"use client";

import React from "react";
import {
  Section,
  Container,
  Header,
  Title,
  Subtitle,
  BlogGrid,
  ButtonWrapper,
} from "./ui/Blog.styled";
import { BlogCard } from "./ui/BlogCard";
import { BlogButton } from "./ui/BlogButton";

export default function Blog() {
  return (
    <Section>
      <Container>
        <Header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Title>Check what you know about STIs</Title>
          <Subtitle>
            Clear, accessible articles about STIs — how to understand test
            results, why checkups matter, and how to protect your health.
          </Subtitle>
        </Header>
        <BlogGrid>
          <BlogCard
            image="/images/Blog/EN/intimka.png"
            title="Book an STI Test in Europe — Compare Prices & Availability Easily"
            date="Sep 16, 2025"
          />
        </BlogGrid>
        <ButtonWrapper
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <BlogButton />
        </ButtonWrapper>
      </Container>
    </Section>
  );
}
