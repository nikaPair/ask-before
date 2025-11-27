"use client";
import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { AnimatePresence } from "motion/react";
import { useHeaderContext } from "../../HeaderContext";
import {
  MenuContainer,
  MenuContent,
  MenuHeader,
  MenuLogo,
  CloseButton,
  MenuItem,
  MenuLink,
  MenuDivider,
  LangContainer,
  LangOption,
  SignInButton,
  StarIcon,
} from "./MobileMenu.styled";
import Deutsch from "../Select/ui/Deutsch/Deutsch";
import English from "../Select/ui/English/English";
import Romanian from "../Select/ui/Romanian/Romanian";

const MobileMenu = () => {
  const { isBurgerOpen, closeBurgerMenu } = useHeaderContext();
  const menuRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = React.useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        !(event.target as Element).closest(".burger-menu-button")
      ) {
        closeBurgerMenu();
      }
    };

    if (isBurgerOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "";
    };
  }, [isBurgerOpen, closeBurgerMenu]);

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {isBurgerOpen && (
        <MenuContainer
          ref={menuRef}
          initial={{ x: "-100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: "-100%", opacity: 0 }}
          transition={{ type: "tween", duration: 0.3 }}
        >
          <MenuContent>
            <MenuHeader>
              <MenuLogo>
                <Image
                  src="/images/Logo.png"
                  alt="AskBefore"
                  width={113}
                  height={26}
                  style={{ objectFit: "contain" }}
                />
              </MenuLogo>
              <CloseButton onClick={closeBurgerMenu} aria-label="Close menu">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18 6L6 18"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M6 6L18 18"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </CloseButton>
            </MenuHeader>
            <MenuItem>
              <MenuLink href="/" onClick={closeBurgerMenu}>
                Exchange Results
              </MenuLink>
            </MenuItem>
            <MenuItem>
              <MenuLink href="/map" onClick={closeBurgerMenu}>
                Test Locations
              </MenuLink>
            </MenuItem>
            <MenuItem>
              <MenuLink href="/blogs" onClick={closeBurgerMenu}>
                Blog
              </MenuLink>
            </MenuItem>
            <MenuItem>
              <MenuLink href="/faq" onClick={closeBurgerMenu}>
                FAQ
              </MenuLink>
            </MenuItem>

            <MenuItem>
              <MenuLink href="/partners" onClick={closeBurgerMenu}>
                <StarIcon>🌟</StarIcon> For partnership
              </MenuLink>
            </MenuItem>
            <MenuItem>
              <MenuLink href="/contact" onClick={closeBurgerMenu}>
                Contact us
              </MenuLink>
            </MenuItem>
            <MenuDivider />

            <LangContainer>
              <LangOption>
                <English /> En
              </LangOption>
              <LangOption>
                <Deutsch /> De
              </LangOption>
              <LangOption>
                <Romanian /> Ro
              </LangOption>
            </LangContainer>

            <SignInButton>Sign in</SignInButton>
          </MenuContent>
        </MenuContainer>
      )}
    </AnimatePresence>,
    document.body
  );
};

export default MobileMenu;
