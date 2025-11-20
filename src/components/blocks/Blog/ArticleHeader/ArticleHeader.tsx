import React from "react";
import * as S from "./ArticleHeader.styled";

interface ArticleHeaderProps {
  title: string;
  date: string;
  imageSrc: string;
}

const transition = { duration: 0.3, ease: [0.76, 0, 0.24, 1] as const };

const arrowPrimaryVariants = {
  rest: { x: "0%" },
  hover: { x: "-100%", transition },
};

const arrowSecondaryVariants = {
  rest: { x: "100%" },
  hover: { x: "0%", transition },
};

const ArrowIcon = () => (
  <svg
    width="10"
    height="14"
    viewBox="0 0 6 10"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5 9L1 5L5 1"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ArticleHeader: React.FC<ArticleHeaderProps> = ({
  title,
  date,
  imageSrc,
}) => {
  return (
    <S.Container>
      <S.BackLink href="/blogs">
        <S.BackLinkContent initial="rest" whileHover="hover" animate="rest">
          <S.ArrowContainer>
            <S.Arrow variants={arrowPrimaryVariants}>
              <ArrowIcon />
            </S.Arrow>
            <S.Arrow variants={arrowSecondaryVariants} aria-hidden="true">
              <ArrowIcon />
            </S.Arrow>
          </S.ArrowContainer>

          <S.Text>All blogs</S.Text>
        </S.BackLinkContent>
      </S.BackLink>

      <S.Title>{title}</S.Title>
      <S.Date>{date}</S.Date>
      <S.ImageWrapper>
        <img src={imageSrc} alt={title} />
      </S.ImageWrapper>
    </S.Container>
  );
};

export default ArticleHeader;
