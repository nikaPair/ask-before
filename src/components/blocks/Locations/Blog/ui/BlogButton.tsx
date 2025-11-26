import React from "react";
import {
  BlogButton as StyledBlogButton,
  IconWrapper,
  IconLine,
} from "./Blog.styled";

const hoverSlideTransition = { duration: 0.3, ease: "easeInOut" } as const;

const primaryIconVariants = {
  rest: { y: "0%" },
  hover: { y: "-100%", transition: hoverSlideTransition },
};

const cloneIconVariants = {
  rest: { y: "0%" },
  hover: { y: "-100%", transition: hoverSlideTransition },
};

export const BlogButton = () => {
  return (
    <StyledBlogButton initial="rest" whileHover="hover" animate="rest">
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
    </StyledBlogButton>
  );
};
