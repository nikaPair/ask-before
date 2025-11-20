import React from "react";
import * as S from "./ArticleBody.styled";

interface ArticleBodyProps {
  content: React.ReactNode;
}

const ArticleBody: React.FC<ArticleBodyProps> = ({ content }) => {
  return <S.Container>{content}</S.Container>;
};

export default ArticleBody;
