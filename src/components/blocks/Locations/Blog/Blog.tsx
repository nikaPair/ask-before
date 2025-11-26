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
  BlogButton,
  IconWrapper,
  IconLine,
} from "./Blog.styled";
import { BlogCard } from "./ui/BlogCard";

const hoverSlideTransition = { duration: 0.3, ease: "easeInOut" } as const;

const primaryIconVariants = {
  rest: { y: "0%" },
  hover: { y: "-100%", transition: hoverSlideTransition },
};

const cloneIconVariants = {
  rest: { y: "0%" },
  hover: { y: "-100%", transition: hoverSlideTransition },
};

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
          <BlogButton initial="rest" whileHover="hover" animate="rest">
            Go to blog
            <IconWrapper>
              <IconLine variants={primaryIconVariants}>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.16699 12.8333L12.8337 1.16666M12.8337 1.16666H1.16699M12.8337 1.16666V12.8333"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </IconLine>
              <IconLine variants={cloneIconVariants} data-line="clone">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.16699 12.8333L12.8337 1.16666M12.8337 1.16666H1.16699M12.8337 1.16666V12.8333"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </IconLine>
            </IconWrapper>
          </BlogButton>
        </ButtonWrapper>
      </Container>
    </Section>
  );
}
