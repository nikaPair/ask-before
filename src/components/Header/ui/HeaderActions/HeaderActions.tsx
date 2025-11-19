"use client";
import React from "react";
import {
  ActionsWrapper,
  AuthButton,
  AuthIcon,
  AuthText,
  FlagIcon,
  LangButton,
  LangText,
} from "./HeaderActions.styled";

type HeaderActionsProps = {
  isLangSelectOpen: boolean;
  handleLangSelectOpen: () => void;
  handleLangSelectKeyDown: (e: React.KeyboardEvent<HTMLDivElement>) => void;
  clearScheduledClose: () => void;
  scheduleLangSelectClose: () => void;
};

const HeaderActions = ({
  isLangSelectOpen,
  handleLangSelectOpen,
  handleLangSelectKeyDown,
  clearScheduledClose,
  scheduleLangSelectClose,
}: HeaderActionsProps) => {
  return (
    <ActionsWrapper>
      <LangButton
        role="button"
        tabIndex={0}
        aria-haspopup="listbox"
        aria-expanded={isLangSelectOpen}
        onClick={handleLangSelectOpen}
        onKeyDown={handleLangSelectKeyDown}
        onMouseEnter={clearScheduledClose}
        onMouseLeave={scheduleLangSelectClose}
      >
        <FlagIcon
          src="/images/flag-eng.png"
          alt="Lang"
          width={24}
          height={24}
        />
        <LangText>En</LangText>
      </LangButton>
      <AuthButton>
        <AuthText>Sign in</AuthText>
        <AuthIcon>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 256 256"
            focusable="false"
            style={{
              userSelect: "none",
              width: "100%",
              height: "100%",
              display: "inline-block",
              fill: "rgb(26, 29, 33)",
              color: "rgb(26, 29, 33)",
              flexShrink: "0",
            }}
          >
            <g>
              <path d="M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z"></path>
            </g>
          </svg>
        </AuthIcon>
      </AuthButton>
    </ActionsWrapper>
  );
};

export default HeaderActions;
