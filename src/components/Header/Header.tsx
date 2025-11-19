"use client";
import { AnimatePresence } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { HeaderContainer, HeaderContent } from "./Header.styled";
import { useHeaderMotion } from "./hooks/useHeaderMotion";
import { useLangSelect } from "./hooks/useLangSelect";
import Select from "./ui/Select/Select";
import HeaderNavigation from "./ui/HeaderNavigation/HeaderNavigation";
import HeaderActions from "./ui/HeaderActions/HeaderActions";

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
        <HeaderNavigation />
        <HeaderActions
          isLangSelectOpen={isLangSelectOpen}
          handleLangSelectOpen={handleLangSelectOpen}
          handleLangSelectKeyDown={handleLangSelectKeyDown}
          clearScheduledClose={clearScheduledClose}
          scheduleLangSelectClose={scheduleLangSelectClose}
        />
      </HeaderContent>
    </HeaderContainer>
  );
}

export default Header;
