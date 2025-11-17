"use client";

import { AnimatePresence } from "motion/react";
import PropTypes from "prop-types";
import Image from "next/image";
import Link from "next/link";
import {
  AuthButton,
  AuthButtonIcon,
  AuthButtonText,
  HeaderContainer,
  HeaderContent,
  HeaderLink,
  HeaderLinkItem,
  HeaderLinkTextLine,
  HeaderLinkTextWrapper,
  HeaderLinks,
  LangAndAuth,
  LangSelect,
  PartnerLinkItem,
  SelectIcon,
  SelectText,
} from "./Header.styled";
import { useHeaderMotion } from "./hooks/useHeaderMotion";
import { useLangSelect } from "./hooks/useLangSelect";
import LineSVG from "./ui/LineSVG";
import Select from "./ui/Select/Select";

const hoverSlideTransition = { duration: 0.25 };
const primaryTextVariants = {
  rest: { y: "0%" },
  hover: { y: "-100%", transition: hoverSlideTransition },
};
const cloneTextVariants = {
  rest: { y: "0%" },
  hover: { y: "-100%", transition: hoverSlideTransition },
};
const partnershipLabel = "🌟  For partnership";
type HoverSlideTextProps = {
  text: string;
};

function HoverSlideText({ text }: HoverSlideTextProps) {
  return (
    <HeaderLinkTextWrapper>
      <HeaderLinkTextLine variants={primaryTextVariants}>
        {text}
      </HeaderLinkTextLine>
      <HeaderLinkTextLine
        variants={cloneTextVariants}
        data-line="clone"
        aria-hidden="true"
      >
        {text}
      </HeaderLinkTextLine>
    </HeaderLinkTextWrapper>
  );
}

HoverSlideText.propTypes = {
  text: PropTypes.string.isRequired,
};

function Header() {
  const { controls, headerStyle } = useHeaderMotion();
  const {
    isLangSelectOpen,
    handleLangSelectOpen,
    handleLangSelectClose,
    clearScheduledClose,
    scheduleLangSelectClose,
    handleLangSelectKeyDown,
  } = useLangSelect();

  return (
    <HeaderContainer animate={controls} style={headerStyle}>
      <AnimatePresence>
        {isLangSelectOpen ? (
          <Select
            key="lang-select"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onMouseEnter={clearScheduledClose}
            onMouseLeave={handleLangSelectClose}
          />
        ) : null}
      </AnimatePresence>
      <HeaderContent>
        <Link href="/" style={{ width: "181px" }} className="logo-link">
          <Image
            src="/images/Logo.png"
            alt="AskBefore"
            width={113}
            height={26}
            style={{ objectFit: "contain", display: "flex" }}
          />
        </Link>
        <HeaderLinks>
          <HeaderLink>
            <HeaderLinkItem
              href="/users"
              initial="rest"
              animate="rest"
              whileHover="hover"
            >
              <HoverSlideText text="For users" />
            </HeaderLinkItem>
          </HeaderLink>
          <HeaderLink>
            <HeaderLinkItem
              href="/blog"
              initial="rest"
              animate="rest"
              whileHover="hover"
            >
              <HoverSlideText text="Our blog" />
            </HeaderLinkItem>
          </HeaderLink>
          <HeaderLink style={{ display: "flex",  gap: "10px" }}>
            <LineSVG />

            <PartnerLinkItem href="/partners">
              {partnershipLabel}
            </PartnerLinkItem>
          </HeaderLink>
        </HeaderLinks>
        <LangAndAuth>
          <LangSelect
            role="button"
            tabIndex={0}
            aria-haspopup="listbox"
            aria-expanded={isLangSelectOpen}
            onClick={handleLangSelectOpen}
            onKeyDown={handleLangSelectKeyDown}
            onMouseEnter={clearScheduledClose}
            onMouseLeave={scheduleLangSelectClose}
          >
            <SelectIcon
              src="/images/flag-eng.png"
              alt="Lang"
              width={24}
              height={24}
            />
            <SelectText>En</SelectText>
          </LangSelect>
          <AuthButton>
            <AuthButtonText>Sign in</AuthButtonText>
            <AuthButtonIcon>
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
            </AuthButtonIcon>
          </AuthButton>
        </LangAndAuth>
      </HeaderContent>
    </HeaderContainer>
  );
}

export default Header;
