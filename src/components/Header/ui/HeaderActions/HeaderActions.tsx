"use client";
import React from "react";
import HoverSlideText from "../HoverSlideText/HoverSlideText";
import { motion } from "motion/react";
import {
  ActionsWrapper,
  AuthButton,
  AuthIcon,
  AuthText,
  ContactLink,
  FlagIcon,
  LangButton,
  LangText,
} from "./HeaderActions.styled";

import { useHeaderContext } from "../../HeaderContext";

const wrapperVariants = {
  expanded: {
    opacity: 1,
    x: 0,
    position: "relative" as const,
    pointerEvents: "auto" as const,
  },
  shrunk: {
    opacity: 0,
    x: 20,
    position: "absolute" as const,
    pointerEvents: "none" as const,
  },
};

const HeaderActions = () => {
  const {
    isLangSelectOpen,
    handleLangSelectOpen,
    handleLangSelectKeyDown,
    clearScheduledClose,
    scheduleLangSelectClose,
    effectiveIsShrunk,
  } = useHeaderContext();

  return (
    <ActionsWrapper>
      <motion.div
        initial="expanded"
        animate={effectiveIsShrunk ? "shrunk" : "expanded"}
        variants={wrapperVariants}
        transition={{
          duration: 0.4,
          ease: "easeInOut",
          delay: effectiveIsShrunk ? 0 : 0.3,
        }}
        style={{
          display: "flex",
          left: effectiveIsShrunk ? "-9999px" : "auto",
          whiteSpace: "nowrap",
          flexShrink: 0,
          willChange: "transform, opacity",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            whiteSpace: "nowrap",
          }}
        >
          <ContactLink
            href="mailto:support@intimka.io"
            initial="rest"
            animate="rest"
            whileHover="hover"
          >
            <HoverSlideText text="Contact us" />
          </ContactLink>
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
        </div>
      </motion.div>
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
