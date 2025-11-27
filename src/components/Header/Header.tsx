"use client";
import { AnimatePresence } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { HeaderContainer, HeaderContent } from "./Header.styled";

import Select from "./ui/Select/Select";
import HeaderNavigation from "./ui/HeaderNavigation/HeaderNavigation";
import HeaderActions from "./ui/HeaderActions/HeaderActions";
import BurgerMenu from "./ui/BurgerMenu/BurgerMenu";
import MobileMenu from "./ui/MobileMenu/MobileMenu";

import { HeaderProvider, useHeaderContext } from "./HeaderContext";

function HeaderLayout() {
  const {
    controls,
    headerStyle,
    isLangSelectOpen,
    clearScheduledClose,
    handleLangSelectClose,
    effectiveIsShrunk,
  } = useHeaderContext();

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
        <Link
          href="/"
          style={{ width: effectiveIsShrunk ? "auto" : "181px" }}
          className="logo-link"
        >
          <Image
            src="/images/Logo.png"
            alt="AskBefore"
            width={113}
            height={26}
            style={{ objectFit: "contain", display: "flex" }}
          />
        </Link>
        <HeaderNavigation />
        <HeaderActions />
        <BurgerMenu />
        <MobileMenu />
      </HeaderContent>
    </HeaderContainer>
  );
}

function Header() {
  return (
    <HeaderProvider>
      <HeaderLayout />
    </HeaderProvider>
  );
}

export default Header;
